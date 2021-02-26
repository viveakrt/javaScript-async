function fetchRandomNumbers() {
	console.log("Fetching number...");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			console.log("Received random number:", randomNum);
			resolve(randomNum);
		}, (Math.floor(Math.random() * 5) + 1) * 1000);
	});
}

function fetchRandomString() {
	console.log("Fetching string...");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = "";
			let characters =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			let charactersLength = characters.length;
			for (let i = 0; i < 5; i++) {
				result += characters.charAt(
					Math.floor(Math.random() * charactersLength)
				);
			}
			console.log("Received random string:", result);
			resolve(result);
		}, (Math.floor(Math.random() * 5) + 1) * 1000);
	});
}

//fetchRandomNumbers((randomNum) => console.log(randomNum));
//fetchRandomString((randomStr) => console.log(randomStr));

//using Promises
//Task 2

fetchRandomNumbers()
	.then((randomNum) => {
		let sum = 0;
		sum += randomNum;
		console.log(`Sum is : ${sum}`);
		Promise.resolve(fetchRandomNumbers()).then((randomNum) => {
			sum += randomNum;
			console.log(`Random sum is : ${sum}`);
		});
		return sum;
	})
	.catch((error) => console.log(error));

//Task 3
fetchRandomNumbers().then((num) => {
	fetchRandomString().then((str) => {
		console.log("Concatenated string : ", num + str);
	});
});

//Task 4
const randomNum = function (num) {
	const random = [];
	for (index = 0; index < num; index++) {
		random.push(fetchRandomNumbers());
	}
	return random;
};

Promise.all(randomNum(10))
.then(item => item.reduce((acc,cur) => acc+cur))
.then((sum) => console.log(`Sum of 10 random number: ${sum}`))
.catch(error => console.log(error));

//Async Await
//Task 2
async function sumTwo(){
    try{
        let sum = await fetchRandomNumbers();
        console.log(`async await Sum : ${sum}`);
        sum += await fetchRandomNumbers();
        console.log(`Async Await sumTwo : ${sum}`);
    } catch (error){
        console.error(error);
    }
}
sumTwo();

//Task 3
async function concat(){
    try{
        const num = await fetchRandomNumbers();
        const str = await fetchRandomString();
        console.log("Async await Concatenated string : ", num + str);
    }catch(error){
        console.error(error);
    }
}
concat();

//Task 4
async function randomNumSum(num) {
	const random = [];
    let sum = 0;
	for (index = 0; index < num; index++) {
		random.push(await fetchRandomNumbers());
	}
    try{
        sum = random.reduce((acc,cur) => acc+cur);
        console.log(`Async await Sum of 10 number : ${sum}`);
    }catch(err){
        console.error(err);
    }
	
}
randomNumSum(10);
