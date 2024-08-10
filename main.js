// This is my list of words, which can be filtered by their tag. The idea of switching genres is why I added the tag section, but most are only listed as indie for now

let wordBank = [
  {
    word: "The",
    type: "article",
    tags: ["indie", "folk", "metal"],
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
    tags: ["indie", "folk", "metal"],
  },
  {
    word: "Quiet",
    type: "adjective",
    tags: ["indie", "folk", "metal"],
  },
  {
    word: "Outer",
    type: "adjective",
    tags: ["indie", "folk", "metal"],
  },
  {
    word: "Vale",
    type: "noun",
    tags: ["indie", "folk", "metal"],
  },
  {
    word: "Disease",
    type: "noun",
    tags: ["metal"],
  },
  {
    word: "Fist",
    type: "noun",
    tags: ["metal", "rock"],
  },
  {
    word: "Fire",
    type: "noun",
    tags: ["metal", "indie", "folk", "rock"],
  },
  {
    word: "Misty",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Heady",
    type: "adjective",
    tags: ["indie"],
  }, 
  {
    word: "Wilder",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Restless",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Frantic",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Tiger",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Acrylic",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Charcoal",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Paper",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Moonbeam",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Breathless",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Elysium",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Tin",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Foolish",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Supraliminal",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Lucid",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Pale",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Parade",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Apparitions",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Tides",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Munitions",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Spiral",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Lodge",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Haze",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Dust",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Maiden",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Fiend",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Darling",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Darling",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Sky",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Wolf",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Machines",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Gold",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Dust",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Heart",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Emperor",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Beast",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Savage",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Penitent",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Englishmen",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Things",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Elegy",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Hymnal",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Lament",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Thunder",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Stray",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Party",
    type: "noun",
    tags: ["indie"],
  },  
  {
  word: "Advent",
  type: "noun",
  tags: ["indie"],
  },  
  {
  word: "Days",
  type: "noun",
  tags: ["indie"],
  },  
  {
  word: "Apostle",
  type: "noun",
  tags: ["indie"],
  },  
  {
  word: "Baptism",
  type: "noun",
  tags: ["indie"],
  },  
  {
  word: "Covenant",
  type: "noun",
  tags: ["indie"],
  },
  {
  word: "Convent",
  type: "noun",
  tags: ["indie"],
  },
  {
    word: "Devotional",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Disciple",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Tree",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Idol",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Spirit",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Wine",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Rapture",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Redemption",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Reform",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Sacrament",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Sermon",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Perdition",
    type: "noun",
    tags: ["indie"],
  },
  {
    word: "Savior",
    type: "noun",
    tags: ["indie"],
  },  
  {
    word: "Dream",
    type: "noun",
    tags: ["indie"],
  },  
  {
  word: "Limbic",
  type: "adjective",
  tags: ["indie"],
  },
  {
    word: "Apollonian",
    type: "adjective",
    tags: ["indie"],
  },
  {
    word: "Archictect",
    type: "noun",
    tags: ["indie"],
  },
];

// Defining page elements so I can update them with JS later

let word1 = document.getElementById("word-1");
let word2 = document.getElementById("word-2");
let shuffleButton = document.getElementById("shuffle-button");
let wordDisplay = document.getElementById("word-display");

// Generic random array entry function

function randomEntry(array) {
  let result = Math.floor(Math.random() * array.length);
  return result;
}

// I guess the idea is, you can generate band names that work for multiple genres at once? Can't remember. So this array stores the currently selected tags from the HTML page

let tagsArray = [];

// If someone clicks the genre section of the page, run the checkStatus function to verify that your tag array reflects the current page selection

let tagForm = document
  .getElementById("genre")
  .addEventListener("click", function (event) {
    checkStatus(event.target);
  });

// Variable for any checkbox on the page

let allTagCheckboxes = document.querySelectorAll("input[type=checkbox]");

console.log(allTagCheckboxes);

// checkStatus function, which triggers upon detection of click on that page element; pushes the value of the clicked element into the tagsArray, and removes the value of any unchecked element from the same tagsArray (because that item is unchecked); this makes sure the tagsArray refelcts the checkboxes selected and deselected on the page

function checkStatus(element) {
  if (element.type === "checkbox" && element.checked) {
    console.log("A checkbox is checked!");
    console.log(element.value);
    tagsArray.push(element.value);
    console.log(tagsArray);
  } else if (element.type === "checkbox") {
    tagsArray = removeArrayItem(element.value, tagsArray);
    console.log("A checkbox got unchecked!");
    console.log(tagsArray);
  }
}

// Generic array item removal function for use in checkStatus function above

function removeArrayItem(item, array) {
  const result = array.filter(filterItem);

  function filterItem(entry) {
    return entry != item;
  }

  return result;
}

let formatList = document.getElementById("format");

formatList.addEventListener("change", function () {
  setFormat();
  renderPage();
});

let formatArray = [];
let formatWordArray = [];

function setFormat() {
  formatArray = [];
  formatWordArray = [];
  console.log("Setting format!");
  if (formatList.value === "1") {
    formatArray = [
      {
        word: "Adjective",
        type: "adjective",
      },
      {
        word: "Noun",
        type: "noun",
        plural: false,
      },
    ];
  } else if (formatList.value === "2") {
    formatArray = [
      {
        word: "The",
        type: "article",
      },
      {
        word: "Noun",
        type: "noun",
        plural: false,
      },
      {
        word: "Nouns",
        type: "noun",
        plural: true,
      },
    ];
  }
}

function renderPage() {
  if (noBoxesChecked) {
    console.log("No genres!");
    renderFormat();
  } else {
    renderFormat();
    renderWords();
  }
}

function renderFormat() {
  wordDisplay.innerHTML = "";
  formatWordArray = [];
  console.log("Rendering format!");

  for (let i = 0; i < formatArray.length; i++) {
    formatWordArray.push(formatArray[i].word);
  }

  console.log(formatWordArray);

  let formatText = document.createTextNode(formatWordArray.join(" "));
  wordDisplay.appendChild(formatText);
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
  console.log("Filtering words!");

  let filteredArray = [];

  for (let i = 0; i < wordBank.length; i++) {
    if (wordBank[i].type === wordType) {
      filteredArray.push(wordBank[i]);
    }
  }

  return filteredArray;
}



// This will store a history of the results to compare against new results

let renderArrayHistory = [];

// This does a lot of heavy lifting: filtering down the total wordBank to appropriate words for each word type in the format, filtering down again by included tags, randomly selecting one of the remaining words, pushing that word into an array, and rendering the final array once all of the words have been picked

function renderWords() {
  console.log("Rendering words!");

  let renderArray = [];

  wordDisplay.innerHTML = "";

  // this for loop iterates over the FORMAT, not the WORDBANK

  for (let i = 0; i < formatArray.length; i++) {
    // this creates an array of words from the wordBank with the type (adjective, noun, etc.) that matches the current (i) word in the format array (Adjective Noun, The Noun Nouns, etc.) and sets it as the value for the typeArray variable

    let typeArray = filterType(`${formatArray[i].type}`);

    console.log(typeArray);

    let randomizableArray = [];

    // this whole function sets up your randomizableArray for selecting a random word; until it's done, you won't have a populated randomizableArray

    for (let i = 0; i < typeArray.length; i++) {

      // creates a variable currentTags to list out the tags for the current entry in the typeArray

      let CurrentWordEntry = typeArray[i];
      let currentTags = CurrentWordEntry.tags;

      const tagsContained = tagsArray.every(checkTags);

      function checkTags(tagsArrayItem) {
        return currentTags.includes(tagsArrayItem);
      }

      if (tagsContained) {
        randomizableArray.push(typeArray[i]);
      }
    }

    // This should be selecting a random word and pushing it into the renderArray; THIS is where your logic should first check if the word is already IN render array, and if so, get another random word UNTIL it's not already present

    function putRandomWordInRenderArray() {
      let randomWordEntry = randomizableArray[randomEntry(randomizableArray)];

      if (renderArray.includes(randomWordEntry.word)) {
        console.log(
          `${randomWordEntry.word} was already in array, pulling another random word!`
        );
        putRandomWordInRenderArray();
      } else {
        renderArray.push(randomWordEntry.word);
      }
    }

    putRandomWordInRenderArray();
  }

  renderArrayHistory.unshift(renderArray);
  console.log(renderArrayHistory);

  function displayRenderArray() {
    if (checkArrays(renderArrayHistory[0], renderArrayHistory[1])) {
      console.log("Same band name, trying again!");
      renderArray = [];
      renderWords();
    }

    let renderArrayText = document.createTextNode(renderArray.join(" "));
    wordDisplay.appendChild(renderArrayText);
  }

  displayRenderArray();

  function checkArrays(a, b) {
    return JSON.stringify(a) == JSON.stringify(b);
  }
}

// If you click the shuffle button, the renderWords function triggers

shuffleButton.addEventListener("click", renderWords);
