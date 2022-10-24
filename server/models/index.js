const mongoose = require('mongoose')
const db = mongoose.connect('mongodb+srv://amal:1234@books.cfoeh7h.mongodb.net/Data',{
    useUnifiedTopology: true, useNewUrlParser: true 
}).then(console.log("db connected"))

module.exports = db