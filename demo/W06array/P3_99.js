const btnC = document.getElementById('btn-c');
const btnF = document.getElementById('btn-f');
const userInput = document.querySelector('#input-number');

function getUserInput() {
  return parseInt(userInput.value);
}

btnC.addEventListener('click', () => {
  const value = getUserInput();
  //    console.log('test',getUserInput());
  document.getElementById('current-calculation').innerHTML =
    ((9 / 5) * value+ 32).toFixed(2);
});

btnF.addEventListener('click', () => {
  const value = getUserInput();
  //    console.log('test',getUserInput());
  document.getElementById('current-calculation').innerHTML = (
    (value - 32) /
    1.8
  ).toFixed(2);
});
