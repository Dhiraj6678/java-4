                    // Answer 1

function doubleUsingCallback(arr, callback) {
  return arr.map(callback);
}


                    // Answer 2

function manipulateString(str) {
  return function logString() {
    console.log(`The manipulated string is: ${str.toUpperCase()}`);
  };
}


                    // Answer 3  

function ageInDays(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;
  return function() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  };
}


                    // Answer 4  


function logTitlesAlphabetically(books, callback) {
  const titles = books.map(book => book.title);
  titles.sort();
  callback(titles);
}


                    // Answer 5   

function greetingPromise(name) {
  return new Promise((resolve) => {
    resolve(`Hello, ${name}!`);
  });
}

                    // Answer 6  


async function fetchAndLogTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    console.log(todo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


                    // Answer 7  

async function fetchAndLogTodoAndPost() {
  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/1'),
    ]);
    const todo = await todoResponse.json();
    const post = await postResponse.json();
    console.log({ todo, post });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


                    // Answer 8


async function fetchDataAndLog() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAndLog();


                    // Answer 9

async function handleFetchError() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Display an error message on the webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while fetching data.';
    document.body.appendChild(errorMessage);
  }
}

handleFetchError();