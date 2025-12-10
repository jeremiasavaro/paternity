from flask import Blueprint, jsonify

bp = Blueprint("example", __name__)

@bp.route("/api/hello")
def hello():
    return jsonify({"message": "Hi from Flask!"})
