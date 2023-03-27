
const logos = [{
    source : "/images/icons/css3.png",
    name : "CSS",
  },
  {
    source : "/images/icons/html5.png",
    name : "HTML5",
  },
  {
    source: "/images/icons/javaScript.png",
    name: "JAVASCRIPT",
  },

  // {
  //   source: "/images/icons/odinProject.png",
  //   name: "THE ODIN PROJECT",
  // },

  {
    source: "/images/icons/python.png",
    name: "PYTHON",
  },
   {
    source: "/images/icons/react.png",
    name: "REACT",
  },
   {
    source: "/images/icons/sql.png",
    name: "SQL",
  },
   {
    source: "/images/icons/vite.png",
    name: "VITE",
  }]


function addIcons(){
  const mainContainer = document.getElementById("container--logo")
  logos.map((singleLogo)=>{
    const singleContainer = container(singleLogo);
    singleContainer.appendChild(logo(singleLogo));
    singleContainer.appendChild(text(singleLogo));
    mainContainer.appendChild(singleContainer)
  })

}

function container (singleLogo){
  const singleContainer = document.createElement("div");
  singleContainer.classList =  "singleLogo";
  singleContainer.setAttribute("id", `container--${singleLogo.name}`)
return singleContainer
}

function logo (singleLogo){
  const logoImg = document.createElement("img")
  logoImg.src = singleLogo.source
  logoImg.classList = "logoImage"
  logoImg.alt = `A ${singleLogo.name} Logo`
  return logoImg
}

function text (singleLogo){
  const textContainer = document.createElement("div");
  textContainer.innerText = singleLogo.name;
  textContainer.classList = "logoText"
  return textContainer
}


export default addIcons


