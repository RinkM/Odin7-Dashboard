
const makePostIts = cardLibrary.map((card)=> {
  buildPostIts(card)
})


function buildPostIts(card){

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
