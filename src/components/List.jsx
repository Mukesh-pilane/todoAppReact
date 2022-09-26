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

export default function CheckboxList() {
  const [checked, setChecked] = useState(false);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
  };
  
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(!e.target.checked)
    setChecked(e.target.checked)
  }
  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>

          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  tabIndex={-1}
                  disableRipple
                  onChange={(e)=>handleCheck(e)}
                  //inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText 
              primary={`Line item `}
              />
            </ListItemButton>
          </ListItem>
    </List>
  );
}
