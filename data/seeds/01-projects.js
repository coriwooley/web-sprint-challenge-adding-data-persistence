exports.seed = function (knex) {
  return knex('projects').insert([
    {project_name: 'World Domination', project_description: 'Take over the world before extraterrestrial beings do'},
    {project_name: 'Adopt 100 Cats', project_description: 'Adopt 100 cats as emotional support pets'},
    {project_name: 'Pass BloomTech', project_description: 'Become Web Developer so I can afford 100 cats and begin world domination'}
  ])
}