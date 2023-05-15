import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/ICS",{useNewUrlParser:true, useUnifiedTopology:true});
const Student = mongoose.model('Student',{
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});
const homepage = (req,res) =>{
    res.send("Hello World");
}

const findStudents = async (req,res) => {
    res.send(await Student.find({}));
}

const findByAge = async (req,res) => {
    res.send(await Student.find({age:req.query.age}));
}

const findStudentPost = async (req,res) =>{
    res.send(await Student.find({fname:req.body.fname, lname: req.body.lname}));
}

export {homepage, findStudents, findByAge, findStudentPost};