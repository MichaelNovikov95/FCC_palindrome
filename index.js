const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const Submit = (e) => {
  e.preventDefault();
  inputChecker();
};

const enterSubmit = () => {
  if (e.key === "Enter") {
    e.preventDefault();
    inputChecker();
  }
};

const inputChecker = () => {
  const inputVal = input.value.trim();
  if (inputVal.length === 0) {
    alert("Please input a value");
    return;
  } else {
    Polindrome(inputVal);
    input.value = "";
  }
};

const Polindrome = (str) => {
  const regex = /[^a-zA-Z0-9]/g;
  const cleanedStr = str.toLowerCase().replace(regex, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  if (cleanedStr === reversedStr) {
    result.textContent = `${str} is a palindrome`;
  } else {
    result.textContent = `${str} is not a palindrome`;
  }
};

button.addEventListener("click", Submit);
input.addEventListener("keydown", enterSubmit);
