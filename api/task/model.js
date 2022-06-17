const db = require('../../data/dbConfig')

function find(){
    return db('tasks as t').leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'p.project_name', 'p.project_description')
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