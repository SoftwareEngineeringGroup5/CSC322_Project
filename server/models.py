from extensions import db

"""
for modelling
class Recipe: 
    id: int primary key 
    email: str
    first name: str
    last_name: str
    amount of money: int 

"""


class User(db.Model):
    id=db.Column(db.Integer(),primary_key=True) #specify as primary key
    title=db.Column(db.String(),nullable=False) #specify as nullable and string
    email=db.Column(db.String(),nullable=False) 
    password=db.Column(db.String(),nullable=False) 
    first_name=db.Column(db.String(),nullable=False) 
    last_name=db.Column(db.String(),nullable=False)
    balance=db.Column(db.Integer(),nullable=False) 

    #function to help return string representation of the class 
    def __repr__(self):
        return f"User('{self.title}','{self.email}','{self.password}','{self.first_name}','{self.last_name}','{self.balance}')"

    """
    different methods to help with CRUD operations
    """
class Product(db.Model):
    id=db.Column(db.Integer(),primary_key=True) #specify as primary key
    title=db.Column(db.String(),nullable=False) #specify as nullable and string
    price=db.Column(db.Float(),nullable=False) 
    description=db.Column(db.String(),nullable=False)
    image_link=db.Column(db.String(),nullable=False)


    #function to help return string representation of the class 
    def __repr__(self):
        return f"Product('{self.title}','{self.email}','{self.password}','{self.first_name}','{self.last_name}','{self.balance}')"

    """
    different product methods to help with CRUD operations
    """

    def save(self):
        db.sesssion.add(self)
        db.session.commit()

    def delete(self):
        db.sesssion.delete(self)
        db.session.commit()
    def update(self, title, price, description, image_link):
        self.title=title
        self.price=price
        self.description=description
        self.image_link=image_link

            
    