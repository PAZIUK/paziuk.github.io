"use strict"
const TEACHERS = {
  //id 1
  "Цуркан Галина Іванівна": "https://us04web.zoom.us/j/5468798806?pwd=TGdzcHlFai9JYU1wc3lVTzZjRzZoQT09",
  //id 2
  "Ілюк Катерина Валентинівна": "https://us05web.zoom.us/j/6589970070?pwd=Vlp3dTU3ayt5eTNtTGpYSkhOTGU5dz09",
  //id 3
  "Галяра Юрій Дмитрович": "https://us04web.zoom.us/j/3503532115?pwd=MWVXL1FRR3VtRHlxSjYrbFNKRGdjUT09",
  //id 4
  "Мартинюк Світлана Василівна": "https://us05web.zoom.us/j/3265057462?pwd=WEc4L1huMUZkU1JJdnVqU2JVa21XUT09",
  //id 5
  "Палагнюк Тетяна Іванівна": "https://us04web.zoom.us/j/5161188905?pwd=OFpHL1E3Zml3a3cxVlhzczhPYXhuUT09",
  //id 6
  "Агатій Тамара Василівна": "https://us04web.zoom.us/j/9054859091?pwd=a0pNakRjbzdlbHAzbE5tai9NczBEUT09",
  //id 7
  "Ткач Василь Васильович": "https://us05web.zoom.us/j/3673705968?pwd=cTZwZ3JpOGduNUQ2OGZuSE5SWGduZz09",
  //id 8
  "Малинник Василь Васильович": "https://us04web.zoom.us/j/8010710853?pwd=eGs1OGlXUUZSeVUwNjA2NG5nRVg1UT09",
  //id 9
  "Баланецький Віктор Петрович": "https://us04web.zoom.us/j/9282320929?pwd=dCszYnlOL3h4OFllTWNQbnVydlQ4UT09",
  //id 10
  "Дарійчук Людмила Василівна": "https://us04web.zoom.us/j/2438672024?pwd=UDdURjhjRSttdnlJVHBVeWJxZml4Zz09",
  //id 11
  "Агатій Володимир Володимирович": "https://us05web.zoom.us/j/8895427841?pwd=TjVETTBFbFU2c2J4d1ZPdHVLcFU4dz09",
  //id 12
  "Масло Тетяна Олексіївна": "https://us04web.zoom.us/j/6902500564?pwd=QzJkalg5ZkFEY0luVkdVVFh6eUNWdz09",
  //id 13
  "Ганич Дмитро Васильович": "https://zoom.us/j/97488011769?pwd=Y0Zqb1d4NEhUamZlNVJzLzROVVMvUT09",
  //id 14
  "Паньків Оксана Василівна": "https://zoom.us/j/4647730505?pwd=NEV2ckxoSlVlV3B6SVROYThBZmNoUT09",
  //id 15
  "Ткач Уляна Василівна": "https://zoom.us/j/3234675563?pwd=cjY5anQ0VFhick1Kcks2Q2c0WWMyQT09",
  //id 16
  "Ткач Ольга Іванівна": "https://us02web.zoom.us/j/2050752668?pwd=YWkrVEh2QSs1cjBJTTIwZmpzdHdkQT09",
  //id 17
  "Літовська Тетяна Олексіївна": "https://us04web.zoom.us/j/9383897000?pwd=M3BqK3U0WXFOTis3am8wVTV4R0xmUT09",
  //id 18
  "Савчук Василина Василівна": "https://us04web.zoom.us/j/2359560419?pwd=bVBoRFI3K25lYlBxVXl2b2JIREtWUT09",
  //id 19
  "Стрелнікова Марина Манолівна": "https://us05web.zoom.us/j/2470796665?pwd=YnFBcEhtUlc0cXA3NXZwMTBDam5EZz09",
  //id 20
  "Король Галина Василівна": "https://us04web.zoom.us/j/5713849450?pwd=cHp0S0t0c2JxNVp4dlBGNFBod0hWQT09",
  //id 21
  "Пазюк Зоряна Михайлівна": "https://zoom.us/j/2952516060?pwd=ZWh6dlZsdm1pTFFMWWRheXorMkhoQT09",
  //id 22
  "Ралик Оксана Іванівна": "https://us04web.zoom.us/j/7764410678?pwd=Z2lBRjBBaCtMUFlpbzJjSUhaYytDZz09",
  //id 23
  "Михайлюк Світлана Володимирівна": "https://us04web.zoom.us/j/3596491642?pwd=dXpCbXdjME1nYzJWWEppcE5ZeFBCUT09",
  //id 24
  "Микитей Ольга Михайлівна": "https://us05web.zoom.us/j/9686277425?pwd=dGVVZE5FN0gyc1R5TkRVQyttRk0vUT09",
  //id 25
  "Лахман Віра Василівна": "https://zoom.us/j/8167580898?pwd=NDc2UDZUL1E5YVpsOXZMNlNVbldLdz09",
  //id 26
  "": "",
  //id 
  "": "",
  //id 
  "": "",
  //id 
  "": "",
  //id 
  "": "",
  //id 
  "": "",
  //id 
  "": "",
}

let lessonsBlocks = document.querySelectorAll(".btns .lesson");

for (let i = 0; i < lessonsBlocks.length; i++) {
  let startBtn = document.createElement("div");
  let lessonBtn = document.createElement("button");
  let lessonBtnText = document.createElement("div");
  let lessonBtnImg = document.createElement("img");
  let lessonNumber = document.createElement("div");

  startBtn.classList.add("btn");
  lessonBtn.classList.add("lessonBtn");
  lessonBtnText.classList.add("lessonBtnText");
  lessonNumber.classList.add("lessonNumber");
  lessonBtnText.textContent = lessonsBlocks[i].getAttribute("lessonName").toUpperCase();
  lessonNumber.textContent = lessonsBlocks[i].getAttribute("num") + ".";
  lessonBtnImg.classList.add("btnImg");
  lessonBtnImg.setAttribute("src", "https://img.icons8.com/android/48/000000/plus.png");

  let teachersBlock = document.createElement("div");
  teachersBlock.classList.add("teachers")
  let teachersIds = lessonsBlocks[i].getAttribute("teachers").split(",");
  for (let i = 0; i < teachersIds.length; i++) {
    let ID = teachersIds[i] - 1;
    let teacher = document.createElement("div");
    let info = document.createElement("div");
    let desc = document.createElement("div");
    let linkButton = document.createElement("button");
    teacher.classList.add("teacher");
    info.classList.add("info");
    desc.classList.add("desc");

    linkButton.addEventListener("click", () => {
      window.open(Object.values(TEACHERS)[ID]);
    });
    linkButton.textContent = "Перейти в ZOOM";
    if (Object.keys(TEACHERS)[ID].length >= 29) {
      let firstSpace = Object.keys(TEACHERS)[ID].split(" ");
      let newString = "";
      for (let index = 0; index < firstSpace.length; index++) {
        if (index == 0) {
          newString += firstSpace[index] + " <br class='mobile'/>"
        } else {
          newString += ` ${firstSpace[index]}`
        }
      }
      desc.innerHTML = newString;
    } else {
      desc.textContent = Object.keys(TEACHERS)[ID];
    }

    info.appendChild(desc);

    teacher.appendChild(info);
    teacher.appendChild(linkButton);

    teachersBlock.appendChild(teacher);
  }

  lessonBtn.appendChild(lessonBtnText);
  lessonBtn.appendChild(lessonNumber);
  startBtn.appendChild(lessonBtn);
  startBtn.appendChild(lessonBtnImg);

  lessonsBlocks[i].appendChild(startBtn);
  lessonsBlocks[i].appendChild(teachersBlock);
}

/* <div class="btn">
  <button class="lessonBtn">ХІМІЯ</button>
  <img class="btnImg" src="https://img.icons8.com/android/48/000000/plus.png" />
</div>
<div class="teachers">
  <div class="teacher">
    <div class="info">
      <div class="desc">
        Цуркан Галина Іванівна
      </div>
    </div>
    <button
      onclick="window.location.href = 'https://us04web.zoom.us/j/5468798806?pwd=TGdzcHlFai9JYU1wc3lVTzZjRzZoQT09'">
      Перейти в ZOOM
    </button>
  </div>
</div> */