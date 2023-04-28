let allowedAge = 18;

function checkAge(value) {
  let message;

  if (value < allowedAge) {
    message = "Permission denied!";
  } else if (value >= allowedAge) {
    message = "Permission granted!";
  }

  return message;
}

console.log(checkAge(10));
