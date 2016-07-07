module.exports = function(grunt) {
    // 自动加载 grunt 任务
    require('load-grunt-tasks')(grunt);

    // 统计 grunt 任务耗时
    

    // 配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                expand: true,
                flatten: true,
                cwd: 'sass',
                src: ['**/*.scss'],
                dest: 'css/',
                ext: '.css',
                "sourcemap=none": ''
            }
            
        },
		cssmin: {
            dist: {
                expand: true,
                cwd: 'css/',
                src: ['**/*.css'],
                dest: '_dist/css/'
            }
        },
		uglify: {
			my_target: {
			  files: {
				'_dist/js/moin.min.js': ['js/moin.js']
			  }
			}
		  },
        watch:{
        	css:{
        		files:[
        		   'sass/**/*.scss'
        		],
        		tasks: ['sass','cssmin','uglify']
        	}
        }
    });
   
    grunt.registerTask('default', ['sass','cssmin','uglify','watch']);
    
    require('time-grunt')(grunt);
};
