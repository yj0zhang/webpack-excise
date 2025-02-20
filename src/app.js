import tpl from "./info.tpl";

const oApp = document.querySelector("#app");

const info = tpl({
  name: "z",
  age: 30,
  career: "工程师",
  hobby: "travel",
});

console.log(info);

oApp.innerHTML = info;
