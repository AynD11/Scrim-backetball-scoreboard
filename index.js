let scoreH = document.getElementById("home-score")

let scoreG = document.getElementById("guest-score")

let countH = 0
let countG = 0

function homePlus1() {
  
  countH += 1
  scoreH.textContent = countH
}

function homePlus2() {
  
  countH += 2
  scoreH.textContent = countH
}

function homePlus3() {
  
  countH += 3
  scoreH.textContent = countH
}

function awayPlus1() {
  
  countG += 1
  scoreG.textContent = countG
  
}

function awayPlus2() {
  
  countG += 2
  scoreG.textContent = countG
}

function awayPlus3() {
  
  countG += 3
  scoreG.textContent = countG
}