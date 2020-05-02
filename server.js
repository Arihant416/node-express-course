const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mockUserData = [{ name: 'Arihant' }, { name: 'Jain' }];

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData,
    });
});

app.get('/users/:id', function (req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id,
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const mockUsername = 'Arihant416';
    const mockPassword = 'hashSecret';
    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password & username match!',
            token: 'encrypted token goes here',
        });
    } else {
        res.json({
            success: false,
            message: "password and username don't match",
        });
    }
});
app.listen(8000, function () {
    console.log('server is running');
});
