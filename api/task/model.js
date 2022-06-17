const db = require('../../data/dbConfig')

function find(){
    return db('tasks')
}

function insert(task){
    return db('tasks').insert(task).then(([id]) => {
        return db('tasks').where('task_id', id).first()
    })
}

module.exports = {
    find,
    insert
}