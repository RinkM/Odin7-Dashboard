let cardLibrary = [{
    "cardNumber": 0,
    "projectName": "Personal Media Library",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin8.5-Library/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin8.5-Library",
    "projectDescription": "Allows users to keep track of books, games and films that they are interested in.",
    "projectThumb":"",
    },
    
    {
    "cardNumber": 1,
    "projectName": "Calculator",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin5-Calculator/blob/main/app.html",
    "projectGithub": "https://github.com/RinkM/Odin5-Calculator",
    "projectDescription": "It adds! It subtracts! It even tastes like watermelon!",
    "projectThumb":"images/projectImgs/calcIcon.png",
    },
    {
    "cardNumber": 2,
    "projectName": "Dogs Without Laps",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin6-SubscriptionForm/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin6-SubscriptionForm",
    "projectDescription": "Clients can use this fictious form to match their poor, empty lap with a dog in need.",
    "projectThumb":"images/projectImgs/dogIcon.png",
    },
    {
    "cardNumber": 3,
    "projectName": "Sketch an Etch",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin4-Drawing/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin4-Drawing",
    "projectDescription": "A drawing app. Use your mouse to draw and move the dials to change settings.",
    "projectThumb":"images/projectImgs/sketchIcon.png",
    },
    {
    "cardNumber": 4,
    "projectName": "Rock, Paper, Scissors",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin3-RPS/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin3-RPS",
    "projectDescription": "As the last free Human, you challenge the AI Super Computers in order to save Humanity.",
    "projectThumb":"images/projectImgs/rpsIcon.png",
    },
    {
    "cardNumber": 5,
    "projectName": "Robot Dating Website",
    "previewLink": "https://codesandbox.io/p/github/RinkM/Robot-Dating/draft/jolly-surf?file=%2FREADME.md",
    "projectGithub": "https://github.com/RinkM/Robot-Dating",
    "projectDescription": "A React learning space: displays and filters users, creates forms, and displays this information via tabs.",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 6,
    "projectName": "NooBorn Baby Tracker",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin3-RPS/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin3-RPS",
    "projectDescription": "Made with Python, my first app.  Tracks feeding, waste and sleep of a new baby.",
    "projectThumb": "images/fishAvatarSmall.png",
    }
]


const projectForm = document.getElementById('newProjectContainer')
const mainWindow = document.getElementById('mainWindow')

const newProjectBtn = document.getElementById('newProjectBtn')
const removeProjectBtn = document.getElementById('removeProjectBtn')
const cancelBtn = document.getElementById('cancelBtnId')

// const hexagonWrap = document.getElementById('jsHexagon')



newProjectBtn.addEventListener('click', ()=>{
    projectForm.style.display="flex"
    mainWindow.style.filter = "opacity(.5)";
}
 )

cancelBtn.addEventListener('click', ()=>{
    projectForm.style.display="none"
    mainWindow.style.filter = "opacity(1)";
}
 )


 removeProjectBtn.addEventListener('click', ()=>{
    const allCards = document.querySelectorAll(".projectCard");
    console.log(allCards[1])
    
    allCards.forEach(element=> (
        element.style.filter = "drop-shadow(3px 3px 3px red)")
    );
    // projectForm.style.display="flex"
    // mainWindow.style.filter = "opacity(.5)";
}
 )

    // if (verify()){alert("Thanks for your interest! We will contact you soon.")}
    // })
    
let projectSpace = document.getElementsByClassName("projectCardsContainer")[0];
let projectName = document.getElementsByClassName("projectName")[0];

// projectName.textContent = card.projectName



// Try to make hexes
// function hexBuilder(){
//     hex = document.createElement('use');
//     hex.setAttribute("xlink:href", '#pod');
//     hex.setAttribute("transform","translate(50, 50)")
//     hexagonWrap.appendChild(hex);
//     console.log(hex)
// }



const stickyColors = ["orangeBG", "lightPink", "darkPink", "blue", "dullYellow", "brightYellow"]

function randColor (){
    const num = Math.floor(Math.random()*6)
    return stickyColors[num]
}

// pass the number in the cardLibrary
function cardBuilder(card){

    // projectCard = card body
    projectCard = document.createElement("div");
    projectCard.setAttribute("id", `card${card.cardNumber}` );
    projectCard.classList.add("projectCard");
    projectCard.classList.add(randColor());

    // Makes card header with Project Name
    cardHeader = document.createElement("div");
    cardHeader.classList.add("cardHeader");

    projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = card.projectName

    cardBody = document.createElement("div");
    cardBody.classList.add("cardBody");

    cardText = document.createElement("div");
    cardText.classList.add("cardText");
    cardText.textContent = card.projectDescription;


    // Make project Thumb with avatarlink + img    
    cardLinks = document.createElement("div");
    cardLinks.classList.add("cardLinks");

    projectThumbnail = document.createElement("div");
    projectThumbnail.classList.add("projectThumbnail");
    projectThumbnail.classList.add("grid");
    projectThumbnail.textContent = "View App"
    
    avatarLink = document.createElement("a");
    avatarLink.href = `${card.previewLink}`
    avatarLink.setAttribute("target","_blank");
    avatarLink.setAttribute("rel","noreferrer noopener");


    avatarLink.classList.add("imgProjectThumb");

    imgAvatar = document.createElement('img');
    imgAvatar.src = card.projectThumb;
    imgAvatar.setAttribute("alt","Project Avatar");
    imgAvatar.classList.add("imgProjectThumb");

    avatarLink.appendChild(imgAvatar);
    avatarLink.appendChild(projectName);

    // GitHub Logo 
    ghLinkDiv = document.createElement("div");
    ghLinkDiv.classList.add("ghLinkDiv");
    ghLinkDiv.classList.add("centerText");
    ghLinkDiv.classList.add("grid");
    ghLinkDiv.textContent = "Inspect Code";

    ghLink = document.createElement("a");
    ghLogo = document.createElement('img');

    
    // ghLink.setAttribute("class","githubLink");
    ghLink.href = `${card.projectGithub}`
    ghLink.setAttribute("target","_blank");
    ghLink.setAttribute("rel","noreferrer noopener");
    
    ghLogo = document.createElement('img');
    ghLogo.setAttribute("src", 'images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png');
    ghLogo.setAttribute("alt","Git Hub Logo");
    ghLogo.classList.add("githubLogo");

    // post Giithub into its kDiv
    ghLink.appendChild(ghLogo);
    ghLinkDiv.appendChild(ghLink);

// Post name into Card header
    
    cardHeader.appendChild(projectName);
    // cardHeader.appendChild(projectThumbnail);

// Post into Card body
    projectThumbnail.appendChild(avatarLink);
    cardLinks.appendChild(projectThumbnail);
    cardLinks.appendChild(ghLinkDiv);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLinks);
    
    

// Post header and body onto Card
    projectCard.appendChild(cardHeader);
    projectCard.appendChild(cardBody);

// Post card.
    projectSpace.appendChild(projectCard);

}


const makeCards = cardLibrary.map((card)=> {
    cardBuilder(card)
})

function ClearCards(){
    projectSpace.innerHTML=""
}


// function makesCards() {
//     cardLibrary.map((card)=> {
//     cardBuilder(card)
// })
// }


let userInfo = {}

const form = document.getElementById('newProjectForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const entries = formData.entries();
    userInfo["cardNumber"] = cardLibrary.length
    userInfo["projectThumb"] = "images/fishAvatarSmall.png"
    for (let input of entries) {
        (userInfo[input[0]] = input[1]);
    }
    cardLibrary.unshift(userInfo)
    ClearCards()
    cardLibrary.map((card)=> {
        cardBuilder(card)
    })
    
    projectForm.style.display= "none"
    mainWindow.style.filter = "opacity(1)";



})
