import express from "express";
import evaluationService from "../services/EvaluationService.js";

let router = express.Router();

router.post("/addEvaluation", async function (req, res) {
    const EvaluationModel = {
        user_id: req.body.user_id,
        course_id: req.body.course_id,
        concept: req.body.concept
    };

    const evaluation = await evaluationService.saveEvaluation(EvaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluation", async function (req, res) {
    const allEvaluations = await evaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/evaluation/:id", async function (req, res) {
    const evaluation = await evaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEvaluation/:id", async function (req, res) {
    const evaluation = await evaluationService.deleteEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.put("/updateEvaluation/:id", async function (req, res) {
    const EvaluationModel = {
        user_id: req.body.user_id,
        course_id: req.body.course_id,
        concept: req.body.concept
    };

    const evaluation = await evaluationService.updateEvaluationById(red.params.id, EvaluationModel);
    return res.status(200).json(evaluation);
});

export default router;