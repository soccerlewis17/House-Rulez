const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
  })

  // A comment has many likes, a like belongs to a comment
const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    userAvatar: String,
    userName: {type: String, required: true},
    content: {type: String, required: true},
    likes: [likesSchema] // embedded schema// One Post has many Likes!
    // One Post has many Likes, One to many relationship
    // we are using embedding because likes will always be with the post, 
    // they don't need their own model, because we will never display likes individually
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Comment', commentSchema);