const express = require('express');
const router = require('express').Router();
const {insertTodo, getAllTodos} = require("../library/todo");

router.post('/todos',  express.json(), async (req, res) => {
    if (req.body) {
        await insertTodo(req.body.todo);
        res.send(200);
    } else {
        res.send(500);
    }
});

router.get('/todos', async (req, res) => {
    const todo = await getAllTodos();
    res.json(JSON.stringify(todo));
});

module.exports = router;