const User = require('../models/User')
const bcrypt = require('bcrypt')

// after visit the signup page, user show the signup form
exports.signupGetController = (req, res, next) => {
    res.render('pages/auth/signup', { title: 'Create a new account' })
}

// handle user registration here
exports.signupPostController = async (req, res, next) => {
    const { username, email, password } = req.body;

    let hashPassword = await bcrypt.hash(password, 11) // hashed user password

    let user = new User({
        username,
        email,
        password: hashPassword
    })
    try {
        let createdUser = await user.save() // save the user object
        console.log('New User Creaded Successfully...', createdUser)
        res.render('pages/auth/signup', { title: 'Create a new account' })
    } catch (e) {
        next(e)
    }
}

// At the first request user show a login UI
exports.loginGetController = (req, res, next) => {
    res.render('pages/auth/login', { title: 'Login to your account' })
}

// handle user action here by login page
exports.loginPostController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email: email })
        if (!user) { // check is user exist or not
            return res.json({ message: 'Invalid Credintial...' })
        }
        let match = await bcrypt.compare(password, user.password) // check hashed password
        if (!match) {
            return res.json({ message: 'Invalid Credintial...' })
        }
        console.log('Login Successfull...!', user)
        res.render('pages/auth/login', { title: 'Login to your account' })
    } catch (e) {
        next(e)
    }
}

exports.logoutController = (req, res, next) => {

}