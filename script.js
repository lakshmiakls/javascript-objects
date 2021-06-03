let x = 5;

console.log(x);

x = {
    firstName: "jay"
}

console.log(x)

console.log(x.firstName);

function Student (name, gender) {
    this.name = name;
    this.gender = gender;
}


let student1 = new Student ("pavithra", "female")

let student2 = new Student ("jay", "male")

console.log(student1, student2)