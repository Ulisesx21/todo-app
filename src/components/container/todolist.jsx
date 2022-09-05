import React, { useState, useEffect } from 'react';
import TodoForm from '../pure/todoForm';
import Todo from '../pure/todo';
import TodoFilter from '../pure/todoFilter';
import "../styles/todoList.css"
import TodoMode from '../pure/todoMode';

const Todolist = ({ changeModeApp }) => {

    const [todoList, setTodos] = useState([]);
    const [todoFilter, setTodoFilter] = useState("all");
    const [mode, setMode] = useState(false);


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

    function todoFilterRender(todoFilter){
        if(todoFilter === "all"){
            return (
                todoList.map((todo, index) => 
                <Todo todo={todo} key={index} remove={removeTodo} complete={completedTodo} mode={mode}></Todo>
                ))
        }
        if(todoFilter === "complete"){
            return (
                todoList.filter(todo => todo.complete).map((todo, index) => 
                <Todo todo={todo} key={index} remove={removeTodo} complete={completedTodo} mode={mode}></Todo>
                ))
        }
        if(todoFilter === "active"){
            return (
                todoList.filter(todo => !todo.complete).map((todo, index) => 
                <Todo todo={todo} key={index} remove={removeTodo} complete={completedTodo} mode={mode}></Todo>
                ))
        }
    }

    function changeMode(){
        setMode(!mode)
        changeModeApp(mode)
    }

    

    return (
        <div className='todoscontainer'>
            <TodoMode changeMode={changeMode} mode={mode}></TodoMode>
            <TodoForm create={createTodo} mode={mode}></TodoForm>
            {todoFilterRender(todoFilter)}
            <TodoFilter filter={filterTodo} clear={clearCompletedTodo} todo={todoList} filterType={todoFilter} mode={mode}></TodoFilter>
        </div>
    );
}

export default Todolist;
