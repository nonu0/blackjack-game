let player = {
    name:"cliff",
    chips:145
}
let cards = []
let sum = 0 
hasBlackjack = false
let isAlive = false
let message = ""
// let card = 9

console.log(cards)

function getRandomNummber(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


let MessageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.querySelector(".player-el")
console.log(playerEl)

playerEl.textContent = player.name +":"+ "$" + player.chips 

function rendergame(){


if(sum <= 20){
    message = "Do you want to draw another card?"
}
else if(sum === 21){
    message = "You have blackjack!!"
    hasBlackjack = true
}
else{
    message = "You are out!!"
    isAlive = false
}
MessageEl.textContent = message 
sumEl.textContent = "Sum:" + sum
cardsEl.textContent = "Cards:"
for(let i= 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}

}

function startGame(){
    isAlive = true
    let firstCard = getRandomNummber()
    let secondCard = getRandomNummber()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function newcard(){
if(isAlive === true && hasBlackjack === false){
let card = getRandomNummber()
    
sum += card 
cards.push(card)
console.log(cards)
rendergame()
}
}
