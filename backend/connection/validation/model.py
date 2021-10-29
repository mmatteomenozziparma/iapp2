from flask_login import UserMixin
from . import databaselaunch

class User(UserMixin,databaselaunch.Model):
    id = databaselaunch.Column(databaselaunch.Integer, primary_key=True)
    email = databaselaunch.Column(databaselaunch.String(100), unique=True)
    password = databaselaunch.Column(databaselaunch.String(100))
    Nick = databaselaunch.Column(databaselaunch.String(1000))
class Userg(UserMixin, databaselaunch.Model):
    id = databaselaunch.Column(databaselaunch.Integer, primary_key=True)
    nome= databaselaunch.Column(databaselaunch.string(25))
    Cognomen=databaselaunch.Column(databaselaunch.string(50))
    Matr = databaselaunch.Column(databaselaunch.int, ForeignKey=True)
    utente= databaselaunch.Column(databaselaunch.int, ForeignKey=True)
    foto =databaselaunch.Column(databaselaunch.img)
    