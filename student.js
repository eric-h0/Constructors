var main = require('./main.js');


var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
  this.name            = name;
  this.gender          = gender;
  this.grade           = grade; 
  this.GPA             = GPA;
  this.detentions      = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase     = catchPhrase;

  this.canStudentHaveFun = function(){
    if ((this.detentions < 10) && (this.GPA > 2)){
      console.log("Student can have fun.")
    }
    else {
      console.log("Student cannot have fun. Do better.")
    }
  };
};

module.exports = Student;