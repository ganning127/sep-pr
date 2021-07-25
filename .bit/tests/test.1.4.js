let uri;
const args = require('minimist')(process.argv.slice(2))
const fetch = require('node-fetch');
const fs = require('fs') //get the methods in the fs package

const user = args['user'];
const repo = args['repo'];

let endpoint;

uri = process.env.HACKERVOICE_ENDPOINT;

async function main() {
    if (uri == undefined || uri[0] != "h") {
        // await throwError("You have not added your function url as a secret!");
    }

    //if you wanna add more files, just put a comma after the filename (array)

    const commit_file = ['hackervoice/index.js']

    for (var i = 0; i < commit_file.length; i++) {
        var a = commit_file[i];
        fs.access(commit_file[i], (err) => {
            if (err) {
                throwError(`You did not commit '${a}'`);
            }
        })
    }

    test1 = "fifiiscool";
    uri1 = uri + "&password=" + test1;
    if (uri[0] != "h") {
        await throwError("You have not added your function url as a secret!");
    }
    try {
        try {
            const resp = await fetch(uri1, {
                method: 'GET'
            });
            var data = await resp.text()
            let test = JSON.stringify(data)

            if (data == test1) {
                console.log("Yay! 🎉 We got: " + JSON.stringify(data) + ", which matches our input.")
            } else {
                await throwError(`We got this '${JSON.stringify(data)}'. We should have gotten our input, 'fifiiscool' ... Try again!`);
            }
        }
        catch (e) { await throwError(`Try again! We got this error when trying to make a request: ${e}`); }
    } catch (e) {
        throw new Error("You have not added your function url as a secret!");
    }

}

main();





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

    process.exit(1);
}

