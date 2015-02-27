module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        clean: ['./builds'],
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "./app/style.css": "./app/styles/main.less"
                }
            },
        },
        watch: {
            css: {
                files: '**/*.less',
                tasks: ['less'],
            },
        },
        nodewebkit: {
            options: {
                platforms: ['osx'],
                macIcns: './app/icon.icns',
                buildDir: './builds', // Where the build version of my node-webkit app is saved
            },
            src: ['./app/**/*'] // Your node-webkit app
        },
    });

    grunt.registerTask('build', 'clean', 'nodewebkit');

    grunt.registerTask('nw', function() {
        var spawn = require('child_process').spawn;
        var ls = spawn('./node_modules/nw/bin/nw', ['app']);

        ls.stdout.on('data', function (data) {
            console.log(''+data);
        });

        ls.stderr.on('data', function (data) {
            console.log(''+data);
        });

        ls.on('close', function (code) {
            console.log('node webkit closed');
        });
    });

    grunt.registerTask('default', ['nw', 'less', 'watch']);
};
