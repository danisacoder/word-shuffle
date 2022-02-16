const wordBank = [
    {
        word: "amber",
        type: "adjective", 
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "quiet",
        type: "adjective",
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "outer",
        type: "adjective",
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "vale",
        type: "noun",
        tags: ["indie, folk", "metal"]
    },
    {
        word: "disease",
        type: "noun",
        tags: ["metal"]
    },
    {
        word: "jaw",
        type: "noun",
        tags: ["metal", "indie", "folk"]
    },
    {
        word: "fire",
        type: "noun",
        tags: ["metal", "indie", "folk", "rock"]
    }
]

let word1 = document.getElementById('word-1')
let word2 = document.getElementById('word-2')
let shuffleButton = document.getElementById('shuffle-button')
let wordDisplay = document.getElementById('word-display')



function randomNum(array) {
    let result = Math.floor(Math.random() * array.length)
    return result
}


let genreList = document.getElementById('genre')
let genre = genreList.value
let genreId = ''

genreList.addEventListener("change", function() {
    genreTranslate()
}) 

function genreTranslate() {
    genre = genreList.value
    console.log(genre)

    if (genre === "1") {
        genreTag1 = 'indie'
    } else if (genre === "2") {
        genreTag1 = 'metal'
    } 
}

genreTranslate()

let formatList = document.getElementById('format')

formatList.addEventListener("change", function() {
    renderFormat()
    // console.log('butts')
})

function renderFormat() {
    wordDisplay.innerHTML = ''

    if (formatList.value === "1") {
        console.log('format is Adjective Noun')
        let format = ["adjective", "noun"]
        let text = document.createTextNode(format.join(" "))
        console.log(text)
        let p = document.createElement('p')
        p.appendChild(text)
        wordDisplay.appendChild(p) 


        // let word1 = document.createElement('p')
        // let word2 = document.createElement('p')
        // let word1Text = document.createTextNode('Adjective')
        // let word2Text = document.createTextNode('Noun')
        // word1.appendChild(word1Text)
        // word2.appendChild(word2Text)
        // word1.class = 'adjective'
        // word2.class = 'noun'
        // wordDisplay.appendChild(word1)
        // wordDisplay.appendChild(word2)
    } 
    // else if (formatList.value === "2") {
    //     let the = document.createElement('p').id('the')
    //     let word1 = document.createElement('p').id('word-1')
    //     let word2 = document.createElement('p').id('word-2')
    //     console.log('format is The Noun Nouns')
    // }

}

renderFormat()

// console.log(wordBank[1].word) 

shuffleButton.addEventListener("click", function() {
    let filteredWords = wordBank.filter(checkTags)
    let wordsArray = []

    // function checkTags(word) {
    //    return word.tags.includes(`${genreTag1}`) 
    // }

    // get a list of all words based on format

    if (formatList.value === "1") {
        
    }

    
//     word1.innerHTML = `${filteredWords[randomNum(filteredWords)].word}`
    

//     for (let i=0; i<filteredWords.length; i++) {
//         word2.innerHTML = `${filteredWords[randomNum(filteredWords)].word}`
//     }

// }) 


