let dis = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons");
let del = document.querySelector(".del");
let cut = document.querySelector(".cut");
let eql = document.querySelector(".equal");
let button = document.querySelectorAll(".button");
button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    dis.value += btn.innerText;
  });
});

del.addEventListener("click", function () {
  dis.value = "";
});

cut.addEventListener("click", function () {
  dis.value = dis.value.slice(0, -1);
});

eql.addEventListener("click", function () {
    let exp = dis.value;
    if ( exp.includes("%")) {
        exp = exp.replace("%","/100");
    }
  dis.value = eval(exp);
});
