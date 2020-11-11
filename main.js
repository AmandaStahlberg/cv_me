window.addEventListener('load', main);


function main() {
    addEventListeners();
}

function addEventListeners() {
    clickAboutMe();
    clickRefrences();
    clickInterests();
    moreAboutMeButton();
    enlargeImg();
}

function enlargeImg() {
    const img1 = document.getElementById('img1');
    img1.onclick = function() {clickedImg()}  

    const img2 = document.getElementById('img2');
    img2.onclick = function() {clickedImg2()}  
    
    const img3 = document.getElementById('img3');
    img3.onclick = function() {clickedImg3()}  

    const img4 = document.getElementById('img4');
    img4.onclick = function() {clickedImg4()}  

    const img5 = document.getElementById('img5');
    img5.onclick = function() {clickedImg5()}  

    const img6 = document.getElementById('img6');
    img6.onclick = function() {clickedImg6()}  

    const img7 = document.getElementById('img7');
    img7.onclick = function() {clickedImg7()}  

    const img8 = document.getElementById('img8');
    img8.onclick = function() {clickedImg8()}  

    const img9 = document.getElementById('img9');
    img9.onclick = function() {clickedImg9()}  

    const img10 = document.getElementById('img10');
    img10.onclick = function() {clickedImg10()}  

    const img11 = document.getElementById('img11');
    img11.onclick = function() {clickedImg11()}  

    const img12 = document.getElementById('img12');
    img12.onclick = function() {clickedImg12()}  
}

function clickedImg() {

    if (img1.style.transform == "scale(3)") {
        img1.style.transform = "scale(1)"
        img1.style.transition = "transform 0.25s ease"
        } else {
        img1.style.transform = "scale(3)"
        img1.style.transition = "transform 0.25s ease"
    }
}
function clickedImg2() {
    if (img2.style.transform == "scale(3)") {
        img2.style.transform = "scale(1)"
        img2.style.transition = "transform 0.25s ease"
    } else {
        img2.style.transform = "scale(3)"
        img2.style.transition = "transform 0.25s ease"

    }
}
function clickedImg3() {
    if (img3.style.transform == "scale(3)") {
        img3.style.transform = "scale(1)"
        img3.style.transition = "transform 0.25s ease"
    } else {
        img3.style.transform = "scale(3)"
        img3.style.transition = "transform 0.25s ease"
    }
}
function clickedImg4() {
    if (img4.style.transform == "scale(3)") {
        img4.style.transform = "scale(1)"
        img4.style.transition = "transform 0.25s ease"
    } else {
        img4.style.transform = "scale(3)"
        img4.style.transition = "transform 0.25s ease"
    }
}
function clickedImg5() {
    if (img5.style.transform == "scale(3)") {
        img5.style.transform = "scale(1)"
        img5.style.transition = "transform 0.25s ease"
    } else {
        img5.style.transform = "scale(3)"
        img5.style.transition = "transform 0.25s ease"
    }
}
function clickedImg6() {
    if (img6.style.transform == "scale(3)") {
        img6.style.transform = "scale(1)"
        img6.style.transition = "transform 0.25s ease"
    } else {
        img6.style.transform = "scale(3)"
        img6.style.transition = "transform 0.25s ease"
    }
}
function clickedImg7() {
    if (img7.style.transform == "scale(3)") {
        img7.style.transform = "scale(1)"
        img7.style.transition = "transform 0.25s ease"
    } else {
        img7.style.transform = "scale(3)"
        img7.style.transition = "transform 0.25s ease"
    }
} 
function clickedImg8() {
    if (img8.style.transform == "scale(3)") {
        img8.style.transform = "scale(1)"
        img8.style.transition = "transform 0.25s ease"
    } else {
        img8.style.transform = "scale(3)"
        img8.style.transition = "transform 0.25s ease"
    }
}
function clickedImg9() {
    if (img9.style.transform == "scale(3)") {
        img9.style.transform = "scale(1)"
        img9.style.transition = "transform 0.25s ease"
    } else {
        img9.style.transform = "scale(3)"
        img9.style.transition = "transform 0.25s ease"
    }
}
function clickedImg10() {
    if (img10.style.transform == "scale(3)") {
        img10.style.transform = "scale(1)"
        img10.style.transition = "transform 0.25s ease"
    } else {
        img10.style.transform = "scale(3)"
        img10.style.transition = "transform 0.25s ease"
    }
}
function clickedImg11() {
    if (img11.style.transform == "scale(3)") {
        img11.style.transform = "scale(1)"
        img11.style.transition = "transform 0.25s ease"
    } else {
        img11.style.transform = "scale(3)"
        img11.style.transition = "transform 0.25s ease"
    }
}
function clickedImg12() {
    if (img12.style.transform == "scale(3)") {
        img12.style.transform = "scale(1)"
        img12.style.transition = "transform 0.25s ease"
    } else {
        img12.style.transform = "scale(3)"
        img12.style.transition = "transform 0.25s ease"
    }
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

