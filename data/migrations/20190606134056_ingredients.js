
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', function (tbl) {
        tbl.increments();
        tbl.string('ingredients_Name', 128).notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
