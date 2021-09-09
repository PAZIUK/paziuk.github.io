


//OUT PROJECTS
let projectsBlock = document.querySelector("#projects .projects");  

let projectImgFolder = "img/project/",
    projectLinkFolder = "projects/",
    techFolder = "img/hardSkillsImages/"


let appData = {
  ILikeThisCars:{
    type:"site",
    date:"26.03.21",
    imgLink:"ilikethiscars/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg"],
    link:projectLinkFolder+"sites/ilikethiscars/index.html",
    smallDesc:"Website about cars",
    tech:["HTML5","CSS3","JS"],
    id:1,
    // description:`It's web-service - ILikeThisCars. And I was create this very easy website for selling cars. If you like it, let's view project!`
  },
  DiLeMaClothes:{
    type:"site",
    date:"27.03.21",
    imgLink:"dilemaclothes/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
    link:projectLinkFolder+"sites/dilemaclothes/index.html",
    smallDesc:"Fashion website and shop",
    tech:["HTML5","CSS3","JS"],
    id:2,
    // description:`It's a women clothes shop. You can see this beautiful website, but you can't buy women clothes`
  },
  myPizza:{
    type:"site",
    date:"28.03.21",
    imgLink:"mypizza/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
    link:projectLinkFolder+"sites/mypizza/index.html",
    smallDesc:"Restaurant Website",
    tech:["HTML5","CSS3","JS"],
    id:3,
    // description:`You like pizza? I VERY LIKE PIZZA! It's restaurant can sell you a lot of pizza!`
  },
  HealthOfHealth:{
    type:"site",
    date:"29.03.21",
    imgLink:"iamhealth/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
    link:projectLinkFolder+"sites/iamhealth/index.html",
    smallDesc:"Hospital website",
    tech:["HTML5","CSS3","JS"],
    id:4,
    // description:`Health very important! If you need a help , HealthOfHealth can help you!`
  },
  helloBlogger:{
    type:"site",
    date:"30.03.21",
    imgLink:"helloblogger/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
    link:projectLinkFolder+"sites/helloblogger/index.html",
    smallDesc:"Website for bloggers",
    tech:["HTML5","CSS3","JS"],
    id:5,
    // description:`Hello blogger! I know what you like shoot on camera - your life, your days! But you need a teachers! Exactly helloblogger can help you with this!`
  },
  JulieMeo:{
    type:"site",
    date:"31.03.21",
    imgLink:"JulieMeo/",
    img:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
    link:projectLinkFolder+"sites/juliemeo/index.html",
    smallDesc:"Online-cinema website",
    tech:["HTML5","CSS3","JS"],
    id:6,
    // description:`Everyone like watch Films, serials and cartoons. JulieMeo - it's online cinema for you!`
  },
  "2D Snake":{
    type:"game",
    date:"20.05.21",
    imgLink:"snake/",
    img:["1.jpg"],
    link:projectLinkFolder+"games/snake/snake.html",
    smallDesc:"2D Game",
    tech:["HTML5","CSS3","JS"],
    id:7,
    // description:``
  },
  "Guess the number":{
    type:"game",
    date:"25.05.21",
    imgLink:"whatANumber/",
    img:["1.jpg"],
    link:projectLinkFolder+"games/whatANumber/index.html",
    smallDesc:"To try to guess my number",
    // description:`I guessed the number now you need to try to guess it`,
    tech:["HTML5","CSS3","JS"],
    id:8,
  },
  "Number Converter":{
    type:"program",
    date:"06.06.21",
    imgLink:"numberConverter/",
    img:["1.jpg"],
    link:projectLinkFolder+"programs/numberConverter/index.html",
    smallDesc:"Changing numbers by number system",
    tech:["HTML5","CSS3","JS"],
    id:9,
    // description:`Changing numbers by number system`
  },
  "Random Item":{
    type:"program",
    date:"07.06.21",
    imgLink:"randomItem/",
    img:["1.jpg"],
    link:projectLinkFolder+"programs/randomItem/index.html",
    smallDesc:"You know what is it!",
    tech:["HTML5","CSS3","JS"],
    id:10,
    description:`You enter the list through a comma, and the program gives you random item`
  },
  "Timetable":{
    type:"program",
    date:"08.06.21",
    imgLink:"timetableLessons/",
    img:["1.jpg"],
    link:projectLinkFolder+"programs/timetableLessons/index.html",
    smallDesc:"Help for you with timetable of school lessons",
    tech:["HTML5","CSS3","JS"],
    id:11,
    // description:`This small web-programm can help you with timetable of school lessons`
  },
  // Timer:{
  //   type:"program",
  //   date:"25.06.21",
  //   imgLink:"timer/",
  //   img:["1.jpg"],
  //   link:projectLinkFolder+"programs/timer/index.html",
  //   //description:``
  // },
  "Is it a palindrome?":{
    type:"program",
    date:"29.06.21",
    imgLink:"palindrome/",
    img:["1.jpg"],
    link:projectLinkFolder+"programs/palindrome/index.html",
    tech:["HTML5","CSS3","JS"],
    smallDesc:"Check your word on the palindrome",
    id:12,
    // description:`A palindrome is a word, number, phrase, or programs sequence of characters which reads the same backward as forward, such as madam or racecar.`
  },
  "Zodiac sign":{
    type:"program",
    date:"30.06.21",
    imgLink:"zodiac/",
    img:["1.jpg"],
    link:projectLinkFolder+"programs/zodiac/index.html",
    smallDesc:"You know what zodiac sign you have?",
    tech:["HTML5","CSS3","JS"],
    id:13,
    //description:``,
  },
  "Alisa Portman CV":{
    type:"site",
    date:"04.07.21",
    imgLink:"alisa-portman-CV/",
    img:["1.jpg","2.jpg","3.jpg"],
    link:projectLinkFolder+"sites/alisa-portman-CV/index.html",
    smallDesc:"Just website portfolio",
    tech:["HTML5","CSS3","JS"],
    id:14,
    //description:``,
  },
  "CLICKER":{
    type:"game",
    date:"25.07.21",
    imgLink:"clicker/",
    img:["1.jpg"],
    link:projectLinkFolder+"games/clicker/index.html",
    smallDesc:"How many times you will click in 5 sec.?",
    tech:["HTML5","CSS3","JS"],
    id:15,
    //description:``,
  },
  "Tic-Tac-Toe":{
    type:"game",
    date:"28.08.21",
    imgLink:"tictactoe/",
    img:["1.jpg"],
    link:projectLinkFolder+"games/tictactoe/index.html",
    smallDesc:"You know what is it!",
    tech:["HTML5","CSS3","JS"],
    id:16,
    //description:``,
  },
  // "Calculator":{
  //   type:"program",
  //   date:"03.09.21",
  //   imgLink:"calc/",
  //   img:["1.jpg"],
  //   link:projectLinkFolder+"programs/calc/index.html",
  //   smallDesc:"You know what is it!",
  //   tech:["HTML5","CSS3","JS"],
  //   id:17,
  //   //description:``,
  // },
  // "Word From Word":{
  //   type:"game",
  //   date:"08.09.21",
  //   imgLink:"wfw/",
  //   img:["1.jpg"],
  //   link:projectLinkFolder+"games/wfw/index.html",
  //   smallDesc:"You know what is it!",
  //   tech:["HTML5","CSS3","JS"],
  //   id:18,
  //   //description:``,
  // },
}
 


































if(window.location.href.split("/").pop().substr(0,13)=="projects.html"){
  for (let i = Object.values(appData).length-1; i >= 0; i--) {

    // //if is undefined in objects
    // if(Object.values(appData)[i].imgLink == undefined) break;
    // if(Object.values(appData)[i].type == undefined) break;
    // if(Object.values(appData)[i].img == undefined) break;
    // if(Object.values(appData)[i].link == undefined) break;
    // if(Object.values(appData)[i].tech == undefined) break;
    // if(Object.values(appData)[i].smallDesc == undefined) break;

    //Create elements
    let div = document.createElement("div"),
        photo = document.createElement("div"),
        info = document.createElement("div"),
        name = document.createElement("div"),
        desc = document.createElement("div"),
        tech = document.createElement("div"),
        href = document.createElement("a"),
        id = document.createElement("div"),
        like = document.createElement("i");

    //Add class names for elements
    div.className = "project "+Object.values(appData)[i].type;
    photo.className = "photo";
    info.className = "info";
    name.className = "name";
    desc.className = "desc";
    tech.className = "tech";
    id.id = "p"+Object.values(appData)[i].id;

    if(localStorage.getItem("saved")){
      let saved = localStorage.getItem("saved").split(",").map( s => +s );
      if (saved.includes(Object.values(appData)[i].id)) {
        like.className = "bx bxs-heart";
        div.classList.add("saved");
      } else {
        like.className = "bx bx-heart";
      }
    } else {
      like.className = "bx bx-heart";
    }

    //Add values in elements
    name.textContent = Object.keys(appData)[i];
    desc.textContent = Object.values(appData)[i].smallDesc;
    href.setAttribute("href","../"+Object.values(appData)[i].link);
    href.textContent = "View project"

    //add tech attributes
    let type = "";
    for(let t = 0;t<Object.values(appData)[i].tech.length;t++){
      if (!(t==Object.values(appData)[i].tech.length)) {
        type += Object.values(appData)[i].tech[t]+"+";
      }
    }
    type = type.substr(0,type.length-1);
    div.setAttribute("tech",type);

    //add tech images
    for(let it = 0;it<Object.values(appData)[i].tech.length;it++){
      let img = document.createElement("img");
      img.setAttribute("alt",techFolder+Object.values(appData)[i].tech[it]+"");
      img.setAttribute("src","../"+techFolder+Object.values(appData)[i].tech[it]+".png");

      tech.appendChild(img);

    }

    //Add images
    for (let im = 0; im < Object.values(appData)[i].img.length; im++) {
      let img = document.createElement("img");
      img.setAttribute("alt",Object.keys(appData)[i]+"");
      img.setAttribute("src","../"+projectImgFolder+Object.values(appData)[i].imgLink+Object.values(appData)[i].img[im]);
      photo.appendChild(img);


      if(Object.values(appData)[i].img.length==1){
        photo.classList.add("onePhoto")
        if (Object.values(appData)[i].id==7) {
          photo.style.background = "rgb(241 255 121)";
        }
        if (Object.values(appData)[i].id==9) {
          photo.style.backgroundColor = "#26001a";
        }
        if (Object.values(appData)[i].id==10) {
          photo.style.backgroundColor = "#0195dd";
        }
        if (Object.values(appData)[i].id==11) {
          photo.style.backgroundColor = "#fff41c";
        }
        if (Object.values(appData)[i].id==12) {
          photo.style.backgroundColor = "#3a0088";
        }
        if (Object.values(appData)[i].id==13) {
          photo.style.backgroundColor = "#26afff";
        }
        if (Object.values(appData)[i].id==15) {
          photo.style.backgroundColor = "#000000";
        }
        if (Object.values(appData)[i].id==16) {
          photo.style.backgroundColor = "#56baed";
        }
      }
    }

    //Create DOM tree

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(tech);
    info.appendChild(href);
    info.appendChild(like);

    div.appendChild(photo);
    div.appendChild(info);
    div.appendChild(id);

    //Add ELEMENT in HTML
    projectsBlock.appendChild(div);

  }
} else {
  for (let i = Object.values(appData).length-1; i >= Object.values(appData).length-12; i--) {

    // //if is undefined in objects
    // if(Object.values(appData)[i].imgLink == undefined) break;
    // if(Object.values(appData)[i].type == undefined) break;
    // if(Object.values(appData)[i].img == undefined) break;
    // if(Object.values(appData)[i].link == undefined) break;
    // if(Object.values(appData)[i].tech == undefined) break;
    // if(Object.values(appData)[i].smallDesc == undefined) break;

    //Create elements
    let div = document.createElement("div"),
        photo = document.createElement("div"),
        info = document.createElement("div"),
        name = document.createElement("div"),
        desc = document.createElement("div"),
        tech = document.createElement("div"),
        href = document.createElement("a"),
        id = document.createElement("div"),
        like = document.createElement("i");

    //Add class names for elements
    div.className = "project";
    photo.className = "photo";
    info.className = "info";
    name.className = "name";
    desc.className = "desc";
    tech.className = "tech";
    id.id = "p"+Object.values(appData)[i].id;

    if(localStorage.getItem("saved")){
      let saved = localStorage.getItem("saved").split(",").map( s => +s );
      if (saved.includes(Object.values(appData)[i].id)) {
        like.className = "bx bxs-heart";
      } else {
        like.className = "bx bx-heart";
      }
    } else {
      like.className = "bx bx-heart";
    }

    //Add values in elements
    name.textContent = Object.keys(appData)[i];
    desc.textContent = Object.values(appData)[i].smallDesc;
    href.setAttribute("href",Object.values(appData)[i].link);
    href.textContent = "View project"

    for(let it = 0;it<Object.values(appData)[i].tech.length;it++){
      let img = document.createElement("img");
      img.setAttribute("alt",techFolder+Object.values(appData)[i].tech[it]+"");
      img.setAttribute("src",techFolder+Object.values(appData)[i].tech[it]+".png");

      tech.appendChild(img);

    }

    //Add images
    for (let im = 0; im < Object.values(appData)[i].img.length; im++) {
      let img = document.createElement("img");
      img.setAttribute("alt",Object.keys(appData)[i]+"");
      img.setAttribute("src",projectImgFolder+Object.values(appData)[i].imgLink+Object.values(appData)[i].img[im]);
      photo.appendChild(img);


      if(Object.values(appData)[i].img.length==1){
        photo.classList.add("onePhoto")
        if (Object.values(appData)[i].id==7) {
          photo.style.background = "rgb(241 255 121)";
        }
        if (Object.values(appData)[i].id==9) {
          photo.style.backgroundColor = "#26001a";
        }
        if (Object.values(appData)[i].id==10) {
          photo.style.backgroundColor = "#0195dd";
        }
        if (Object.values(appData)[i].id==11) {
          photo.style.backgroundColor = "#fff41c";
        }
        if (Object.values(appData)[i].id==12) {
          photo.style.backgroundColor = "#3a0088";
        }
        if (Object.values(appData)[i].id==13) {
          photo.style.backgroundColor = "#26afff";
        }
        if (Object.values(appData)[i].id==15) {
          photo.style.backgroundColor = "#000000";
        }
        if (Object.values(appData)[i].id==16) {
          photo.style.backgroundColor = "#56baed";
        }
      }
    }

    //Create DOM tree

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(tech);
    info.appendChild(href);
    info.appendChild(like);

    div.appendChild(photo);
    div.appendChild(info);
    div.appendChild(id);

    //Add ELEMENT in HTML
    projectsBlock.appendChild(div);

  }
}