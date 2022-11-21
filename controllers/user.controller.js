const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model")


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            message: "Successfully get users",
            users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't get users",
            error: error.message
        })
    }
}


exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ id });

        res.status(200).json({
            success: true,
            message: "Successfully get user",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't get user",
            error: error.message
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ id });

        user.name = req.body.name;
        user.age = Number(req.body.age);

        await user.save();

        res.status(200).json({
            success: true,
            message: "Successfully update user",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't update user",
            error: error.message
        })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.deleteOne({ id });

        res.status(200).json({
            success: true,
            message: "Successfully delete user"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't delete user",
            error: error.message
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })

        await user.save();

        res.status(201).json({
            success: true,
            message: "Successfully create user",
            createUser: user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't create user",
            error: error.message
        })
    }
}