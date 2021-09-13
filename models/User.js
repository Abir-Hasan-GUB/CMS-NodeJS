//name, email, password, profile

const { Schema, model } = require('mongoose')
const Profile = require('./Profile');

const uerSchema = new Schema({
    username: {
        type: 'String',
        maxlength: 15,
        required: true,
        trim: true
    },
    email: {
        type: 'String',
        required: true,
        trim: true
    },
    password: {
        type: 'String',
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: Profile
    }

}, {
    timestramps: true
})

const User = model('User', uerSchema)

module.exports = User