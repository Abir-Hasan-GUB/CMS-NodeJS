//title, body, author, tags, thumbnil, readTime, likes, dislikes, comments

const { Schema, model } = require('mongoose')
// const User = require('./User')
const Comment = require('./Comment')

const postSchema = new Schema({
    title: {
        type: 'String',
        maxlength: 100,
        required: true,
        trim: true
    },
    body: {
        type: 'String',
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tags: {
        type: 'String',
        required: true
    },
    thumbnil: 'String',
    readTime: 'String',
    likes: [Schema.Types.ObjectId],
    dislike: [Schema.Types.ObjectId],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestramps: true })

const Post = model('Post', postSchema)
module.exports = Post