/**
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    jshint: {
    options: {
        jshintrc: ".jshintrc"
      },
      all: ["Gruntfile.js", "src/*.js"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
};
