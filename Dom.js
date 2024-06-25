// console.log("working");

// document.getElementById("text").style.color = "green";
// document.getElementById("text").style.fontSize = "50px";
// document.getElementById("text").style.backgroundColor = "yellow";
// document.getElementById("text").textContent = "pinecone llc";
// document.getElementById("text").innerText = "<h1>pinecone Company</h1>";
// // document.getElementById("text").innerHTML = "pinecone llc";
// const myelement = document.createElement("h1");
// myelement.textContent = "Hello World";
// document.getElementById("test").appendChild(myelement);

// console.log("Working");

// // const textEl = document.getElementById("text");

// // const myElement = document.createElement("h1");

// // myElement.textContent = "Pinecone LLC";

// // document.getElementById("test").appendChild(myElement);

// // console.log(myElement);

// // const els = document.getElementsByClassName("demo");

// // console.log("EL", els[0].children);

// // function handleClick() {
// //   console.log("Button clicked");

// //   textEl.style.color = "red";

// //   textEl.style.fontSize = "40px";

// //   textEl.style.backgroundColor = "yellow";

// //   textEl.textContent = "Pinecone LLC";

// //   textEl.innerText = "<h1>Pinecone Company</h1>";

// //   textEl.innerHTML = "<h1>Pinecone Company</h1>";
// // }

// // function change() {
// //   console.log("Button clicked");
// // }

// // const btnEl = document.getElementById("btn");

// // console.log("=====>", btnEl);

// // btnEl.addEventListener("click", change);
// const box1 = document.getElementsByClassName("item1")[1];

// const btn1 = document.getElementsByTagName("button")[0];

// // const colors = ["green", "yellow", "red"];
// // let i = 0;
// // function generateColor() {
// //   const rcolor = Math.floor(Math.random() * 256);
// //   const gcolor = Math.floor(Math.random() * 256);
// //   const hcolor = Math.floor(Math.random() * 256);
// //   // return "rgb(" + rcolor + "," + gcolor + "," + hcolor + ")";
// //   return `rbg(${rcolor}, ${gcolor}, ${hcolor})`;
// // }
function generateColor() {
  const rColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const gColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")"; //
  return `rgb(${rColor},${gColor},${bColor})`;
}
// // const rcolor = Math.floor(Math.random() * 256);
// // const gcolor = Math.floor(Math.random() * 256);
// // const hcolor = Math.floor(Math.random() * 256);
// // "rgb(" + rcolor + "," + gcolor + "," + hcolor + ")";

//   //   box.style.backgroundColor = colors[i];
//   //   i++;
//   //   if (i === colors.length) {
//   //     i = 0;
//   //   }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function test(arr) {
//   const text = document.createElement("h1");
//   for (let i = 1; i < arr.length + 1; i++) {
//     text.textContent = `hello bold ${i}`;
//     document.getElementById(`bold`).appendChild(text);
//   }
//   return arr;
// }

// //////////test(arr);
// const root = document.getElementById("root");
// const btn2 = document.createElement("button");
// btn2.innerText = "start";
// root.appendChild(btn2);
// const box = document.createElement("div");
// root.appendChild(box);
// box.setAttribute("class", "box");
// for (let i = 0; i < 9; i++) {
//   const item1 = document.createElement("div");
//   item1.setAttribute("class", "item1");
//   box.appendChild(item1);
// }
// function changbackroundcolor() {
//   console.log("changed");
//   box.style.backgroundColor = generateColor();
// }

// btn2.addEventListener("click", changbackroundcolor);
//////////////////

const boxEls = document.getElementsByClassName("box");
console.log(boxEls);
const btnEl = document.getElementsByTagName("button")[0];
const addButton = document.getElementById("addButton")[0];

// console.log(btnEl);

function changeBoxColor() {
  for (let i = 0; i < boxEls.length; i++) {
    const color = generateColor();
    boxEls[i].style.backgroundColor = color;
  }
}

function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  return "rgb(" + rColor + "," + gColor + "," + bColor + ")";
}
function addBox() {
  const container = document.getElementsByClassName("container");
  const newDiv = document.createElement("div");
  newDiv.className = "box";
  container[0].appendChild(newDiv);
}
btnEl.addEventListener("click", changeBoxColor);
addButton.addEventListener("click", addBox);

//change box dimension
const changebox = document;
