function openPage() {
    browser.tabs.create({
        url: "https://developer.mozilla.org",
    });
}

browser.commands.onCommand.addListener(function(name){
    if(name == 'my-shortcut') {
        browser.notifications.create({
            type: "basic",
            title: "My Shortcut",
            message: "my shortcut works",
            iconUrl: "icons/dice-256.png"
        })
    }
});

browser.browserAction.onClicked.addListener(openPage);
