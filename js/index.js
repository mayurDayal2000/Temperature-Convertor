let form = document.querySelector("form");
let box1 = document.querySelector(".box1 span");
let box2 = document.querySelector(".box2 span");
let box3 = document.querySelector(".box3 span");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let temp = form.tempValue.value; // input field value
  let deg = form.degreeValue.value; // select option value

  // declare variables for c, f, k
  let c, f, k;

  switch (deg) {
    case "Cel":
      c = Number(temp);
      k = c + 273;
      f = Math.round(c * (9 / 5) + 32);

      box1.textContent = c;
      box2.textContent = f;
      box3.textContent = k;
      break;

    case "Faren":
      f = Number(temp);
      c = Math.round(((f - 32) * 5) / 9);
      k = c + 273;

      box1.textContent = c;
      box2.textContent = f;
      box3.textContent = k;
      break;

    case "Kelvin":
      k = Number(temp);
      c = k - 273;
      f = Math.round(c * (9 / 5) + 32);

      box1.textContent = c;
      box2.textContent = f;
      box3.textContent = k;
      break;
  }

  //remove data from input field
  form.tempValue.value = "";
});
