'use strict'
/**
 * The function generates the mongo connection string from the JSON file
 * @param {JSON} obj 
 * returns {String} 
 */
exports.connectionString=function(obj){
    return `mongodb+srv://${obj.username}:${obj.password}@${obj.url}/${obj.dbname}`
}
