from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates;

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


    # ****I have the validation on the front end, where they can only type number values into the "amount" box on the add transaction slide over
    # @validates('amount')
    # def validate_columns(self, attr, value):
    #     if (not isinstance(value, float)) or (not isinstance(value, int)) or len(value) < 1:
    #         raise ValueError(f"{attr} must be a number that is at least 1 numeric character long!")
    #     return value

    



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


    # ****I have the validation on the front end, where they can only type number values into the "age" box on the edit profile pop up
    # @validates('age')
    # def validate_columns(self, attr, value):
    #     if (value < 121):
    #         raise ValueError(f"{attr} must be a number that is less than 120!")
    #     return value

    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError("Email is not valid")
        return address




class Chart_Of_Accounts(db.Model, SerializerMixin):
    __tablename__ = 'chart_of_accounts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    account_type = db.Column(db.String)

