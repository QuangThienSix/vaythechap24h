const db = require("../utils/db");

const USER = "user";


module.exports.add = function(entity) {
    return db.add(USER, entity);
};
module.exports.singleByUserName = async function(username) {
    const rows = await db.load(
        `select * from ${USER} where UserName = '${username}'`
    );
    if (rows.length === 0) {
        return null;
    }
    return rows[0];
};
module.exports.singleidgoogle = async function(username) {
    const rows = await db.load(
        `select * from ${USER} where UserName = '${username}'`
    );
    if (rows.length === 0) {
        return 0;
    }
    // console.log(rows[0]);
    return rows[0];
};
module.exports.singleByEmail = async function(email) {
    const rows = await db.load(`select * from ${USER} where Email = '${email}'`);
    if (rows.length === 0) {
        return null;
    }
    return rows[0];
};
module.exports.singleByPatch = async function(entity) {
    const condition = {
        UserID: entity.UserID,
    };
    delete entity.UserID;
    return db.patch(USER, entity, condition);
};

module.exports.getEmail = function(email) {
    return db.load(`select Email from ${USER} where Email = '${email}'`);
};

module.exports.updateToken = function(entity) {
    const condition = {
        Email: entity.Email,
    };
    delete entity.Email;
    return db.patch(USER, entity, condition);
};

module.exports.updatePassword = function(entity) {
    const condition = {
        Email: entity.Email,
    };
    delete entity.Email;
    return db.patch(USER, entity, condition);
};