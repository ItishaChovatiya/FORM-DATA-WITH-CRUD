const { user_S, get_S, update_S, delete_S } = require('../services/user_services');

const post_user = async (req, res) => {
    try {
        const data = req.body;
        const new_data = await user_S(data);

        if (!new_data) {
            throw new Error('Try again');
        }
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: new_data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_user = async (req, res) => {
    try {
        const new_datas = await get_S();
        if (!new_datas) {
            throw new Error('Try again');
        }
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: new_datas
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const update_user = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await update_S(id, data);

        if (!result) {
            throw new Error('Cannot update data');
        }
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_user = async (req, res) => {
    try {
        const id = req.params.id;
        const Dresult = await delete_S(id);

        if (!Dresult) {
            throw new Error('Cannot delete data');
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            id: id
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    post_user,
    get_user,
    update_user,
    delete_user
};
