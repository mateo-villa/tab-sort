let sortButton = document.getElementById("sortButton");
sortButton.onclick = function () {
    chrome.runtime.sendMessage({
        message: "sortTabs"
    });
}