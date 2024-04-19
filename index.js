
let users = [
    {
        name: "Vlad",
        age: 16,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Damir",
        age: 13,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Akbar",
        age: 15,
        isMarried: true,
        country: "Thailand",
    },
    {
        name: "Samir",
        age: 12,
        isMarried: true,
        country: "North Korea",
    },
    {
        name: "Shoxrux",
        age: 18,
        isMarried: false,
        country: "India",
    },
    {
        name: "Farzod",
        age: 20,
        isMarried: true,
        country: "UAE",
    },
]


let max_old = users.reduce((a,b) => {
    if (a.age > b.age) {
       return a
    } else {
        return b
    }
})

let min_old = users.reduce((a,b) => {
    if (a.age < b.age) {
        return a
    } else {
        return b
    }
})

console.log('oldest ',max_old);
console.log('small',min_old);