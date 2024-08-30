// server/models/todo.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    mobileNumber: { type: String, required: false }
});

module.exports = mongoose.model('Todo', todoSchema);