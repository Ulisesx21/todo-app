import React, { useState } from 'react';
import Filter from '../pure/todoFilter';
import Todo from '../pure/todo';
import TodoForm from '../pure/todoForm';

const Todolist = () => {

    const todo1 = { complete: true, description: "completar cosas" }
    const todo2 = { complete: false, description: "Completar challenge de Frontend Mentor" }
    const todo3 = { complete: false, description: "leer por una hora" }
    const todo4 = { complete: true, description: "hacer un chalenche" }

    const [todoList, setTodos] = useState([todo1, todo2, todo3, todo4]);
    const [todoFilter, setTodoFilter] = useState("all");


    function removeTodo(todo) {
        let tempTodos = [...todoList]
        let index = todoList.indexOf(todo)
        tempTodos.splice(index, 1)
        setTodos(tempTodos)
    }

    function completedTodo(todo) {
        let tempTodos = [...todoList]
        let index = todoList.indexOf(todo)
        tempTodos[index].complete = !tempTodos[index].complete
        setTodos(tempTodos)
    }

    function createTodo(todo){
        let tempTodos = [...todoList]
        tempTodos.push(todo)
        setTodos(tempTodos)
    }

    function filterTodo(typeFilter) {
        setTodoFilter(typeFilter)
    }

    

    return (
        <div>
            <TodoForm create={createTodo}></TodoForm>
            {
                todoFilter === "all" &&
                todoList.map((todo, index) => {
                    return (
                        <Todo todo={todo} key={index} remove={removeTodo} complete={completedTodo}></Todo>
                    )
                }
            )}
            {
                todoFilter === "complete" &&
                todoList.filter(todo => todo.complete).map((todo, index) => {
                    return (
                        <Todo todo={todo} key={index} remove={removeTodo} complete={completedTodo}></Todo>
                    )
                }
            )}
            {
                todoFilter === "active" &&
                todoList.filter(todo => !todo.complete).map((todo, index) => {
                    return (
                        <Todo todo={todo} key={index} remove={removeTodo} complete={completedTodo}></Todo>
                    )
                }
            )}
            <Filter filter={filterTodo}></Filter>
        </div>
    );
}

export default Todolist;
