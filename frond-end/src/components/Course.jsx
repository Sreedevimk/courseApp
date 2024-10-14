import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Course = () => {
  
    const [course,setCourse]=useState({
      CourseName:'',
      CourseId:'',
      CourseCategory:'',
      CourseDescription:'',
      CourseFee:''
    })
    
  const fetchValue=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value})
  }
  const sendData=()=>{
    console.log(course)
  }
    return (<div>
      <h2>Add Course</h2> 
      <Box
      
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
      {/* <h2>Add Movie</h2>  */}
        <TextField id="outlined-basic"
         label="CourseName" 
         variant="outlined" 
         name='CourseName'
         onChange={fetchValue} /><br />
  
        <TextField id="filled-basic" 
         label="CourseId" 
         variant="outlined" 
         name='CourseId'
         onChange={fetchValue}/><br />
  
        <TextField id="standard-basic"
          label="CourseCategory" 
          variant="outlined" 
          name='CourseCategory' 
          onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic"
         label="CourseDescription" variant="outlined"  
         name='CourseDescription'
         onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic" 
         label="CourseFee"
         variant="outlined" 
         name='CourseFee'  
         onChange={fetchValue}  /><br />
  
        <Button variant="contained" onClick={sendData}>Submit</Button>
        
     
      </Box>
      </div>
    )
  }
  
  export default Course