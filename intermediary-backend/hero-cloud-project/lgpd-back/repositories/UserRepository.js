import User from "../models/User.js";

const saveUser = async (UserModel) => {
    const save = await User.create(UserModel);
    return save;
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const deleteUserById = async (id) => {
    return await User.destroy({where: {id: id}});
}

const updateUserById = async (id, UserModel) => {
    try {
        const result = await Teacher.update(TeacherModel, {where: {id: id}});
        if (result[0]===1) {
            return {message: "user update with seccess"};
        } else {
            return { message: "can not find ${id} to update", status: 404};
        }
    } catch (error) {
        console.error();
    }
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById,
}

export default factory;