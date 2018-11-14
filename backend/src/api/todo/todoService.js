const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidatadors: true})

module.exports = Todo;