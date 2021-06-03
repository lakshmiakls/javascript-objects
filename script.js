// JavaScript objects

    // Object
  let staff = {
    name: 'Irfan',
    qualification: 'B.A',
    salary: 25000,
    projects: { maxis: 75000,
                solstin: 30000
    },
    info: function () { 
      let lastname = 'Khan';
      console.log(`${this.name} ${lastname} will join the company in a month`)
    }
  }
   console.log(staff);
   console.log(staff.name)
   
   console.log(staff["qualification"]);
   
   console.log(staff.projects);
   console.log(staff.projects.maxis);
console.log(staff.salary);

    staff.info()
    
    
    
    // constructor
    
    
    function Student(name,age,gender) {
      this.Name = name,
      this.Age = age,
      this.Gender = gender,
      this.About = function () {
        console.log(`${this.Name} is ${this.Age} years old`)
      }
    }
    
    
    const student1 = new Student('Lakshmi',18,'Female')
    const student2 = new Student('Anu',19,'female')
     
     console.log(student1);
     console.log(student2.Age);
     
     student1.About();
     
     
     // comparison of objects & constructor


  let child = { 
      name:'Bala'
}
  //  child.age=1
    
    console.log(child);

    
   
function Man (name) {
    this.name = name
}

let man1 = new Man ('xx');
let man2 = new Man ('yy');

console.log(man1, man2);

man1.age = 22;

//console.log(man1);

man2.name = "Jayesh";

//console.log(man2);

man1.greet = function () {
  return ("hello");
} 

 console.log(man1.greet());
 //console.log(man2.greet());

Man.prototype.gender = "male";

console.log(man1);
console.log(man2.gender);

     
     
  // get & set

    const people = {
    firstName: "Tamil",

    get getName() {
        return this.firstName;
    }
}
console.log(people.firstName);
console.log(people.getName);




    const friend = {
       name: 'varsh',
       age: 19,
       
       get Age() {
         return this.age;
       }
    }
    
    console.log(friend.name);
    console.log(friend.Age);
     // should avoid same words as in objects for get ___() {  
     //  }
    
  
  
  // SET 
 
  
    const public = {
    firstName: "Tamil",

    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(public.firstName);
public.changeName = "Ganesh";
console.log(public.firstName);



 const syllabus = {
      term1: "7 lessons",
      term2: "8 lessons",
      term3: "6 lessons",
      
      set changes(lessons) {
        this.term2 = lessons;
      }
 }
     console.log(syllabus);
     
     console.log(syllabus.term1, syllabus.term2);
     
     
     syllabus.changes = "4 lessons";
     console.log(syllabus.term2);
    
    
    
// DOUBT
const car = {
    company: 'Audi'
}

Object.defineProperty(car, "getCompanyName", {
    get: function () {
        return this.company;
    }
})

Object.defineProperty(car, "changeCompanyName", {
    set: function (value) {
        this.company = value;
    }
})

console.log(car.company);

car.changeCompanyName = "Tesla";

console.log(car.company);