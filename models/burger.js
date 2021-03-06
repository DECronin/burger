const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
    },
    updateOne: function(colName, value, condition, cb) {
        orm.updateOne("burgers", colName, value, condition, function(res) {
          cb(res);
        });
    }
};

module.exports = burger;