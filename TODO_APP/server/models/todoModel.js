const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter title for todo item'],
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean, //true-active,false-inactive
        default: true
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('todoList', todoSchema)