let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let result = document.getElementById("result")
let sound = document.getElementById("sound")
let btn = document.getElementById("search-btn")

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value
    fetch(`${url}${inpWord}`).then((response) => response.json()).then((data) => {
        console.log(data)
        result.innerHTML = `<div class="word">
        <h3>${inpWord}</h3>
        <span>
            <i class="fa-solid fa-volume" id="speaker"></i></span>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>`
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)
    }).catch(() => {
        result.innerHTML = `<h3 class="error">Could not find the word</h3>`
    })
})