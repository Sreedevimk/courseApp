const express=require('express')
const app=new express();
const morgan=require('morgan')
app.use(morgan('dev'))
const cors=require('cors')
app.use(cors())
const courseroutes=require('./routes/courseRoutes')
app.use('/course',courseroutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');



app.listen(PORT,()=>{
    console.log(`server is running on the PORT ${PORT}`)
})