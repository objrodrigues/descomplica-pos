import express from "express";
import teacherService from "../services/TeacherService.js";

let router = express.Router();

router.post("/addTeacher", async function (req, res) {
    const TeacherModel = {
        name: req.body.name,
    }

    const teacher = await teacherService.saveTeacher(TeacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeachers", async function (req, res) {
    const allTeachers = await teacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/teacher/:id", async function (req, res) {
    const teacher = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function (req, res) {
    const teacher = await teacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.put("/updateTeacher/:id", async function (req, res) {
    const TeacherModel = {
        name: req.body.name,
    }

    const teacher = await teacherService.updateTeacherById(red.params.id, TeacherModel);
    return res.status(200).json(teacher);
});

export default router;