//traditional//
let students = [
    {
        name: "Sami",
        age: 20,
        GPA: 3.25
    },
    {
        name: "Sara",
        age: 21,
        GPA: 4.50
    },
    {
        name: "John",
        age: 22,
        GPA: 4.75
    }
];

function students1(){
    return students.filter(function(x){
        return x.GPA>4
    }).map(function(y){
        return y.name;
    });
}
//arrow function//
const students2 = () => {
    return students.filter((x) => x.GPA>3).map((y)=> y.name);
}
console.log(students2());
console.log(students1());