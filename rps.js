
let numberofRounds = prompt("How many rounds do you wanna play");



let userChoice = prompt("Do you pick Rock Paper Or Scissors, (use r , p, or s)")

const randomNumber = Math.floor(Math.random * 3);
let computerChoice

for(let i = 0; i < numberofRounds; i++){
  prompt("Do you pick Rock Paper Or Scissors, (use r , p, or s)")
}


if(randomNumber === 0){
    computerChoice = "r"
  }
  else if(randomNumber === 1){
    computerChoice = "p"
  }
  else{
    computerChoice = "s"
  }
   
let youWin = alert("you won")
let youTied = alert("You have tied")
let youLost = alert("you lost")

if(userChoice === computerChoice ){
    //its a tie
  alert("You have tied")
}

 else if(userChoice === "r" && computerChoice === "s"){
    //a win
  alert("you won")
}
  else if(userChoice === "r" && computerChoice === "p"){
    //a loss
  alert("you lost")
  }

  else if(userChoice === "s" && computerChoice === "p"){
  //a win
  alert("you won")
}
  else if(userChoice === "s" && computerChoice === "r"){
 //a loss
    alert("you lost")
  }

  else if(userChoice === "p" && computerChoice === "r"){
    //a win
    alert("you won")
}
  else if(userChoice === "p" && computerChoice === "s"){
      //a loss
      alert("you lost")
}

 

alert("You have won " + youWin + "times" + "You have Tied " + youTied  + "time" + "You have lost " + youLost + "times")
 