// user, title, bio, profilePic, links, post, bookmarks

const { Schema, model } = require('mongoose')
// const User = require('./User')
// const Post = require('./Post')

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: 'String',
        trim: true,
        required: true
    },
    title: {
        type: 'String',
        maxlength: 100,
        trim: true
    },
    bio: {
        type: 'String',
        maxlength: 500
    },
    profilePic: 'String',
    likes: {
        website: 'String',
        facebook: 'String',
        twiteer: 'String',
        github: 'String'
    },
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {
    timestamps: true
})

const Profile = model('Profile', profileSchema)
module.exports = Profile