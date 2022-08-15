let cardLibrary = [{
    "cardNumber": 0,
    "projectName": "Calculator",
    "projectLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin5-Calculator/blob/main/app.html",
    "projectGithub": "https://github.com/RinkM/Odin5-Calculator",
    "projectDescription": "There isn't much to see here right now. But if there was something to see, it'd be pretty cool to see. What do you think about this thing you want to see but can't?",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 1,
    "projectName": "Dogs Without Laps",
    "projectLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin6-SubscriptionForm/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin6-SubscriptionForm",
    "projectDescription": "A subscription form. There isn't much to see here right now. But if there was something to see, it'd be pretty cool to see. What do you think about this thing you want to see but can't?",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 2,
    "projectName": "Sketch an Etch",
    "projectLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin4-Drawing/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin4-Drawing",
    "projectDescription": "A drawing app. There isn't much to see here right now. But if there was something to see, it'd be pretty cool to see. What do you think about this thing you want to see but can't?",
    "projectThumb": "images/fishAvatarSmall.png",
    },
    {
    "cardNumber": 3,
    "projectName": "Rock, Paper, Scissors",
    "projectLink": "https://htmlpreview.github.io/?https://github.com/RinkM/Odin3-RPS/blob/main/index.html",
    "projectGithub": "https://github.com/RinkM/Odin3-RPS",
    "projectDescription": " RPS. There isn't much to see here right now. But if there was something to see, it'd be pretty cool to see. What do you think about this thing you want to see but can't?",
    "projectThumb": "images/fishAvatarSmall.png",
    }
]





    let projectSpace = document.getElementsByClassName("projectsContainer")[0];
// let projectName = document.getElementsByClassName("projectName")[0];

// projectName.textContent = card.projectName



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
    avatarLink.href = `${card.projectLink}`
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

// Post into header
    projectAvatar.appendChild(avatarLink);
    cardHeader.appendChild(projectName);
    cardHeader.appendChild(projectAvatar);

// Post into body
    cardBody.appendChild(cardText);
    cardBody.appendChild(ghLink);

// Post header and body
    projectCard.appendChild(cardHeader);
    projectCard.appendChild(cardBody);

// Post card.
    projectSpace.appendChild(projectCard);

}


const makeCards = cardLibrary.map(card=> {
    cardBuilder(card)
    }
    )

