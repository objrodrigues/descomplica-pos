import express from "express";

import userController from "./UserController.js";
import courseController from "./CourseController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";

let router = express.Router();

router.get("/", function(req,res){
    console.log("oi'!");
    res.status(200).json({message: "oi!"});
});

router.use("/", userController);
router.use("/", courseController);
router.use("/", evaluationController);
router.use("/", teacherController);

export default router;