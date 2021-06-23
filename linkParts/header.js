let headerMenu = ['About','Projects','Contacts'];

let header = document.createElement("header"),
    container = document.createElement("div"),
    nav =  document.createElement("nav"),
    ul = document.createElement("ul");

    for (let i = 0; i < headerMenu.length; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href","#"+headerMenu[i].toLowerCase());
      a.innerHTML = headerMenu[i];
      li.appendChild(a);
      ul.appendChild(li);
    }

    container.className = "container"; 

    nav.appendChild(ul);
    container.appendChild(nav);
    header.appendChild(container);
document.body.appendChild(header);

