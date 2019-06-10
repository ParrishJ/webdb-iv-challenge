
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipe-ingredients-many', function (tbl) {
        tbl
            .increments()

        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        tbl
            .float('ingredient_quantity')
            .notNullable()

        tbl
            .string('ingredient_Unit', 128)
            .notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredients-many');
};
