from app import app 
from models import Admin, User, Motor, db

def seed_database():
    with app.app_context():
        

        # Seed Users
        user1 = User(name='John Doe', email='john@example.com', password='password')
        user2 = User(name='Jane Smith', email='jane@example.com', password='password')
        user3 = User(name='Alice Johnson', email='alice@example.com', password='password')
        user4 = User(name='Bob Brown', email='bob@example.com', password='password')
        user5 = User(name='Eve Wilson', email='eve@example.com', password='password')
        db.session.add_all([user1, user2, user3, user4, user5])

        # Seed Motors
        motor1 = Motor(name='Motor 1', image='https://i.ibb.co/282z92m/Screenshot-2024-03-08-100519.png', type='Subaru', description='best quality, good infotainment system. Petrol engine , automatic', price='1,200,000')
        motor2 = Motor(name='Motor 2', image='https://i.ibb.co/282z92m/Screenshot-2024-03-08-100519.png', type='Subaru', description='best quality, good infotainment system. Petrol engine , automatic', price='1,200,000')
        motor3 = Motor(name='Motor 3',image='https://i.ibb.co/282z92m/Screenshot-2024-03-08-100519.png', type='Subaru', description='best quality, good infotainment system. Petrol engine , automatic', price='1,200,000')
        motor4 = Motor(name='Motor 4', image='https://i.ibb.co/282z92m/Screenshot-2024-03-08-100519.png', type='Subaru', description='best quality, good infotainment system. Petrol engine , automatic', price='1,200,000')
        motor5 = Motor(name='Motor 5', image='https://i.ibb.co/282z92m/Screenshot-2024-03-08-100519.png', type='Subaru', description='best quality, good infotainment system. Petrol engine , automatic', price='1,200,000')
        db.session.add_all([motor1, motor2, motor3, motor4, motor5])

        # Commit changes to the database
        db.session.commit()

    print("Seed complete")

# Call the function to seed the database
seed_database()
