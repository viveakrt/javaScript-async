# CallBacks

**trello-callbacks.js**

- Get the board details using getBoard, use the board id to get lists from getLists for the list id qwsa221.
- Get board -> lists -> cards for list qwsa221 and cards for list jwkh245 **simultaneously**
- Get board -> lists -> cards for all lists **simultaneously**

# Consuming existing Promises
Consuming existing promises
**trello-promises.js**

- Get the board details using getBoard, use the board id to get lists from getLists for the list id qwsa221.
- Get board -> lists -> cards for list qwsa221 and cards for list jwkh245 **simultaneously**
- Get board -> lists -> cards for all lists **simultaneously**

# Creating Promises
Building your own promise based functions. First, solve it using promises. Then, refactor all solutions using async await.

**Task 1**: Right now, the function fetchRandomNumbers can be used by passing a callback,
Your task is to promisfy this function so that the following can be done:

fetchRandomNumbers().then((randomNum) => {
    console.log(randomNum)
});

Similarlly, do the same for the function fetchRandomString



**Task 2**: Fetch a random number -> add it to a sum variable and print sum-> fetch another random variable
-> add it to the same sum variable and print the sum variable.



**Task 3**: Fetch a random number and a random string simultaneously, concatenate their
and print the concatenated string



**Task 4**: Fetch 10 random numbers simultaneously -> and print their sum.

# Async await

**Task 1**: Complete the function userDataSerial. Send a login request for user1 -> get user profile data -> get user posts data

**Task 2**: Complete the function userDataParallel. Send a login request for user1 -> get user profile data and get user posts data simultaneously

