let popup = document.querySelector('.popups');



let juliemeo = 
  '<div id="juliemeo" class="popup">' +
		'<div class="popup_body">' +
			'<div class="popup_content">' +
				'<a href="#" class="popup_close close-popup">X</a>' +
				'<div class="popup_title">JulieMeo</div>' +
				'<div class="popup_photo">
					'<img src="/img/project/JulieMeo/1.jpg" alt="Project Photo">' +
					'<img src="/img/project/JulieMeo/2.jpg" alt="Project Photo">' +
					'<img src="/img/project/JulieMeo/3.jpg" alt="Project Photo">' +
					'<img src="/img/project/JulieMeo/4.jpg" alt="Project Photo">' +
					'<img src="/img/project/JulieMeo/5.jpg" alt="Project Photo">' +
				'</div>' +
				'<a href="/projects/juliemeo/juliemeo.html" class="btn popup-btn">View all project</a>' +
			'</div>' +
		'</div>' +
	'</div>';



let helloBlogger =   
	'<div id="helloblogger" class="popup">' +
		'<div class="popup_body">' +
			'<div class="popup_content">' +
				'<a href="#" class="popup_close close-popup">X</a>' +
				'<div class="popup_title">helloBlogger</div>' +
				'<div class="popup_photo">
					'<img src="/img/project/helloblogger/1.jpg" alt="Project Photo">' +
					'<img src="/img/project/helloblogger/2.jpg" alt="Project Photo">' +
					'<img src="/img/project/helloblogger/3.jpg" alt="Project Photo">' +
					'<img src="/img/project/helloblogger/4.jpg" alt="Project Photo">' +
					'<img src="/img/project/helloblogger/5.jpg" alt="Project Photo">' +
					'<img src="/img/project/helloblogger/6.jpg" alt="Project Photo">' +
				'</div>' +
				'<a href="/projects/helloblogger/helloblogger.html" class="btn popup-btn">View all project</a>' +
			'</div>' +
		'</div>' +
	'</div>';



let iamhealth = 
	'<div id="iamhealth" class="popup">' +
		'<div class="popup_body">' +
			'<div class="popup_content">' +
				'<a href="#" class="popup_close close-popup">X</a>' +
				'<div class="popup_title">HealthOfHealth</div>' +
				'<div class="popup_photo">
					'<img src="/img/project/iamhealth/1.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/2.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/3.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/4.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/5.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/6.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/7.jpg" alt="Project Photo">' +
					'<img src="/img/project/iamhealth/8.jpg" alt="Project Photo">' +
				'</div>' +
				'<a href="/projects/iamhealth/iamhealth.html" class="btn popup-btn">View all project</a>' +
			'</div>' +
		'</div>' +
	'</div>';



let mypizza = 
	'<div id="mypizza" class="popup">' +
		'<div class="popup_body">' +
			'<div class="popup_content">' +
				'<a href="#" class="popup_close close-popup">X</a>' +
				'<div class="popup_title">myPizza</div>' +
				'<div class="popup_photo">
					'<img src="/img/project/mypizza/1.jpg" alt="Project Photo">' +
					'<img src="/img/project/mypizza/2.jpg" alt="Project Photo">' +
					'<img src="/img/project/mypizza/3.jpg" alt="Project Photo">' +
					'<img src="/img/project/mypizza/4.jpg" alt="Project Photo">' +
					'<img src="/img/project/mypizza/5.jpg" alt="Project Photo">' +
					'<img src="/img/project/mypizza/6.jpg" alt="Project Photo">' +
				'</div>' +
				'<a href="/projects/mypizza/mypizza.html" class="btn popup-btn">View all project</a>' +
			'</div>' +
		'</div>' +
	'</div>';



let dilemaclothes =
	'<div id="dilemaclothes" class="popup">' +
		'<div class="popup_body">' +
			'<div class="popup_content">' +
				'<a href="#" class="popup_close close-popup">X</a>' +
				'<div class="popup_title">DiLeMaClothes</div>' +
				'<div class="popup_photo">
					'<img src="/img/project/dilemaclothes/1.jpg" alt="Project Photo">' +
					'<img src="/img/project/dilemaclothes/2.jpg" alt="Project Photo">' +
					'<img src="/img/project/dilemaclothes/3.jpg" alt="Project Photo">' +
					'<img src="/img/project/dilemaclothes/4.jpg" alt="Project Photo">' +
					'<img src="/img/project/dilemaclothes/5.jpg" alt="Project Photo">' +
					'<img src="/img/project/dilemaclothes/6.jpg" alt="Project Photo">' +
				'</div>' +
				'<a href="/projects/dilemaclothes/dilemaclothes.html" class="btn popup-btn">View all project</a>' +
			'</div>' +
		'</div>' +
	'</div>';



let ilikethiscars = 
	'<div id="ilikethiscars" class="popup">' +
		'<div class="popup_body">' +
			'<div class="popup_content">' +
				'<a href="#" class="popup_close close-popup">X</a>' +
				'<div class="popup_title">ILikeThisCars</div>' +
				'<div class="popup_photo">
					'<img src="/img/project/ilikethiscars/1.jpg" alt="Project Photo">' +
					'<img src="/img/project/ilikethiscars/2.jpg" alt="Project Photo">' +
					'<img src="/img/project/ilikethiscars/3.jpg" alt="Project Photo">' +
					'<img src="/img/project/ilikethiscars/4.jpg" alt="Project Photo">' +
				'</div>' +
				'<a href="/projects/ilikethiscars/ilikethiscars.html" class="btn popup-btn">View all project</a>' +
			'</div>' +
		'</div>' +
	'</div>';



let popupPart = juliemeo + helloblogger + iamhealth + mypizza + dilemaclothes + ilikethiscars;
popup.innerHTML = popupPart;