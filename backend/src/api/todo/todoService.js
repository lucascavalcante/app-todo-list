const Todo = require('./todo')

Todo. methods(['get', 'post', 'put', 'delete'])
Todo.updatedOptions({ new: true, runValidatadors: true})

module.exports = Todo;