/**
 * Created by kong90 on 16-5-28.
 */
$(function () {

    var count_words,
        count_words_items;

    // 将名字渲染到浏览器上
    var drawName = function (start, end) {
        // 计算时间
        console.time("addString");
        html += '<tr><td>' + data[i] + '</td><td>' + data[i + 1] + '</td><td>' + data[i + 2] + '</td><td>' + data[i + 3] + '</td><td>' + data[i + 4] + '</td></tr>';
        console.timeEnd("addString");
        $('#table tbody').append(html);
    };

    // 柱状图, 画出名字字数不同个数
    var drawCountWords = function (items, data) {

        var min = d3.min(data),
            max = d3.max(data);

        var linear = d3.scale.linear()  // 线性比例尺
            .domain([min, max])
            .range([1, 900]);

        var axis = d3.svg.axis()      // 坐标轴
            .scale(linear)      //指定比例尺
            .orient("bottom")   //指定刻度的方向
            .ticks(7);          //指定刻度的数量

        function render(data) { // <- B
            var width = 900;  //画布的宽度
            var height = 300;   //画布的高度

            var svg = d3.select("body")     //选择文档中的body元素
                .append("svg")          //添加一个svg元素
                .attr("width", width)       //设定宽度
                .attr("height", height);    //设定高度

            var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)

            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", 20)
                .attr("y", function (d, i) {
                    return i * rectHeight;
                })
                .attr("width", function (d) {
                    return linear(d);
                })
                .attr("height", rectHeight - 2)
                .attr("fill", "steelblue");

            svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(20,130)")
                .call(axis);
        }

        render(data);
    };

    //$.ajax({
    //    type: 'GET',
    //    url: '/data',
    //    data: {'_t': Date.now()},
    //    dateType: 'json',
    //    success: function (data) {
    //        console.log(data);
    //    }
    //});
    count_words = $('#count-words').data('count-words');
    count_words_items = ["一字名", "两字名", "三字名", "四字名"];
    drawCountWords(count_words_items, count_words);


});