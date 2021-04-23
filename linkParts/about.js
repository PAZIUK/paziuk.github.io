let about = document.querySelector('.about');
let aboutPart = 
  '<div class="about_box">' +
    '<div class="photo">' +
      '<img src="img/logo.png" alt="My Photo">' +
    '</div>' +
    '<div class="about_text">' +
      '<p>HELLO! My name is Serhiy.</p>' +
      '<p>I am 15 years old and I want to be Junior Front-End Developer.</p>' +
      '<p>I was born in Zastavna, Chernivtsi Region, Ukraine.</p>' +
      "<p>In 7 years I went to school, where I still study. Now I'm in 9th grade.</p>" +
      '<p>After school I want to work in a large IT company.</p>' +
    '</div>' +
  '</div>';

about.innerHTML += aboutPart;