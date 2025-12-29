const express = require('express');
const router = require('express').Router();
const {insertTodo, getAllTodos} = require("../library/todo");

router.post('/todo',  express.json(), async (req, res) => {
    if (req.body) {
        await insertTodo(req.body.todo);
        res.send(200);
    } else {
        res.send(500);
    }
});

router.get('/todo', async (req, res) => {
    const todo = await getAllTodos();
    res.send(todo);
});

module.exports = router;