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




class Motor(db.Model, SerializerMixin):
    __tablename__ = 'motors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    type = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.VARCHAR)
    model =db.Column(db.String ,nullable=False)
    engine_number =db.Column(db.String , nullable=False)
    mileage =db.Column(db.Integer, nullable=False)
    images =db.Column(db.String, nullable=False)
    engine_size =db.Column(db.String )
    fuel_type =db.Column(db.String )
    created_at =db.Column(db.DateTime, server_default=db.func.now())
    def __repr__(self):
        return f"name:{self.name} \n image: {self.image} \n type:{self.type}  \n description:{self.description} \n price: {self.price}"

