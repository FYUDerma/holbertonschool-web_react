interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'California'
}

const studentslist: Array<Student> = [student1, student2];