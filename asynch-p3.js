//making an api
//this section revolves around wrapping setTimeout() and basically checking its validity
//setting up variables
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");
//making a function
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    //checking validity
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    //base of api
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
//adding button event
button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});