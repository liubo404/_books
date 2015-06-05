/*!
 * Gruntfile
 * @author Jess Hardy
 */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tag: {
			banner: '/*!\n' +
			' * <%= pkg.name %>\n' +
			' * <%= pkg.title %>\n' +
			' * <%= pkg.url %>\n' +
			' * @author <%= pkg.author %>\n' +
			' * @version <%= pkg.version %>\n' +
			' * Copyright <%= pkg.copyright %>.\n' +
			' */\n'
		},
		less: {
			pre: {
				options: {
					paths: ["../dev/assets/styles/"],
					sourceMap: true,
					sourceMapFilename: "../dev/assets/styles/base.css.map",
					sourceMapBasePath: "../dev/assets/styles",
					sourceMapURL: "file:///Users/corvine/Sites/app/dev/assets/styles/base.css.map",
          banner: '<%= tag.banner %>'
				},
				files: {
					"../dev/assets/base.css": "../dev/assets/styles/style.less"
				}
			}
		},
		cssmin: {
			prod: {
				files: {
					"../prod/assets/base.css": ["../dev/assets/base.css"]
				}
			}
		},
		jshint: {
			dev:{
				src: ['../dev/assets/js/*/**.js'],
				options: {
					force: true,
					reporter: 'jslint',
					reporterOutput: "errors/jslint.xml"
				}
			}
		},
		concat: {
      options: {
        stripBanners: true,
        nonull: true,
				separator: ';',
        banner: '<%= tag.banner %>'
      },
			dev: {
				src: ['../dev/assets/js/lib/app/pikaday.js', '../dev/assets/js/lib/app/moment.js', '../dev/assets/js/lib/app/nav.js'],
				dest: '../dev/assets/app.js'
			}
		},
		copy: {
			prod: {
				cwd: '../dev/',
				src: [ '**/*' ],
				dest: '../prod/',
				expand: true
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			prod: {
				files: {
					'../prod/assets/app.js': ['../dev/assets/app.js']
				}
			}
		},
		imagemin: {
			options: {
				optomizationLevel: 3
			},
			prod: {
				files: [{
					expand: true,
					cwd: '../prod/assets/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '../prod/assets/images/'
				}]
			}
		},
		styleguide: {
			pre: {
				options: {
					framework: {
						name: 'kss'
						},
					name: 'HHSC YTB Theme Guide'
				},
				files: {
					'../dev/docs': '../dev/assets/styles/**/*.less'
				}
			}
		},
		watch: {
			src: {
				files: ['../dev/assets/styles/**/*.less'],
				tasks: ['pre'],
				livereload: 80
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-styleguide');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('pre', ['less']);
	grunt.registerTask('dev', ['concat']);
	grunt.registerTask('style', ['styleguide']);
	grunt.registerTask('prod', ['copy', 'cssmin','jshint', 'uglify', 'imagemin']);
  grunt.registerTask('default', ['watch']);
};
