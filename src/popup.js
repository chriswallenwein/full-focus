// request all settings from storage when popup is opened
// and update settings when necessary
chrome.storage.sync.get('settings', function (response) {

    // code for YouTube
    for (let key in response.settings.youtube) {
        var current = document.getElementById(key)

        // check or uncheck checkboxes based on settings
        current.checked = response.settings.youtube[key].hide

        // add EventListener that updates the settings
        current.addEventListener("click", function () {
            response.settings.youtube[key].hide = !response.settings.youtube[key].hide
            chrome.storage.sync.set({ settings: response.settings })
        })
    }
})

// code for general extension
chrome.storage.sync.get('active', function (response) {
    var current = document.getElementById("extension")

    // check or uncheck checkboxes based on settings
    current.checked = response.active

    // add EventListener that updates the settings
    current.addEventListener("click", function () {
        response.active = !response.active
        chrome.storage.sync.set({ active: response.active })
    })
})