#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Transactions, Profile, Chart_Of_Accounts

import os
from dotenv import load_dotenv
load_dotenv()
from flask import jsonify, abort, render_template


# Views go here!

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

@app.route('/transactions')
def show_transactions():
    return render_template("index.html")

@app.route('/profile')
def show_profile():
    return render_template("index.html")

@app.route('/chartofaccounts')
def show_chartofaccounts():
    return render_template("index.html")






# API Routes

class AllTransactions(Resource):

    def get(self):

        transactions = Transactions.query.all()

        response_body = [transaction.to_dict() for transaction in transactions]
        return make_response(response_body, 200)

    def post(self):
        try: 
            new_transaction = Transactions(date=request.json.get('date'), description=request.json.get('description'), amount=request.json.get('amount'), category=request.json.get('category'))
            db.session.add(new_transaction)
            db.session.commit()

            response_body = new_transaction.to_dict()
            return make_response(response_body, 201)

        except:
            response_body = {
                'error': 'Transaction must have a date, description, and amount'
            }
            return make_response(response_body, 400)





api.add_resource(AllTransactions, '/transactionslist')




class TransactionById(Resource):

    def delete(self,id):

        transaction = db.session.get(Transactions, id)

        if transaction:
            db.session.delete(transaction)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)

        else:
            response_body = {
                'error': 'Transaction Not Found'
            }
            return make_response(response_body, 404)

    def patch(self, id):

        transaction = db.session.get(Transactions, id)

        if transaction:
            try:
                for attr in request.json:
                    setattr(transaction, attr, request.json[attr])

                db.session.commit()
                response_body = transaction.to_dict()
                return make_response(response_body, 200)

            except:
                response_body = {
                    'error': "Transaction must have a date, description, category, and amount"
                }
                return make_response(response_body, 400)

        else:
            response_body = {
                'error': "Transaction Not Found"
            }
            return make_response(response_body, 404)




api.add_resource(TransactionById, '/server/transaction/<int:id>')





class AllChartOfAccounts(Resource):

    def get(self):

        accounts = Chart_Of_Accounts.query.all()

        response_body = [account.to_dict() for account in accounts]
        return make_response(response_body, 200)

    def post(self):
        try: 
            new_account = Chart_Of_Accounts(name=request.json.get('name'), account_type=request.json.get('account_type'))
            db.session.add(new_account)
            db.session.commit()

            response_body = new_account.to_dict()
            return make_response(response_body, 201)

        except:
            response_body = {
                'error': 'Accounts must have a name and an account type'
            }
            return make_response(response_body, 400)





api.add_resource(AllChartOfAccounts, '/server/chartofaccounts')












if __name__ == '__main__':
    app.run(port=5555, debug=True)

