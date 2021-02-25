const db = require("../utils/db");

const TBL_NEWS = "news";

const TBL_USER = "user";

module.exports = {
    //Load tất cả bài viết do Writer A viết
    loadListPost: function(UserID) {
        return db.load(`SELECT * FROM ${TBL_NEWS} n JOIN ${TBL_USER} u ON n.Author = u.UserID WHERE u.UserID = ${UserID}`);
    },
    addNewPost: function(entity) {
        return db.add(TBL_NEWS, entity);
    },
    loadAuthor: function(UserID) {
        return db.load(`SELECT * FROM ${TBL_USER} WHERE TypeOfUser = 3 and UserID = ${UserID}`);
    },
    Edit_loadAuthor: function(NewsID) {
        return db.load(`SELECT u.UserID, u.Name FROM ${TBL_NEWS} n join ${TBL_USER} u on n.Author = u.UserID WHERE n.NewsID = ${NewsID}`)
    },
    delPost: function(id) {
        const condition = {
            NewsID: id
        }
        return db.del(TBL_NEWS, condition);
    },
    patch: function(entity) {
        const condition = {
            NewsID: entity.NewsID
        }
        delete entity.NewsID;
        return db.patch(TBL_NEWS, entity, condition);
    },
    updateAvatar: function(entity) {
        const condition = {
            NewsID: entity.NewsID
        }
        delete entity.NewsID;
        return db.patch(TBL_NEWS, entity, condition);
    },
}