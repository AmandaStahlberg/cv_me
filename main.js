window.addEventListener('load', main);


function main() {
    addEventListeners();
}

function addEventListeners() {
    clickAboutMe();
    clickRefrences();
    clickInterests();
    moreAboutMeButton();
}

function clickAboutMe() {
    const aboutMe = document.getElementById('circle1');
    aboutMe.onclick =  function() {youClickedAboutMe()}
}

function youClickedAboutMe() {
    window.location = '#aboutMeDiv';
}
function clickRefrences() {
    const refrences = document.getElementById('circle3');
    refrences.onclick =  function() {youClickedRefrences()}
}

function youClickedRefrences() {
    window.location = '#refrencesDiv';
}

function clickInterests() {
    const interests = document.getElementById('circle2');
    interests.onclick =  function() {youClickedInterests()}
}

function youClickedInterests() {
    window.location = '#interestsDiv';
}



function moreAboutMeButton() {
    const myButton = document.getElementById('aboutMeButton');
    myButton.onclick = function() {readMoreAboutMe()}
}

function readMoreAboutMe() {
    let infoBox = document.getElementById('infoBox');
    infoBox.innerText = "Jag är en glad och sprallig smålands-tjej från en liten sjöstad (läs: by) på Ostkusten. Bytte ifrån ena kusten till den andra och har varit bosatt i Göteborg dom senaste 3 åren och trivs väldigt bra. Har funnit ett intresse i programmering och studerar just nu på Medieinstitutet till Front End Utvecklare. Går sådär men jag kämpar på....";
    const myButton = document.getElementById('aboutMeButton');
    myButton.innerText = "Gå tillbaka";
    myButton.onclick = function() {youClickedMeAgain()};
}

function youClickedMeAgain() {
    window.location.href = './index.html';
}

