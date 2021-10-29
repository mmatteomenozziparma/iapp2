from werkzeug.datastructures import ETags
import backend 
from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required
from src.backend.connection.creazionedb import databaselaunch
from .modela import *
from . import databaselaunch

validation = Blueprint('validation', __name__)

@validation.route('/logina')
def login():
    return render_template('logina.html')

@validation.route('/logina', methods=['POST'])
def logina_post():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    usera = Usera.query.filter_by(email=email).first()

    if not usera and not check_password_hash(usera.password, password):
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login'))

    login_user(usera, remember=remember)

    return redirect(url_for('main.profile'))

@validation.route('/SignIna')
def SignIn():
    return render_template('SignIn.html')

@validation.route('/SignIna', methods=['POST'])
def SigIna_post():

    email = request.form.get('email')
    password = request.form.get('password')
    Nomea = request.form.get('Nomea')
    nCivico=request.form.get('nCivico')
    viaa= request.form.get('viaa')
    nomeviaa = request.form.get('nomeviaa')
    citta= request.form.get('citta')
    provincia = request.form.get('provincia')
    regione= request.form.get('regione')
    stato = request.form.get('stato')
    zipcode= request.form.get('zipcode')
   

    usera = Usera.query.filter_by(email=email).first()

    if usera:
        flash('Email address already exists.')
        return redirect(url_for('auth.SignIn'))

    new_usera =usera(email=email, password=generate_password_hash(password, method='sha256'))
    new_indirizzo= indirizzo(nCivico=nCivico,viaa=viaa,Cognomen=Cognomen, Eta=Eta, matr=matr, Foto=Foto )

    databaselaunch.session.add(new_usera)
    databaselaunch.session.add(new_indirizzo)
    databaselaunch.session.commit()

    return redirect(url_for('auth.logina'))

@validation.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.indexa'))
