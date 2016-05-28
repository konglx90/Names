/**
 * Created by kong90 on 16-5-28.
 */
$(function () {

    // 将名字渲染到浏览器上
    var drawName = function (start, end) {
        // 计算时间
        console.time("addString");
        html += '<tr><td>' + data[i] + '</td><td>' + data[i + 1] + '</td><td>' + data[i + 2] + '</td><td>' + data[i + 3] + '</td><td>' + data[i + 4] + '</td></tr>';
        console.timeEnd("addString");
        $('#table tbody').append(html);
    };

    $.ajax()

});