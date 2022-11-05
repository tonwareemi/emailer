fetch("https://wgtebtfqvnppecpnpkab.nhost.run/v1/functions/email", {
    method: "POST",
    body: JSON.stringify({
      title: "Email test",
      html:`<!doctype html> <html> <body> random html text</body></html>`,
      reciever: "hillaryzakana90@gmail.com",
      sender:  'r71523954@gmail.com',
      password: 'kfcqorwqmutizbmu',
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))