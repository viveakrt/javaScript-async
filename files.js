const fs = require("fs");
/**
NOTE: Do not use synchronous methods like readFileSync, writeFileSync for any of the tasks
      Do not use callbacks to implement, create your own promise based functions
 *
*/
/*
Task 1: Read the zomato.json file, choose a restaurant you like, and write it to
another file named my-fav-restaurant.json in output directory.
read zomato.json -> write task-1.json -> print 'Task 1 done'
*/
function getFavoriteRestaurant() {}

/*
Task 2: Read the movies.json file, choose a movie you like, and write it to
file named task-2-1.json in output directory, now read the zomato.json,
and write it to a file named task-2-2.json.
NOTE: You have to read the file twice, and it sequence should be
read movies.json -> write task-2-1.json -> read movies.json -> write task-2-2.json -> print 'Task 2 done'
*/
function getFavoriteMovies() {}

/*
Task 3: Read the movies.json file, choose 2 movies you like, and write it to
files named task-3-1.json and task-3-2.json.
NOTE: You have to read the file once, and simultaneously write to the two files
read movies.json -> task-3-1.json, write task-3-2.json -> print 'Task 3 done'
*/
function getFavoriteRestaurantAndMovies() {}
