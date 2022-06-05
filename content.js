chrome.storage.local.get('cursor', function(data){
  if(data.cursor === 'off') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    chrome.runtime.sendMessage({greeting5: "jg79l0"});
  }
  if(data.cursor === 'd1oe2X') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("d1oe2X");
    chrome.runtime.sendMessage({greeting: "d1oe2X"});
  }
  if(data.cursor === 'bT52Dr') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("bT52Dr");
    chrome.runtime.sendMessage({greeting2: "bT52Dr"});
  }
  if(data.cursor === 'b62fGl') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("b62fGl");
    chrome.runtime.sendMessage({greeting3: "b62fGl"});
  }
  if(data.cursor === 'ctI13h') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("ctI13h");
    chrome.runtime.sendMessage({greeting4: "ctI13h"});
  }
  if(data.cursor === 'jg79l0') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("jg79l0");
    chrome.runtime.sendMessage({greeting5: "jg79l0"});
  }
  if(data.cursor === 'il98sA') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("il98sA");
    chrome.runtime.sendMessage({greeting6: "il98sA"});
  }
  if(data.cursor === 'wgR31Q') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("wgR31Q");
    chrome.runtime.sendMessage({greeting7: "wgR31Q"});
  }
  if(data.cursor === 'g56dVr') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("g56dVr");
    chrome.runtime.sendMessage({greeting8: "g56dVr"});
  }
  if(data.cursor === 'cf56Rt') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("cf56Rt");
    chrome.runtime.sendMessage({greeting9: "cf56Rt"});
  }
  if(data.cursor === 'nd1Xt3') {
    document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
    document.body.classList.add("nd1Xt3");
    chrome.runtime.sendMessage({greeting10: "nd1Xt3"});
  }
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "off"  ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      chrome.runtime.sendMessage({greeting5: "jg79l0"}, function (response) {
        if (!chrome.runtime.lastError) {       
        } else {
        }
      });    
    }
    if( request.message === "d1oe2X"  ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("d1oe2X");
      chrome.runtime.sendMessage({greeting: "d1oe2X"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if( request.message === "bT52Dr" ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("bT52Dr");
      chrome.runtime.sendMessage({greeting2: "bT52Dr"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if( request.message === "b62fGl" ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("b62fGl");
      chrome.runtime.sendMessage({greeting3: "b62fGl"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if( request.message === "ctI13h" ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("ctI13h");
      chrome.runtime.sendMessage({greeting4: "ctI13h"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if( request.message === "jg79l0" ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("jg79l0");
      chrome.runtime.sendMessage({greeting5: "jg79l0"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if(request.message === 'il98sA') {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("il98sA");
      chrome.runtime.sendMessage({greeting6: "il98sA"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if(request.message === 'wgR31Q') {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("wgR31Q");
      chrome.runtime.sendMessage({greeting7: "wgR31Q"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if(request.message === 'g56dVr' ) {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("g56dVr");
      chrome.runtime.sendMessage({greeting8: "g56dVr"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if(request.message === 'cf56Rt') {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("cf56Rt");
      chrome.runtime.sendMessage({greeting9: "cf56Rt"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
    if(request.message === 'nd1Xt3') {
      document.body.classList.remove("d1oe2X","bT52Dr","b62fGl","ctI13h","jg79l0", "il98sA", "wgR31Q", "g56dVr", "cf56Rt", "nd1Xt3");
      document.body.classList.add("nd1Xt3");
      chrome.runtime.sendMessage({greeting10: "nd1Xt3"}, function (response) {
        if (!chrome.runtime.lastError) {
        } else {
        }
      });
    }
  });
