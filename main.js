let wordBank = [
    {
        word: "The",
        type: "article",
        tags: ["indie", "folk", "metal"]
    },
    // {
    //     word: "a",
    //     type: "article",
    //     tags: ["indie", "folk", "metal"]
    // },
    // {
    //     word: "an",
    //     type: "article",
    //     tags: ["indie", "folk", "metal"]
    // },
    {
        word: "Amber",
        type: "adjective", 
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "Quiet",
        type: "adjective",
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "Outer",
        type: "adjective",
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "Vale",
        type: "noun",
        tags: ["indie, folk", "metal"]
    },
    {
        word: "Disease",
        type: "noun",
        tags: ["metal"]
    },
    {
        word: "Fist",
        type: "noun",
        tags: ["metal", "indie", "folk"]
    },
    {
        word: "Fire",
        type: "noun",
        tags: ["metal", "indie", "folk", "rock"]
    }
]

let word1 = document.getElementById('word-1')
let word2 = document.getElementById('word-2')
let shuffleButton = document.getElementById('shuffle-button')
let wordDisplay = document.getElementById('word-display')



function randomIndex(array) {
    let result = Math.floor(Math.random() * array.length)
    return result
}


let genreList = document.getElementById('genre')
let genre = genreList.value
// let genreId = ''

genreList.addEventListener("change", function() {
    genreTranslate()
    renderPage()
}) 



function genreTranslate() {
    genre = genreList.value
    console.log(genre)
}

let formatList = document.getElementById('format')

formatList.addEventListener("change", function() {
    setFormat()
    renderPage()
})

let formatArray = []
let formatWordArray = []

function setFormat() {
    formatArray = []
    formatWordArray = []
    console.log('Setting format!')
    if (formatList.value === "1") {


        formatArray = [
            { 
                word: "Adjective",
                type: "adjective"
            },
            {
                word: "Noun",
                type: "noun",
                plural: false
            }
        ]
    } else if (formatList.value === "2") {
        formatArray = [
            {
                word: "The",
                type: "article"
            },
            {
                word:  "Noun",
                type:  "noun",
                plural:  false
            },
            {
                word:  "Nouns",
                type: "noun",
                plural:  true
            }
        ]
    }
}

function renderPage() {
    if (genreList.value === "0") {
        renderFormat()
    } else {
        renderFormat()
        renderWords()
    }
}

function renderFormat() {
    wordDisplay.innerHTML = ''
    formatWordArray = []
    console.log("Rendering format!")

    for (let i=0; i<formatArray.length; i++) {
        formatWordArray.push(formatArray[i].word)

    }
    console.log(formatWordArray)

    let formatText = document.createTextNode(formatWordArray.join(" "))
    wordDisplay.appendChild(formatText)
}

// this DOES work to filter the wordBank for a particular, predefined word type. But I want it to happen on the fly without setting these up with filter. So how do I do that?

// let adjectiveArray = wordBank.filter(getAdjectives)

// function getAdjectives(wordEntry, type) {
//     return wordEntry.type === 'adjective'
// }

// console.log(adjectiveArray)

function filterWords(wordType) {
    console.log('Filtering words!') 

    let filteredArray = []

    for (let i=0; i<wordBank.length; i++) {
        if (wordBank[i].type === wordType) {
            filteredArray.push(wordBank[i])
        }
    }

    return filteredArray

}

function renderWords() {
    console.log('Rendering words!')

    let renderArray = []

    for (let i=0; i<formatArray.length; i++) {
        let filteredArray = (filterWords(formatArray[i].type))
        let randomWord = filteredArray[`${randomIndex(filteredArray)}`].word

        renderArray.push(randomWord)
    }

    console.log(renderArray)

}






