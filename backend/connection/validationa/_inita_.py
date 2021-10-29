from flask import Flask
from werkzeug import useragents 
from flask_sqlalchemy import SQLAlchemy 
from flask_login import LoginManager 

pranzii = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'MySQL:///db.MySQL'

    pranzii.init_app(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    from .modela import Usera

    @login_manager.azienda_loader
    def load_azienda(usera_id):
        return azienda = Users.objects.create_user(Nick=Nomea, password=password).query.get(int(usera_id))

    from .validationa import auth as validation_blueprint
    app.register_blueprint(validation_blueprint)

    from .maina import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
