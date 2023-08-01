const db = require("../../data/db-config");

const getAll = () => {
    return db("Users")
        .select(
            "user_id",
            "username",
            "first_name",
            "last_name",
            "email"
            ); // [ ... ]

}

const getById = (id) => {
    const insertedId = db("Users")
        .where("user_id", id)
        .select(
            "user_id",
            "username",
            "first_name",
            "last_name",
            "email"
            )
        .first(); // { ... }
}

const getByEmail = (email) => {
    const insertedId = db("Users")
        .where("user_id", id)
        .select(
            "user_id",
            "username",
            "first_name",
            "last_name",
            "email",
            "password"
            )
        .first(); // { ... }
}

const getByFilter = (filter) => {
    return db("Users")
        .where(filter)
        .select(
            "user_id",
            "username",
            "first_name",
            "last_name",
            "email"
            ); // [ ... ]
}

const remove = (id) => {
    return db("Users")
        .where("user_id", id)
        .delete() // count of affected row/s => 1
}

const create = async (payload) => {
    const [ id ] = await db("Users").insert(payload);
    return  getById(id) // id
}

const update = (id, payload) => {
    return db("Users")
    .where("user_id", id)
    .update(payload)
}


module.exports = {
    getAll,
    getById,
    getByEmail,
    getByFilter,
    remove,
    create,
    update
}