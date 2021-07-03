let content = `<div class="content">
                <div class="link" id="projects">My Projects</div>
                <div class="container">
                  <div class="info" >
                    <div class="info-header">
                      <div class="info-header-tab project">All Projects (<span></span>)</div>
                      <div class="border"></div>
                      <div class="info-header-tab site">Sites (<span></span>)</div>
                      <div class="border"></div>
                      <div class="info-header-tab game">Web Games (<span></span>)</div>
                      <div class="border"></div>
                      <div class="info-header-tab other">Other (<span></span>)</div>
                    </div>
                  </div>
                </div>
              </div>`
document.body.innerHTML += content;


//OUT PROJECTS
let projectsBlock = document.querySelector(".content .info");

let projectImgFolder = "img/project/",
  projectLinkFolder = "projects/";

let appData = {
  ILikeThisCars:{
    type:"site",
    date:"26.03.21",
    imgLink:"ilikethiscars/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg"],
    link:projectLinkFolder+"sites/ilikethiscars/index.html",
    // description:`It's web-service - ILikeThisCars. And I was create this very easy website for selling cars. If you like it, let's view project!`
  },
  DiLeMaClothes:{
    type:"site",
    date:"27.03.21",
    imgLink:"dilemaclothes/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
    link:projectLinkFolder+"sites/dilemaclothes/index.html",
    // description:`It's a women clothes shop. You can see this beautiful website, but you can't buy women clothes`
  },
  myPizza:{
    type:"site",
    date:"28.03.21",
    imgLink:"mypizza/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
    link:projectLinkFolder+"sites/mypizza/index.html",
    // description:`You like pizza? I VERY LIKE PIZZA! It's restaurant can sell you a lot of pizza!`
  },
  HealthOfHealth:{
    type:"site",
    date:"29.03.21",
    imgLink:"iamhealth/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
    link:projectLinkFolder+"sites/iamhealth/index.html",
    // description:`Health very important! If you need a help , HealthOfHealth can help you!`
  },
  helloBlogger:{
    type:"site",
    date:"30.03.21",
    imgLink:"helloblogger/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
    link:projectLinkFolder+"sites/helloblogger/index.html",
    // description:`Hello blogger! I know what you like shoot on camera - your life, your days! But you need a teachers! Exactly helloblogger can help you with this!`
  },
  JulieMeo:{
    type:"site",
    date:"31.03.21",
    imgLink:"JulieMeo/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
    link:projectLinkFolder+"sites/juliemeo/index.html",
    // description:`Everyone like watch Films, serials and cartoons. JulieMeo - it's online cinema for you!`
  },
  "2D Snake":{
    type:"game",
    date:"20.05.21",
    imgLink:"snake/",
    img:["1.jpg"],
    link:projectLinkFolder+"games/snake/index.html",
    // description:``
  },
  "Guess the number":{
    type:"game",
    date:"25.05.21",
    imgLink:"whatANumber/",
    img:["1.jpg"],
    link:projectLinkFolder+"games/whatANumber/index.html",
    description:`I guessed the number now you need to try to guess it`,
  },
  "Number Converter":{
    type:"other",
    date:"06.06.21",
    imgLink:"numberConverter/",
    img:["1.jpg"],
    link:projectLinkFolder+"other/numberConverter/index.html",
    description:`Changing numbers by number system`
  },
  "Random Item":{
    type:"other",
    date:"07.06.21",
    imgLink:"randomItem/",
    img:["1.jpg"],
    link:projectLinkFolder+"other/randomItem/index.html",
    description:`You enter the list through a comma, and the program gives you random item`
  },
  "Timetable of school lessons":{
    type:"other",
    date:"08.06.21",
    imgLink:"timetableLessons/",
    img:["1.jpg"],
    link:projectLinkFolder+"other/timetableLessons/index.html",
    description:`This small web-programm can help you with timetable of school lessons`
  },
  // Timer:{
  //   type:"other",
  //   date:"25.06.21",
  //   imgLink:"timer/",
  //   img:["1.jpg"],
  //   link:projectLinkFolder+"other/timer/index.html",
  //   //description:``
  // },
  "Is it a palindrome?":{
    type:"other",
    date:"29.06.21",
    imgLink:"palindrome/",
    img:["1.jpg"],
    link:projectLinkFolder+"other/palindrome/index.html",
    description:`A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.`
  },
  "What your zodiac sign?":{
    type:"other",
    date:"30.06.21",
    imgLink:"zodiac/",
    img:["1.jpg"],
    link:projectLinkFolder+"other/zodiac/index.html",
    //description:``,
  },
  "Alisa Portman CV":{
    type:"site",
    date:"04.07.21",
    imgLink:"alisa-portman-CV/",
    img:["1.jpg","2.jpg","3.jpg"],
    link:projectLinkFolder+"sites/alisa-portman-CV/index.html",
    //description:``,
  },
}
 








































for (let i = Object.values(appData).length-1; i >= 0; i--) {

  //if is undefined in objects
  if(Object.values(appData)[i].imgLink == undefined) break;
  if(Object.values(appData)[i].type == undefined) break;
  if(Object.values(appData)[i].img == undefined) break;
  if(Object.values(appData)[i].link == undefined) break;

  //Create elements
  let div = document.createElement("div"),
    description = document.createElement("div"),
    descriptionTitle = document.createElement("div"),
    descriptionText = document.createElement("div"),
    photo = document.createElement("div"),
    otherDesription = document.createElement("div"),
    projectDate = document.createElement("div"),
    descriptionBtn = document.createElement("a");

  //Add class names for elements
  div.className = "info-tabcontent fade project " + Object.values(appData)[i].type;
  description.className = "description";
  descriptionTitle.className = "description-title";
  descriptionText.className = "description-text";
  photo.className = "photo";
  otherDesription.className = "other-description"
  projectDate.className = "project-date"
  descriptionBtn.className = "description-btn";
  descriptionBtn.setAttribute("href",Object.values(appData)[i].link)

  //Add values in elements
  descriptionTitle.innerHTML += Object.keys(appData)[i];
  descriptionText.innerHTML += Object.values(appData)[i].description;
  descriptionBtn.innerHTML += "View project";
  projectDate.innerHTML = Object.values(appData)[i].date;

  //Add images
  for (let im = 0; im < Object.values(appData)[i].img.length; im++) {
    let img = document.createElement("img");
    img.setAttribute("alt",Object.keys(appData)[i]+"");
    img.setAttribute("src",projectImgFolder+Object.values(appData)[i].imgLink+Object.values(appData)[i].img[im]);
    photo.appendChild(img);
  }

  //Create DOM tree
  description.appendChild(descriptionTitle);

  if(Object.values(appData)[i].description != undefined) description.appendChild(descriptionText);
  
  otherDesription.appendChild(projectDate);
  otherDesription.appendChild(descriptionBtn);
  div.appendChild(description);
  div.appendChild(photo);
  div.appendChild(otherDesription);

  //Add ELEMENT in HTML
  projectsBlock.appendChild(div);
}