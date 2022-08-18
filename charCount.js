let input = document.querySelector("#input-area");
let character = document.querySelector(".char-count");
let word = document.querySelector(".word-count");
let clear = document.querySelector(".btn");

input.addEventListener("input", function (event) {
    characterCount(input.value)
    wordCount(input.value)
    // countWords(input.value)
})

function characterCount(charecter) {
    let getInput = charecter;
    getInput = getInput.split(' ').join('');
    let getCharacter = getInput.length;
    character.innerText = getCharacter;
}

function wordCount(words) {
    let getInput = words;
    getInput = getInput.trim(' ');
    let getWord = getInput.split(" ").filter(words => words !== '').length;
    word.innerHTML = getWord;
}

clear.addEventListener("click", function () {
    input.value = "";
    character.innerHTML = 0;
    word.innerHTML = 0;
})