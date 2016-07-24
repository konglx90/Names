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
            count[len - 1] = count[len - 1] === undefined ? 1 : count[len - 1] + 1;
        }
        return count;
    },

    // 将姓的数目统计出来
    handle_family_name: function (arr) {
        var family_count = {};
        for (var i = 0, _len = arr.length; i < _len; i++) {
            if (family_count[arr[i][0]]) {
                family_count[arr[i][0]] += 1;
            } else {
                family_count[arr[i][0]] = 1;
            }
        }
        return family_count;
    },

    // 使用大根堆排序, 姓
    count_the_maximum_five: function (arr) {
        var that = this;

        var ans = [];
        var all_counts = that.handle_family_name(arr);
        var counts_arr = [];
        var arr_len = arr.length;
        for (var i in all_counts) {
            if (all_counts.hasOwnProperty(i)) {
                counts_arr.push(all_counts[i]);
            }
        }
        sort(counts_arr, 5);
        var five_family_arr = counts_arr.slice(counts_arr.length - 6, counts_arr.length - 1);
        for (var _i = 0, _l = five_family_arr.length; _i < _l; _i++) {
            for (var j in all_counts) {
                if (all_counts.hasOwnProperty(j)) {
                    if (all_counts[j] === five_family_arr[_i]) {
                        ans.push({'name': j, 'value': all_counts[j]});
                        arr_len = arr_len - all_counts[j];
                        //console.log(j, all_counts[j], five_family_arr[_i]);
                    }
                }
            }
        }
        ans.push({'name': '其他', 'value': arr_len});
        return ans;

    },
    // 计算名字
    count_the_maximum_five_name: function () {

    }
};

//var a = Count;
//console.log(a.count_the_maximum_five(name));

module.exports = Count;