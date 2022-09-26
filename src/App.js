import './App.css';
import { Container } from '@material-ui/core';
import {makeStyles} from "@material-ui/core"
//import Search from "./components/Search"
import List from "./components/List"
import InputBar from "./components/InputBar"

const useStyles = makeStyles({
  container :{
    background : "#fff",
    borderRadius: "2rem",
    height:500,
    padding:"2rem",
    maxWidth:400
  }
})


function App() {
    const classes = useStyles();
  return (
    <>
    <Container  
    maxWidth="sm"
    className ={classes.container}
    >
    <InputBar />
    <List />
    </Container>
    </>
  );
}

export default App;
