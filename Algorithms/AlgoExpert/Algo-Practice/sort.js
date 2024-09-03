// Exercise:
// Try to implement a function that sorts an array of objects based on a specific property. 
//For example, given an array of person objects, sort them by age:

let people = [
    {name: "John", age: 30},
    {name: "Alice", age: 25},
    {name: "Bob", age: 35}
];

// Your function should sort this array by age
// Give it a try! You can use the built-in sort method in JavaScript, which is more efficient than the sorting algorithms we just looked at. Let me know if you need any hints!

function sortByAge(people) {
    const n = people.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; 
        for (let j = i; j < n; j++) {
            if (people[j].age < people[minIndex].age) {
                minIndex = j; 
            }
        }

        if (minIndex !== i) {
            [people[i], people[minIndex]] = [people[minIndex], people[i]];
        }
    }

    return people
}

function sortByAge(people) {
    return people.sort((a, b) => a.age - b.age);
}