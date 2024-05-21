let car = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageel = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.querySelector("#cards-el")
console.log(messageel)
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

let player = {
    pl : "Per",
    sec : "$145"
}


let playerel = document.getElementById("playerel")
playerel.innerHTML = player.pl + ":" + " " + player.sec


function randomcard(){
    let rand =  Math.floor(Math.random() * 13) + 1
    if (rand == 1){
        return 11
    }
    else if (rand > 10){
        return 10
    }
    else{
        return rand
    }       
}

function startGame(){
    isAlive = true
    let firstCard = randomcard()
    let secondCard = randomcard()
    car = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsel.innerHTML = "cards : "

    for(let i=0; i<car.length;i+=1){
        cardsel.innerHTML +=   car[i] + " "

    }
    sumel.innerHTML = "Sum : " + sum
   
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
       
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
       
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageel.textContent = message
}

function newcard(){
    
    if(isAlive === true && hasBlackJack === false){
        let card = randomcard()
        console.log(car)
        sum += card
        car.push(card)
        renderGame()
    }
}

