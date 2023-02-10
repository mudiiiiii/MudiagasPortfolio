var mongrose = require("mongrose")
var Schema = mongrose.Schema

var userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

var User = mongrose.model('User', userSchema)
module.exports = User