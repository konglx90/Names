var assert = require('assert');
var name = require('../namesdict');
var sort = require('./sort');

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
    },

    // 将姓的数目统计出来
    handle_family_name: function(arr) {
        var family_count = {};
        for(var i= 0, _len=arr.length; i<_len; i++){
            if (family_count[arr[i][0]]){
                family_count[arr[i][0]] += 1;
            }else{
                family_count[arr[i][0]] = 1;
            }
        }
        return family_count;
    },

    // 使用大根堆排序, 姓
    count_the_maximum_five: function (arr) {

    },
    // 计算名字
    count_the_maximum_five_name: function() {

    }
};

var a = Count;
var l = [];
var x = a.handle_family_name(name);
for (var i in x){
    if (x.hasOwnProperty(i)) {
        l.push(x);
    }
}
sort(l, 5);
module.exports = Count;