var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/S__438394942.jpg') {
      myImage.setAttribute ('src','images/S__438394947.jpg');
    } else {
      myImage.setAttribute ('src','images/S__438394942.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('叫甚麼啦');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '給錢啦!!!,媽的' + myName;
}



function setUserName() {
  let myName = prompt('叫甚麼啦');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '給錢啦!!!媽的' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '給錢啦!!!媽的' + storedName ;
}
myButton.onclick = function() {
  setUserName();
}

