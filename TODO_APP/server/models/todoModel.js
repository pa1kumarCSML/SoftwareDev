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
        type: Boolean, //true-pending,false-complete
        default: true
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('todolists', todoSchema)