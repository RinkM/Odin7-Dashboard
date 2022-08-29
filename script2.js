let cardLibrary = [{
    "cardNumber": 0,
    "projectName": "Calculator",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin5-Calculator/blob/main/app.html",
    "projectGithub": "https://github.com/RinkM/Odin5-Calculator",
    "projectDescription": "A fully working calculator. Created with JS, HTML, and CSS",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 1,
    "projectName": "Dogs Without Laps",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin6-SubscriptionForm/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin6-SubscriptionForm",
    "projectDescription": "A subscription form to a fake site. Created with JS, HTML, and CSS",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 2,
    "projectName": "Sketch an Etch",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin4-Drawing/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin4-Drawing",
    "projectDescription": "A drawing app. Created with JS, HTML, and CSS",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 3,
    "projectName": "Rock, Paper, Scissors",
    "previewLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin3-RPS/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin3-RPS",
    "projectDescription": "Rock, Paper, Scissors. Created with JS, HTML, and CSS",
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








// pass the number in the cardLibrary
function cardBuilder(card){

    projectCard = document.createElement("div");
    projectCard.setAttribute("id", `card${card.cardNumber}` );
    projectCard.classList.add("projectCard");

    cardHeader = document.createElement("div");
    cardHeader.classList.add("cardHeader");

    projectAvatar = document.createElement("div");
    projectAvatar.classList.add("projectAvatar");
    
    projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = card.projectName

    avatarLink = document.createElement("a");
    avatarLink.href = `${card.previewLink}`
    avatarLink.classList.add("imgProjectAvatar");

    imgAvatar = document.createElement('img');
    imgAvatar.src = card.projectThumb;
    imgAvatar.setAttribute("alt","Project Avatar");
    imgAvatar.classList.add("imgProjectAvatar");

    avatarLink.appendChild(imgAvatar);
    avatarLink.appendChild(projectName);

    cardBody = document.createElement("div");
    cardBody.classList.add("cardBody");

    cardText = document.createElement("div");
    cardText.classList.add("cardText");
    cardText.textContent = card.projectDescription;

    ghLink = document.createElement("a");
    ghLink.setAttribute("class","githubLogo");
    ghLink.href = `${card.projectGithub}`

    ghLogo = document.createElement('img');
    ghLogo.setAttribute("src", 'images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png');
    ghLogo.setAttribute("alt","Git Hub Logo");
    ghLogo.classList.add("githubLogo");

    ghLink.appendChild(ghLogo);

// Post into Card header
    projectAvatar.appendChild(avatarLink);
    cardHeader.appendChild(projectName);
    cardHeader.appendChild(projectAvatar);

// Post into Card body
    cardBody.appendChild(cardText);
    cardBody.appendChild(ghLink);

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