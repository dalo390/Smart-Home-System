# PDM
from flask import Blueprint, render_template, request, send_file

BP = Blueprint("routes", __name__)


@BP.route("/", methods=["GET"])
@BP.route("/<path>", methods=["GET"])
def mainPage(path="") -> str:
    """Renders the index.html template and returns it."""
    return render_template(
        "index.html",
        session_constants={},
        scripts=[("main-page.*.js")],
    )


# @BP.route("/", methods=["GET"])
# @BP.route("/<path>", methods=["GET"])
# def main_page(path=""):
#     return send_file("index.html")
