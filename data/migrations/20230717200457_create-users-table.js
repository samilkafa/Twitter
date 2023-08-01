/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("Users", tbl => {
        tbl.increments('user_id'); //id
        tbl.string('username', 64)
            .notNullable()
            .unique();
        tbl.string('first_name', 128)
            .notNullable();
        tbl.string('last_name', 128)
            .notNullable();
        tbl.string('email')
            .notNullable()
            .unique();
        tbl.string('password')
            .notNullable();
    }).createTable("Tweets", tbl => {
        tbl.increments("tweet_id")
        tbl.string("content", 140).notNullable();
        tbl.integer("user_id")
            .unsigned()
            .references("user_id")
            .inTable("Users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    }).createTable("Comments", tbl => {
        tbl.increments("comment_id");
        tbl.string("text").notNullable();
        tbl.integer("user_id")
            .unsigned()
            .notNullable()
            .references("user_id")
            .inTable("Users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.integer("tweet_id")
            .unsigned()
            .notNullable()
            .references("tweet_id")
            .inTable("Tweets")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    }).createTable("Likes", tbl => {
        tbl.increments("like_id")
        tbl.integer("tweet_id")
            .references("tweet_id")
            .inTable("Tweets")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        tbl.integer("user_id")
            .references("user_id")
            .inTable("Users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Likes")
        .dropTableIfExists("Comments")
        .dropTableIfExists("Tweets")
        .dropTableIfExists('Users');
};
