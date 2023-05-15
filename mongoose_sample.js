import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/ICS", {useNewUrlParser:true, useUnifiedTopology: true});

const Student = mongoose.model('Student',{
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

let data = await Student.find({age:59});
console.log(data);

const newStudent = new Student({
    stdnum: "12345678",
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
});

//await newStudent.save();

data = await Student.find({stdnum:"12345678"});
console.log(data);

// let stud = await Student.findOne({stdnum:"12345678"});
// stud.fname = "Pedro"
// await stud.save();

//await Student.updateOne({stdnum:"12345678"}, {$set: {fname: "Despi"}});
//await Student.updateMany({age:59},{$set: {fname:"John"}});

let status = await Student.deleteOne({stdnum:"12345678"});
console.log(status);
mongoose.disconnect();