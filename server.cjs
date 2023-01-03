const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Create an array to store users
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

app.post('/api/v1/users', (req, res) => {
    // Get the user data from the request body
    const user = req.body;

    // Add the user to the array
    users.push(user);

    // Return the updated list of users
    res.json(users);
});

app.get('/api/v1/users', (req, res) => {
    // Return a list of users
    res.json(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
