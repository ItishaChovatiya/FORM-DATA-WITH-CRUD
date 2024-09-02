const User = require("../model/get_user_model");


const user_S = (data) => {
    return User.create(data);
};

const get_S = () => {
    return User.find();
};

const update_S = (id, data) => {
    return User.findByIdAndUpdate(id, data, { new: true });
};

const delete_S = (id) => {
    return User.findByIdAndDelete(id);
};

module.exports = {
    user_S,
    get_S,
    update_S,
    delete_S
};
