import express from "express";
import courseService from "../services/CourseService.js";

let router = express.Router();

router.post("/addCourse", async function (req, res) {
    const CourseModel = {
        name: req.body.name,
    };

    const course = await courseService.saveEvaluation(CourseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourse", async function (req, res) {
    const allCourses = await courseService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/course/:id", async function (req, res) {
    const course = await courseService.getCourseById(req.params.id);
    return res.status(200).json(course);
});

router.delete("/deleteCourse/:id", async function (req, res) {
    const course = await courseService.deleteCourseById(req.params.id);
    return res.status(200).json(course);
});

router.put("/updateCourse/:id", async function (req, res) {
    const CourseModel = {
        name: req.body.name,
    };

    const course = await courseService.updateCoursenById(red.params.id, CourseModel);
    return res.status(200).json(course);
});

export default router;