// server/controllers/todoController.js
const Todo = require('../models/todo');

// get function
exports.getTodos =async (req, res) =>{

    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// store function
exports.addTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            text: req.body.text,
            completed: req.body.completed,
            mobileNumber: req.body.mobileNumber,
        });
        const todo = await newTodo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// delete function
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};