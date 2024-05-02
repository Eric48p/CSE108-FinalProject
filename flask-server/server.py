from flask import Flask, request, jsonify
from flask_restful import abort
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView



# from sqlalchemy import create_engine, MetaData, Table

app = Flask(__name__)
app.secret_key = 'super secret key'
CORS(app)  # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
admin = Admin(app)

class CommentInForum(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  forumId = db.Column(db.Integer, db.ForeignKey('forum.id'))
  commentId = db.Column(db.Integer, db.ForeignKey('comment.id'))

  def __repr__(self):
    return f'<CommentId: {self.commentId}, forumId: {self.forumId}>'

class CommentInForumView(ModelView):
  column_list = ('id', 'forumId', 'commentId')
  can_export = True

admin.add_view(CommentInForumView(CommentInForum, db.session))

class CommentInteraction(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  commentId = db.Column(db.Integer, db.ForeignKey('comment.id'))
  userId = db.Column(db.Integer, db.ForeignKey('user.id'))
  interaction = db.Column(db.String(100), nullable=False)

  def __repr__(self):
    return f'<CommentId: {self.commentId}, userId: {self.userId}, interaction: {self.interaction}>'

class CommentInteractionView(ModelView):
  column_list = ('id', 'commentId', 'userId', 'interaction')
  can_export = True

admin.add_view(CommentInteractionView(CommentInteraction, db.session))

class ForumInteraction(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  forumId = db.Column(db.Integer, db.ForeignKey('forum.id'))
  userId = db.Column(db.Integer, db.ForeignKey('user.id'))
  interaction = db.Column(db.String(100), nullable=False)

  def __repr__(self):
    return f'<userId: {self.commentId}, forumId: {self.forumId}, interaction: {self.interaction}>'

class ForumInteractionView(ModelView):
  column_list = ('id', 'forumId', 'userId', 'interaction')
  can_export = True

admin.add_view(ForumInteractionView(ForumInteraction, db.session))

class Forum(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = db.Column(db.String(100), nullable=False)
  creator = db.Column(db.String(100), nullable=False)
  timeCreated = db.Column(db.String(100), nullable=False)
  content = db.Column(db.String(500), nullable=False)
  likes = db.Column(db.Integer, default=0)
  dislikes = db.Column(db.Integer, default=0)
  comment_in_forum = db.relationship('CommentInForum', backref='forum')
  forum_interaction = db.relationship('ForumInteraction', backref='forum')

  def __repr__(self):
    return f'<Forum: {self.title}, courseId: {self.content}, timeCreated: {self.timeCreated}, creator: {self.creator}>'

class ForumView(ModelView):
  column_list = ('id', 'title', 'creator', 'timeCreated', 'content', 'likes', 'dislikes')
  can_export = True

admin.add_view(ForumView(Forum, db.session))

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  firstName = db.Column(db.String(100), nullable=False)
  lastName = db.Column(db.String(100), nullable=False)
  email = db.Column(db.String(100), nullable=False)
  password = db.Column(db.String(100), nullable=False)
  role = db.Column(db.String(100), default='General Member')
  forum_interaction = db.relationship('ForumInteraction', backref='user')
  comment_interaction = db.relationship('CommentInteraction', backref='user')
  

  def __repr__(self):
    return f"User(name = {self.firstName}, last_name = {self.lastName}, email = {self.email}, role = {self.role}, id = {self.id})"

class UserView(ModelView):
  column_list = ('id', 'firstName', 'lastName', 'email', 'role', 'password')
  can_export = True

admin.add_view(UserView(User, db.session))

#   def to_dict(self):
#     return {
#         'id': self.id,
#         'firstName': self.firstName,
#         'lastName': self.lastName,
#         'email': self.email,
#         'role': self.role,
#         'password' : self.password
#     }


class Comment(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  commentOwner = db.Column(db.String(100), nullable=False)
  comment = db.Column(db.String(500), nullable=False)
  timeCreated = db.Column(db.String(100), nullable=False)
  likes = db.Column(db.Integer, default=0)
  dislikes = db.Column(db.Integer, default=0)
  comment_in_forum = db.relationship('CommentInForum', backref='comment')
  comment_interaction = db.relationship('CommentInteraction', backref='comment')

  def __repr__(self):
    return f'<Comment: {self.comment}, CommentOwner: {self.commentOwner}, TimeCreated: {self.timeCreated}>'

class CommentView(ModelView):
  column_list = ('id', 'commentOwner', 'comment', 'timeCreated', 'likes', 'dislikes')
  can_export = True

admin.add_view(CommentView(Comment, db.session))

#   def to_dict(self):
#     return {
#         'id': self.id,
#         'courseName': self.courseName,
#         'teacher': self.teacher,
#         'courseTime': self.courseTime,
#         'capacity': self.capacity,
#         'totalEnrolled' : self.totalEnrolled
#     }



# How do you pass in '/createUser' from the app.route to the function
# Creates any user with any role
@app.route('/createUser', methods=['POST'])
def create_user():
    data = request.json

    if data:
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        email = data.get('email')
        password = data.get('password')

        user_exist = User.query.filter_by(email=email).first()

        if user_exist:
          return jsonify({'error': 'User already exist'}), 400
        else:
          new_user = User(firstName=firstName, lastName=lastName, email=email, password=password)
          db.session.add(new_user)
          db.session.commit()

          return jsonify({'message': 'User created successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400




if __name__ == "__main__":
    app.run(debug=True)