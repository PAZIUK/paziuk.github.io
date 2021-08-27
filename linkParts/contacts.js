let phoneNumber = "+38 095 021 81 31",
    phoneImg = "https://img.icons8.com/nolan/64/apple-phone.png",
    email = "paz.serhiy@gmail.com",
    emailImg = "https://img.icons8.com/nolan/64/apple-mail.png",
    media = ["Telegram","LinkedIn","GitHub","Instagram","Facebook"];



let contactsPart = 
`<div class="contacts">
  <div class="link" id="contacts">Contacts</div>
  <div class="container">
    <div class="contacts-block">
      <div class="tel-mail">
        <p>
          <a href="tel:${phoneNumber}">
            <img src="${phoneImg}" alt="Phone">
          </a>
          <a href="tel:${phoneNumber}">${phoneNumber}</a>
        </p> 
        <p> 
            <a href="mailto:${email}">
              <img src="${emailImg}" alt="Mail"> 
            </a>
          <a href="mailto:${email}">${email}</a> 
        </p> 
      </div>
      <ul class="social-media">
        <li>
              <a href="https://t.me/Paziuk17" target="_blank">
                <img src="img/media/telegram.png">
              </a>
          </li>
          <li>
              <a href="http://linkedin.com/in/serhiy-paziuk-2752021b7" target="_blank">
                <img src="img/media/linkedin.png">
              </a>
          </li>
          <li>
              <a href="https://github.com/PAZIUK" target="_blank">
                <img src="img/media/github.png">
              </a>
          </li>
        <li>
              <a href="https://www.instagram.com/paziuk.17/" target="_blank">
                <img src="img/media/instagram.png">
              </a>
          </li>
          <li>
              <a href="https://www.facebook.com/profile.php?id=100026265493894" target="_blank">
                <img src="img/media/facebook.png">
              </a>
          </li>
      </ul>
    </div>
  </div>
</div>`;

document.body.innerHTML += contactsPart;