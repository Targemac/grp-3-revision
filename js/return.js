function getResult(x, y) {
  if (x > y) {
    return x - y;
  } else if (y > x) {
    return y - x;
  }
}

console.log(getResult(5, 3));
