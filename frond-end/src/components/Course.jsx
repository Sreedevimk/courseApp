import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const course = () => {
  
    const [course,setCourse]=useState({
      CourseName:'',
      CourseId:'',
      CourseCategorry:'',
      CourseDescription:'',
      CourseFee:''
    })
    
  const fetchValue=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value})
  }
  // const sendData=()=>{
    // console.log(course)
  // }
const location=useLocation()
const navigate=useNavigate()
let sendData=()=>{
  if (location.state!=null) {
    axios.put('http://localhost:4000/course/edit/'+location.state.course._id,course).then((res)=>{
      alert('data updated');
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
   }
   else{
    axios.post('http://localhost:4000/course/addCourse',course).then((res)=>{
      navigate('/')
   }).catch((error)=>{
    console.log(error)
   })
   }
}
useEffect(()=>{
  if(location.state!=null){
    setCourse({...course,
      CourseName:location.state.course.CourseName,
      CourseId:location.state.course.CourseId,
      CourseCategorry:location.state.course.CourseCategorry,
      CourseDescription:location.state.course.CourseDescription,
      CourseFee:location.state.course.CourseFee,
    })
  }
},[])


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
         value={course.CourseName}
         onChange={fetchValue} /><br />
  
        <TextField id="filled-basic" 
         label="CourseId" 
         variant="outlined" 
         name='CourseId'
        value={course.CourseId}
         onChange={fetchValue}/><br />
  
        <TextField id="standard-basic"
          label="CourseCategorry" 
          variant="outlined" 
          name='CourseCategorry' 
          value={course.CourseCategorry}
          onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic"
         label="CourseDescription" variant="outlined"  
         name='CourseDescription'
         value={course.CourseDescription}
         onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic" 
         label="CourseFee"
         variant="outlined" 
         name='CourseFee'
         value={course.CourseFee} 
         onChange={fetchValue}  /><br />
  
        <Button variant="contained" onClick={sendData}>Submit</Button>
        
     
      </Box>
      </div>
    )
  }
  
  export default course