function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

//var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0);
//var course02 = new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456);

//or make an array of objects

var courses = [
    new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0),
    new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456)
];

console.log(course);
console.log(course[1].instructor);
console.log(course[0].updateViews());