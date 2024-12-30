let observer;

function findMatchingField(templateFieldName) {
  const fields = document.querySelectorAll('input, textarea, select');
  for (const field of fields) {
    const label = document.querySelector(`label[for="${field.id}"]`);
    if (
      field.name.includes(templateFieldName) ||
      (label && label.textContent.includes(templateFieldName)) ||
      field.placeholder.includes(templateFieldName)
    ) {
      return field;
    }
  }
  return null;
}

function fillForm(templateData) {
  for (const [key, value] of Object.entries(templateData)) {
    const field = findMatchingField(key);
    if (field) {
      field.value = value;
    }
  }
}

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const observeMutations = debounce(() => {
  console.log('DOM updated. Re-evaluating form fields...');
}, 300);

observer = new MutationObserver(observeMutations);
observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'fillForm') {
    fillForm(request.templateData);
  }
});