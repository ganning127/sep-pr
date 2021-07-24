const args = require('minimist')(process.argv.slice(2))
const fetch = require('node-fetch');

const user = args['user'];
const repo = args['repo'];


let hello;

async function main() {
    try { hello = require('./../../week1/helloworld.js') }
    catch (e) {
        console.log("going to throw error");
        await throwError("Searching for 'helloworld.js'... file cannot be found");
    }

    let helloworld = hello()
    let test_output = "Hello World"

    if (helloworld != test_output) {
        await throwError(`Got: '${helloworld}', was expecting: '${test_output}'.`)
    }

    console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")
}

async function throwError(error) {
    const endpoint = "https://counselorbot.azurewebsites.net/api/hasuraErrorUpdate?code=qL2oUjo1aUIBdfJe3VhEF41qRQBSnShZwPGr3dujRwvtOGa855fLoA==";
    options = {
        method: "POST",
        headers: {
            user,
            repo,
            error
        }
    }
    await fetch(endpoint, options)

    throw new Error(error);

    console.log("fetch has been made");
}

main();
