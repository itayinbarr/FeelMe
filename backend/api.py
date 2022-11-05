import time
from flask import Flask

app = Flask(__name__)

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_articles():
    title = request.json['title']
    body = request.json['body']

    article = Articles(
        title=title,
        body=body
        )

    db.session.add(article)
    db.session.commit()

    return article_schema.jsonify(article): time.time()}