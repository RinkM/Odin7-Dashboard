import projectLibrary from "./projectLibrary";



const makePostIts = projectLibrary.map((card)=> {
  buildPostIts(card)
})


function randColor (){
  const stickyColors = ["orangeBG", "lightPink", "darkPink", "blue", "dullYellow", "brightYellow"]
  const num = Math.floor(Math.random()*6)
  return stickyColors[num]
}

function buildPostIts(card){
  let projectSpace = document.getElementById("container--projects")

  // projectCard = card body
  const projectCard = document.createElement("div");
  projectCard.setAttribute("id", `card${card.cardNumber}` );
  projectCard.classList.add("projectCard");
  projectCard.classList.add(randColor());

  // Makes card header with Project Name
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("cardHeader");

  const projectName = document.createElement("div");
  projectName.classList.add("projectName");
  projectName.textContent = card.projectName

  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  const cardText = document.createElement("div");
  cardText.classList.add("cardText");
  cardText.textContent = card.projectDescription;


  // Make project Thumb with avatarlink + img    
  const cardLinks = document.createElement("div");
  cardLinks.classList.add("cardLinks");

  const projectThumbnail = document.createElement("div");
  projectThumbnail.classList.add("projectThumbnail");
  projectThumbnail.classList.add("grid");
  projectThumbnail.textContent = "View App"
  
  const avatarLink = document.createElement("a");
  avatarLink.href = `${card.previewLink}`
  avatarLink.setAttribute("target","_blank");
  avatarLink.setAttribute("rel","noreferrer noopener");


  avatarLink.classList.add("imgProjectThumb");

  const imgAvatar = document.createElement('img');
  imgAvatar.src = card.projectThumb;
  imgAvatar.setAttribute("alt","Project Avatar");
  imgAvatar.classList.add("imgProjectThumb");

  avatarLink.appendChild(imgAvatar);
  avatarLink.appendChild(projectName);

  // GitHub Logo 
  const ghLinkDiv = document.createElement("div");
  ghLinkDiv.classList.add("ghLinkDiv");
  ghLinkDiv.classList.add("centerText");
  ghLinkDiv.classList.add("grid");
  ghLinkDiv.textContent = "Inspect Code";

  const ghLink = document.createElement("a");


  
  // ghLink.setAttribute("class","githubLink");
  ghLink.href = `${card.projectGithub}`
  ghLink.setAttribute("target","_blank");
  ghLink.setAttribute("rel","noreferrer noopener");
  
  const ghLogo = document.createElement('img');
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


export default makePostIts