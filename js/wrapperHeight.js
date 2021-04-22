let headerHeight = document.querySelector('header');
let wrapperHeight = window.innerHeight - headerHeight.offsetHeight;
let wrapper = document.querySelector('main.wrapper');
while(true){
  wrapper.style.maxHeight = wrapperHeight+'px';
  console.log(wrapperHeight+'px;');
}