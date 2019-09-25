const orm = require("../config/orm.js");

let burger = {

    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;