// Replace ACCESS_TOKEN with your Wit.ai access token
const ACCESS_TOKEN = 'BTD6YVO5GNMOSJBSFFCBLD7KKPLLAVET';
const client = new Wit({ accessToken: ACCESS_TOKEN });

const copySection = document.querySelector('.copy-section');
const pasteSection = document.querySelector('.paste-section');

// Listen for the copy command
const copyCommand = () => {
  client.recognize('audio/raw', copyText);
};

// Listen for the paste command
const pasteCommand = () => {
  client.recognize('audio/raw', pasteText);
};

// Extract the text to be copied
const copyText = (err, response) => {
  if (err) console.error(err);
  const message = response._text.toLowerCase();

  if (message.includes('copy')) {
    const text = copySection.innerText.trim();
    const clipboard = navigator.clipboard || window.clipboardData;
    clipboard.writeText(text);
  }
};

// Paste the copied text
const pasteText = (err, response) => {
  if (err) console.error(err);
  const message = response._text.toLowerCase();

  if (message.includes('paste')) {
    const clipboard = navigator.clipboard || window.clipboardData;
    clipboard.readText().then(text => {
      pasteSection.value = text.trim();
    });
  }
};

// Listen for voice commands
window.addEventListener('keydown', event => {
  if (event.key === 'c') {
    copyCommand();
  } else if (event.key === 'v') {
    pasteCommand();
  }
});
