let sortButton = document.getElementById("sortButton");
sortButton.onclick = function () {
    chrome.runtime.sendMessage({
        message: "sortTabs"
    });
}

/*
function sortByUrl() {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        tabs.sort(sortUrlAlphabetically);
        for (let index = 0; index < tabs.length; ++index) {
            chrome.tabs.move(tabs[index].id, {index: index});
        }
    });
}

function sortUrlAlphabetically(tab1, tab2) {
    if (tab1.url < tab2.url) {
        return -1;
    } else if (tab1.url > tab2.url) {
        return 1;
    }
    return 0;
}
*/