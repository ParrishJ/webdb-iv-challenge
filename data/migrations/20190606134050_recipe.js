
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipe', function (tbl) {
        tbl
            .increments()

        tbl
            .string('recipe_Name', 128)
            .notNullable();

        tbl
            .string('instructions', 5000)
            .notNullable()

        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dish')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipe');
};
