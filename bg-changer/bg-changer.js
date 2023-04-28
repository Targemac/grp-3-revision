const color_box = document.getElementById("color_box");
const color_code_box = document.getElementById("color_code_box");

function bgChanger() {
  // define rgb values
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = `rgb(${red}, ${green}, ${blue})`;

  // inserting background color to color box
  color_box.style.backgroundColor = rgb;

  // inserting background color value to color code box
  color_code_box.innerHTML = rgb;
}
 
setInterval(() => {
  bgChanger();
}, 2000);
