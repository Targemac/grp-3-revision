const login_form = document.getElementById("login_form");
const user_data = document.getElementById("user_data");

login_form.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const userData = Object.fromEntries(form);

  console.log("loggin in...");
  console.log(userData);

  user_data.innerHTML = `${userData.email} - ${userData.password} `;
});
