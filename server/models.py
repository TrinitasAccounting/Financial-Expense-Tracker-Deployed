from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

class Transactions(db.Model, SerializerMixin):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)
    description = db.Column(db.String)
    amount = db.Column(db.Float)
    category = db.Column(db.String)
    


    # 1 to many with the user profile
    # user_id = db.Column(db.Integer, db.ForeignKey('profile.id'))
    # user = db.relationship('Profile', back_populates="transactions")

    # 1 to many with account type (category is connected to name in chart of accounts)
    # account_type

    # serialize_rules = ('-user.transactions')

    



class Profile(db.Model, SerializerMixin):
    __tablename__ = 'profile'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    job_type = db.Column(db.String)
    state = db.Column(db.String)
    age = db.Column(db.Integer)
    email = db.Column(db.String)

    # transactions = db.relationship('Transactions', back_populates="user")

    # serialize_rules = ('-transactions.user')


class Chart_Of_Accounts(db.Model, SerializerMixin):
    __tablename__ = 'chart_of_accounts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    account_type = db.Column(db.String)

