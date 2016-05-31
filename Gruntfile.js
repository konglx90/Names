// 这是一个完整的配置文件！

module.exports = function (grunt) {
    grunt.initConfig({
        //browserSync: {
        //    bsFiles: {
        //        src : 'name/views/*.jade'
        //    },
        //    options: {
        //        server: {
        //            baseDir: "./"
        //        }
        //    }
        //}
    });

    // 加载NPM任务 
    //grunt.loadNpmTasks('grunt-browser-sync');

    // 定义默认任务
    grunt.registerTask('default', []);
    grunt.registerTask('run', 'dev_run', function(){
        console.log("init");

        grunt.task.run('default');
    });
};