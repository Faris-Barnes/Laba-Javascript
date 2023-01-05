let containerZad1 = document.querySelector(".zad1_container");

for (let i = 0; i < 8; i++) {
  createElement();
}

function createElement() {
  let div = document.createElement("div");
  div.classList.add("zad1_item");
  div.addEventListener("click", (e) => {
    changeClass(e);
  });
  containerZad1.appendChild(div);
}

function changeClass(e) {
  e.target.classList.toggle("active_zad1");
}

///////////////////////////////////////

let input_zad2 = document.querySelectorAll(".input_zad2");

input_zad2.forEach((elem) => {
  elem.addEventListener("focus", (e) => focusInput(e));
  elem.addEventListener("blur", (e) => blurInput(e));
});

function focusInput(e) {
  e.target.parentNode.classList.add("active_zad2");
}
function blurInput(e) {
  e.target.parentNode.classList.remove("active_zad2");
}

///////////////////////////////////////

let block_zad3 = document.querySelector(".zad3_block");
let x_zad3 = document.querySelector(".zad3_x");
let y_zad3 = document.querySelector(".zad3_y");

console.log(block_zad3);

block_zad3.addEventListener("mousemove", (e) => mouseMoveEvent(e));

function mouseMoveEvent(e) {
  let target = block_zad3.getBoundingClientRect();
  let x = Math.floor(e.clientX - target.left);
  let y = e.clientY - target.top;
  x_zad3.textContent = `x = ${x}`;
  y_zad3.textContent = `y = ${y}`;
}

///////////////////////////////////////
let left_block = document.querySelector(".zad4_block_left");
let right_block = document.querySelector(".zad4_block_right");

let arrLeftItem = ["Андрій", "Роман", "Сергій", "Максим", "Олег", "Юра"];
let arrRightItem = [];
let selectedItem = [];

arrLeftItem.map((name) => {
  createItems(name, left_block);
});

function createItems(title, parent) {
  let div = document.createElement("div");
  let checkbox = document.createElement("input");
  let span = document.createElement("span");

  checkbox.setAttribute("type", "checkbox");
  checkbox.value = title;
  checkbox.addEventListener("click", (e) => changeState(e));
  span.textContent = title;

  div.appendChild(checkbox);
  div.appendChild(span);

  parent.appendChild(div);
}

function changeState(e) {
  if (e.target.checked) {
    selectedItem.push(e.target.value);
  } else if (!e.target.checked) {
    selectedItem = selectedItem.filter((elem) => elem !== e.target.value);
  }
}

function movedItemLeft() {
  let difference = arrRightItem.filter((x) => !selectedItem.includes(x));

  arrRightItem = [...difference];
  arrLeftItem.push(...selectedItem);

  left_block.innerHTML = "";
  right_block.innerHTML = "";

  arrLeftItem.map((name) => {
    createItems(name, left_block);
  });

  arrRightItem.map((name) => {
    createItems(name, right_block);
  });

  selectedItem = [];
}

function movedItemRight() {
  let difference = arrLeftItem.filter((x) => !selectedItem.includes(x));

  arrLeftItem = [...difference];
  arrRightItem.push(...selectedItem);

  left_block.innerHTML = "";
  right_block.innerHTML = "";

  arrLeftItem.map((name) => {
    createItems(name, left_block);
  });

  arrRightItem.map((name) => {
    createItems(name, right_block);
  });

  selectedItem = [];
}

////////////////////////////////////////////////////////////////
let rangeInputWidth = document.querySelector(".range_input_width");
let rangeInputHeight = document.querySelector(".range_input_height");
let rangeInputRotate = document.querySelector(".range_input_rotate");
let blockZad5 = document.querySelector(".block_zad5");

rangeInputWidth.addEventListener("change", () => {
  blockZad5.style.width = `${rangeInputWidth.value}px`;
});

rangeInputHeight.addEventListener("change", () => {
  blockZad5.style.height = `${rangeInputHeight.value}px`;
});

rangeInputRotate.addEventListener("change", () => {
  blockZad5.style.rotate = `${rangeInputRotate.value}deg`;
});

/////////////////////////////////////////////////////////////////
let textArea = document.querySelector("#text_area_zad6");
let block_zad6 = document.querySelector(".block_zad6");
let titleError = document.querySelector(".title_error");

let newArray = [];

textArea.addEventListener("change", changeTextArea);

function changeTextArea() {
  block_zad6.innerHTML = "";
  titleError.innerHTML = "";

  newArray = textArea.value.split("\n");
  newArray.map((elem) => {
    let elemItem = elem.split("");

    let div_parent = document.createElement("div");

    elemItem.map((item) => {
      createItemsZad6(+item, div_parent);
    });
  });
}

function createItemsZad6(number, parent) {
  let div_item = document.createElement("div");

  parent.classList.add("block_parant_zad6");

  div_item.classList.add("block_item");

  if (number === 1) div_item.classList.add("block_item_black");
  else if (number === 0) div_item.classList.add("block_item_white");
  else titleError.textContent = "Введіть числа 1 та 0!";

  parent.appendChild(div_item);
  block_zad6.appendChild(parent);
}
