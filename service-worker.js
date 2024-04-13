// Handle messages from button click events
chrome.runtime.onMessage.addListener((message) => {
    if (message.message === "sortTabsDescending") {
        sortByUrl(true);
    } else if (message.message === "sortTabsAscending") {
        sortByUrl();
    } else if (message.message === "openUserGuide") {
        openUserGuide();
    }
});

// Handle keyboard shortcut commands
chrome.commands.onCommand.addListener((command) => {
    if (command === "sort-url-descending") {
        sortByUrl();
    } else if (command === "sort-url-ascending") {
        sortByUrl(true);
    } else {
        console.log(`No action defined for command ${command}.`);
    }
});

function openUserGuide() {
    chrome.tabs.create({
        url: "user_guide.html"
    });
}

function sortByUrl(descending) {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        if (descending) {
            tabs.sort(sortUrlDescending);
        } else {
            tabs.sort(sortUrlAscending);
        }
        for (let index = 0; index < tabs.length; ++index) {
            chrome.tabs.move(tabs[index].id, {index: index});
        }
    });
}

function sortUrlDescending(tab1, tab2) {
    if (tab1.url < tab2.url) {
        return -1;
    } else if (tab1.url > tab2.url) {
        return 1;
    }
    return 0;
}

function sortUrlAscending(tab1, tab2) {
    if (tab1.url < tab2.url) {
        return 1;
    } else if (tab1.url > tab2.url) {
        return -1;
    }
    return 0;
}