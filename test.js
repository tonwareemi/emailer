fetch("https://svqgxhtogyqytiuwkxtt.nhost.run/v1/functions/email", {
    method: "POST",
    body: JSON.stringify({
      html:`<!doctype html> <html> <body> random html text</body></html>`,
      email: "hillaryzakana90@gmail.com"
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))