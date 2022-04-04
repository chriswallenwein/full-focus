document.addEventListener("DOMContentLoaded", function () {
  let activate_extension_checkbox = document.getElementById("activate_extension");
  activate_extension_checkbox.addEventListener("click", () => sendStateUpdateToAllTabs(activate_extension_checkbox));
});

function sendStateUpdateToAllTabs(checkbox) {
  chrome.tabs.query({ url: "https://www.youtube.com/*" }, function (tabs) {
    tabs.forEach((tab) => {
      const state = {
        extension_active: checkbox.checked,
      };
      chrome.tabs.sendMessage(tab.id, state);
    });
  });
}