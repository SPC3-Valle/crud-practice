/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dinner_table', (table) => {
        table.increments('id'),
        table.string('cloth', 50),
        table.string('size', 50),
        table.string('material', 50),
        table.integer('price',20)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dinner_table')
};
