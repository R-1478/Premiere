from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from marshmallow import Schema, fields, validate
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class Admin(db.Model, SerializerMixin):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    email = db.Column(db.VARCHAR())
    password = db.Column(db.VARCHAR(255))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    
    def __repr__(self):
        return f" Name: {self.name} \n email: {self.email}"


class Motor(db.Model, SerializerMixin):
    __tablename__ = 'motors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    type = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.VARCHAR)
    def __repr__(self):
        return f"name:{self.name} \n image: {self.image} \n type:{self.type}  \n description:{self.description} \n price: {self.price}"

@validates('email')
def validate(self,value):
    if '@' not in value:
        raise ValueError('Invalid email')
    return value
