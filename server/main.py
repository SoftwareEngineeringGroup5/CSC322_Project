from flask import Flask
from flask_restx import Api, Resource
from models import Product
from extensions import db 
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from product import prod_namespace
from auth import auth_namespace


def create_app(config):
    app = Flask(__name__) #create the flask app
    app.config.from_object(config) #set up the app config
    db.init_app(app) #initialize the database with current app
    migration=Migrate(app,db) #database migration
    JWTManager(app) #initialize the jwt manager to work with app
    api=Api(app,doc='/docs') # flaskapi#model serializer,with fields import 
    api.add_namespace(prod_namespace,path='/product') #add the product namespace to the flask api
    api.add_namespace(auth_namespace,path='/auth') #add the auth namespace to the flask api

    @app.shell_context_processor #model serializer 
    def make_shell_context():
        return dict(db=db,Product=Product)

    @api.route('/hello') #first route 
    class HelloResource(Resource): #inherit the Resource class 
        def get(self):
            return {"message":"Hello World"}

    return app

        



        




    




