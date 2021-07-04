import './App.css';
import React, {useEffect, useState} from "react";
import Todo from "./Todo";
import { Button ,FormControl, Input , InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from "firebase";

function App() {
    const [todos,setTodos] = useState(['']);
    const [input,setInput] = useState('');

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
        })
    }, []);

    const addTodo = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }
    return (
    <div className="App">
      <h1>Hello World</h1>
        <form>
            <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                <Input id="input" type="text" value={input}  onChange={event => setInput(event.target.value)}/>
            </FormControl>

            <Button type="submit" id="add" onClick={addTodo} variant="contained" color="primary" disabled={!input}>
                Add Todo
            </Button>
        </form>
        <ul>
            {
                todos.map(todo => (
                    <Todo todo={todo}/>
                ))
            }
        </ul>
    </div>
  );
}

export default App;
