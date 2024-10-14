const express=require('express')
const router=express.Router()
const courseModel=require('../model/courseData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));


router.get('/',async(req,res)=>{
    try {
        const data=await courseModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('data not found')
    }
})

// router.get('/:id',async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const data=await courseModel.findById()
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(404).send('data not found')
//     }
// })


router.post('/addCourse',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new courseModel(item)  //for save to db
        const savedat=await data1.save(); //for save to db
        res.status(200).send('post succesful')
    } catch (error) {
        res.status(404).send('post unsucesful')
    }
})
//update operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await courseModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('update successful')

    } catch (error) {
        res.status(404).send('update unsucessful')
    }
})
//delete operation
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await courseModel.findByIdAndDelete(id)
        res.status(200).send('delete successful')
    } catch (error) {
        res.status(404).send('delete unsuccessful')
    }
})



module.exports=router;