let userInput = document.getElementById('text-input');
let button = document.getElementById('check-button');
let result = document.getElementById('result');

function checkIfPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  let reversedStr = cleanedStr.split('').reverse().join('');
  return reversedStr;
}

function displayResult(input) {
  let cleanedInput = input.toLowerCase().replace(/[\W_]/g, '');
  if (input === null || input === '') {
    alert('Please input a value');
  } else if (checkIfPalindrome(input) === cleanedInput) {
    result.textContent = `Yes, (${input}) is a palindrome`;
    result.style.color = 'green';
  } else {
    result.textContent = `No, (${input}) is not a palindrome`;
    result.style.color = 'red';
  }
}

button.addEventListener('click', () => {
  displayResult(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    displayResult(userInput.value);
    userInput.value = '';
  }
});
