import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Student() {

    const[name, setName] = useState('');
    const[address, setAddress] = useState('');

    const handleClick = (e) => {
      e.preventDefault();
      const student = {name, address};
      fetch("http://localhost:8080/student/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)  
      }).then(() => {
        console.log("New student")
      })
    }

  return (
    <Box
      component="form"
      sx={{
          '& > :not(style)': { m: 2 },
        }}
        noValidate
        autoComplete="off"
    >
      <h1>Add Student:</h1>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" 
        value={name} onChange={(e)=>setName(e.target.value)} 
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" 
        value={address} onChange={(e)=>setAddress(e.target.value)} 
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
}
