exports.seed = function(knex){
  return knex('resources').insert([
    {resource_name: 'internet', resource_description: 'the World Wide Web'},
    {resource_name: 'instructors', resource_description: 'BloomTech instructors'},
    {resource_name: 'magic'}
  ])
}