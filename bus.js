var Bus = function(studentsOnTheBus, driverName, color, gas, studentEntersBus, busChatter) {
    this.studentsOnTheBus = [];
    this.driverName = "";
    this.color = "";
    this.gas = 0;
    this.studentsOnTheBus = function() {
        this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase));
        fs.appendFile("schoolbus.txt", JSON.stringify(this.studentsOnTheBus), function(err) {
            if (err)
                throw err;
        })
    }
    this.busChatter = function() {
        console.log(Student.catchPhrase);
    }
}

module.exports = Bus;
