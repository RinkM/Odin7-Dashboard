

## coming back to this after some time...
I'm looking to revamp this.  What changes should I make?
Something Fluid. Scrolls when you go down.
Mobile friendly.  I like the post it note idea. 
Loading Screen?  Erase the whiteboard?
Two sections of projects?    Just a little of everything?
How to host it all?

OdinProject Explanation.  I started with python moved to javascript?

What about making the baby app?  
javascript?  Something like that...has a user. 

THIS THIS HAD HEXESESES  WHAT HAPPENED?
Also get a new domain name.


http://weather.rinkertm-portfolio.rf.gd/

.intro-text{
    text-align: center;
    font-size: 3em;
    width: 0ch;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    background-image: linear-gradient(155deg, #fb7419, #bc1429, #319197);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.intro-text.active{
    animation: typeIn 2s steps(28) forwards;
}
@keyframes typeIn {
    to { width: 28ch; }
}



# 9-4
## Major Update Finalized Notes
### Things to add
* when orangee tab disappears, three line boxes
* better pictures for a few project icons
  - Rock Paper Scissors
  - React App

home
projects 

From Projects Tab : 
From here, you can access all my projects. Click on a card to open the app. Click on the GitHub logo to see the code.

# 8-17 todo
fix color for bottom.
add intro.  Think about message space before projects.

Change nav bar on the left. Make it less items.

Make button open new form for new card.
New info is posted into console.

About me page. 
Contact me... other tabs...

make logos the 
# 8/14 Todo List

~~fix body grid and re-place the nav, header, and mainspace.~~
Header buttons.  move them to other side.
extend the search bar to fit
find avatars? logos?

take screenshots of projects. 
Or an ICON

waht about the css effect / cards?

ohhh man I'm so tired...

Number of lines coded...
functions called...

Num Python projects
num of Javascript Projects??





# THE PLAN

JavaScript Thouhgts
Make the cards in HTML.  Blank, but formatted. Make a practice one. Repeat.
Add object information.  USE SPANS?
Use javascript to fill them with things. 

    Project Cards

    A Form to enter the next projects. 
    It makes a new object. Cards are redrawn.  
    Grid shuffles them down? 

## Nav Bar
* ~~Find and Place Icons~~
* Logo and Title - Larger Font
* Spacing between Icons
* Where do links lead?  About me? 
* Font Sizes and Color. Something that is clear to read
* 


## Header
* Magnifying glass icon
* Do the buttuns function?
    * new post? Project?  Add to the page with Javascript?
* 
* 
* 
* 
* 
* 




### Top line of Header
* make the search bar do something?  narrow down the projects?  maybe...
* Alarm Icon
* Avatar Icon
* Username

## Announcements



## Trending
* Find User Avatars - Like Rafikki or Fish
* OR something to do with my projects
* Make a componant line.   Add information to it/




## Your Projects

### The Cards
* background is an image of the app? 
name of app + picture? Somethign like that?
Hover gives you information. The description.
Click goes to the app.


## Javascript Card Making
So...  
if
    screenDiv = document.createElement("div");
    screenDiv.classList.add("screen");
    workspace2.appendChild(screenDiv);

the code to make and post 1 div.  


card1 = document.createElement("div");
screenDiv.classList.add("screen");
- add the ID#.  



Header Div: 

Line 1: Search bar, alerts, avatar name
Line 2: Welcome message  3 action buttons.

Main Div : 
Your projects with indiviual project cards.
2 wide, many down.

Announcement column

Trending column - like twitter…










## CSS Hex grid with GRID
https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/



# credits

Photo by Eva Bronzini: https://www.pexels.com/photo/word-idea-stamped-on-paper-6475578/


Tornup edged paper - Photo by <a href="https://unsplash.com/@marcusurbenz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marcus Urbenz</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

notecard+sticky <a href="https://www.freepik.com/free-photo/paper-sticky-notes_1324669.htm?query=note%20card">Image by kstudio</a> on Freepik


library photo 
Image by <a href="https://pixabay.com/users/elifrancis-1160677/?utm_source=link-attribution&amp;utm_medium=referrasl&amp;utm_campaign=image&amp;utm_content=1163695">Eli Digital Creative</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1163695">Pixabay</a>


Color Pencils
Photo by <a href="https://unsplash.com/@kellitungay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelli Tungay</a> on <a href="https://unsplash.com/s/photos/education?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  Color Pencils with blue background and vertical
  Photo by <a href="https://unsplash.com/@tamanna_rumee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tamanna Rumee</a> on <a href="https://unsplash.com/s/photos/education?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  



<p>A few examples of hexagons with inline SVG (via HTML5). Also shows some CSS transitions of SVG attributes.</p>
<!-- 
<svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" viewBox="0 0 64 64">
<polygon fill="#F3BC23" stroke="#F3BC23" stroke-width="1" points="30,4,4,60, 60,60"/>
  
<text x="31" y="50" text-anchor="middle" fill="white" font-size="30">H</text>
 </svg>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 64 64">
  <polygon fill="#F3BC23" stroke="#F3BC23" stroke-width="1" points="30,4,4,60,60,60"/>
    <text x="31" y="50" text-anchor="middle" fill="white" font-size="30">H</text>
    
  
 -->
<br>
<div>
<svg class = "hex" height="110" width="100">
  <polygon 
points="50 3,100 28,100 75, 50 100,3 75,3 25" 
stroke="black" fill="yellow" stroke-width="5"/>
<text class = "textNohover" x="50" y="50" text-anchor="middle" fill="blue" font-size="30">X</text>

<text class = "textNohover" x="50" y="50" text-anchor="middle" fill="blue" font-size="30">H</text>
</svg>
  </div>




https://preview.colorlib.com/#jackson
https://colorlib.com/wp/template/jackson/


<a href="#" data-nav-section="home">Home</a>


<ul>
<li class="active"><a href="#" data-nav-section="home">Home</a></li>
<li class=""><a href="#" data-nav-section="about">About</a></li>
<li><a href="#" data-nav-section="services">Services</a></li>
<li><a href="#" data-nav-section="skills">Skills</a></li>
<li><a href="#" data-nav-section="education">Education</a></li>
<li><a href="#" data-nav-section="experience">Experience</a></li>
<li><a href="#" data-nav-section="work">Work</a></li>
<li><a href="#" data-nav-section="blog">Blog</a></li>
<li><a href="#" data-nav-section="contact">Contact</a></li>
</ul>


<section id="colorlib-hero" class="js-fullheight" data-section="home" style="height: 327px;">

<section class="colorlib-about" data-section="about">

