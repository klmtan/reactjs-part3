import {homepage, findStudents, findByAge, findStudentPost} from './controller.js';

const router = (app) =>{
    app.get("/",homepage);
    app.get("/find-students",findStudents);
    app.get("/find-by-age",findByAge);
    app.post("/find-student-post",findStudentPost);
}

export default router;