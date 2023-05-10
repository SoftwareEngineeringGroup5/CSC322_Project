from flask import Flask
from flask_restx import Api, Resource
from config import DevConfig #import the dev config class

app=Flask(__name__) #create the flask 
app.config.from_object(DevConfig) #set up the app config
api=Api(app,doc='/docs') #flask api documentationk

@api.route('/hello') #first route 
class HelloResource(Resource): #inherit the Resource class 
    def get(self):
        return {"message":"Hello World"}
    
"""
- no need to instantiate the class, flaskRESTFUL does it for you 
-  The Resource class provides a set of methods for handling 
HTTP requests (GET, POST, PUT, DELETE, etc.) which in this case we overide the GET class
"""


if __name__ == '__main__':
    app.run()