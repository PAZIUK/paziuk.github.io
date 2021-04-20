let header = document.querySelector('header');
let headerPart = 
  '<div class="header" tabindex="1">' +
    '<div class="logo">' +
      '<a href="/"><img src="/img/logo.png" alt="Logo"></a>' +
    '</div>' +
    '<nav class="nav">' +
      '<ul>' +
        '<li><a href="/projects/projects.html">ALL PROJETCS</a></li>' +
        '<li><a href="/#about">ABOUT ME</a></li>' +
        '<li><a href="/#study">STUDY</a></li>' +
        '<li><a href="/colors/colors.html">MY PALETTES</a></li>' +
        '<li><a href="/#contacts">CONTACTS</a></li>'
      '</ul>' +
    '</nav>' +
    '<div class="mobile-bar" onclick="toggle();">' +
      '<span></span>' +
      '<span></span>' +
      '<span></span>' +
    '</div>' +
  '</div>';

header.innerHTML = headerPart;