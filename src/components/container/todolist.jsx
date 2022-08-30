import React, { useState, useEffect } from 'react';
import Filter from '../pure/todoFilter';
import Todo from '../pure/todo';
import TodoForm from '../pure/todoForm';

const Todolist = () => {

    const [todoList, setTodos] = useState([]);
    const [todoFilter, setTodoFilter] = useState("all");


    useEffect(() => {
        let storageTodos = JSON.parse(localStorage.getItem("todoList"))

        if(storageTodos !== null){
            let todos = JSON.parse(localStorage.getItem("todoList"))
            setTodos(todos)
        }
    }, [])
    

    function removeTodo(todo) {
        let tempTodos = [...todoList]
        let index = todoList.indexOf(todo)
        tempTodos.splice(index, 1)
        setTodos(tempTodos)
        localStorage.setItem("todoList", JSON.stringify(tempTodos))
    }

    function completedTodo(todo) {
        let tempTodos = [...todoList]
        let index = todoList.indexOf(todo)
        tempTodos[index].complete = !tempTodos[index].complete
        setTodos(tempTodos)
        localStorage.setItem("todoList", JSON.stringify(tempTodos))
    }

    function createTodo(todo){
        let tempTodos = [...todoList]
        tempTodos.push(todo)
        setTodos(tempTodos)
        localStorage.setItem("todoList", JSON.stringify(tempTodos))
    }

    function filterTodo(typeFilter) {
        setTodoFilter(typeFilter)
    }

    function clearCompletedTodo(){
        let tempTodos = [...todoList]
        let clearCompletes = tempTodos.filter(todo => !todo.complete)
        setTodos(clearCompletes)
        localStorage.setItem("todoList", JSON.stringify(clearCompletes))
    }

    

    return (
        <div>
            <TodoForm create={createTodo} ></TodoForm>
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
            <Filter filter={filterTodo} clear={clearCompletedTodo} todo={todoList}></Filter>
        </div>
    );
}

export default Todolist;
