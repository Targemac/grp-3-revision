function show(x) {
  let output = document.getElementById("output");
  let result = (output.innerHTML = x);
  return result;
}

// PI
let a = Math.PI;
show(a);

// squre root
let b = Math.sqrt(25);
show(b);

// cube root
let c = Math.cbrt(27);
show(c);

// power
let d = Math.pow(2, 3);
show(d);

// random
let e = Math.random();
let e2 = Math.random() * 100;
let e3 = Math.floor(e2);
show(e3);
