const connection = require("../config/connection.js");
const orm = {
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    insertOne: function(table, cols, value, cb){
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES("${value.toString()}")`;
        console.log(queryString);
        connection.query(queryString, value, function(err, result) {
            if (err) throw err;    
            cb(result);
        });
    },
    updateOne: function(table, colName, value, condition, cb){
        let queryString = `UPDATE ${table} SET ${colName}=${value} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) throw err;    
          cb(result);
        });
    }
};

module.exports = orm;