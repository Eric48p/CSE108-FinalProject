from flask import Flask, request, jsonify, send_from_directory
from flask_restful import abort
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt



# from sqlalchemy import create_engine, MetaData, Table

app = Flask(__name__, static_folder='client/build', static_url_path='/')
app.secret_key = 'super secret key'
CORS(app)  # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
admin = Admin(app)

# Add this code snippet to customize CORS headers
CORS(app, allow_headers=["Content-Type", "Authorization"])

@app.route('/')
def serve():
   return send_from_directory(app.static_folder, 'index.html')

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
  forumId = db.Column(db.Integer, db.ForeignKey('forum.id'))
  interaction = db.Column(db.String(100), nullable=False)

  def __repr__(self):
    return f'<CommentId: {self.commentId}, userId: {self.userId}, forumId: {self.forumId}, interaction: {self.interaction}>'

class CommentInteractionView(ModelView):
  column_list = ('id', 'commentId', 'userId', 'forumId', 'interaction')
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
  comment_interaction = db.relationship('CommentInteraction', backref='forum')

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
          hashed_password = bcrypt.generate_password_hash(password)
          new_user = User(firstName=firstName, lastName=lastName, email=email, password=hashed_password)
          db.session.add(new_user)
          db.session.commit()

          return jsonify({'message': 'User created successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400


@app.route('/login', methods=['POST'])
def loginUser():
  data = request.json

  if data:
    email = data.get('email')
    password = data.get('password')

    account = User.query.filter_by(email=email).first()

    if account:
      if bcrypt.check_password_hash(account.password, password):

        user_data = { # On successful login, send user data to frontend
          'id': account.id,
          'email': account.email,
          'firstName': account.firstName,
          'lastName': account.lastName,  
          'role': account.role
        }
        return jsonify({'user': user_data, 'message': 'Logged in successfully'}), 200
      else:
        return jsonify({'error': 'Invalid credentials'}), 401
    else:
      return jsonify({'error': 'Invalid credentials'}), 401
  else:
      return jsonify({'error': 'Invalid data sent'}), 400
  
@app.route('/updateRole', methods=['PUT'])
def update_role():
    data = request.json

    if data:
        email = data.get('email')
        new_role = data.get('role')

        user = User.query.filter_by(email=email).first()

        if user:
            user.role = new_role
            db.session.commit()
            return jsonify({'message': 'Role updated successfully'}), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/createForum', methods=['POST'])
def create_forum():
    data = request.json

    if data:
        fullName = data.get('name')
        time = data.get('time')
        forumTitle = data.get('title')
        forumContent = data.get('content')

        new_forum = Forum(title=forumTitle, creator=fullName, timeCreated=time, content=forumContent)
        db.session.add(new_forum)
        db.session.commit()

        return jsonify({'message': 'Forum created successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400
    
@app.route('/getForums', methods=['GET'])
def get_forums():
    forums = Forum.query.all()  # Assuming Forum is your SQLAlchemy model
    forum_list = []
    for forum in forums:
        forum_data = {
            'id': forum.id,
            'title': forum.title,
            'creator': forum.creator,
            'timeCreated': forum.timeCreated,
            'content': forum.content,
            'likes': forum.likes,
            'dislikes': forum.dislikes
        }
        forum_list.append(forum_data)
    return jsonify(forums=forum_list)

@app.route('/getForum', methods=['GET'])
def get_forum():
    forum_id = request.args.get('id')  # Get the forum ID from query parameters
    print(forum_id)
    if forum_id is None:
        return jsonify({"error": "Forum ID is missing in the request"}), 400

    forum = Forum.query.get(forum_id)
    if forum:
        forum_data = {
            "id": forum.id,
            "title": forum.title,
            "creator": forum.creator,
            "timeCreated": forum.timeCreated,
            "content": forum.content,
            "likes": forum.likes,
            "dislikes": forum.dislikes,
            # Add more fields as needed
        }
        return jsonify({"forum": forum_data}), 200
    else:
        return jsonify({"error": "Forum not found"}), 404
    
@app.route('/getComments', methods=['GET'])
def get_comments():
  forum_id = request.args.get('id')  # Get the forum ID from query parameters
  comments = CommentInForum.query.filter_by(forumId=forum_id).all()
  comments_dict = []

  if comments:
      for comment in comments:
        comment_data = {
                "id": comment.comment.id,
                "commentOwner": comment.comment.commentOwner,
                "comment": comment.comment.comment,
                "timeCreated": comment.comment.timeCreated,
                "likes": comment.comment.likes,
                "dislikes": comment.comment.dislikes,
            }
        comments_dict.append(comment_data)
      return jsonify(comments_dict), 200
  else:
    return jsonify({"error": "Forum not found"}), 404
  


@app.route('/replyToForum', methods=['POST'])
def reply_to_forum():
    data = request.json

    if data:
        forumId = data.get('id')
        commentorsName = data.get('name')
        time = data.get('time')
        comment = data.get('comment')

        new_comment = Comment(commentOwner=commentorsName, comment=comment, timeCreated=time)
        db.session.add(new_comment)
        db.session.commit()

        forum = Forum.query.filter_by(id=forumId).first()
        commentInForum = CommentInForum(comment=new_comment, forum=forum)
        db.session.add(commentInForum)
        db.session.commit()

        return jsonify({'message': 'Comment created successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/editForum', methods=['PUT'])
def edit_forum():
    data = request.json

    if data:
      updatedTitle = data.get('title')
      updatedTime = data.get('time')
      updatedContent = data.get('content')
      forumId = data.get('id')

      forum = Forum.query.filter_by(id=forumId).first()

      forum.title = updatedTitle
      forum.timeCreated = updatedTime
      forum.content = updatedContent
      db.session.commit()

      return jsonify({'message': 'Forum edited successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/editComment', methods=['PUT'])
def edit_comment():
    data = request.json

    if data:
      updatedComment = data.get('comment')
      commentId = data.get('id')

      comment = Comment.query.filter_by(id=commentId).first()

      comment.comment = updatedComment
      db.session.commit()

      return jsonify({'message': 'Comment edited successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/interactWForum', methods=['POST'])
def interact_with_forum():
    data = request.json

    if data:
      forumId = data.get('forumId')
      userId = data.get('userId')
      interaction = data.get('interaction')
      print(forumId, userId, interaction)

      forum_interacted = ForumInteraction.query.filter_by(forumId=forumId, userId=userId).first()

      if forum_interacted:
        return jsonify({'error': 'Forum has already been liked or disliked'}), 400

      newForumInteractionEntry = ForumInteraction(forumId=forumId, userId=userId, interaction=interaction)
      db.session.add(newForumInteractionEntry)
      db.session.commit()

      forum = Forum.query.filter_by(id=forumId).first()

      if interaction == 'like':
        forum.likes += 1
      else:
        forum.dislikes += 1

      db.session.commit()

      return jsonify({'message': 'Forum interaction has been updated successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/interactWComment', methods=['POST'])
def interact_with_comment():
    data = request.json

    if data:
      forumId = data.get('forumId')
      userId = data.get('userId')
      commentId = data.get('commentId')
      interaction = data.get('interaction')

      comment_interacted = CommentInteraction.query.filter_by(forumId=forumId, userId=userId, commentId=commentId).first()

      if comment_interacted:
        return jsonify({'error': 'Comment has already been liked or disliked'}), 400

      newCommentInteractionEntry = CommentInteraction(commentId=commentId, userId=userId, forumId=forumId, interaction=interaction)
      db.session.add(newCommentInteractionEntry)
      db.session.commit()

      comment = Comment.query.filter_by(id=commentId).first()

      if interaction == 'like':
        comment.likes += 1
      else:
        comment.dislikes += 1

      db.session.commit()

      return jsonify({'message': 'Comment interaction has been updated successfully'}), 201
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/deleteComment', methods=['DELETE'])
def delete_comment():
    data = request.json

    if data:
      commentId = data.get('commentId')

      comment = Comment.query.filter_by(id=commentId).first()
      commentInForum = CommentInForum.query.filter_by(commentId=commentId).first()
      commentInteraction = CommentInteraction.query.filter_by(commentId=commentId).all()

      if comment:
        db.session.delete(comment)
        db.session.commit()
        db.session.delete(commentInForum)
        db.session.commit()

        if commentInteraction:
          for interaction in commentInteraction:
            db.session.delete(interaction)
            db.session.commit()
      
        return jsonify({'message': 'Comment deleted successfully with all of its associated data'}), 201
      else:
        return jsonify({'message': 'Comment does not exist, cannot delete'}), 400
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

@app.route('/deleteForum', methods=['DELETE'])
def delete_forum():
    data = request.json

    if data:
      forumId = data.get('forumId')

      forum = Forum.query.filter_by(id=forumId).first()
      commentInForum = CommentInForum.query.filter_by(forumId=forumId).all()
      forumInteraction = ForumInteraction.query.filter_by(forumId=forumId).all()
      commentInteraction = CommentInteraction.query.filter_by(forumId=forumId).all()

      if forum:
        db.session.delete(forum)
        db.session.commit()

        if forumInteraction:
          for interaction in forumInteraction:
            db.session.delete(interaction)
            db.session.commit()

        for comment in commentInteraction:
          db.session.delete(comment)
          db.session.commit()

        # Delete all the comments associated with a forum
        for comment in commentInForum:
          temp = Comment.query.filter_by(id=comment.commentId).first()
          db.session.delete(temp)
          db.session.commit()

        for comment in commentInForum:
          db.session.delete(comment)
          db.session.commit()
      
        return jsonify({'message': 'Forum deleted successfully with all of its associated data'}), 201
      else:
        return jsonify({'message': 'Forum does not exist, cannot delete'}), 400
    else:
        return jsonify({'error': 'Invalid JSON'}), 400

if __name__ == "__main__":
    app.run(debug=True)

# id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#   commentOwner = db.Column(db.String(100), nullable=False)
#   comment = db.Column(db.String(500), nullable=False)
#   timeCreated = db.Column(db.String(100), nullable=False)
#   likes = db.Column(db.Integer, default=0)
#   dislikes = db.Column(db.Integer, default=0)
#   comment_in_forum = db.relationship('CommentInForum', backref='comment')
#   comment_interaction = db.relationship('CommentInteraction', backref='comment')

# id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#   title = db.Column(db.String(100), nullable=False)
#   creator = db.Column(db.String(100), nullable=False)
#   timeCreated = db.Column(db.String(100), nullable=False)
#   content = db.Column(db.String(500), nullable=False)
#   likes = db.Column(db.Integer, default=0)
#   dislikes = db.Column(db.Integer, default=0)
#   comment_in_forum = db.relationship('CommentInForum', backref='forum')
#   forum_interaction = db.relationship('ForumInteraction', backref='forum')
#   comment_interaction = db.relationship('CommentInteraction', backref='forum')