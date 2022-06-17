exports.seed = function(knex){
  return knex('tasks').insert([
    {task_description: 'Buy all cats', task_notes: 'Buy cat food and toys', project_id: 2},
    {task_description: 'Cuddle all cats', project_id: 2},
    {task_description: 'Finish Unit 1 projects', task_notes: 'You can do this', task_completed: 1,  project_id: 3}
  ])
}