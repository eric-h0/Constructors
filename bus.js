var Bus = function(studentsOnTheBus, driverName, color, gas, studentEntersBus, busChatter){
  this.studentsOnTheBus = [];
  this.driverName = "";
  this.color = "";
  this.gas = 0;
  this.studentsOnTheBus = function(){
    //Think about this.
  }
  this.busChatter = function(){
    console.log(Student.catchPhrase);
  }
}

module.exports = Bus;