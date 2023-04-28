function show(x) {
  let output = document.getElementById("output");
  let result = (output.innerHTML = x);
  return result;
}

// create a new objet
const user = {
  // properties
  id: 25,
  name: "Stella",
  age: 22,
  hobbies: ["dancing", "eating", "violence"],
  college: {
    name: "Girls memorial down town",
    country: "ghana",
    phone: "1246879856",
  },
  //   methods
  greet: function (x) {
    return `Good morning ${x}`;
  },
};

let username = user.name;
let greetMe = user.greet("Maria");


show(username);
show(greetMe);
