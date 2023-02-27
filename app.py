from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('mongodb+srv://test:sparta@cluster0.cohpokp.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/teamMate_boa')
def home_boa():
    return render_template('boa.html')


@app.route('/teamMate_seonghyun')
def home_seonghyun():
    return render_template('seonghyun.html')


@app.route('/teamMate_jongwoo')
def home_jongwoo():
    return render_template('Jongwoo.html')


@app.route('/teamMate_jiho')
def home_jiho():
    return render_template('jiho.html')


@app.route('/teamMate_gyeonghwan')
def home_gyeonghwan():
    return render_template('gyeonghwan.html')


@app.route("/comments", methods=["POST"])
def comments_post():
    name_receive = request.form['name_give']
    # password_receive = request.form['password_give'] #
    comment_receive = request.form['comment_give']

    doc = {
        'name': name_receive,
        # 'password': password_receive,
        'comment': comment_receive,
    }
    db.comments.insert_one(doc)
    return jsonify({'msg': '댓글 등록완료!'})


@app.route("/comments", methods=["GET"])
def comments_get():
    comments_list = list(db.comments.find({}, {'_id': False}))
    return jsonify({'comments': comments_list})


@app.route("/guestbooks", methods=["POST"])
def guestbook_post():
    host_receive = request.form['host_give']
    guest_receive = request.form['guest_give']
    guestbook_receive = request.form['guestbook_give']
    doc = {
        'host': host_receive,
        'guest': guest_receive,
        'guestbook': guestbook_receive,
    }
    db.guestbooks.insert_one(doc)
    return jsonify({'msg': '방명록 등록완료!'})


@app.route("/guestbooks", methods=["GET"])
def guestbooks_get():
    guestbooks_list = list(db.guestbooks.find({}, {'_id': False}))
    return jsonify({'guestbooks': guestbooks_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
