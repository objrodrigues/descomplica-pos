import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id);
}

function getAllTeachers() {
    return teacherRepository.getAllTeachers();
}

const deleteTeacherById = (id) => {
    return teacherRepository.deleteTeacherById(id);
}

const updateTeacherById = (id, teacherModel) => {
    return teacherRepository.updateTeacherById(id, teacherModel);
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default service;