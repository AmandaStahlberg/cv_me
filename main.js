window.addEventListener('load', main)

/**
 * Function to load the js-file.
 */
function main() {
    addEventListeners()
}

/**
 * Function to add eventListeners.
 */
function addEventListeners() {
    clickAboutMe()
    clickRefrences()
    clickInterests()
    clickTopButton()
    moreAboutMeButton()
    getTheRightImg()
}

/**
 * Function to get the img from html.
 */
function getTheRightImg() {
    const images = document.querySelectorAll('.collage img')
    
    for (const img of images) {
        img.onclick = clickedImg
    }
}


/**
 * Function to resize the img, both larger and smaller.
 */
function clickedImg(event) {
    const img = event.target

    if (img.style.transform == "scale(3)") {
        setTimeout(function(){
            img.style.zIndex = 0
        }, 250)
        img.style.transform = "scale(1)"
        img.style.transition = "transform 0.25s ease"
    } else {
        img.style.zIndex = 100
        img.style.transform = "scale(3)"
        img.style.transition = "transform 0.25s ease"
    }
}

/**
 * Function to add onclick on the "aboutMe-buttons".
 */
function clickAboutMe() {
    const aboutMe = document.getElementById('circle1')
    const aboutMeFooter = document.getElementById('aboutMeFooter')
    aboutMe.onclick =  youClickedAboutMe
    aboutMeFooter.onclick =  youClickedAboutMe
}

/**
 * Function to get to the the div with informations about me.
 */
function youClickedAboutMe() {
    window.location = '#aboutMeDiv'
}

/**
 * Function to add onclick on the "refrences-buttons".
 */
function clickRefrences() {
    const refrences = document.getElementById('circle3')
    const refrencesFooter = document.getElementById('refrencesFooter')
    refrences.onclick =  youClickedRefrences
    refrencesFooter.onclick =  youClickedRefrences
}

/**
 * Function to get to the the div with the refrences.
 */
function youClickedRefrences() {
    window.location = '#refrencesDiv'
}

/**
 * Function to add onclick on the "interests-buttons".
 */
function clickInterests() {
    const interests = document.getElementById('circle2')
    const interestsFooter = document.getElementById('interestsFooter')
    interests.onclick =  youClickedInterests
    interestsFooter.onclick =  youClickedInterests
}

/**
 * Function to get to the the div with the img-collage.
 */
function youClickedInterests() {
    window.location = '#interestsDiv'
}

/**
 * Function to add onclick on the "top-button".
 */
function clickTopButton() {
    const topButton = document.getElementById('topButton')
    topButton.onclick =  youClickedTopButton
}

/**
 * Function to get to the top of the website.
 */
function youClickedTopButton() {
    window.location = './index.html'
}

/**
 * Function to add onclick on the "read more about me-button".
 */
function moreAboutMeButton() {
    const myButton = document.getElementById('aboutMeButton')
    myButton.onclick = readMoreAboutMe
}

/**
 * Function to change the text in the info-box and on the button. + add onclick on the "go back-button"
 */
function readMoreAboutMe() {
    let infoBox = document.getElementById('infoBox')
    infoBox.innerText = "Jag är en glad och sprallig smålands-tjej från en liten sjöstad (läs: by) på Ostkusten. Bytte ifrån ena kusten till den andra och har varit bosatt i Göteborg dom senaste 3 åren och trivs väldigt bra. Har funnit ett intresse i programmering och studerar just nu på Medieinstitutet till Front End Utvecklare."
    
    const myButton = document.getElementById('aboutMeButton')
    myButton.innerText = "Gå tillbaka"
    myButton.onclick = youClickedMeAgain
}

/**
 * Function to get back to the original text in infobox and button.
 */
function youClickedMeAgain() {
    const infoBox = document.getElementById('infoBox')
    infoBox.innerHTML = '<p> <b>Namn:</b> Amanda Ståhlberg <br> <b>Ålder:</b> 27år <br> <b>Bor:</b> Göteborg <br><b>Gör:</b> Just nu pluggar jag front end utvekling på Medieinstitutet. <br><b>Egenskaper:</b> Extremt envis = Åkt vasaloppet helt otränad!<br>& väldigt rolig enligt mig själv. Vem skrattar inte åt sina egna skämt.</p>'
    
    const myButton = document.getElementById('aboutMeButton')
    myButton.innerText = "Vill du veta mer?"
    myButton.onclick = readMoreAboutMe
}

