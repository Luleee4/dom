const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))


app.post('/login', (req, res) => { console.log(req.body) 
   let username = req.body.username;
   let password = req.body.password;
    USERS.forEach(element => {
       if (username === element.username && password === element.password) 
       { res.send('Login successful'); } });
        res.send("Nema takvog usera. Nije uspesan login");
       });

app.post('/register', (req, res) => {
  let username = req.body.username;
  let password = req.body.password; 
  USERS.push(req.body);  
   res.send('Registration successful');
});
app.get('/index', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get('/shop', (req, res) => {
  res.sendFile(__dirname + "/public/shop.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});