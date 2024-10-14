const mongoose=require('mongoose')
const courseSchema=mongoose.Schema({
    CourseId:String,
    CourseName:String,
    CourseImage:String,
    CourseCategorry:String,
    CourseDescription:String,
    CourseFee:Number
})


const courseData=mongoose.model('course',courseSchema);
module.exports=courseData;
