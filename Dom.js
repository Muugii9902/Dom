console.log("working");

document.getElementById("text").style.color = "green";
document.getElementById("text").style.fontSize = "50px";
document.getElementById("text").style.backgroundColor = "yellow";
document.getElementById("text").textContent = "pinecone llc";
document.getElementById("text").innerText = "<h1>pinecone Company</h1>";
// document.getElementById("text").innerHTML = "pinecone llc";
const myelement = document.createElement("h1");
myelement.textContent = "Hello World";
document.getElementById("test").appendChild(myelement);

console.log("Working");

// const textEl = document.getElementById("text");

// const myElement = document.createElement("h1");

// myElement.textContent = "Pinecone LLC";

// document.getElementById("test").appendChild(myElement);

// console.log(myElement);

// const els = document.getElementsByClassName("demo");

// console.log("EL", els[0].children);

// function handleClick() {
//   console.log("Button clicked");

//   textEl.style.color = "red";

//   textEl.style.fontSize = "40px";

//   textEl.style.backgroundColor = "yellow";

//   textEl.textContent = "Pinecone LLC";

//   textEl.innerText = "<h1>Pinecone Company</h1>";

//   textEl.innerHTML = "<h1>Pinecone Company</h1>";
// }

// function change() {
//   console.log("Button clicked");
// }

// const btnEl = document.getElementById("btn");

// console.log("=====>", btnEl);

// btnEl.addEventListener("click", change);
const box = document.getElementsByClassName("item")[0];
const btnel = document.getElementsByTagName("button")[0];

// const colors = ["green", "yellow", "red"];
// let i = 0;
function generateColor() {
  const rcolor = Math.floor(Math.random() * 256);
  const gcolor = Math.floor(Math.random() * 256);
  const hcolor = Math.floor(Math.random() * 256);
  // return "rgb(" + rcolor + "," + gcolor + "," + hcolor + ")";
  return `rbg(${rcolor}, ${gcolor}, ${hcolor})`;
}
// const rcolor = Math.floor(Math.random() * 256);
// const gcolor = Math.floor(Math.random() * 256);
// const hcolor = Math.floor(Math.random() * 256);
// "rgb(" + rcolor + "," + gcolor + "," + hcolor + ")";
function changbackroundcolor() {
  console.log("changed");
  box.style.backgroundColor = generateColor();

  //   box.style.backgroundColor = colors[i];
  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}
btnel.addEventListener("click", changbackroundcolor);
