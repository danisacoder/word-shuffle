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
];

let word1 = document.getElementById("word-1");
let word2 = document.getElementById("word-2");
let shuffleButton = document.getElementById("shuffle-button");
let wordDisplay = document.getElementById("word-display");

function randomEntry(array) {
  let result = Math.floor(Math.random() * array.length);
  return result;
}

let tagsArray = [];

let tagForm = document
  .getElementById("genre")
  .addEventListener("click", function (event) {
    checkChecks(event.target);
  });

let allTagCheckboxes = document.querySelectorAll("input[type=checkbox]");

console.log(allTagCheckboxes);

function checkChecks(element) {
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

function removeArrayItem(item, array) {
  const result = array.filter(filterItem);

  function filterItem(entry) {
    return entry != item;
  }

  return result;
}

// setTags();

// function setTags() {
//   tagsArray = [];

//   // tagsArray.push(tagSelect.value);
//   console.log(tagsArray);

//   //   }
// }

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
  if (allTagCheckboxes.checked === false) {
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

// This does a lot of heavy lifting: filtering down the total wordBank to appropriate words for each word type in the format, filtering down again by included tags, randomly selecting one of the remaining words, pushing that word into an array, and rendering the final array once all of the words have been picked

let renderArrayHistory = [];

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

shuffleButton.addEventListener("click", renderWords);
