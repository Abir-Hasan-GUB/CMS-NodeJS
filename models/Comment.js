// post, user, body, replyes

const { Schema, model } = require('mongoose')
const User = require('./User')
const Post = require('./Post')

const commentSchema = newSchema({
    post: {
        type: Schema.Types.ObjectId,
        ref: Post,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    body: {
        type: 'String',
        trim: true,
        required: true
    },
    replies: [{
        body: {
            type: 'String',
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: User,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    }]
}, { timestramps: true })

const Comment = model('Comment', commentSchema)
module.exports = Comment