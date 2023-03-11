let playButton = document.querySelector('#play-button')
let squareOne = document.querySelector('#square-1')
let squareTwo = document.querySelector('#square-2')
let squareThree = document.querySelector('#square-3')
let squareFour = document.querySelector('#square-4')
let level = 0
var storedIndices = []
let roundOver = true;

function generateIndex () {
    var generatedNumber = Math.floor(Math.random() * (5-1) + 1)

    if (generatedNumber === 0) {
        generatedNumber = Math.floor(Math.random() * (5-1) + 1)
    } else {
        console.log(generatedNumber)
        return generatedNumber
    }
}

function startRound () {
    var requiredNumber = generateIndex()
    storedIndices.push(requiredNumber)
    document.querySelector(`#square-${requiredNumber}`).classList.toggle(`square-${requiredNumber}`)
    roundOver = false;
}

function endRound () {
    document.querySelector(`#square-${requiredNumber}`).classList.toggle(`square-${requiredNumber}`)
    roundOver = true
    level++
}

function nextRound () {
    if (roundOver = true) {
        level++
    }
}


playButton.addEventListener('click', () => {
    startRound()
    setTimeout(endRound, 1000)
})