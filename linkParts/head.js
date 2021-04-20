let head = document.querySelector('head');
let headPart = 
  // MUST BE
  '<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">' +
  '<title>Serhiy Paziuk</title>' +

  //STYLES
  '<link rel="stylesheet" href="/css/style.css">' +
  '<link rel="stylesheet" href="/css/popup.css">' +

  //FAVICONS
  '<link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">' +
  '<link rel="shortcut icon" href="/img/favicon-32x32.png" type="image/png">' +
  '<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">' +
  '<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">' +
  '<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">' +
  '<link rel="manifest" href="/img/site.webmanifest">' +
  '<link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#00ffd7">' +
  '<meta name="msapplication-TileColor" content="#00ffd7">' +
  '<meta name="msapplication-TileImage" content="/img/mstile-144x144.png">' +
  '<meta name="theme-color" content="#00ffd7">' +

  //FONTS
  '<link rel="preconnect" href="https://fonts.gstatic.com">' +
  '<link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet">' +
  '<link href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap" rel="stylesheet">';

head.innerHTML = headPart;