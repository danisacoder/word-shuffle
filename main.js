const adjective = [
    'Amber',
    'Quiet',
    'Silent',
    'Outer',
    'Golden',
    'Lifted'
]

const noun = [
    'Design',
    'Sign',
    'Den',
    'Vale',
    'Banks',
    'Corner'
]

let word1 = document.getElementById('word-1')
let word2 = document.getElementById('word-2')
let shuffleButton = document.getElementById('shuffle-button')
let wordDisplay = document.getElementById('word-display')

shuffleButton.addEventListener('click', function() {
    shuffleWords()
})

function randomNum(wordType) {
    let result = Math.floor(Math.random() * wordType.length)
    return result
}


function shuffleWords() {
    word1.innerHTML = `${adjective[randomNum(adjective)]}`
    word2.innerHTML = `${noun[randomNum(noun)]}`
}

