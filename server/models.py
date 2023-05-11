from extensions import db
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


Base = declarative_base(cls=db.Model)

"""
modelling for user: 
    id: integer
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
    role: Employee, Customer, Manage, Owner
    warning: String
    balance: float
    Status: Active, Inactive, Pending
    Compliment: integer
"""

class User(Base, UserMixin):
    __tablename__='users'
    id=db.Column(db.Integer(),primary_key=True) #specify as primary key
    username=db.Column(db.String(25),nullable=False, unique=True) #require 25 chars 
    first_name=db.Column(db.String(25),nullable=False)
    last_name=db.Column(db.String(25),nullable=False)
    email=db.Column(db.String(80),nullable=False) # require 80 chars 
    password=db.Column(db.Text(),nullable=False)
    role=db.Column(db.Enum('Employee','Customer','Owner'),nullable=False)

    __mapper_args__ = {
        "polymorphic_identity": "user",
        "polymorphic_on": "role",
    }

    def __repr__(self):
        return f"User('{self.username}, {self.email}')"

    def __init__(self, username,email,password, first_name, last_name) :
        
            self.username=username
            self.email=email
            self.password=generate_password_hash(password)
            self.first_name=first_name
            self.last_name=last_name

    
    def save(self):
        db.session.add(self)
        db.session.commit()

class Employee(User, UserMixin):
        __tablename__='employees'
        id = db.Column('id',db.Integer, db.ForeignKey('users.id'), primary_key=True,autoincrement=True)
        no_warnings=db.Column('no_warnings',db.Integer, default=0)
        no_compliments=db.Column('no_compliments',db.Integer, default=0)
        wage=db.Column('wage',db.Float, default=500)

        __mapper_args__ = {
        "polymorphic_identity": "employee",
        }

        def __init__(self, username,email, password, no_warnings=0,no_compliments=0,wage=500):
            super().__init__(username=username, emaiil=email,password=password)
            self.no_warnings=no_warnings
            self.no_compliments=no_compliments
            self.wage=wage
        def __repr__(self):
            return {'id':self.id,'username':self.username, 'password':self.password,'no_warnings':self.no_warnings,'no_compliments':self.no_compliments, 'wage':self.wage}

class Owner(User, UserMixin):
        __tablename__='owner'
        id = db.Column('id',db.Integer, db.ForeignKey('users.id'), primary_key=True,autoincrement=True)
        def __init__(self,  username, password):
            super().__init__(username=username, password=password)

        __mapper_args__ = {
        "polymorphic_identity": "owner",
        }
            
        def __repr__(self):
            return {'id':self.id,'username':self.username, 'password':self.password}
        
class Customer(User, UserMixin):
        __tablename__='customers'
        id = db.Column('id',db.Integer, db.ForeignKey('animals.id'), primary_key=True,autoincrement=True)
        no_warnings=db.Column('no_warnings',db.Integer, default=0)
        no_compliments=db.Column('no_compliments',db.Integer, default=0)
        balance=db.Column('balance',db.Float, default=500)
        discount=db.Column('discount',db.Integer, default=0)

        __mapper_args__={
             'polymorphic_identity':'customer',
        }



    

   
        def __init__(self, username,email,password, no_warnings,no_compliments,balance, discount) :
            super().__init__(username=username, email=email, password=password)
            self.username=username
            self.email=email
            self.password=password
            self.no_warnings=no_warnings
            self.no_compliments=no_compliments
            self.balance=balance
            self.discount=discount
        def __repr__(self):
            return {'id':self.id,'username':self.username,'email':self.email, 'password':self.password,'no_warnings':self.no_warnings,'no_compliments':self.no_compliments, 'balance':self.balance, 'discount':self.balance}
    
class Product(db.Model):
    id=db.Column('id',db.Integer(),primary_key=True) #specify as primary key
    name=db.Column('name',db.String(),nullable=False) #specify as nullable and string
    price=db.Column('price',db.Float(),nullable=False) 
    description=db.Column('image_url',db.String(),nullable=False)
    image_url=db.Column(db.String(),nullable=False)
    product_type = db.Column('product_type', db.String(20))  # type include:desktop, laptop, motherboard, case, cpu,RAM
    use = db.Column('use', db.String(20))  # use may be:business, academic, gaming or all
    match = db.Column('match', db.String(20))  # Intel->for all products that match intel CPU, AMD->match AMD,# both->for both, '-' if it is a desktop or laptop,  creater_id if it is configuration


    #function to help return string representation of the class 
    def __repr__(self):
        return f"Product('{self.name}','{self.email}','{self.password}','{self.first_name}','{self.last_name}','{self.balance}')"


    """
    different product methods to help with CRUD operations
    """

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
    def update(self, name, price, description, image_link):
        self.name=name
        self.price=price
        self.description=description
        self.image_link=image_link

        db.session.commit() # commit changes to the database

class Rating(db.Model):
        __tablename__='ratings'
        id= db.Column('id',db.Integer, primary_key=True,autoincrement=True)
        value=db.Column('value',db.Integer)
        customer_id=db.Column('customer_id',db.Integer, db.ForeignKey('customers.id'))
        product_id=db.Column('product_id',db.Integer, db.ForeignKey('products.id'))

        def __init__(self,value, cunstomer_id, product_id):
            
            self.value=value
            self.customer_id=cunstomer_id
            self.product_id=product_id
        def __repr__(self):
            return{'id':self.id, 'value':self.value,'customer_id':self.customer_id, 'product_id':self.product_id}
class Comment(db.Model):
        __tablename__='coments'
        id= db.Column('id',db.Integer, primary_key=True,autoincrement=True)
        text=db.Column('text',db.String(500))
        commentator_status=db.Column('commentator_statu',db.String(15))#status is visitor/customer/employee/owner
        commentator_id=db.Column('commentator_id',db.Integer, db.ForeignKey('customers.id'))
        product_id=db.Column('product_id',db.Integer, db.ForeignKey('products.id'))

        def __init__(self, text, commentator_status,commentator_id, product_id):
        
            self.text=text
            self.commentator_status=commentator_status
            self.commentator_id=commentator_id
            self.product_id=product_id
        def __repr__(self):
            return{'id':self.id, 'text':self.text,'commentator_id':self.commentator_id, 'commentator_status':self.commentator_status,'product_id':self.product_id}
            
    