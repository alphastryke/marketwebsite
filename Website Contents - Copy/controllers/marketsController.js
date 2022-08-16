"use strict";
const MarketsDB = require('../models/MarketsDB');

var marketsDB = new MarketsDB();
 
function getAllMarkets(request,respond){
    marketsDB.getAllMarkets(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllMarkets}