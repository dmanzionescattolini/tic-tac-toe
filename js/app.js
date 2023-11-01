// // // console.log("Hello World!";
// // // window.document;

// // // //DOM
// // // alert("Hello World!";

// // // browser.alert("Hello World!";

// // // window.prompt("Enter your name:";

// // // var name = "John Doe";
// // // console.log(name);
// // // console.error("Please enter your name";

// // // let person = {
// // //   name: "Alex Bowman",
// // //   age: 30,
// // //   email: "envkt@example.com",
// // // };

// // // console.log(person);

// // // console.table(person);

// // // let result = "Donato" / 2;

// // // let num = prompt("Enter a number please";
// // // if (num % 2 === 0) {
// // //   alerts(num + " is even";
// // // } else {
// // //   alert(num + " is odd";
// // // }

// // // for (let i = 0; i < 5; i++) {
// // //   console.log("I like JavaScript";
// // // }
// // let el = document.createElement("div");
// // let ul = document.createElement("ul");
// // for (let i = 0; i < 50; i++) {
// //   if (i % 6 === 0) {
// //     let li = document.createElement("li");
// //     li.innerHTML = "\nfuzzBuzz" + `🎃`;
// //     ul.appendChild(li);
// //   } else if (i % 3 === 0) {
// //     let li = document.createElement("li");
// //     li.innerHTML = "\nfuzz" + "😒";
// //     ul.appendChild(li);
// //   } else if (i % 2 === 0) {
// //     let li = document.createElement("li");
// //     li.innerHTML = "\nbuzz" + "🦐";
// //     ul.appendChild(li);
// //   } else {
// //     let li = document.createElement("li");
// //     li.innerHTML = "" + i + "🌟";
// //     ul.appendChild(li);
// //   }
// // }
// // ul.style.listStyleType = "none";
// // el.appendChild(ul);
// // el.style.width = "500px";
// // el.style.height = "500px";
// // el.style.border = "solid black 1.5px";
// // el.style.fontSize = "30px";
// // el.style.textAlign = "center";
// // el.style.marginInline = "auto";
// // el.style.marginBlock = "auto";
// // document.body.appendChild(el);

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// h1.textContent = "Welcome to Binary";

// div.appendChild(h1);
// let toDo = document.createElement("ol");

// let li1 = document.createElement("li");
// li1.textContent = "Task1";
// let li2 = document.createElement("li");
// li2.textContent = "Task2";

// let li3 = document.createElement("li");
// li3.textContent = "Task3";
// toDo.appendChild(li1);

// toDo.appendChild(li2);

// toDo.appendChild(li3);

// div.appendChild(toDo);

// document.querySelector("body").appendChild(div);

const cells = document.querySelectorAll(".cell");

let currentPlayer = "X";

let gameOver = false;

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

const button = document.querySelector("#reset-btn");

button.addEventListener("click", resetGame);

function handleClick(event) {
  const clickedCell = event.target;

  if (gameOver) {
    return;
  }
  if (clickedCell.textContent !== "") {
    return;
  }
  clickedCell.textContent = currentPlayer;

  if (checkForWinner()) return;
  checkForDraw();
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkForWinner() {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winCombos) {
    const [a, b, c] = combo;
    console.log(cells[a].innerHTML);
    if (
      cells[a].textContent == currentPlayer &&
      cells[b].textContent == currentPlayer &&
      cells[c].textContent == currentPlayer
    ) {
      gameOver = true;
      alert("Winner is " + currentPlayer);
      return true;
    } else {
      console.log(
        cells[a].textContent +
          cells[b].textContent +
          cells[c].textContent +
          "\n" +
          " = " +
          currentPlayer
      );
    }
  }
}

function checkForDraw() {
  for (let cell of cells) {
    if (cell.textContent === "") {
      gameOver = false;
      return;
    }
  }
  gameOver = true;
  alert("Its a draw");
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
  gameOver = false;
}
