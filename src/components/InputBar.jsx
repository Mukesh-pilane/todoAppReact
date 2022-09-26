import {useState} from 'react'
import {Typography, TextField, Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const InputBar = ()=>{
 const [name, setName] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    setName("");
  } 
  
return(
<>
    <Typography
  color="primary"
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
placeholder="List" 
variant="standard"
color="primary"
value = {name}
onChange = {e => setName(e.target.value)}
autoComplete="off"
fullWidth
/>
<Button
color="primary"
variant="contained"
type="submit"
sx={{
  borderRadius:"50%",
  width:55,
  height:55
}}
disableElevation
>
<AddIcon 
fontSize="large"
/>
</Button>

</form>

</>
  );
}

export default InputBar;