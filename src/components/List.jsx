import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Rect, {useState} from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Typography, Box, Grow} from "@mui/material"
import {Actions} from "../store" 
import Switch from '@mui/material/Switch';

export default function CheckboxList({todos, dispatch}) {
  const [completed, setCompleted]= useState(false)
  const [checked, setChecked] = useState(false);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
  };
  
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(!e.target.checked)
    setChecked(e.target.checked)
  }
  let test = todos.filter((item) => item.complete === false);
  if(completed){
    test=todos.filter((item) => item.complete);
  }
  return (
    <>
    <Box 
    sx={{
      display:"flex",
      alignItems: 'center'
    }}>
        <Typography color="secondary">Completed</Typography>
    <Switch
  checked={completed}
  color="secondary"
  onChange={()=> setCompleted(!completed)}
  inputProps={{ 'aria-label': 'controlled' }}
/>
    </Box>
    <List 
    sx={{ 
    width: '100%',
    maxWidth: 500, 
    bgcolor: 'background.paper', 
    height:300 ,
    overflow:"scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar":{
        display: "none",
    } 
    }}>

{test.length!=0 ? test.map((item, index)=>{
  const {id, name, complete} = item
  return(
           <ListItem 
           key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon 
                onClick ={() => {dispatch({type : Actions.DEL_TODO, payload: {id}});}}
                />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={complete}
                  tabIndex={-1}
                  disabled={complete}
                  disableRipple
                  onChange={
                  (e)=>{
                  setTimeout(handleCheck(e),dispatch({type : Actions.DONE_TODO, payload: {id}}), 1000);
                  }
                  }
                
                />
              </ListItemIcon>
              <ListItemText 
              primary={name}
              />
            </ListItemButton>
          </ListItem>
  );
}): (
<Box
sx={{ 
    width: '100%',
    maxWidth: 500, 
    bgcolor: 'background.paper', 
    height:300 ,
    overflow:"scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar":{
        display: "none",
    } 
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    }}
>
<Typography 
variant="h5" 
color="gray" 
component="h2">
{completed ? "No todo completed" : "No todos yet"}
</Typography>
</Box>)
}
    </List>
    </>
  );
}
