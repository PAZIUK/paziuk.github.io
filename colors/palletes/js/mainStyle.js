let style = document.querySelector('style');
let stylePart = 
'body{' +
  'font-family: Della Respira;' +
  'display: flex;' +
  'flex-direction: column;' +
  'margin: 0;' +
  'overflow: hidden;' +
'}' +
'.logo{' +
  'position: absolute;' +
  'top: 10px;' +
  'left: 10px;' +
  'width: 50px;' +
'}' +
'.logo img{' +
  'width: 100%;' +
  'border-radius: 50px;' +
'}' +
'.color{' +
  'display: flex;' +
  'justify-content: flex-end;' +
  'align-items: flex-start;' +
'}' +
'.color p{' +
  'padding: .5%;' +
  'background-color: #fff;' +
  'color: black;' +
  'font-weight: bold;' +
  'font-size: 1.2em;' +
  'margin: 0;' +
  'width: 80px;' +
  'display: flex;' +
  'justify-content: center;' +
  'align-items: center;' +
'}';

style.innerHTML += stylePart;