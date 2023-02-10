var User = require('./User')
var bcrypt = require('bcrypt.js')
var jwt = require('jsonwebtoken')

var Login = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
    })

    let user = new User({
        username: req.body.username,
        password: hashedPass
    })
    user.save()
    .then(user => {
        res.json({
            message: 'User has been added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'Invalid Input'
        })
    })
}
module.exports = {
    Login
}