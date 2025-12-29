const fs = require("node:fs");
const appPath = '/usr/src/app';
const todoListFile = appPath + '/files/todo.json';

const getAllTodos = () => {
    let todoList = [];
    try {
        if (fs.existsSync(todoListFile)) {
            todoList = JSON.parse(fs.readFileSync(todoListFile, {encoding: 'utf8', flag: 'r'}));
        } else {
            fs.writeFileSync(todoListFile, JSON.stringify([]));
        }
    } catch (error) {
        console.log(error);
    }
    return todoList;
}

const insertTodo = async (item) => {
    let todos = getAllTodos();
    todos.push(item);
    try {
        fs.writeFileSync(todoListFile, JSON.stringify(todos));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllTodos, insertTodo}