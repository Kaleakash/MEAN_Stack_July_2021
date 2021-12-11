module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json")
    })

    grunt.registerTask("cleanTask","This task clean file and folder from dist folder",function(){
        grunt.config("clean",{
            contents:["dist/*"]
        });
        grunt.task.run("clean");
    })

    grunt.registerTask("copyTask","This task is use to copy all file and folder from src folder to dist folder",function(){
        grunt.config("copy",{
            main:{
                expand:true,
                cwd:"src",
                src:"**",
                dest:"dist/"
            }
        });
        grunt.task.run("copy");
    })

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
}