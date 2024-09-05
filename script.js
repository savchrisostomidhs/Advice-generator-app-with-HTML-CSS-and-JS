const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const response = await fetch(url);
    const data = await response.json();
    return data.slip;
}

const adviceID = document.querySelector(".id");
const advice = document.querySelector(".advice");

const button = document.querySelector(".js-button");

getAdvice().then((result) => {
    adviceID.innerHTML = result.id;
    advice.innerHTML = result.advice;
}).catch(console.error);

button.addEventListener("click", () => {
    getAdvice().then((result) => {
        adviceID.innerHTML = result.id;
        advice.innerHTML = result.advice;
    }).catch(console.error);
});