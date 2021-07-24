const args = require('minimist')(process.argv.slice(2))
const fetch = require('node-fetch');
const user = args['user'];
const repo = args['repo'];
const endpoint = "https://counselorbot.azurewebsites.net/api/hasuraErrorUpdate?code=qL2oUjo1aUIBdfJe3VhEF41qRQBSnShZwPGr3dujRwvtOGa855fLoA==";

let hello = undefined

try { hello = require('./../../week1/helloworld.js') }
catch(e) {
    let error = "Searching for \"helloworld.js\"... file cannot be found"
    
    options = {
        method: "POST",
        headers: {
            user,
            repo,
            error
        }
    }
    await fetch(endpoint, options)
    console.log("fetch has been made");
    
    throw new Error(error);
}

let helloworld = hello()
let test_output = "Hello World"

if (helloworld != test_output){
    let error2 = `Got: "${helloworld}", was expecting: "${test_output}".`
    
    options = {
        method: "POST",
        headers: {
            user,
            repo,
            error: error2
        }
    }
    await fetch(endpoint, options)
    console.log("fetch has been made")
    
    throw new Error(error2)
}

console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")
