const express = require('express')
const router = express.Router()
const { createTodoItem, getTodoList, getCompletedTodoList,
    updateTodoItem, updateTodoStatus, deleteTodoItem
} = require('../controllers/todoController')


// POST:  /api/todo/createTodoItem  - to create a todo item.
// GET:   /api/todo/getTodoList -to fetch the pending todo list
// GET:   /api/todo/getCompletedTodoList - to fetch the completed todo list
// PUT:   /api/todo/updateTodoItem -  to update a pending todo item
// PUT:   /api/todo/updateTodoStatus - to update the pending todo item to completed.
// DELETE:/api/todo/deleteTodoItem - to delete a pending todo item

router.post('/addTodoItem', createTodoItem)
router.get('/getTodoList', getTodoList)
router.get('/getCompletedTodoList', getCompletedTodoList)
router.put('/updateTodoItem', updateTodoItem)
router.put('/updateTodoStatus', updateTodoItem)
router.delete('/deleteTodoItem', deleteTodoItem)

module.exports = router