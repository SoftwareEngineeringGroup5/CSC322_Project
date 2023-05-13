from flask import Flask, request
from flask_restx import Api, Resource, fields, Namespace
from models import Product #import the models
from extensions import db 
from flask_jwt_extended import jwt_required #import the jwt requierd lib


prod_namespace =Namespace('products', description='Product related operations')

product_model = prod_namespace.model('Product', 
{
    "name": fields.String,
    "price":fields.String,
    "description": fields.String,
    "image_url": fields.String,
    "product_type": fields.String,
    "use":fields.String,
    "match": fields.String
})

@prod_namespace.route('/all') #second route 
class ProductList(Resource): #inherit the Resource class
    @prod_namespace.marshal_list_with(product_model) #marshal the list with the model
    def get(self):
        products = Product.query.all() #get all the products
        return products
    
    @prod_namespace.marshal_with(product_model) #marshal the single product
    @prod_namespace.expect(product_model)
    @jwt_required()
    def post(self):
        """
        Create a new product
        """
        data = request.get_json()
        new_product = Product(
            name=data.get('name'),
            price=data.get('price'),
            description=data.get('description'),
            image_url= data.get('image_link')
        )
        new_product.save()

        return new_product, 201
        
    @jwt_required()
    def delete(self):
        """
        Delete a product
        """
        pass


@prod_namespace.route('/products/<int:id>') #third route
class ProductDetail(Resource): #inherit the Resource class 
    @prod_namespace.marshal_with(product_model)
    def get(self,id):
        """ Get a single product by id """
        product_to_get = Product.query.get_or_404(id) #get the product by id
        return product_to_get #return the product

    @prod_namespace.marshal_with(product_model)
    @jwt_required()
    def put(self,id):
        """
        Update a product by id 
        """
        product_to_update = Product.query.get_or_404(id)    #query the product by id
        data = request.get_json()   #jsonify the data

        """
        "name": fields.String,
    "price":fields.String,
    "description": fields.String,
    "image_url": fields.String,
    "product_type": fields.String,
    "use":fields.String,
    "match": fields.String
        """

        product_to_update.update(
            data.get('name'),
            data.get('price'), 
            data.get('description'), 
            data.get('image_url'),
            data.get('product_type'),
            data.get('use'),
            data.get('match')
            
            ) #update the product

        product_to_update.update(data.get('name'), data.get('price'), data.get('description'), data.get('image_url')) #update the product
        return product_to_update
    
    @prod_namespace.marshal_with(product_model)
    @jwt_required()
    def delete(self,id):
        """ Delete a product by id """
        product_to_delete = Product.query.get_or_404(id)    # look for the product by id
        product_to_delete.delete()  #delete the product
        return product_to_delete, 204   # return the product

