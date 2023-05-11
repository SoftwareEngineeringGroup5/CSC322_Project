from extensions import db

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
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
    def update(self, title, price, description, image_link):
        self.title=title
        self.price=price
        self.description=description
        self.image_link=image_link

        db.session.commit() # commit changes to the database

"""
modelling for user: 
    id: integer
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
"""

class User(db.Model):
    id=db.Column(db.Integer(),primary_key=True) #specify as primary key
    username=db.Column(db.String(25),nullable=False, unique=True) #require 25 chars 
    email=db.Column(db.String(80),nullable=False) # require 80 chars 
    password=db.Column(db.Text(),nullable=False)

    def __repr__(self):
        return f"User('{self.username}')"
    
    def save(self):
        db.session.add(self)
        db.session.commit()

            
    