import User from "./User.js";
import Teacher from "./Teacher.js";
import Course from "./Course.js";
import Evaluation from "./Evaluation.js";

const associations = () => {
    Course.hasMany(Teacher);
    User.hasMany(Evaluation);
    Couse.hasMany(Evaluation);
}

const factory = {
    associations
}