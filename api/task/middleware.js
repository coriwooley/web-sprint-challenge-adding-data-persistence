const db = require('../../data/dbConfig')

const checkTask = (req, res, next) => {
    const {task_description, project_id} = req.body
    if(!task_description || !project_id) {
        res.status(400).json({message: 'Task description and project id required'})
    } else {
        next()
    }
}

const checkProjectId = async (req, res, next) => {
    const {project_id} = req.body
    const project = await db('projects').where('project_id', project_id)
    if(!project){
        res.status(404).json({message: 'Project with given id could not be found'})
    } else {
        next()
    }
}

module.exports = {
    checkTask,
    checkProjectId
}