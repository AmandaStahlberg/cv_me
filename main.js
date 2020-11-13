window.addEventListener('load', main)


function main() {
    addEventListeners()
}

function addEventListeners() {
    clickAboutMe()
    clickRefrences()
    clickInterests()
    clickTopButton()
    moreAboutMeButton()
    enlargeImg()
}

function enlargeImg() {
    const images = document.querySelectorAll('.collage img')
    
    for (const img of images) {
        img.onclick = clickedImg
    }
}

    

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
  


function clickAboutMe() {
    const aboutMe = document.getElementById('circle1')
    const aboutMeFooter = document.getElementById('aboutMeFooter')
    aboutMe.onclick =  youClickedAboutMe
    aboutMeFooter.onclick =  youClickedAboutMe
}

function youClickedAboutMe() {
    window.location = '#aboutMeDiv'
}
function clickRefrences() {
    const refrences = document.getElementById('circle3')
    const refrencesFooter = document.getElementById('refrencesFooter')
    refrences.onclick =  youClickedRefrences
    refrencesFooter.onclick =  youClickedRefrences
}

function youClickedRefrences() {
    window.location = '#refrencesDiv'
}

function clickInterests() {
    const interests = document.getElementById('circle2')
    const interestsFooter = document.getElementById('interestsFooter')
    interests.onclick =  youClickedInterests
    interestsFooter.onclick =  youClickedInterests
}

function youClickedInterests() {
    window.location = '#interestsDiv'
}
function clickTopButton() {
    const topButton = document.getElementById('topButton')
    topButton.onclick =  youClickedTopButton
}

function youClickedTopButton() {
    window.location = './index.html'
}

function moreAboutMeButton() {
    const myButton = document.getElementById('aboutMeButton')
    myButton.onclick = readMoreAboutMe
}

function readMoreAboutMe() {
    let infoBox = document.getElementById('infoBox')
    infoBox.innerText = "Jag är en glad och sprallig smålands-tjej från en liten sjöstad (läs: by) på Ostkusten. Bytte ifrån ena kusten till den andra och har varit bosatt i Göteborg dom senaste 3 åren och trivs väldigt bra. Har funnit ett intresse i programmering och studerar just nu på Medieinstitutet till Front End Utvecklare. Går sådär men jag kämpar på...."
    
    const myButton = document.getElementById('aboutMeButton')
    myButton.innerText = "Gå tillbaka"
    myButton.onclick = youClickedMeAgain
}

function youClickedMeAgain() {
    const infoBox = document.getElementById('infoBox')
    infoBox.innerHTML = '<p> <b>Namn:</b> Amanda Ståhlberg <br> <b>Ålder:</b> 27år <br> <b>Bor:</b> Göteborg <br><b>Gör:</b> Just nu pluggar jag front end utvekling på Medieinstitutet. <br><b>Egenskaper:</b> Extremt rolig enligt mig själv. Vem skrattar inte åt sina egna skämt.</p>'
    
    const myButton = document.getElementById('aboutMeButton')
    myButton.innerText = "Vill du veta mer?"
    myButton.onclick = readMoreAboutMe
}

