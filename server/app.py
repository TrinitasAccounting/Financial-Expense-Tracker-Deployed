#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports

import os
from dotenv import load_dotenv
load_dotenv()
from flask import jsonify, abort, render_template


# Views go here!

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")


if __name__ == '__main__':
    app.run(port=5555, debug=True)

