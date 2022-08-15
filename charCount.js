let input = document.querySelector("#input-area");
let character = document.querySelector(".char-count");
let word = document.querySelector(".word-count");
let clear = document.querySelector(".btn");

input.addEventListener("input", function (event) {
    characterCount(input.value)
    wordCount(input.value)
})

function characterCount(charecter) {
    let getInput = charecter;
    getInput = getInput.trim(' ');
    let getCharacter = getInput.length;
    character.innerText = getCharacter;
}

function wordCount(words) {
    let getInput = words;
    getInput = getInput.trim(' ');
    let getWord = getInput.split(" ");
    if (getWord[0] == 0) {
        word.innerText = 0;
    }
    else {
        word.innerHTML = getWord.length;
    }
}

clear.addEventListener("click", function () {
    input.value = " ";
    character.innerHTML = 0;
    word.innerHTML = 0;
})