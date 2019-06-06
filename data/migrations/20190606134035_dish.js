
exports.up = function (knex, Promise) {
    return knex.schema.createTable('dish', function (tbl) {
        tbl.increments();
        tbl.string('dish_Name', 128).notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('dish');
};
