if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  document.body.classList.add("darkfrgh7");
}
else {
  document.body.classList.remove("darkfrgh7");
}
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var myElement = document.getElementById('content');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "jg79l0"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
        document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
        document.body.classList.add("jg79l0");
        document.body.classList.remove("disabled");
        chrome.storage.local.clear()
        chrome.storage.local.set({'cursor':'jg79l0'});
        for (let i = 0; i < myElement.children.length; i++) {
           myElement.children[i].classList.add("bob-on-hover");
       }
   });
  } else {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
        document.body.classList.add("disabled");
        chrome.storage.local.clear()
        chrome.storage.local.set({'cursor':'off'});
        chrome.tabs.sendMessage(activeTab.id, {"message": "off"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
        for (let i = 0; i < myElement.children.length; i++) {
           myElement.children[i].classList.remove("bob-on-hover");
       }
   });
}
});
});
chrome.storage.local.get('cursor', function(data){
    if(data.cursor === 'off') {
        var myElement = document.getElementById('content');
        for (let i = 0; i < myElement.children.length; i++) {
           myElement.children[i].classList.remove("bob-on-hover");
       }
       document.body.classList.add("disabled");
       document.getElementById("checkbox").checked = false;
       document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
   }
   if(data.cursor === 'd1oe2X') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("d1oe2X");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'bT52Dr') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("bT52Dr");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'b62fGl') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("b62fGl");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'ctI13h') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("ctI13h");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'jg79l0') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("jg79l0");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'il98sA') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("il98sA");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'wgR31Q') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("wgR31Q");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'g56dVr') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("g56dVr");
    document.body.classList.remove("disabled");
}
if(data.cursor === 'cf56Rt') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("cf56Rt");
    document.body.classList.remove("disabled");     
}
if(data.cursor === 'nd1Xt3') {
    document.getElementById("checkbox").checked = true;
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("nd1Xt3");
    document.body.classList.remove("disabled");
}
})
function d1oe2X() {
    document.getElementById("checkbox").checked = true;
    var myElement = document.getElementById('content');
    for (let i = 0; i < myElement.children.length; i++) {
       myElement.children[i].classList.add("bob-on-hover");
   }
   chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "d1oe2X"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("d1oe2X");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'d1oe2X'});
});
}
function bT52Dr() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "bT52Dr"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("bT52Dr");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'bT52Dr'});
});
}
function b62fGl() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "b62fGl"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("b62fGl");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'b62fGl'});
});
}
function ctI13h() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "ctI13h"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("ctI13h");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'ctI13h'});
});
}
function jg79l0() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "jg79l0"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("jg79l0");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'jg79l0'});
});
}
function il98sA() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "il98sA"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("il98sA");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'il98sA'});
});
}
function wgR31Q() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "wgR31Q"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("wgR31Q");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'wgR31Q'});
});
}
function g56dVr() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "g56dVr"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("g56dVr");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'g56dVr'});
});
}
function cf56Rt() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "cf56Rt"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("cf56Rt");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'cf56Rt'});
});
}
function nd1Xt3() {
  var myElement = document.getElementById('content');
  for (let i = 0; i < myElement.children.length; i++) {
   myElement.children[i].classList.add("bob-on-hover");
}
document.getElementById("checkbox").checked = true;
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "nd1Xt3"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
    });
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("nd1Xt3");
    document.body.classList.remove("disabled");
    chrome.storage.local.clear()
    chrome.storage.local.set({'cursor':'nd1Xt3'});
});
}
function expand() {
   document.body.classList.toggle("expand");
   document.getElementById("tooltiptext").style.opacity = "0";
   document.getElementById("tooltiptext").style.visibility = "hidden";
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("d1oe2X").addEventListener("click", d1oe2X);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("bT52Dr").addEventListener("click", bT52Dr);

});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("b62fGl").addEventListener("click", b62fGl);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("ctI13h").addEventListener("click", ctI13h);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("jg79l0").addEventListener("click", jg79l0);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("il98sA").addEventListener("click", il98sA);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("wgR31Q").addEventListener("click", wgR31Q);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("g56dVr").addEventListener("click", g56dVr);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("cf56Rt").addEventListener("click", cf56Rt);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nd1Xt3").addEventListener("click", nd1Xt3);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("expandspan").addEventListener("click", expand);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("tooltip").addEventListener("click", copyText);
});
function copyText() {
   var copyText = document.getElementById("wa2sM4e").innerText;
   navigator.clipboard
   .writeText(copyText)
   .then(() => {
      console.log("Thank you!:) - 0x0");
  })
   .catch((err) => {
      console.error("Error copying text to clipboard");
  });
   document.getElementById("tooltiptext").style.opacity = "1";   
   document.getElementById("tooltiptext").style.visibility = "visible";  
   setTimeout(function(){
    document.getElementById("tooltiptext").style.opacity = "0";    
}, 900);
   setTimeout(function(){
    document.getElementById("tooltiptext").style.visibility = "hidden";      
}, 1000);
}