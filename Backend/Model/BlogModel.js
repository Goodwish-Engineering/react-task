const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: false
    },
    description: {
        type: String,
        require: true,
        unique: false
    },
    createdBy: {
        type: String,
        require: true,
        unique: false
    },
    createdAt: {
        type: Date,
        require: true,
        unique: false
    }
})

module.exports = mongoose.model("Blog", BlogSchema)