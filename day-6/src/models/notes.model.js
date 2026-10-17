const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: String,
    description:  String,
})

module.exports = mongoose.model('notes', notesSchema)
