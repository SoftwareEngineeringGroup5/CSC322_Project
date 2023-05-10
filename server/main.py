from flask import Flask, request
from flask_restx import Api, Resource, fields
from config import DevConfig #import the dev config class
from models import Product
from extensions import db 


app=Flask(__name__) #create the flask app
app.config.from_object(DevConfig) #set up the app config
db.init_app(app) #initialize the database with current app

api=Api(app,doc='/docs') # flaskapi
#model serializer,with fields import 
product_model = api.model('Product', 
{
    'id': fields.Integer,
    'title': fields.String,
    'price': fields.Float,
    'description': fields.String,
    'image_link': fields.String
})


@api.route('/hello') #first route 
class HelloResource(Resource): #inherit the Resource class 
    def get(self):
        return {"message":"Hello World"}

@api.route('/products') #second route 
class ProductList(Resource): #inherit the Resource class
    @api.marshal_list_with(product_model) #marshal the list with the model
    def get(self):
        products = Product.query.all() #get all the products
        return products
    @api.marshal_with(product_model) #marshal the single product
    def post(self):
        """
        Create a new product
        """
        data = request.get_json()
        new_product = Product(
            title=data.get('title'),
            price=data.get('price'),
            description=data.get('description'),
            image_link= data.get('image_link')
        )

        new_product.save()

        return new_product, 201


@api.route('/products/<int:id>') #third route
class ProductDetail(Resource): #inherit the Resource class 
    def get(self,id):
        """ Get a single product by id """
        product = Product.query.get_or_404(id)
        return product.serialize()
    def put(self,id):
        """ Update a product by id """
        pass
    def delete(self,id):
        """ Delete a product by id """
        pass



@app.shell_context_processor
def make_shell_context():
    return dict(db=db,Product=Product)
    
"""
- no need to instantiate the class, flaskRESTFUL does it for you 
-  The Resource class provides a set of methods for handling 
HTTP requests (GET, POST, PUT, DELETE, etc.) which in this case we overide the GET class
"""


if __name__ == '__main__':
    app.run()
