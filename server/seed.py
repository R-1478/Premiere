from app import app 
from models import Admin, User, Motor, db

def seed_database():
    with app.app_context():
        # Seed Admins
        admin1 = Admin(username='admin1', password='password1')
        admin2 = Admin(username='admin2', password='password2')
        admin3 = Admin(username='admin3', password='password3')
        admin4 = Admin(username='admin4', password='password4')
        admin5 = Admin(username='admin5', password='password5')
        db.session.add_all([admin1, admin2, admin3, admin4, admin5])

        # Seed Users
        user1 = User(name='John Doe', email='john@example.com', password='password')
        user2 = User(name='Jane Smith', email='jane@example.com', password='password')
        user3 = User(name='Alice Johnson', email='alice@example.com', password='password')
        user4 = User(name='Bob Brown', email='bob@example.com', password='password')
        user5 = User(name='Eve Wilson', email='eve@example.com', password='password')
        db.session.add_all([user1, user2, user3, user4, user5])

        # Seed Motors
        motor1 = Motor(name='Motor 1', image='motor1.jpg', type='Type A')
        motor2 = Motor(name='Motor 2', image='motor2.jpg', type='Type B')
        motor3 = Motor(name='Motor 3', image='motor3.jpg', type='Type C')
        motor4 = Motor(name='Motor 4', image='motor4.jpg', type='Type D')
        motor5 = Motor(name='Motor 5', image='motor5.jpg', type='Type E')
        db.session.add_all([motor1, motor2, motor3, motor4, motor5])

        # Commit changes to the database
        db.session.commit()

    print("Seed complete")

# Call the function to seed the database
seed_database()
