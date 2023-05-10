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
    