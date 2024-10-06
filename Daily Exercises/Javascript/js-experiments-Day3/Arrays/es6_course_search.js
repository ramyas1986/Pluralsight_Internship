//Array of Courses
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: 100.00,
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: 350.00,
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: 50.00,
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: 50.00,
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: 50.00,
    }
];

console.log ("-------------------------------------------------------------------");
// Using Array Functions
//Calling the function - When does the PROG200 course start?
let courseId = "PROG200";
let selectedCourse = courses.find(course => course.CourseId == courseId);
console.log (`Start Date of the Course [ID: ${courseId}] ` + selectedCourse.StartDate);
console.log ("-------------------------------------------------------------------");

//Calling the function - What is the title of the PROJ500 course?
courseId = "PROJ500";
selectedCourse = courses.find(course => course.CourseId == courseId);
console.log (`Title of the Course [ID: ${courseId}] ` + selectedCourse.Title);
console.log ("-------------------------------------------------------------------");

//Calling the function - What are the titles of the courses that cost $50 or less?
fee = 50.00;
let selectedCourses = courses.filter(course => {return course.Fee <= fee});
console.log (`Courses less than ${fee} are listed below,`);
len = selectedCourses.length;
for(let i=0; i<len; i++) {
    console.log(selectedCourses[i].Title);
}
console.log ("-------------------------------------------------------------------");

//Calling the function - What  classes meet in "Classroom 1"?
location = "Classroom 1";
selectedCourses = courses.filter(course => {return course.Location === location});
console.log (`Course conducted at ${location} are listed below,`);
len = selectedCourses.length;
for(let i=0; i<len; i++) {
    console.log(selectedCourses[i].Title);
}
console.log ("-------------------------------------------------------------------");


/*// invoking the function to search for courseId
function findCourseStartDate (courseId) {
    let numberOfCourses = courses.length;
    for (let i = 0; i < numberOfCourses; i++) {
        if (courses[i].CourseId === courseId) {
            return courses[i].StartDate;
        }
    }
    return -1;
}

// invoking the function to search for Title
function findCourseTitle(courseId) {
    let numberOfCourses = courses.length;
    for (let i = 0; i < numberOfCourses; i++) {
        if (courses[i].CourseId === courseId) {
            return courses[i].Title;
        }
    }
    return -1;
}

// invoking the function to search for courses that cost $50 or less
function filterCoursesLessThanFee (fee) {
    let arrTitle = [];
    let numberOfCourses = courses.length;
    for (let i = 0; i < numberOfCourses; i++) {
        if (courses[i].Fee <= fee) {
            arrTitle.push (courses[i].Title);
        }
    }
    
    return arrTitle;
}

// invoking the function to search for courses that meet at Classroom1
function filterCoursesByLocation (classroom) {
    let arrTitle = [];
    let numberOfCourses = courses.length;
    for (let i = 0; i < numberOfCourses; i++) {
        if (courses[i].Location === classroom) {
            arrTitle.push (courses[i].Title);
        }
    }
    return arrTitle;
}

//Calling the function - When does the PROG200 course start?
courseId = "PROG200";
console.log (`Start Date of the Course [ID: ${courseId}] ` + findCourseStartDate (courseId));

//Calling the function - What is the title of the PROJ500 course?
courseId = "PROJ500";
console.log (`Title of the Course [ID: ${courseId}] ` + findCourseTitle (courseId));

//Calling the function - What are the titles of the courses that cost $50 or less?
fee = 50.00;
console.log (`Course less than ${fee} are ` + filterCoursesLessThanFee (fee));

//Calling the function - What  classes meet in "Classroom 1"?
location = "Classroom 1";
console.log (`Course conducted at location ${location} are ` + filterCoursesByLocation (location));*/