const express = require('express')
const router = express.Router()
const { createTodoItem, getTodoList,
    updateTodoItem, deleteTodoItem
} = require('../controllers/todoController')


// POST:  /api/todo/createTodoItem  - to create a todo item.
// GET:   /api/todo/getTodoList -to fetch the pending todo list
// PUT:   /api/todo/updateTodoItem -  to update a pending todo item
// DELETE:/api/todo/deleteTodoItem - to delete a pending todo item

router.post('/addTodoItem', createTodoItem)
router.get('/getTodoList', getTodoList)
router.put('/updateTodoItem', updateTodoItem)
router.delete('/deleteTodoItem', deleteTodoItem)

module.exports = router