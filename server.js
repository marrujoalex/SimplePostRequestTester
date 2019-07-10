const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Publish small testing routes here
app.get('/api/test', function(request, response) {
    const userId = request.query;
    const query = JSON.stringify(userId);

    response.send('Hello, this confirms it works: ' + query);
})

app.post('/api/postdata', function (request, response) {
    const body = request.body;

    // View what's happening in the terminal
    console.log('New post');
    console.log('=========');
    console.log(body);
    console.log(request.headers);
    console.log('\n');
})

// Start the server using this port
app.listen(port);
console.log('Server started on the following port: ' + port);