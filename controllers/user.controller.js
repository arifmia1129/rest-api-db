const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model")


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