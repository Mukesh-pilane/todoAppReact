import {Typography, TextField, Button} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useState, useReducer} from "react"

const useStyles = makeStyles({
  btn :{
    width:58,
    height:58,
    borderRadius:"50%"
  },
  name:{
    fontSize: '160px',
    textAlign: "center",
    padding: "1rem"
  },
  list:{
    background: "#B1B2FF",
    color:"white",
    padding: "0.8rem",
    marginTop: 5,
    borderRadius: 20,
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scroll:{
    height:350,
    overflow:"scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar":{
        display: "none",
    }
  }
})

const Actions ={
  ADD_TODO: "add",
  DEL_TODO: "del"
}

function reducer(todos, action){
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...todos , newItem(action.payload.name)]
    case Actions.DEL_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newItem(name){
  return {id:Date.now(), name: name};
}

function Search() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const classes = useStyles();
  function handleSubmit(e){
    e.preventDefault()
    name!=='' && dispatch({type: Actions.ADD_TODO, payload:{name: name}});
    setName("");
  }

  return (
    <>
<Typography
variant="h4"
align="center"
component="h2"
gutterBottom
>
ToDo List
</Typography>
<form onSubmit={handleSubmit}>
<TextField 
id="standard-basic" 
placeholder="List" 
variant="standard"
color="primary"
value = {name}
onChange = {e => setName(e.target.value)}
/>
<Button
className={classes.btn}
color="primary"
variant="contained"
type="submit"
>
<AddIcon 
fontSize="large"
/>

</Button>
</form>
<div className={classes.scroll}>
{todos.map((todo, index)=>{
  return (
    <div className={classes.list} key={index}>
<DeleteIcon 
onClick ={() => {dispatch({type : Actions.DEL_TODO, payload: {id:todo.id}});}}
/>
<Typography
style ={{
  marginLeft:10
}}
>
{todo.name}
</Typography>
</div>
    )
})}
</div>
    </>
  );
}

export default Search;
