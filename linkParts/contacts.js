let contact = document.querySelector('.contacts');
let contactPart = 
  '<div class="tel-mail">' +
    '<p>' +
      '<img src="https://img.icons8.com/nolan/64/apple-phone.png" alt="Phone">' +
      '<a href="tel:+380950218131">+38 095 02181 31</a>' +
    '</p>' +
    '<p>' +
      '<img src="https://img.icons8.com/nolan/64/apple-mail.png" alt="Mail">' +
      '<a href="mailto:paz.serhiy@gmail.com">paz.serhiy@gmail.com</a>' +
    '</p>' +
  '</div>' +
  '<ul class="social-media">' +
    '<li>' +
      '<a href="https://www.instagram.com/paziuk.17/" target="_blank">' +
        '<img src="img/instagram.png">' +
      '</a>' +
    '</li>' +
    '<li>' +
      '<a href="https://www.facebook.com/profile.php?id=100026265493894" target="_blank">' +
        '<img src="img/facebook.png">' +
      '</a>' +
    '</li>' +
    '<li>' +
      '<a href="https://t.me/Paziuk17" target="_blank">' +
        '<img src="img/telegram.png">' +
      '</a>' +
    '</li>' +
    '<li>' +
      '<a href="http://linkedin.com/in/serhiy-paziuk-2752021b7" target="_blank">' +
        '<img src="img/linkedin.png">' +
      '</a>' +
    '</li>' +
    '<li>' +
      '<a href="https://github.com/PAZIUK" target="_blank">' +
        '<img src="img/github.png">' +
      '</a>' +
    '</li>' +
  '</ul>';

contact.innerHTML = contactPart;