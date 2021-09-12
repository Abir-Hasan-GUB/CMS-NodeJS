//name, email, password, profile

const { Schema, model } = require('mongoose')
const Profile = require('./Profile');

const uerSchema = new Schema({
    name: {
        type: 'String',
        maxlength: 30,
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