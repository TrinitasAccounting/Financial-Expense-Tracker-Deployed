#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Transactions, Profile

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        # Delete data from the tables first
        Transactions.query.delete()
        Profile.query.delete()
        db.session.commit()

        profile1 = Profile(name="Clay Mangum", job_type="Software Engineer", state="New Jersey", age='30')
        db.session.add_all([profile1])
        db.session.commit()




        # Adding initial transactions
        t1 = Transactions(date='1/2/2024', description='Exxon Mobile', amount='32.77', category='Gas & Fuel')
        t2 = Transactions(date='2/28/2024', description='Taco Bell', amount='12.49', category='Meals & Entertainment')
        t3 = Transactions(date='1/10/2024', description='BP Gas', amount='54.00', category='Gas & Fuel')
        t4 = Transactions(date='2/4/2024', description='Shell', amount='210.33', category='Gas & Fuel')

        db.session.add_all([t1, t2, t3, t4])
        db.session.commit()



        print("Completed seeding")
        # Seed code goes here!
