import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar> 
      <Toolbar style={{backgroundColor:'#7E60BF'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CourseApp
        </Typography>
        <Link to={'/'}><Button color="#C75B7A">Home</Button></Link>
        <Link to={'/add'}><Button color="#C75B7A">Course</Button></Link>
        
      </Toolbar>
    </AppBar>
    <h2 style={{fontSize:'250%' ,color:'#624E88'}}>Unlock Your Future: Learn Anytime, Anywhere!</h2>
  </Box>

  )
}
export default Navbar