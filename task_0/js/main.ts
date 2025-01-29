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

const studentsList: Array<Student> = [student1, student2];
const table = document.createElement('table');
const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement('tr');

  const firstName = document.createElement('td');
  firstName.textContent = student.firstName;
  row.appendChild(firstName);

  const location = document.createElement('td');
  location.textContent = student.location;
  row.appendChild(location);

  table.appendChild(row);
});

document.body.appendChild(table);