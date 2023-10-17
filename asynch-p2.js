//a promise is an object returned by a process working in the background of a program. 
//fetch() is an api specialized in utilizing promises to make an http request to a server, and return an object.
const practice = fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple");
const practice2 = fetch("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean&encode=base64");

practice.then((response) => {
    console.log(`Received response: ${response.status}`);
    const practiceAnswer = response.json();
    console.log(practiceAnswer);
    practiceAnswer.then((data) => {
        console.log(data);
    });
  });
  console.log(practice);
  //need to make sure there is a valid response
  practice2.then((response) => {
    if (!response.ok){
        throw new Error(`Error: ${response.status}`);
    }
    return response.json;}).then((data) => {
        console.log(data);
    })
    .catch(error('failure'));
  console.log(practice2);
  //promises can be fulfilled, pending, or rejected
  //Promise.all(promise1,promise2, etc) can lump together multiple promises
  //using this makes it an async function
  async function example(){

  }