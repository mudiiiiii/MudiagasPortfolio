let mongoose = require("mongoose");

let RecordsModel = mongoose.Schema({
    name: String,
    email: String,
    displayName: String,
    created: Date,
    update: Date,
},
{
    collection: "lRecord"
});

module.exports = mongoose.model('Record', RecordsModel);