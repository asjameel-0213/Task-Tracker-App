import React, { useState } from "react";
import styled from "styled-components";

// this is styled components
const Container = styled.div`
    background-color: ${(props) => (props.dark ? "blue" : "#fff")};
    color: ${(props) => (props.dark ? "#fff" : "#000")};
    padding: 20px;
    text-align: center;
    min-height: 100vh;
    border-radius: 5px;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.dark ? "#fff" : "#333")};
    color: ${(props) => (props.dark ? "#000" : "#fff")};
`;

// this is CRUD functionality
const TaskTracker = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState(['']);

    const addTask = () => {
        if (taskInput.trim() === '') return;
        const newTask = {
            id: Date.now(),
            name: taskInput,
            completed: false,
        }
        setTasks([...tasks, newTask]);
        setTaskInput('');
    }

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task,completed: !task.completed } : task));
    }

    const editTask = (id, newName) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, name: newName } : task));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // implementing toggle mode
    const [dark, setDark] = useState(false);

    return (
        <div>
            <Container dark = {dark}>
            <h1>Task Tracker App</h1>
            <h2>{dark ? "Blue Mode" : "Light Mode"}</h2>
            <Button dark={dark} onClick={() => setDark(!dark)}>Toggle Mode</Button> <br /> <br />
            <input
                type="text" 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Add a new task"
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} 
                        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" 
                        value={task.name}
                        onChange={(e) => editTask(task.id, e.target.value)}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
                        /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </Container>
        </div>
    )
}

export default TaskTracker;