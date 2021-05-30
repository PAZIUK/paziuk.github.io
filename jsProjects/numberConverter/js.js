"use strict"

let showFromIt = document.querySelector("ul.from");
let showToIt = document.querySelector("ul.to");
let nosf = document.querySelector(".nosf");
let nost = document.querySelector(".nost");

let systemsFromSelect = "?";
let systemsToSelect = "?";
let systemsFrom = {
	two: function(){
		systemsFromSelect = 2;
		nosf.innerHTML = 2;
		showFrom();
	},
	eight: function(){
		systemsFromSelect = 8;
		nosf.innerHTML = 8;
		showFrom();
	},
	ten: function(){
		systemsFromSelect = 10;
		nosf.innerHTML = 10;
		showFrom();
	},
	sixteen: function(){
		systemsFromSelect = 16;
		nosf.innerHTML = 16;
		showFrom();
	}
}

let systemsTo = {
	two: function(){
		systemsToSelect = 2;
		nost.innerHTML = 2;
		showTo();
	},
	eight: function(){
		systemsToSelect = 8;
		nost.innerHTML = 8;
		showTo();
	},
	ten: function(){
		systemsToSelect = 10;
		nost.innerHTML = 10;
		showTo();
	},
	sixteen: function(){
		systemsToSelect = 16;
		nost.innerHTML = 16;
		showTo();
	}
}
function showFrom(){
	if(showFromIt.style.display == "flex"){
		showFromIt.style.display = "none";
	} else {
		let top = document.querySelector("div.from").querySelector("p").offsetHeight;
		top = top + document.querySelector("#from").offsetHeight;
		showFromIt.style.display = "flex";
		showFromIt.style.top = top+"px";
	}
	
};
function showTo(){
	if(showToIt.style.display == "flex"){
		showToIt.style.display = "none";
	} else {
		let top = document.querySelector("div.to").querySelector("p").offsetHeight;
		top = top + document.querySelector("#to").offsetHeight;
		showToIt.style.display = "flex";
		showToIt.style.top = top+"px";
	}
};

function error(){
	let error = document.querySelector(".error");
	error.classList.toggle("active");
}
function changeNum(){
	let sTS = systemsToSelect
	let sFS = systemsFromSelect
	systemsFromSelect = sTS;
	systemsToSelect = sFS;
	nost.innerHTML = systemsToSelect;
	nosf.innerHTML = systemsFromSelect;
	document.querySelector("#from").value = "";
	document.querySelector("#to").value = "";
	document.querySelector("img.change-btn").classList.toggle("active");
}




function lets(){
	let from = document.querySelector("#from").value;
	if(systemsFromSelect == 0 || systemsToSelect == 0 || from.length == 0 || 
		systemsFromSelect == 2 && isNaN(parseInt(from)) || 
		systemsFromSelect == 8 && isNaN(parseInt(from)) || 
		systemsFromSelect == 10 && isNaN(parseInt(from)) 
		){
		error();	
	} else {
		let result = "";
		if(systemsFromSelect == 2 && systemsToSelect == 2||systemsFromSelect == 8 && systemsToSelect == 8||
			systemsFromSelect == 10 && systemsToSelect == 10||systemsFromSelect == 16 && systemsToSelect == 16){
			result = from;
		} 



		else if(systemsFromSelect == 2 && systemsToSelect == 8){
			let parts = from.split("");
			let maybe;
			if((parts.length % 3) != 0){
				if((parts.length % 3) == 2){
					from = "0"+String(from);
					parts = from.split("");
				} else if((parts.length % 3) == 1){
					from = "00"+String(from);
					parts = from.split("");
				}
			}
			for(let i=0,b=0;i<=(parts.length/3);i++){
				maybe = String(parts[b])+String(parts[b+1])+String(parts[b+2]);
				b+=3;
				if(maybe=="000"){
					result += "0";
				} else if(maybe=="001"){
					result += "1";
				} else if(maybe=="010"){
					result += "2";
				} else if(maybe=="011"){
					result += "3";
				} else if(maybe=="100"){
					result += "4";
				} else if(maybe=="101"){
					result += "5";
				} else if(maybe=="110"){
					result += "6";
				} else if(maybe=="111"){
					result += "7";
				} else{
					result += "";
				}
			}
		} else if(systemsFromSelect == 2 && systemsToSelect == 10){
			let parts = from.split("");
			let pl = 0;
			result = 0;

			for (let i = parts.length; i > 0; --i) {
				let ind = i-1;
				result += Math.pow(2,ind)*parts[pl];
				pl++;
				if(pl == parts.length){
					break;
				}
				
			}
		} else if(systemsFromSelect == 2 && systemsToSelect == 16){
			let parts = from.split("");
			let maybe;
			if((parts.length % 4) != 0){
				if((parts.length % 4) == 3){
					from = "0"+String(from);
					parts = from.split("");
				} else if((parts.length % 4) == 2){
					from = "00"+String(from);
					parts = from.split("");
				} else if((parts.length % 4) == 1){
					from = "000"+String(from);
					parts = from.split("");
				}
			}
			for(let i=0,b=0;i<=(parts.length/4);i++){
				maybe = String(parts[b])+String(parts[b+1])+String(parts[b+2])+String(parts[b+3]);
				b+=4;
				if(maybe=="0000"){
					result += "0";
				} else if(maybe=="0001"){
					result += "1";
				} else if(maybe=="0010"){
					result += "2";
				} else if(maybe=="0011"){
					result += "3";
				} else if(maybe=="0100"){
					result += "4";
				} else if(maybe=="0101"){
					result += "5";
				} else if(maybe=="0110"){
					result += "6";
				} else if(maybe=="0111"){
					result += "7";
				} else if(maybe=="1000"){
					result += "8";
				} else if(maybe=="1001"){
					result += "9";
				} else if(maybe=="1010"){
					result += "A";
				} else if(maybe=="1011"){
					result += "B";
				} else if(maybe=="1100"){
					result += "C";
				} else if(maybe=="1101"){
					result += "D";
				} else if(maybe=="1110"){
					result += "E";
				} else if(maybe=="1111"){
					result += "F";
				}
			}
		} 



		else if(systemsFromSelect == 8 && systemsToSelect == 2){
			let parts = from.split("");
			let maybe;
			for(let i=0; i <= parts.length; i++){
				maybe = parts[i];
				if(maybe=="0"){
					result += "000";
				} else if(maybe=="1"){
					result += "001";
				} else if(maybe=="2"){
					result += "010";
				} else if(maybe=="3"){
					result += "011";
				} else if(maybe=="4"){
					result += "100";
				} else if(maybe=="5"){
					result += "101";
				} else if(maybe=="6"){
					result += "110";
				} else if(maybe=="7"){
					result += "111";
				} 
			}
		} else if(systemsFromSelect == 8 && systemsToSelect == 10){
			let parts = from.split("");
			let pl = 0;
			result = 0;

			for (let i = parts.length; i > 0; --i) {
				let ind = i-1;
				result += Math.pow(8,ind)*parts[pl];
				pl++;
				if(pl == parts.length){
					break;
				}
				
			}
		} else if(systemsFromSelect == 8 && systemsToSelect == 16){
			let parts = from.split("");
			let maybe;
			for(let i=0; i <= parts.length; i++){
				maybe = parts[i];
				if(maybe=="0"){
					result += "000";
				} else if(maybe=="1"){
					result += "001";
				} else if(maybe=="2"){
					result += "010";
				} else if(maybe=="3"){
					result += "011";
				} else if(maybe=="4"){
					result += "100";
				} else if(maybe=="5"){
					result += "101";
				} else if(maybe=="6"){
					result += "110";
				} else if(maybe=="7"){
					result += "111";
				} 
			}
			if((parts.length % 4) != 0){
				if((parts.length % 4) == 3){
					from = "0"+String(from);
					parts = from.split("");
				} else if((parts.length % 4) == 2){
					from = "00"+String(from);
					parts = from.split("");
				} else if((parts.length % 4) == 1){
					from = "000"+String(from);
					parts = from.split("");
				}
			}
			result = "";
			for(let i=0,b=0;i<=(parts.length/4);i++){
				maybe = String(parts[b])+String(parts[b+1])+String(parts[b+2])+String(parts[b+3]);
				b+=4;
				if(maybe=="0000"){
					result += "0";
				} else if(maybe=="0001"){
					result += "1";
				} else if(maybe=="0010"){
					result += "2";
				} else if(maybe=="0011"){
					result += "3";
				} else if(maybe=="0100"){
					result += "4";
				} else if(maybe=="0101"){
					result += "5";
				} else if(maybe=="0110"){
					result += "6";
				} else if(maybe=="0111"){
					result += "7";
				} else if(maybe=="1000"){
					result += "8";
				} else if(maybe=="1001"){
					result += "9";
				} else if(maybe=="1010"){
					result += "A";
				} else if(maybe=="1011"){
					result += "B";
				} else if(maybe=="1100"){
					result += "C";
				} else if(maybe=="1101"){
					result += "D";
				} else if(maybe=="1110"){
					result += "E";
				} else if(maybe=="1111"){
					result += "f";
				}
			}
		} 



		else if(systemsFromSelect == 10 && systemsToSelect == 2){
			let parts = from.split("");
			while(Math.floor(from) > 0){
				result = String(Math.floor(from) % 2) + result;
				from = Math.floor(from / 2);
				if(from < 2){
					result = "1" + result;
					break;
				}
			}
		} else if(systemsFromSelect == 10 && systemsToSelect == 8){
			let parts = from.split("");
			do{
				result = String(Math.floor(from) % 8) + result;
				from = Math.floor(from/8);
			}
			while(Math.floor(from) > 0)
		} else if(systemsFromSelect == 10 && systemsToSelect == 16){
			let parts = from.split("");
			do{	
				let maybe = Math.floor(from) % 16;
				if(maybe == 10){
					maybe = "A";
				} else if(maybe == 11){
					maybe = "B"
				} else if(maybe == 12){
					maybe = "C"
				} else if(maybe == 13){
					maybe = "D"
				} else if(maybe == 14){
					maybe = "E"
				} else if(maybe == 15){
					maybe = "F"
				}
				result = maybe + result;
				from = Math.floor(from/16);

			}
			while(Math.floor(from) > 0)
		}



		else if(systemsFromSelect == 16 && systemsToSelect == 2){
			from = from.toUpperCase();
			let parts = from.split("");
			let maybe;
			for(let i=0;i<parts.length;i++){
				maybe = parts[i];
				if(maybe=="0"){
					result += "0000";
				} else if(maybe=="1"){
					result += "0001";
				} else if(maybe=="2"){
					result += "0010";
				} else if(maybe=="3"){
					result += "0011";
				} else if(maybe=="4"){
					result += "0100";
				} else if(maybe=="5"){
					result += "0101";
				} else if(maybe=="6"){
					result += "0110";
				} else if(maybe=="7"){
					result += "0111";
				} else if(maybe=="8"){
					result += "1000";
				} else if(maybe=="9"){
					result += "1001";
				} else if(maybe=="A"){
					result += "1010";
				} else if(maybe=="B"){
					result += "1011";
				} else if(maybe=="C"){
					result += "1100";
				} else if(maybe=="D"){
					result += "1101";
				} else if(maybe=="E"){
					result += "1110";
				} else if(maybe=="F"){
					result += "1111";
				} else {
					result += "";
				}
			}
		} else if(systemsFromSelect == 16 && systemsToSelect == 8){
			from = from.toUpperCase();
			let parts = from.split("");
			let maybe;
			for(let i=0;i<parts.length;i++){
				maybe = parts[i];
				if(maybe=="0"){
					result += "0000";
				} else if(maybe=="1"){
					result += "0001";
				} else if(maybe=="2"){
					result += "0010";
				} else if(maybe=="3"){
					result += "0011";
				} else if(maybe=="4"){
					result += "0100";
				} else if(maybe=="5"){
					result += "0101";
				} else if(maybe=="6"){
					result += "0110";
				} else if(maybe=="7"){
					result += "0111";
				} else if(maybe=="8"){
					result += "1000";
				} else if(maybe=="9"){
					result += "1001";
				} else if(maybe=="A"){
					result += "1010";
				} else if(maybe=="B"){
					result += "1011";
				} else if(maybe=="C"){
					result += "1100";
				} else if(maybe=="D"){
					result += "1101";
				} else if(maybe=="E"){
					result += "1110";
				} else if(maybe=="F"){
					result += "1111";
				} else {
					result += "";
				}
			}
			parts = result;
			if((parts.length % 3) != 0){
				if((parts.length % 3) == 2){
					result = "0"+String(result);
					parts = result.split("");
				} else if((parts.length % 3) == 1){
					result = "00"+String(result);
					parts = result.split("");
				}
			}
			result = "";
			for(let i=0,b=0;i<=(parts.length/3);i++){
				maybe = String(parts[b])+String(parts[b+1])+String(parts[b+2]);
				b+=3;
				if(maybe=="000"){
					result += "0";
				} else if(maybe=="001"){
					result += "1";
				} else if(maybe=="010"){
					result += "2";
				} else if(maybe=="011"){
					result += "3";
				} else if(maybe=="100"){
					result += "4";
				} else if(maybe=="101"){
					result += "5";
				} else if(maybe=="110"){
					result += "6";
				} else if(maybe=="111"){
					result += "7";
				} 
			}
		} else if(systemsFromSelect == 16 && systemsToSelect == 10){
			from = from.toUpperCase();
			let parts = from.split("");
			for (let i = 0; i < parts.length; i++) {
				if(parts[i] == "A"){
					parts[i] = 10;
				} else if(parts[i] == "B"){
					parts[i] = 11;
				} else if(parts[i] == "C"){
					parts[i] = 12;
				} else if(parts[i] == "D"){
					parts[i] = 13;
				} else if(parts[i] == "E"){
					parts[i] = 14;
				} else if(parts[i] == "F"){
					parts[i] = 15;
				}  else {
					error();
				}
			}

			let pl = 0;
			result = 0;

			for (let i = parts.length; i > 0; --i) {
				let ind = i-1;
				result += Math.pow(16,ind)*parts[pl];
				pl++;
				if(pl == parts.length){
					break;
				}
				
			}
			if(isNaN(result)){
				result = "";
			}
		}
		document.querySelector("#to").innerHTML = result;
	}
}