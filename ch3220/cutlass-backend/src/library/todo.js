let todoList = ['Foo'];

const getAllTodos = () => {
    return todoList;
}

const insertTodo = async (item) => {
    let todos = getAllTodos();
    todos.push(item);
}

module.exports = {getAllTodos, insertTodo}