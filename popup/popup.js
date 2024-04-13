let sortDescendingButton = document.getElementById("sortButtonDescending");
let sortAscendingButton = document.getElementById("sortButtonAscending");
let helpButton = document.getElementById("helpButton");

sortDescendingButton.onclick = function () {
    chrome.runtime.sendMessage({
        message: "sortTabsDescending"
    });
};

sortAscendingButton.onclick = function () {
    chrome.runtime.sendMessage({
        message: "sortTabsAscending"
    });
};

helpButton.onclick = function () {
    chrome.runtime.sendMessage({
        message: "openUserGuide"
    });
};