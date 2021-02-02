const students = [
    {id: 21, name: 'Bashar'},
    {id: 31, name: 'Masum'},
    {id: 41, name: 'Mahbub'},
    {id: 71, name: 'Alamin'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(biggerOne);