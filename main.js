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
        tags: ["indie", "folk", "metal"]
    },
    {
        word: "Disease",
        type: "noun",
        tags: ["metal"]
    },
    {
        word: "Fist",
        type: "noun",
        tags: ["metal", "rock"]
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



function randomEntry(array) {
    let result = Math.floor(Math.random() * array.length)
    return result
}


let tagSelect = document.getElementById('genre')
let tagsArray = []
setTags()

tagSelect.addEventListener("change", function() {
    setTags()
    renderPage()
}) 



function setTags() {
    tagsArray = []
    tagsArray.push(tagSelect.value)
    console.log(tagsArray)
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
    if (tagSelect.value === "none") {
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




// function hasTag(wordEntry) {
//     console.log(wordEntry.tags)
//     return ((wordEntry.tags).includes(`${tagsArray[0]}`))
//     // return tagsArray.every()
// }



// The test is:
// is this 

// function hasTags(wordEntry) {
//     return ((wordEntry.tags).every(isIncluded))
// } 

// let result = wordEntry.tags

function filterType(wordType) {
    console.log('Filtering words!') 

    let filteredArray = []

    for (let i=0; i<wordBank.length; i++) {
        if (wordBank[i].type === wordType) {
            filteredArray.push(wordBank[i])
        }
    }

    return filteredArray
    
}

// This does a lot of heavy lifting: filtering down the total wordBank to appropriate words for each word type in the format, filtering down again by included tags, randomly selecting one of the remaining words, pushing that word into an array, and rendering the final array once all of the words have been picked

function renderWords() {
    console.log('Rendering words!')

    let renderArray = []

    wordDisplay.innerHTML = ''

    // this for loop iterates over the FORMAT, not the WORDBANK
    
    for (let i=0; i<formatArray.length; i++) {
        
        // this creates an array of words from the wordBank with the type (adjective, noun, etc.) that matches the current (i) word in the format array (Adjective Noun, The Noun Nouns, etc.) and sets it as the value for the typeArray variable

        let typeArray = (filterType(`${formatArray[i].type}`))
        
        console.log(typeArray)

        let randomizableArray = []

        for (let i=0; i<typeArray.length; i++) {

            // creates a variable typeArrayItemTags to list out the tags for the current entry in the typeArray

            let currentWord = typeArray[i]
            let currentItemTags = currentWord.tags
            

            console.log(currentItemTags)

            const tagsContained = tagsArray.every(checkTags)

            function checkTags(wordEntry) {
                return currentItemTags.includes(wordEntry)
            }

            console.log(tagsContained)

            const notPresent = (randomizableArray.includes(currentWord) != true)

            console.log(notPresent)

            if (tagsContained && notPresent) {
                randomizableArray.push(typeArray[i])
            } 

        }

        console.log(randomizableArray) 

        console.log(randomizableArray[randomEntry(randomizableArray)].word)

        renderArray.push(randomizableArray[randomEntry(randomizableArray)].word)

        console.log(renderArray) 

    }

    let renderArayText = document.createTextNode(renderArray.join(" "))
    wordDisplay.appendChild(renderArayText)

} 

shuffleButton.addEventListener('click', renderWords)








     