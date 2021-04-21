let colorBox = document.querySelector('.colors');
let palletes = 12;

for (let i = 1; i < palletes + 1; i++) {
  colorBox.innerHTML += 
    '<div class="color_box">' +
      '<a href="palletes/'+ i +'.html"><img src="img/'+ i +'.jpg" alt="My pallete"></a>' +
    '</div>';
}_