// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "han",
//     age: 28,
//     hobbies: ["Game", "Cooking"],
//     role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: "han",
    age: 28,
    hobbies: ["Game", "Cooking"],
    role: Role.ADMIN,
};

let favoriteActicities: string[];
favoriteActicities = ["Game"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("is admin");
}
