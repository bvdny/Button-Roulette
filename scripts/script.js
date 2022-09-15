let loosingText = new Array(
  "You lose...but: you’re never a loser until you quit trying!",
  "Ahhh you missed, try again !",
  "It's not your lucky day !",
  "You were very close, but your selection is incorrect",
  "Ahhh, keep trying !",
  "Muahaha not the right one !!",
  "It's better not to know the answer...",
  "Noup !!",
  "Yessssss !! You lose !!",
  ":(...");
let winningText = new Array(
  "Yupiiii !! You Wiiiiiinnnn !!!",
  "It's a WIN !! ",
  "Ahhhh, you win !",
  "It's your lucky day !",
  "Winnerrr !!!",
  "Congratulations! you won my friend !!",
  "When you're lucky, you're lucky...Congratulations !",
  "Damn it !...YOU WIN !",
  "Winner, Winner, Winner !!!",
  "Kabooommmm !!! you win !!");

function isWinner(buttonNr) {
  let matchButton = Math.floor(Math.random() * 3);
  let randomText =  Math.floor(Math.random() * loosingText.length);
  if (matchButton == buttonNr) {
    document.getElementById("result").innerHTML = winningText[randomText];
    document.getElementById("result").style = "color: #2E8B57";
  } else {
    document.getElementById("result").innerHTML = loosingText[randomText];
    document.getElementById("result").style = "color: #C04000";
  }
}
