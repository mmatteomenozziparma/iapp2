from flask_login import UserMixin
from . import databaselaunch
from backend.geoclient import *
class prenotazione (UserMixin,databaselaunch.Model):
    id = databaselaunch.Column(databaselaunch.Integer, primary_key=True)
    risto = databaselaunch.Column(databaselaunch.int ,foreign_key= True)
    user = databaselaunch.Column(databaselaunch.int, foreign_key=True)
    data=databaselaunch.Column(databaselaunch.DateTime)
    ora=databaselaunch.Column(databaselaunch.DateTime)
class ristorante(UserMixin, databaselaunch.Model):
    id = databaselaunch.Column(databaselaunch.Integer, primary_key=True)
    nCivicor=databaselaunch.Column(databaselaunch.int)
    Nomer = databaselaunch.Column(databaselaunch.String(1000))
    Viar = databaselaunch.Column(databaselaunch.String(5))
    nomeviar= databaselaunch.Column(databaselaunch.string(50))
    cittar = databaselaunch.Column(databaselaunch.String(100))
    provinciar = databaselaunch.Column(databaselaunch.String(2))
    regioner = databaselaunch.Column(databaselaunch.String(24))
    nazioner= databaselaunch.Column(databaselaunch.String(15))
    zipcoder=databaselaunch.Column(databaselaunch.Int)
    indiristo=databaselaunch.Column(databaselaunch.int, foreign_key=True)
    pren=databaselaunch.Column(databaselaunch.Int, foreign_key=True)
    matr=databaselaunch.Column(databaselaunch.Coordinates)
    longr=databaselaunch.Column(databaselaunch.Coordinates) 
class indiristo(UserMixin, databaselaunch.Model) :
     id= databaselaunch.Column(databaselaunch.Integer, primary_key=True)
     indirizzoristo=databaselaunch.Column(databaselaunch.Int, foreign_key=True)
     ristor= databaselaunch.Column(databaselaunch.Int, foreign_key=True)
