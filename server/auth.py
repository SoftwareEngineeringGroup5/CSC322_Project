from flask import Flask, request
from flask_restx import Namespace, Resource, fields
from models import Employee, Owner, Customer
from werkzeug.security import check_password_hash, generate_password_hash
from extensions import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager,create_access_token, create_refresh_token, get_jwt_identity, jwt_required #import the jwt manager


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


@auth_namespace.route('/employee/login')
class Login(Resource): #inherit the Resource class
   @auth_namespace.expect(login_model)
   def post(self):
       data=request.get_json() #get the data
       email=data.get('email') #get the username
       password=data.get('password') #get the password
       user = Employee.query.filter_by(email=email).first() #get the user by username
       if not user or not check_password_hash(user.password, password): #if the user or password is wrong
            return {'message': 'Invalid email or password'}, 401
       access_token = create_access_token(identity=user.email) #create the access token 
       refresh_token = create_refresh_token(identity=user.email) #create the refresh token
       return {'access_token': access_token, 'refresh_token': refresh_token}, 200

@auth_namespace.route('/customer/login')
class Login(Resource): #inherit the Resource class
   @auth_namespace.expect(login_model)
   def post(self):
       data=request.get_json() #get the data
       email=data.get('email') #get the username
       password=data.get('password') #get the password
       user = Customer.query.filter_by(email=email).first() #get the user by username
       if not user or not check_password_hash(user.password, password): #if the user or password is wrong
            return {'message': 'Invalid email or password'}, 401
       access_token = create_access_token(identity=user.email) #create the access token 
       refresh_token = create_refresh_token(identity=user.email) #create the refresh token
       return {'access_token': access_token, 'refresh_token': refresh_token}, 200

@auth_namespace.route('/owner/login')
class Login(Resource): #inherit the Resource class
   @auth_namespace.expect(login_model)
   def post(self):
       data=request.get_json() #get the data
       email=data.get('email') #get the username
       password=data.get('password') #get the password
       user = Owner.query.filter_by(email=email).first() #get the user by username
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
        user_by_email = Customer.query.filter_by(email=data.get('email')).first() #get the user by email
        user_by_username = Customer.query.filter_by(username=data.get('username')).first() #get the user by username
        if user_by_email or user_by_username: #if the user exists
            return {'message': 'User with this email or username already exists'}, 400
        user = Customer(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password')),
            no_warnings=data.get('no_warnings',0),
            no_compliments=data.get('no_compliments',0),
            balance=data.get('balance',0),
            discount=data.get('discount',0)
        )

        user.save() #save the user
        return {'message': 'User created'}, 201

@auth_namespace.route('/refresh')
class Refresh(Resource):
    @jwt_required(refresh=True)
    def post(self):
        current_user = get_jwt_identity()
        access_token = create_access_token(identity=current_user)
        refresh_token = create_refresh_token(identity=current_user)
        return {'access_token': access_token,'refresh_token': refresh_token}, 200


