document.querySelector("#firstButton")
  .addEventListener("click", function() {
    document.querySelector('#image').src="/Images/Bulb_On.jpg";
});

document.querySelector("#secondButton")
  .addEventListener("click", function() {
    document.querySelector('#image').src="/Images/Bulb_Off.jpg";
});