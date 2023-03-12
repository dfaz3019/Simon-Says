let playButton = document.querySelector('#play-button')
let squareOne = document.querySelector('#square-1')
let squareTwo = document.querySelector('#square-2')
let squareThree = document.querySelector('#square-3')
let squareFour = document.querySelector('#square-4')
let level = 0
var index = -1
var storedIndices = [
]
var requiredNumber = ""

function generateIndex () {
    var generatedNumber = Math.floor(Math.random() * (5-1) + 1)

    if (generatedNumber === 0) {
        generatedNumber = Math.floor(Math.random() * (5-1) + 1)
    } else {
        // console.log(generatedNumber)
        return generatedNumber
    }
}

function startRound () {

    storedIndices.push({
        number: generateIndex(),
        index: index+= 1
    })

    var numbersArray = storedIndices.map(item => item.number)
    var numbersIndex = storedIndices.map(item => item.index)

    for (let i = 0; i < storedIndices.length; i++) {

        document.querySelector(`#square-${numbersArray[i]}`).classList.toggle(`square-${numbersArray[i]}`)


        setTimeout(() => {
            document.querySelector(`#square-${numbersArray[i]}`).classList.toggle(`square-${numbersArray[i]}`)
        }, 500 * numbersIndex[i]);
}}

playButton.addEventListener('click', () => {
    startRound()
})