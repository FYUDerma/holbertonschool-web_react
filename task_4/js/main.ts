const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

let teacher1 = {
  firstName: 'John',
  lastName: 'Benoit',
  experienceTeachingC: 10,
}

console.log('C++');
cpp.setTeacher = teacher1;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = teacher1;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = teacher1;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());