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
    let infoBox = document.getElementById('infoBox');
    infoBox.innerHTML = '<p> <b>Namn:</b> Amanda Ståhlberg <br> <b>Ålder:</b> 27år <br> <b>Bor:</b> Göteborg <br><b>Gör:</b> Just nu pluggar jag front end utvekling på Medieinstitutet. <br><b>Egenskaper:</b> Extremt rolig enligt mig själv. Vem skrattar inte åt sina egna skämt.</p>'
    
    const myButton = document.getElementById('aboutMeButton');
    myButton.innerText = "Vill du veta mer?";
    myButton.onclick = function() {readMoreAboutMe()};
}

