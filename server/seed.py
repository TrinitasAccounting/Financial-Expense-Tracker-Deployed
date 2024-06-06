#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Transactions, Profile, Chart_Of_Accounts

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


        a1 = Chart_Of_Accounts(name='Sales', account_type='Income')
        a2 = Chart_Of_Accounts(name='Product Income', account_type='Income')
        a3 = Chart_Of_Accounts(name='Advertising & Marketing', account_type='Operating Expense')
        a4 = Chart_Of_Accounts(name='Meals & Entertainment', account_type='Operating Expense')
        a5 = Chart_Of_Accounts(name='Office Expenses', account_type='Operating Expense')
        a6 = Chart_Of_Accounts(name='Legal & Professional', account_type='Operating Expense')
        a7 = Chart_Of_Accounts(name='Rent & Lease', account_type='Operating Expense')
        a8 = Chart_Of_Accounts(name='Gas & Fuel', account_type='Operating Expense')
        a9 = Chart_Of_Accounts(name='Insurance', account_type='Operating Expense')
        a10 = Chart_Of_Accounts(name='Job Supplies', account_type='Operating Expense')
        a11 = Chart_Of_Accounts(name='Travel Expenses', account_type='Operating Expense')
        a12 = Chart_Of_Accounts(name='Contractors', account_type='Operating Expense')
        a13 = Chart_Of_Accounts(name='Software & Subscriptions', account_type='Operating Expense')
        a14 = Chart_Of_Accounts(name='Material Cost', account_type='Cost of Goods Sold')
        a15 = Chart_Of_Accounts(name='Direct Labor Cost', account_type='Cost of Goods Sold')
        a16 = Chart_Of_Accounts(name='Direct COGS', account_type='Cost of Goods Sold')

        db.session.add_all([a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16])
        db.session.commit()



        print("Completed seeding")
        # Seed code goes here!
