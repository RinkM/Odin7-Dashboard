import { randTilt } from "./makePostIts";



function polaroid(){

  const projectSpace = document.getElementById("projectCardsContainer")


  const projectCard = document.createElement("div");
  projectCard.setAttribute("id", `polaroidDiv` );
  projectCard.classList.add(`polaroid`);
  projectCard.classList.add(randTilt());

  const polaroidImg = new Image();
  polaroidImg.src = "images/self_hike_square.png";
  polaroidImg.alt = "A picture of me";
  polaroidImg.classList.add(`polaroidImg`);
  
  projectCard.appendChild(polaroidImg);
  projectSpace.appendChild(projectCard);

}




export default polaroid