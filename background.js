chrome.tabs.onUpdated.addListener(function(id, info, tab) {
    
    var echo = tab.url.indexOf('echo360.org');
    var lcms = tab.url.indexOf('medicineonline.uc.edu')
    var medonestop = tab.url.indexOf('comdo-wcnlb.uc.edu')
    if ( (echo >= 0 || lcms >= 0 || medonestop >= 0) && info.status === "complete") {
        chrome.pageAction.show(tab.id);
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
            if (echo >= 0)
                chrome.tabs.executeScript(null, {file: "echo.js"});
            else if (lcms >= 0)
               chrome.tabs.executeScript(null, {file: "lcms.js"});
            else if (medonestop >= 0)
                chrome.tabs.executeScript(null, {file: "medonestop.js"});
        });
    } else if (echo >= 0 || lcms >= 0 || lcms >= 0) {
        chrome.pageAction.show(tab.id);
    } else {
        chrome.pageAction.hide(tab.id);
    }
});
