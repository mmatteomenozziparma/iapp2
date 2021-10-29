
   
from flask import Blueprint, render_template 
from flask_login import login_required, current_user

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('Home.html')

@main.route('/profilea')
@login_required
def profile():
    return render_template('profilea.html',  Nomea=current_usera.Nomea)
