import './App.css';
import { Container } from '@material-ui/core';
import {makeStyles} from "@material-ui/core"
import Search from "./components/Search"
import List from "./components/List"
import InputBar from "./components/InputBar"
import {useState, useReducer} from "react"
import {reducer, Actions} from "./store"

const useStyles = makeStyles({
  container :{
    background : "#fff",
    borderRadius: "2rem",
    height:500,
    padding:"2rem",
    maxWidth:400,
  },
})


function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  console.log(todos)
    const classes = useStyles();
  return (
    <>
    <Container  
    maxWidth="sm"
    className ={classes.container}
    >
    <InputBar 
    dispatch={dispatch} 
    />
    <List 
    todos={todos}
    dispatch={dispatch}
    />
    </Container>
    </>
  );
}

export default App;
