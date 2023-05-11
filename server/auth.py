from flask import Flask, request
from flask_restx import Namespace, Resource, fields
from models import User
from werkzeug.security import check_password_hash, generate_password_hash
from extensions import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager,create_access_token, create_refresh_token, jwt_required #import the jwt manager


auth_namespace =Namespace('auth', description='Auth related operations')


signup_model = auth_namespace.model('Signup', {
    'username': fields.String,
    'email': fields.String,
    'password': fields.String
})

login_model = auth_namespace.model('Login', {
    'email': fields.String,
    'password': fields.String
})


@auth_namespace.route('/login')
class Login(Resource): #inherit the Resource class
   @auth_namespace.expect(login_model)
   def post(self):
       data=request.get_json() #get the data
       email=data.get('email') #get the username
       password=data.get('password') #get the password
       user = User.query.filter_by(email=email).first() #get the user by username
       if not user or not check_password_hash(user.password, password): #if the user or password is wrong
            return {'message': 'Invalid email or password'}, 401
       access_token = create_access_token(identity=user.email) #create the access token 
       refresh_token = create_refresh_token(identity=user.email) #create the refresh token
       return {'access_token': access_token, 'refresh_token': refresh_token}, 200

@auth_namespace.route('/signup') 
class Signup(Resource): #inherit the Resource class 
    @auth_namespace.expect(signup_model)
    def post(self):
        data=request.get_json() #get the data
        user = User.query.filter_by(email=data.get('email')).first() #get the user by email
        if user: #if the user exists
            return {'message': 'User with this email ({email}) already exists'}, 400
        user = User(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password'))
        )

        user.save() #save the user
        return {'message': 'User created'}, 201


