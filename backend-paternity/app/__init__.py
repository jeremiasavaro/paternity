from flask import Flask
from .routes.test_route import bp as test_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")

    # Routes registration
    app.register_blueprint(test_bp)

    return app
