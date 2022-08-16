"use strict";

var db = require('../db-connections')
class MarketsDB{
    getAllMarkets(callback){
        var sql = "SELECT * from marketsdb.market";
        db.query(sql,callback)
    }
}

module.exports = MarketsDB;