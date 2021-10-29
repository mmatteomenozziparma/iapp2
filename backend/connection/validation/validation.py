from werkzeug.datastructures import ETags
import backend 
from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required
from src.backend.connection.validation._init1_ import databaselaunch
from .model import User, Userg
from . import databaselaunch

validation = Blueprint('validation', __name__)

@validation.route('/login')
def login():
    return render_template('login.html')

@validation.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    if not user and not check_password_hash(user.password, password):
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login'))

    login_user(user, remember=remember)

    return redirect(url_for('main.profile'))

@validation.route('/SignIn')
def SignIn():
    return render_template('SignIn.html')

@validation.route('/SignIn', methods=['POST'])
def SigIn_post():
    Nick = request.form.get('Nick')
    email = request.form.get('email')
    password = request.form.get('password')
    Nome = request.form.get('Nome')
    Cognomen = request.form.get('Cognomen')
    Eta = request.form.get('Eta')
    matr = request.form.get('matr')
    foto = request.form.get('foto')

    user = User.query.filter_by(email=email).first()

    if user:
        flash('Email address already exists.')
        return redirect(url_for('auth.SignIn'))

    new_user =user(email=email, name=Nick, password=generate_password_hash(password, method='sha256'))
    new_userg= Userg(Nome=Nome,Cognomen=Cognomen, Eta=Eta, matr=matr, Foto=foto )

    databaselaunch.session.add(new_user)
    databaselaunch.session.add(new_userg)
    databaselaunch.session.commit()

    return redirect(url_for('auth.login'))

@validation.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))
