let sortDescendingButton = document.getElementById("sortButtonDescending");
let sortAscendingButton = document.getElementById("sortButtonAscending");

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