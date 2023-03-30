import './style.css'

import { makePostIts } from './src/makePostIts'

import handWriteText from './src/handWrite'

import addIcons from './src/iconSkills'

import polaroid from './src/polaroid'

polaroid()
makePostIts()
addIcons()


const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", () => projectScroll())

function projectScroll (){
  const cork = document.getElementById("container--corkboard")
  cork.scrollIntoView({behavior:"smooth"})
}


