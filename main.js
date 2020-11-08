window.addEventListener('load', main);


function main() {
    addEventListeners();
}

function addEventListeners() {
    aboutMeButton();
}

function aboutMeButton() {
    const myButton = document.getElementById('aboutMeButton');
    myButton.onclick = function() {youClickedMe()}
}

function youClickedMe() {
    let infoBox = document.getElementById('infoBox');
    infoBox.innerText = "Jag är en glad och sprallig smålands-tjej från en liten sjöstad (läs: by) på Ostkusten. Bytte ifrån ena kusten till den andra och har varit bosatt i Göteborg dom senaste 3 åren och trivs väldigt bra. Har funnit ett intresse i programmering och studerar just nu på Medieinstitutet till Front End Utvecklare. Går sådär men jag kämpar på....";
    const myButton = document.getElementById('aboutMeButton');
    myButton.innerText = "Gå tillbaka";
    myButton.onclick = function() {youClickedMeAgain()};
}

function youClickedMeAgain() {
    window.location.href = './index.html';
}
