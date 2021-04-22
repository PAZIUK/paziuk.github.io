let header = document.querySelector('header').offsetHeight;
let wrapperHeight = window.innerHeight - header;
let wrapper = document.querySelector('.wrapper');
wrapper.style.maxHeight = wrapperHeight+'px';
console.log(wrapperHeight+'px;');