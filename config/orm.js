const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
};

module.exports = orm;