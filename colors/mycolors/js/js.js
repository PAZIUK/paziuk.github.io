"use strict"

let color1 = window.getComputedStyle(document.getElementById("color1")).backgroundColor;
let color2 = window.getComputedStyle(document.getElementById("color2")).backgroundColor;
let color3 = window.getComputedStyle(document.getElementById("color3")).backgroundColor;
let color4 = window.getComputedStyle(document.getElementById("color4")).backgroundColor;

let colorInsert1 = color1.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
let colorInsert2 = color2.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
let colorInsert3 = color3.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
let colorInsert4 = color4.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

delete (colorInsert1[0]);
delete (colorInsert2[0]);
delete (colorInsert3[0]);
delete (colorInsert4[0]);

for (var i = 1; i <= 3; ++i) {
    colorInsert1[i] = parseInt(colorInsert1[i]).toString(16);
    if (colorInsert1[i].length == 1) colorInsert1[i] = '0' + colorInsert1[i];
} 
for (var i = 1; i <= 3; ++i) {
    colorInsert2[i] = parseInt(colorInsert2[i]).toString(16);
    if (colorInsert2[i].length == 1) colorInsert2[i] = '0' + colorInsert2[i];
} 
for (var i = 1; i <= 3; ++i) {
    colorInsert3[i] = parseInt(colorInsert3[i]).toString(16);
    if (colorInsert3[i].length == 1) colorInsert3[i] = '0' + colorInsert3[i];
} 
for (var i = 1; i <= 3; ++i) {
    colorInsert4[i] = parseInt(colorInsert4[i]).toString(16);
    if (colorInsert4[i].length == 1) colorInsert4[i] = '0' + colorInsert4[i];
} 

let colorHex1 ='#'+colorInsert1.join('').toUpperCase();
let colorHex2 ='#'+colorInsert2.join('').toUpperCase();
let colorHex3 ='#'+colorInsert3.join('').toUpperCase();
let colorHex4 ='#'+colorInsert4.join('').toUpperCase();

let colorInHtml1 = document.getElementById('color1').querySelector('p').innerHTML = colorHex1;
let colorInHtml2 = document.getElementById('color2').querySelector('p').innerHTML = colorHex2;
let colorInHtml3 = document.getElementById('color3').querySelector('p').innerHTML = colorHex3;
let colorInHtml4 = document.getElementById('color4').querySelector('p').innerHTML = colorHex4;