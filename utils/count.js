var assert = require('assert');
var name = require('../namesdict');

var Count = {
    count_words: function (arr) {
        var count = [],         // 第一个代表字数一个的数目
            len;
        for (var i in arr) {

            assert.equal(typeof arr[i], "string");

            len = arr[i].length;
            count[len-1] = count[len-1] === undefined?1:count[len-1] + 1;
        }
        return count;
    }
};

module.exports = Count;