// for-each

let searchQuery = "Kim";

const users = [
  {
    name: "Kim",
    age: 25,
  },
  {
    name: "Peter",
    age: 28,
  },
  {
    name: "Lola",
    age: 22,
  },
];

users.forEach((val, index, arr) => {
  if (val.name === searchQuery) {
    console.log(val);
  }
});
