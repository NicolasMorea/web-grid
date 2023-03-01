// Nicolas MOREAU

document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();
  document.getElementById("btn-add-line").addEventListener('click', () => AddLine())
  AddEventLisneteners();

  squareNumber = 30
  originalSquare = 30
  blueSquare = 0
  clickedSquare = 0

  
  // Hey! Pssst! In here ...
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}
function AddEventLisneteners() {
  const grid = document.getElementById("grid");
  var boxes = grid.childNodes;
  for(const item of boxes){
    item.addEventListener('click', () => ChangeColor(item, getRandomColor()));
    item.addEventListener("mouseover", () => ChangeColor(item, "blue"));
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function ChangeColor(item, color) {
  if(color == "blue"){
    if(item.style.backgroundColor != "blue"){
      blueSquare +=1
      originalSquare -=1
    }
  }
  else{
    if(item.style.backgroundColor == "blue"){
      clickedSquare +=1
      blueSquare -= 1
    }
    else if(item.style.backgroundColor == "lightcoral"){
      clickedSquare +=1
      originalSquare -= 1
    }
  }
  Actualize();
  item.style.backgroundColor = color;
  if(!(color == "blue" && item.style.backgroundColor != "lightcoral")){
  }
}
function Actualize(){
  document.getElementById("totalSquareNumber").innerHTML = "Total Squares = " + squareNumber.toString();
  document.getElementById("originalSquareNumber").innerHTML = "Original Squares = " + originalSquare.toString();
  document.getElementById("blueSquareNumber").innerHTML = "Blue Squares = " + blueSquare.toString();
  document.getElementById("clickedSquareNumber").innerHTML = "Clicked Squares = " + clickedSquare.toString();
}
function AddLine() {
  console.log("adding a line");
  const grid = document.getElementById("grid");
  for (let step = 0; step < 10; step++) {
    box = document.createElement("div");
    grid.appendChild(box);
  }
  AddEventLisneteners();
  squareNumber += 10;
  Actualize();

}

