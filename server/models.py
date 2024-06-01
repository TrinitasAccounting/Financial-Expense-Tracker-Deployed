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

    # serialize_rules = ('-user.transactions')

    



class Profile(db.Model, SerializerMixin):
    __tablename__ = 'profile'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    job_type = db.Column(db.String)
    state = db.Column(db.String)
    age = db.Column(db.Integer)

    # transactions = db.relationship('Transactions', back_populates="user")

    # serialize_rules = ('-transactions.user')


