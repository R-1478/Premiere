from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from sqlalchemy import text
from flask_migrate import Migrate
from models import db, User, Admin, Motor
from flask_restful import Resource, Api
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from auth import Auth
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app, resources={r"/api/*": {"origins": "*"}})


migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)
jwt = JWTManager(app)

class Home(Resource):
    def get(self):
        return "<h1>Premiere Group</h1>"
    
class Motors(Resource):
    def get(self):
        motors = Motor.query.all()
        response = [{'id':motor.id, 'name': motor.name, 'image': motor.image,'type': motor.type } for motor in motors]
        return make_response(jsonify(response))
    
    @jwt_required()
    def post(self):
        current_user = get_jwt_identity()
        admin = Admin.query.filter_by(username=current_user).first()
        if not admin:
            return jsonify({"message": "Unauthorized access"}), 403

        data = request.get_json()
        name = data.get('name')
        image = data.get('image')
        type = data.get('type')
        description = data.get('description')
        price= data.get('price')

        motor = Motor(name=name, image=image, type=type , description=description , price=price)
        db.session.add(motor)
        db.session.commit()

        return {"message": "Motor added successfully"}, 201
class Admins(Resource):
    # @jwt.required()
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        admin_instance = Admin(username=username, password=password)
        Auth.set_admin(admin_instance, password)
        db.session.add(admin_instance)
        db.session.commit()
        return jsonify({"message": "Admin registered successfully"}), 201

        

# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTkwMTg0MSwianRpIjoiZDA2ZjA3MDktZTcwMy00YTllLWE1OTktN2JhMjI4NDlhOTE1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluMSIsIm5iZiI6MTcwOTkwMTg0MSwiY3NyZiI6IjdhM2ZmM2IzLTBiY2UtNDVlMi05YjlmLWRiYzY3Yjc3ODMyOSIsImV4cCI6MTcwOTkwMjc0MX0.UV6whyZOTcEmGt8VtO9b3EQTj42bEyZY3KXEKiMDtaU

class Users(Resource):
    def post(self):  
        email = request.json.get('email')
        password = request.json.get('password')

        if email and password:
            # Query the database using the email
            user = User.query.filter_by(email=email).first()

            if user and password:
                access_token = create_access_token(identity=user.email)
                return {'access_token': access_token}, 200
            else:
                return {'message': "Invalid credentials"}, 401
        else:
            return {'message': "Invalid credentials"}, 401

@app.route('/register', methods=['POST'])
def register():
        data = request.get_json()

   
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        

        if not name or not email or not password:
            return jsonify({"error": "Incomplete or incorrect data provided"}), 400
        else:
            user = User.query.filter_by(name=name).first() 
            
            if not user:
                user = User(name=name, email=email)
                Auth.set_password(user, password)
                db.session.add(user)
                db.session.commit()

            return jsonify({"message": "User registered successfully"}), 201
        # else:
        #     return jsonify({"message": "User already registered"}), 400

api.add_resource(Home, '/')
api.add_resource(Users, '/login')
api.add_resource(Motors, '/motors')
api.add_resource(Admins, '/pemire')




if __name__ == '__main__':
    app.run(port=5000, debug=True)


        # data = request.get_json()
        # username = data.get('username')
        # password = data.get('password')       
        # admin = Admin.query.filter_by(username=username).first()
        # if admin and password:
        #         access_token = create_access_token(identity=admin.username)
        #         return {'access_token': access_token}, 200
        # else:
        #         return {"message": "invalid credentials"}, 401
#    