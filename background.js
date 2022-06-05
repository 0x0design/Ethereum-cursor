chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "d1oe2X"){
        chrome.action.setIcon({
          path : "eth_diamond_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting2 === "bT52Dr"){  
        chrome.action.setIcon({
          path : "eth_black_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting3 === "b62fGl"){
        chrome.action.setIcon({
          path : "eth_blu_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting4 === "ctI13h"){
        chrome.action.setIcon({
          path : "eth_colors_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting5 === "jg79l0"){     
        chrome.action.setIcon({
          path : "eth_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting6 === "il98sA"){
        chrome.action.setIcon({
          path : "eth_inverted_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting7 === "wgR31Q"){
        chrome.action.setIcon({
            path : "eth_white_128.png",
        });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting8 === "g56dVr"){
        chrome.action.setIcon({
          path : "eth_gold_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting9 === "cf56Rt") {      
        chrome.action.setIcon({
          path : "eth_colorfull_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
    if (request.greeting10 === "nd1Xt3") {
        chrome.action.setIcon({
          path : "eth_neon_128.png",
      });
        sendResponse({response: "Response from background script"});
    }
});

chrome.runtime.onInstalled.addListener(details => {
    chrome.tabs.query({ url: "*://*/*" }, function(tabs)
    {
        for(var i = 0; i < tabs.length; i++)
        {
          chrome.scripting.insertCSS({
            target: { tabId: tabs[i].id},
            files: ["style.css"]},
            () => { 
              let e = chrome.runtime.lastError;
              if(e !== undefined){
              }
          });
          chrome.scripting.executeScript({ target: {tabId: tabs[i].id}, files: ['content.js']},
            () => { 
              let e = chrome.runtime.lastError;
              if(e !== undefined){
              }
          });
      };
  });
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "off"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
        chrome.storage.local.clear()
        chrome.storage.local.set({'cursor':'off'});
    });
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
          url: "https://0x0.design"
      });
        chrome.runtime.setUninstallURL('https://0x0.design');
    }
});
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.storage.local.get('cursor', function(data){
      if(data.cursor === 'off') {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "off"}, function (response) {
                if (!chrome.runtime.lastError) {
                } else {
                }
            });
        });
    }
    if(data.cursor === 'd1oe2X') {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "d1oe2X"}, function (response) {
                if (!chrome.runtime.lastError) {
                } else {
                }
            });
        });
    }
    if(data.cursor === 'bT52Dr') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "bT52Dr"}, function (response) {
            if (!chrome.runtime.lastError) {    
            } else {
            }
        });
    });
   }
   if(data.cursor === 'b62fGl') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "b62fGl"}, function (response) {
            if (!chrome.runtime.lastError) {    
            } else {
            }
        });
    });
   }
   if(data.cursor === 'ctI13h') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "ctI13h"}, function (response) {
            if (!chrome.runtime.lastError) {    
            } else {
            }
        });
    });
   }
   if(data.cursor === 'jg79l0') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "jg79l0"}, function (response) {
            if (!chrome.runtime.lastError) {    
            } else {
            }
        });
    });
   }
   if(data.cursor === 'il98sA') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "il98sA"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
    });
   }
   if(data.cursor === 'wgR31Q') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "wgR31Q"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
    });
   }
   if(data.cursor === 'g56dVr') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "g56dVr"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
    });
   }
   if(data.cursor === 'cf56Rt') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "cf56Rt"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
    });
   }
   if(data.cursor === 'nd1Xt3') {
       chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "nd1Xt3"}, function (response) {
            if (!chrome.runtime.lastError) {
            } else {
            }
        });
    });
   }
})
});