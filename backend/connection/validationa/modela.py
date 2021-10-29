from flask_login import UserMixin

from . import  databaselaunch


class Usera(UserMixin,databaselaunch.Model):
    id =databaselaunch.Column(databaselaunch.Integer, primary_key=True)
    email = databaselaunch.Column(databaselaunch.String(100), unique=True)
    password = databaselaunch.Column(databaselaunch.String(100))
    Nomea = databaselaunch.Column(databaselaunch.String(1000))
class indirizzo(UserMixin, databaselaunch.Model):
    id = databaselaunch.Column(databaselaunch.Integer, primary_key=True)
    email = databaselaunch.Column(databaselaunch.String(100), unique=True)
    password = databaselaunch.Column(databaselaunch.String(100))
    nCivico=databaselaunch.Column(databaselaunch.int)
    Nomea = databaselaunch.Column(databaselaunch.String(1000))
    Viaa = databaselaunch.Column(databaselaunch.String(5))
    nomeviaa= databaselaunch.Column(databaselaunch.string(50))
    citta = databaselaunch.Column(databaselaunch.String(100))
    provincia = databaselaunch.Column(databaselaunch.String(2))
    regione = databaselaunch.Column(databaselaunch.String(24))
    nazione= databaselaunch.Column(databaselaunch.String(15))
    zipcode=databaselaunch.Column(databaselaunch.Int)
