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


api.add_resource(AllTransactions, '/transactions')












if __name__ == '__main__':
    app.run(port=5555, debug=True)

