const tips = document.querySelectorAll("#tip");
const custom = document.querySelector(".tips .inputs .custom");
const label = document.querySelectorAll(".bill label");
const num = document.querySelector("#number");
const bill = document.querySelector("#bill");
const zero = document.querySelector(".zero");
const reset = document.querySelector("button");
const totalAmount = document.querySelector("#total-amount");
const totalPerson = document.querySelector("#total-person");

tips.forEach((el) => {
  el.addEventListener("click", function () {
    if (bill.value > 0 && num.value > 0) {
      let x = parseFloat(el.value) / 100;
      let y = x + 1;

      totalAmount.value = "$" + ((x * bill.value) / num.value).toFixed(2);
      totalPerson.value = "$" + ((y * bill.value) / num.value).toFixed(2);
      reset.style.background = "hsl(172, 67%, 45%)";
    } else {
      totalAmount.value = "$0.00";
      totalPerson.value = "$0.00";
    }
  });
});
custom.addEventListener("keyup", function () {
  custom.style.color = "hsl(191, 86%, 16%)";
  if (bill.value > 0 && num.value > 0) {
    let x = custom.value / 100;
    let y = x + 1;

    totalAmount.value = "$" + ((x * bill.value) / num.value).toFixed(2);
    totalPerson.value = "$" + ((y * bill.value) / num.value).toFixed(2);
    reset.style.background = "hsl(172, 67%, 45%)";
  } else {
    totalAmount.value = "$0.00";
    totalPerson.value = "$0.00";
  }
});

bill.addEventListener("focus", function () {
  label[0].style.border = "2px solid hsl(172, 67%, 45%)";
  bill.style.color = "hsl(191, 86%, 16%)";
});
bill.addEventListener("focusout", function () {
  label[0].style.border = "2px solid hsl(189, 41%, 97%)";
});
num.addEventListener("focus", function () {
  label[1].style.border = "2px solid hsl(172, 67%, 45%)";
});
num.addEventListener("focusout", function () {
  label[1].style.border = "2px solid hsl(189, 41%, 97%)";
});
num.addEventListener("keyup", function () {
  if (num.value == 0) {
    zero.style.display = "block";
    label[1].style.border = "2px solid rgb(247, 100, 100)";
  } else {
    zero.style.display = "none";
    label[1].style.border = "2px solid hsl(172, 67%, 45%)";
  }
});

reset.addEventListener("click", function () {
  reset.style.background = "hsl(188, 82%, 22%)";
  bill.value = null;
  num.value = null;
  custom.value = null;
  totalAmount.value = "$0.00";
  totalPerson.value = "$0.00";
});
