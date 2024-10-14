import React, { useEffect, useState } from 'react'
import {Button,Card,CardActions,CardContent,CardMedia,Grid2,Typography} from '@mui/material'
import axios from 'axios'
//  const [rows,setRows]=useState([])
//  useEffect(()=>{
//   axios.get('http://localhost:4000/course/').then((res)=>{
//     setRows(res.data)
//  })
// },[])

// const rows=[{
  // const [rows, setRows] = useEffect([
      
//         CourseName:"Fullstack Developement in MERN",
//         image:"https://www.webskittersacademy.in/wp-content/uploads/2022/12/MERN-Stack-Full-Course-1024x499.jpg",
//         CourseId:1034,
//         CourseCategorry:"IRP",
//          CourseDescription:"MERN Stack is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js",
//          CourseFee:20000
//     },
//     {
//       CourseName:"Data Analytics",
//         image:"https://tse4.mm.bing.net/th?id=OIP.W2A6G1bbbkHFXFIs7ox09wAAAA&pid=Api&P=0&h=180",
//         CourseId:101,
//         CourseCategorry:"SMP",
//         CourseDescription:"This course presents you with a gentle introduction to Data Analysis, the role of a Data Analyst, and the tools used in this job. ",
//         CourseFee:20000
//     },
//     {
//       CourseName:"Cyber Security",
//         image:"https://tse1.mm.bing.net/th?id=OIP.0OuoeBPak3df_cg6_C8AkQHaD4&pid=Api&P=0&h=180",
//         CourseId:1034,
//         CourseCategorry:"Upskilling",
//          CourseDescription:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or disrupting normal business processes.",
//         CourseFee:20000
//     }
// ]
    

    
    const Home = () => {

      const [rows,setRows]=useState([])
 useEffect(()=>{
  axios.get('http://localhost:4000/course/').then((res)=>{
    setRows(res.data)

    
 })

 
 },[])
  const deleteCourse=(p)=>{
     axios.delete('http://localhost:4000/course/delete/'+p).then((res)=>{
      alert('deleted');
      window.location.reload();
    })
 }
      return (
        
        <Grid2 container spacing={4}>
          {/* <h2>Unlock Your Future: Learn Anytime, Anywhere!</h2> */}
        {rows.map((row) => (
          <Grid2 rows xs={12} sm={6} md={4} key={row.CourseName}>
            <Card sx={{display:'flex',flexDirection:'column',height:'100%',width:400,marginTop:'6%', borderRadius:1, boxShadow:'0 0 10px rgba(0,0,0,0,0.2)','&:hover':{boxShadow:'0 0 10px rgba(0,0,0,0.5'}}}>
              <CardMedia 
                 image={row.CourseImage}
                 alt={row.CourseName}
                sx={{height:250}}
                // image={row.image}  {/* External image URL */}
               
              />
              <CardContent sx={{flex:'10 auto'}}>
                <Typography gutterBottom variant="h5" component="div">
                  {row.CourseName}
                </Typography>
                 <Typography variant="body2" color="text.secondary">
                  <b>Course Id: </b>{row.CourseId} 
                   </Typography> 
                  <Typography  variant="body2" color="text.secondary">
                  <b>Course categorry: </b>      {row.CourseCategorry}
                  
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.CourseDescription}
                  
                </Typography> 
                 <Typography variant="body2" color="text.secondary">
                    <b>Course Fee: </b> {row.CourseFee} 
                 </Typography> 
                
                  <CardActions>
                 <Button  variant="outlined" color="success">
                 Update </Button> 
                 <Button  onClick={()=>{deleteCourse(row._id)}} variant="outlined" color="error" >
                 delete </Button>
                 </CardActions>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

  )

}

export default Home