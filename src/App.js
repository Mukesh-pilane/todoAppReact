import './App.css';
import { Container } from '@material-ui/core';
import {makeStyles} from "@material-ui/core"
import Search from "./components/Search"

const useStyles = makeStyles({
  container :{
    background : "#fff",
    borderRadius: "2rem",
    height:500,
    padding:"2rem",
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
    <Search />
    </Container>
    </>
  );
}

export default App;
