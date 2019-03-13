"use strict"

filterSelection("all") // Execute the function and show all columns
function filterSelection(f) {
  let x;
  let i;
  x = document.getElementsByClassName("filter");
  if (f === "all") f="";

for(i = 0; i < x.length; i++) {
  RemoveClass(x[i], "show");
  if(x[i].className.indexOf(f) > -1) AddClass(x[i], "show");
}
}


function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let buttons = document.getElementById("theButtons");
let btns = buttons.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


document.getElementById("info").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");}

document.getElementById("info2").onclick = function() {
  document.getElementById("myDropdown2").classList.toggle("show");}

document.getElementById("info3").onclick = function() {
  document.getElementById("myDropdown3").classList.toggle("show");}

document.getElementById("info4").onclick = function() {
    document.getElementById("myDropdown4").classList.toggle("show");}