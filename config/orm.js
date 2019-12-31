const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

const orm = {
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb){
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES(${printQuestionMarks(vals.length)})`;
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
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