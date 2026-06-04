class Course {

    constructor(title, instructor, maxStudents) {
        this.title = title
        this.instructor = instructor
        this.maxStudents = maxStudents
        this.enrolledStudents = 0
    }

    getStatus(){
        console.log(`${this.title} - ${this.instructor} - ${this.enrolledStudents} students enrolled`);
        
    }

	enrollStudent(){
        if (this.enrolledStudents < this.maxStudents) {
            this.enrolledStudents++
        }
	}
    
}

const course_1 = new Course("JavaScript Basics", "Dania", 30);
const course_2 = new Course("Python Fundamentals", "Mohammad", 25);

console.log("Before Enrollment");
course_1.getStatus();
course_2.getStatus();

console.log("After Enrollment");

course_1.enrollStudent();
course_1.enrollStudent();
course_1.enrollStudent();

course_2.enrollStudent();
course_1.enrollStudent();

course_2.enrollStudent();

course_1.getStatus();
course_2.getStatus();