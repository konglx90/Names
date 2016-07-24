# Name 名字大追踪， 练习js/css, 前端画图

2594179 个`人名`， 文件
csv => 26.8MB
json => 43.1MB
为了方便读取， 先将csv转成json, 并只要2/5, 最后19MB， json数据

其实数据读出来就是有`1177943`个名字的数组


- ~~前台解析csv, 缓存， 做成加载小游戏那种(XXX, 加载26.8MB东西实在太费时间了， 弃)~~
- 后台解析csv，通过ajax传到前台

### 技术栈

`node` + `express` + `grunt` + `jade` + `D3.js`

### 项目启动`DEBUG=name ./bin/www`

### 项目记录

1. express 升级4.x

2. 一齐展示2594179个人名用字符串计算时间太长

    [JavaScript 怎样高效拼接字符串？](https://www.zhihu.com/question/19747496)
    
之前用的是字符串拼接的方法， 没改了`除了缓存length, 其他都不需要改, 浏览器会对字符串拼接做性能优化, 除了ie`
    
        for (var i = 0, _l = 1000; i < _l; i=i+5) {
            html += '<tr><td>' + data[i] + '</td><td>' + data[i+1]  + '</td><td>' + data[i+2] + '</td><td>' + data[i+3] + '</td><td>' + data[i+4] + '</td></tr>';
        }
  
2. 效率计算工具`console.time`和`console.timeEnd`
        
        console.time("addString");
        xxx
        console.timeEnd("addString");
        
3. 准备计算

    - 列表  => 一个字、两个字、三个字、四个字
    - 圆饼图/树状图50个字词 => 前五大姓氏及其他
    - 圆饼图/树状图50个字词 => 名里出现最多的5个字， 最多的5个词
    - 待定 => 用结巴分词对名做分词， 分析出现最多的前50个有意义词

4. [SVG与Canvas](http://wiki.jikexueyuan.com/project/d3wiki/makechart.html)

5. 浏览器同步 静态调试 `grunt` + `browserSync`


    browser-sync start --server --files "doc/css/*.css, doc/d3_demo/*.html"