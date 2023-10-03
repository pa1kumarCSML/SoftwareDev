const asyncHandler = require("express-async-handler")
const todoCollection = require("../models/todoModel")


const createTodoItem = asyncHandler(async (req, res) => {
    const todoItem = await todoCollection.create(req.body);
    if (!todoItem) {
        res.status(400)
        throw new Error("Todo item not created")
    }
    res.status(200).json(todoItem)
})

const getTodoList = asyncHandler(async (req, res) => {
    const todoList = await todoCollection.find();
    if (todoList) {
        res.status(200).json(todoList)
    }
})


const updateTodoItem = asyncHandler(async (req, res) => {
    const todoItem = await todoCollection.findById(req.params.id)

    if (!todoItem) {
        res.status(400)
        throw new Error("Todo item not found")
    }
    const updatedTodoItem = await todoCollection.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedTodoItem)
})



const deleteTodoItem = asyncHandler(async (req, res) => {
    const todoItem = await todoCollection.findById(req.params.id)
    if (!todoItem) {
        res.status(400)
        throw new Error("Todo item not found")
    }
    await todoCollection.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    createTodoItem, getTodoList,
    updateTodoItem, deleteTodoItem
}