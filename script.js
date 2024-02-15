let div = document.getElementById("main");

div.addEventListener("mousemove", function (event) {
  let x = event.offsetX;
  let opacity = x / div.clientWidth;
  let y = event.offsetY;
  let hue = y / div.clientHeight;
  div.style.backgroundColor = `hsla(${hue * 360}, 100%, 50%, ${opacity})`;
});
