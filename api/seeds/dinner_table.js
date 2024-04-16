/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dinner_table').del()
  await knex('dinner_table').insert([
    {id: 1, cloth: 'red', size: 'small', material: 'oak', price: '50'},
    {id: 2, cloth: 'blue', size: 'medium', material: 'pine', price: '100'},
    {id: 3, cloth: 'yellow', size: 'large', material: 'spruce', price: '150'}
  ]);
};
