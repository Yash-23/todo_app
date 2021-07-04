import React from 'react';
import {ListItem, List, ListItemText, ListItemAvatar, Modal, Button} from "@material-ui/core";
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {useState} from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes =  useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        },{merge: true})
        setOpen(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}>
                <form onSubmit={e => e.preventDefault()}>
                <div className={classes.paper}>
                    <h1>Edit Todo</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button type="submit" onClick={updateTodo} >Update Todo</Button>

                </div>
        </form>
            </Modal>

        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Todo"/>
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit me</button>
                <DeleteForeverIcon onClick={event => {
                    db.collection('todos').doc(props.todo.id).delete()
                }}/>

        </List>
        </>
    );
}

export default Todo;