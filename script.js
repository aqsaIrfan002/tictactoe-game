const { ipcRenderer } = require("electron");

document.querySelector(".close").addEventListener("click", () => {
  ipcRenderer.send("close-app");
});

document.querySelector(".minimize").addEventListener("click", () => {
    ipcRenderer.send("minimize-app");
});

let turn = 0;

function gameplay(count) {
  let img = document.getElementById(`block${count}`);
  if (turn < 9 && img.innerHTML.trim() === ""){
    if (turn % 2 == 0){
      img.innerHTML = '<img src="images/pretzel.png" width="59" height="59">';
      turn += 1;
    } else if (turn % 2 != 0){
      img.innerHTML = '<img src="images/catpaw.png" width="59" height="59">';
      turn += 1;
    }
  }
  gamewin();
}

function gamewin(){
  let content1 = document.getElementById(`block1`).innerHTML.trim();
  let content2 = document.getElementById(`block2`).innerHTML.trim();
  let content3 = document.getElementById(`block3`).innerHTML.trim();
  let content4 = document.getElementById(`block4`).innerHTML.trim();
  let content5 = document.getElementById(`block5`).innerHTML.trim();
  let content6 = document.getElementById(`block6`).innerHTML.trim();
  let content7 = document.getElementById(`block7`).innerHTML.trim();
  let content8 = document.getElementById(`block8`).innerHTML.trim();
  let content9 = document.getElementById(`block9`).innerHTML.trim();
  if ((content1.includes("images/pretzel.png") && content2.includes("images/pretzel.png") && content3.includes("images/pretzel.png"))
  || (content1.includes("images/pretzel.png") && content5.includes("images/pretzel.png") && content9.includes("images/pretzel.png"))
  || (content3.includes("images/pretzel.png") && content5.includes("images/pretzel.png") && content7.includes("images/pretzel.png"))
  || (content4.includes("images/pretzel.png") && content5.includes("images/pretzel.png") && content6.includes("images/pretzel.png"))
  || (content7.includes("images/pretzel.png") && content8.includes("images/pretzel.png") && content9.includes("images/pretzel.png"))
  || (content1.includes("images/pretzel.png") && content4.includes("images/pretzel.png") && content7.includes("images/pretzel.png"))
  || (content2.includes("images/pretzel.png") && content5.includes("images/pretzel.png") && content8.includes("images/pretzel.png"))
  || (content3.includes("images/pretzel.png") && content6.includes("images/pretzel.png") && content9.includes("images/pretzel.png"))){
    window.location.href = "you-win.html";
  } else if ((content1.includes("images/catpaw.png") && content2.includes("images/catpaw.png") && content3.includes("images/catpaw.png"))
  || (content1.includes("images/catpaw.png") && content5.includes("images/catpaw.png") && content9.includes("images/catpaw.png"))
  || (content3.includes("images/catpaw.png") && content5.includes("images/catpaw.png") && content7.includes("images/catpaw.png"))
  || (content4.includes("images/catpaw.png") && content5.includes("images/catpaw.png") && content6.includes("images/catpaw.png"))
  || (content7.includes("images/catpaw.png") && content8.includes("images/catpaw.png") && content9.includes("images/catpaw.png"))
  || (content7.includes("images/catpaw.png") && content8.includes("images/catpaw.png") && content9.includes("images/catpaw.png"))
  || (content1.includes("images/catpaw.png") && content4.includes("images/catpaw.png") && content7.includes("images/catpaw.png"))
  || (content2.includes("images/catpaw.png") && content5.includes("images/catpaw.png") && content8.includes("images/catpaw.png"))
  || (content3.includes("images/catpaw.png") && content6.includes("images/catpaw.png") && content9.includes("images/catpaw.png"))){
    window.location.href = "i-win.html";
  } else if (turn > 9) {
    window.location.href = "draw.html";
  } 
}
