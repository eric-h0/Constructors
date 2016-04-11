var prompt = require('prompt');
var colors = require('colors');
var Student = require('./student.js');

prompt.start();
prompt.get(['Name', 'Gender', 'Grade', 'GPA', 'Detentions', 'sleepingInClass', 'catchPhrase'],function(err,result){
  var student = new Student(result.Name, result.Gender, result.Grade, result.GPA, result.Detentions, result.sleepingInClass, result.catchPhrase);
  student.canStudentHaveFun();
});

module.exports = Student;
