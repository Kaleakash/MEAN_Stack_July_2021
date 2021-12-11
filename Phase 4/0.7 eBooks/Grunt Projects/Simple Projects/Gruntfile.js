module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")
    });

    grunt.registerTask("default","This is default task execute",
    ["firstTask","secondTask","thirdTask","fourthTask"]);
    
    // grunt.registerTask("default","This is default task execute",function(){
    //     console.log("This is default task executed..")
    // });
    // we can create custom task 
    grunt.registerTask("firstTask","This is first task",function(){
        console.log("This is first task executed...");
    })
    grunt.registerTask("secondTask","This is second task",function(){
        console.log("This is Second task executed...");
    })
    grunt.registerTask("thirdTask","This is third task",function(){
        console.log("This is Third task executed...");
    })
    grunt.registerTask("fourthTask","This is fourth task.............",function(){
        console.log("This is Fourth task executed...");
    })
}