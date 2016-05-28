/**
 * Created by kong90 on 16-5-28.
 */

var alreadyToHtmlName = 0,
winH = $(window).height(), //页面可视区域高度
lock = 0;
/**************** 滚动加载模块 ******************/
window.onscroll = function () {
    //监听事件内容

    var pageH = $(document.body).height(); //文档高度
    var scrollT = $(window).scrollTop(); //滚动条top
    var needToGet = (pageH - winH - scrollT) / winH;

    if (needToGet < 0.02 && lock == 0) {
        //异步请求数据,局部刷新dom
        getxxx(alreadyToHtmlName, alreadyToHtmlName + 5);
    }
};

var getxxx = function(){

}