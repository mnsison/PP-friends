from flask import Flask, request, render_template
from flask_socketio import SocketIO, send, join_room, leave_room, emit
from flask_cors import CORS
from server.register import registerUser
import profile
import server.matches
from server.login import loginUser
import server.SwipeDecision
from server.questionnaire import updateQuestionnaire
from server.potentialMatch import findPotentialMatches
import server.messages
# import sys
# import logging 

app = Flask(__name__, static_folder='../src', static_url_path='/')
CORS(app)
# app.logger.addHandler(logging.StreamHandler(sys.stdout))
# app.logger.setLevel(logging.ERROR)

app.config['SECRET_KEY'] = 'mysecret'

socketIo = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def home():
    return app.send_static_file('Login.js')

# makes app run on the standard port
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

# Error handling in case the url path does not exist, takes them back to main page
# @app.errorhandler(404)
# def not_found(e):
#     return app.send_static_file('index.js')

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
      return loginUser(request.form['email'], request.form['password'])

@app.route('/createprofile', methods=['POST'])
def create_profile():
    if request.method == 'POST':
        return profile.createProfile(request.form['name'], request.form['birthday'],
                             request.form['bio'], request.form['gender'], request.form['education'],
                             request.form['interests'], request.form['genderPreference'], request.form['maxDistance'],  
                             request.form['age'], request.form['id'])

@app.route('/viewprofile', methods=['POST'])
def viewProfile():
    if request.method == 'POST':
        param = request.get_json('userId')
        return profile.getProfile(param['userId'])

@app.route('/editprofile', methods=['POST'])
def edit_profile():
    if request.method == 'POST':
        return profile.updateProfile(request.form['name'], request.form['birthday'],
                             request.form['bio'], request.form['gender'], request.form['education'],
                             request.form['interests'], request.form['genderPreference'], request.form['maxDistance'],  
                             request.form['age'], request.form['id'])

@app.route('/matches', methods=['POST'])
def get_matches():
    if request.method == 'POST':
        param = request.get_json('userId')
        response = matches.matchUser(param['userId'])
        return response

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        return registerUser(request.form['email'], request.form['password'])

@app.route('/getPotentialFriends', methods=['POST'])
def getFriends():
    if request.method == 'POST':
        return SwipeDecision.getPotentialMatchList(request.form['userId'])

@app.route('/displayProfile', methods=['POST'])
def displayProfile():
    if request.method == 'POST':
        return SwipeDecision.showProfile(request.form['userId'])

@app.route('/swipe', methods=['POST'])
def inputSwipe():
    if request.method == 'POST':
        return SwipeDecision.swipeDecision(request.form['currentUserId'], request.form['shownUserId'], request.form['match'])

@app.route('/questionnaire', methods=['POST'])
def questionnaire():
    if request.method == 'POST':
        param = request.get_json('responses')
        return updateQuestionnaire(param['responses'], param['userId']) 

@app.route('/potentialMatch', methods=['POST'])
def potentialMatch():
    if request.method == 'POST':
        param = request.get_json('responses')
        return findPotentialMatches(param['userId'])
        
@app.route('/conversationId', methods=['POST'])
def conversationId():
    if request.method == 'POST':
        param = request.get_json('userId')
        return matches.getConversationIds(param['userId'], param['friendId'])     

@app.route('/getMessages', methods=['POST'])
def getMessages():
    if request.method == 'POST':
        param = request.get_json('convoId')
        return messages.getMessages(param['convoId'])   

@app.route('/sendMessage', methods=['POST'])
def sendMessage():
    if request.method == 'POST':
        param = request.get_json('convoId')
        return messages.sendMessage(param['convoId'], param['friendConvoId'], param['currentId'], param['friendId'], param['message']) 

@socketIo.on('connect')
def on_Connect():
    return None

@socketIo.on("message")
def handleMessage(data):
    msg = data['msg']
    room = data['room']
    send(msg, room=room)
    return None

@socketIo.on("room")
def handleMessage(room):
    join_room(room)
    return None

@socketIo.on("leaveRoom")
def handleMessage(room):
    leave_room(room)
    return None

if __name__ == '__main__':
    app.debug = True
    app.run()
    socketIo.run(app)
