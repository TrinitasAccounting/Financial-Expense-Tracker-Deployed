#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Transactions, Profile

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




# API Routes

class AllTransactions(Resource):

    def get(self):

        transactions = Transactions.query.all()

        response_body = [transaction.to_dict() for transaction in transactions]
        return make_response(response_body, 200)

    # def post(self):
    #     try: 
    #         new_transaction = Transactions(date=request.json.get('date'), description=request.json.get('description'), amount=request.json.get('amount'), category=request.json.get('category'))
    #         db.session.add(new_transaction)
    #         db.session.commit()

    #         response_body = new_transaction.to_dict()
    #         return make_response(response_body, 201)

    #     except:
    #         response_body = {
    #             'error': 'Transaction must have a date, description, and amount'
    #         }
    #         return make_response(response_body, 400)



api.add_resource(AllTransactions, '/transactionslist')












if __name__ == '__main__':
    app.run(port=5555, debug=True)

