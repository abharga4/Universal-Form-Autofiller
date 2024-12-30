document.addEventListener('DOMContentLoaded', () => {
  const errorContainer = document.getElementById('errorContainer');

  function displayError(message) {
    errorContainer.textContent = message;
    errorContainer.style.color = 'red';
  }

  document.getElementById('fillFormButton').addEventListener('click', () => {
    const templateName = document.getElementById('templateSelect').value;
    if (!templateName) {
      displayError('No template selected!');
      return;
    }

    chrome.storage.sync.get(templateName, (result) => {
      if (!result[templateName]) {
        displayError('Template not found or corrupted.');
        return;
      }
      const templateData = result[templateName];
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: fillFormWithTemplate,
          args: [templateData]
        });
      });
    });
  });

  document.getElementById('addTemplateButton').addEventListener('click', () => {
    const templateName = document.getElementById('templateName').value;
    const templateData = document.getElementById('templateData').value;
    if (!templateName || !templateData) {
      displayError('Template name or data is missing.');
      return;
    }

    try {
      const parsedData = JSON.parse(templateData);
      chrome.storage.sync.set({ [templateName]: parsedData }, () => {
        alert('Template saved!');
      });
    } catch {
      displayError('Invalid JSON format.');
    }
  });
});

function fillFormWithTemplate(templateData) {
  // Form filling logic (delegated to content.js)
}