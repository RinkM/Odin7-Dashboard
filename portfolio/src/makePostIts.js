import projectLibrary from "./projectLibrary";

function randTilt(){
  const num = Math.floor(Math.random()*2)
  if (num % 3 == 0){
    return "tiltLeft"
  } else {
    return "tiltRight"
  } 

}

function randColor (){
  const stickyColors = ["orangeBG", "lightPink", "darkPink", "blue", "dullYellow", "brightYellow"]
  const num = Math.floor(Math.random()*6)
  return stickyColors[num]
}



function randNote(card){
  const num = Math.floor(Math.random()*2)
  if (num == 0){
    buildPostIts(card)
  } else {
    buildNotes(card)
  }
}



function makePostIts () {
  const makePostIts = projectLibrary.map((card)=> {
    randNote(card)
  })

}





function buildPostIts(card){
  const projectSpace = document.getElementById("projectCardsContainer")
  const tilt = randTilt()
  const type = "";

  const projectCard = document.createElement("div");
  projectCard.setAttribute("id", `card${card.cardNumber}` );
  projectCard.classList.add("projectCard");
  projectCard.classList.add(randColor());
  projectCard.classList.add(randTilt());

  projectCard.appendChild(buildPostItHeader(card, tilt, type));
  projectCard.appendChild(buildPostItBody(card, tilt, type));
  projectCard.appendChild(buildPostitLinks(card, tilt, type));

  projectSpace.appendChild(projectCard);

}

function buildNotes(card){
  const projectSpace = document.getElementById("projectCardsContainer")
  const tilt = randTilt()
  const type = "Note";

  const projectCard = document.createElement("div");
  projectCard.setAttribute("id", `card${card.cardNumber}` );
  projectCard.classList.add(`projectCard${type}`);
  projectCard.classList.add(randTilt());

  projectCard.appendChild(buildPostItHeader(card, tilt, type));

  projectCard.appendChild(buildPostItBody(card, tilt, type));
  projectCard.appendChild(buildPostitLinks(card, tilt, type));
  projectCard.appendChild(noteBackgroundImg());

  projectSpace.appendChild(projectCard);
}


  function buildPostItHeader (card, tilt, type){
    const cardHeader = document.createElement("div");
    cardHeader.classList.add(`cardHeader${type}`);
    const projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = card.projectName
    cardHeader.classList.add(tilt);
    cardHeader.appendChild(projectName);
    return cardHeader
  }

  function buildPostItBody(card, tilt, type) {
    const cardBody = document.createElement("div");
    cardBody.classList.add(`cardBody${type}`);
    const cardText = document.createElement("div");
    cardText.classList.add(`cardText${type}`);
    cardText.textContent = card.projectDescription;
    cardBody.classList.add(tilt);
    cardBody.appendChild(cardText);
    return cardBody
  }


  function buildPostitLinks (card, tilt, type){
    const cardLinks = document.createElement("div");
    cardLinks.classList.add(`cardLinks${type}`);
    cardLinks.classList.add(tilt);
    cardLinks.appendChild(appPreview(card));
    cardLinks.appendChild(codeLink(card));

    return cardLinks

  }


  function appPreview (card){
    const viewApp = document.createElement("div");
    viewApp.classList.add("viewApp");
    viewApp.classList.add("grid");
    
    const previewAnchorLink = document.createElement("a");
    previewAnchorLink.href = `${card.previewLink}`
    previewAnchorLink.setAttribute("target","_blank");
    previewAnchorLink.setAttribute("rel","noreferrer noopener");
    previewAnchorLink.classList.add("imgProjectThumb");
    previewAnchorLink.textContent = "View App"

    viewApp.appendChild(previewAnchorLink);
    
    return viewApp

  }

  function codeLink (card){
    const codeText = document.createElement("div");
    codeText.classList.add("codeText");
    codeText.classList.add("centerText");
    codeText.classList.add("grid");
    

    const codeAnchorLink = document.createElement("a");
    codeAnchorLink.href = `${card.projectGithub}`
    codeAnchorLink.setAttribute("target","_blank");
    codeAnchorLink.setAttribute("rel","noreferrer noopener");
    codeAnchorLink.textContent = "Inspect Code";
        
    codeText.appendChild(codeAnchorLink);

    return codeText

  }
  // portfolio\src\images\idea_top.png

  function noteBackgroundImg(){
    const imgSrc = ["/images/toDoPaper.jpg",
      "/images/idea_top.png"]

      const num = Math.floor(Math.random()*imgSrc.length)

    const backgroundImg = document.createElement("img");
    const object = {
      class :"todoImage",
      src: imgSrc[num],
      alt: "Lined paper with the words TO DO written on it."
    }
      setAttributes(backgroundImg, object)
    return backgroundImg
  
  }


  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }


  

export {makePostIts, randTilt}