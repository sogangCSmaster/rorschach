const connection = require('../database');
const Promise = require('bluebird');

exports.executeSQL = (sql, replacements) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, replacements, (err, rows, fields) => {
            if(err){
                return reject(err);
            }
            resolve(rows);
        })
    })
}