import needle from 'needle';

needle.post("http://localhost:3000/find-student-post",{fname:"Filmer", lname:"Tessier"},(err,res)=>{
    console.log(res.body);
});