from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from flask_login import LoginManager 

databaselaunch = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'MySQL:///db.MySQL'

    databaselaunch.init_app(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    from .model import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    from .validation import auth as validation_blueprint
    app.register_blueprint(validation_blueprint)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
