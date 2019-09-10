function fetchRandomNumbers(callback){
    console.log('Fetching number...');
    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        console.log('Received random number:', randomNum);
        callback(randomNum);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
}

function fetchRandomString(callback){
    console.log('Fetching string...');
    setTimeout(() => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < 5; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log('Received random string:', result);
        callback(result);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
}



fetchRandomNumbers((randomNum) => console.log(randomNum))
fetchRandomString((randomStr) => console.log(randomStr))