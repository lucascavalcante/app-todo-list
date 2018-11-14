const express = require('express')
const todoService = require('../api/todo/todoService')
const router = express.Router()

module.exports = (server) => {
    //API routes
    server.use('/api', router)

    // TODO routes
    todoService.register(router, '/todos')
}