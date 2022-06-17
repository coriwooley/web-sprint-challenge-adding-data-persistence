const checkProject = (req, res, next) => {
    if(!req.body.project_name){
        res.status(400).json({
            message: 'Name of project is required'
        })
    } else {
        next()
    }
}

module.exports = {
    checkProject
}