import {useState} from 'react'
import {Typography, TextField, Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import {Actions} from "../store" 

const InputBar = ({dispatch})=>{
 const [name, setName] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    name!=='' && dispatch({type: Actions.ADD_TODO, payload:{name: name}});
    setName("");
  } 
  
return(
<>
    <Typography
  color="secondary"
  variant="h5"
  align="center"
  component="h1"
  >
  ToDo
  </Typography>
  
  
  <form onSubmit={handleSubmit} 
  style={{
  width: '100%',
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:"0 5px"
  }}>

<TextField 
id="standard-basic" 
placeholder="add todo" 
variant="standard"
color="secondary"
value = {name}
onChange = {e => setName(e.target.value)}
autoComplete="off"
fullWidth
/>
<IconButton
color="secondary"
variant="contained"
type="submit"
sx={{
  borderRadius:"50%",
  width:55,
  height:55,
}}
disableElevation
>
<AddIcon 
fontSize="large"
/>
</IconButton>

</form>

</>
  );
}

export default InputBar;