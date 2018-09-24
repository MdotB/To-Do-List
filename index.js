const express = require('express');
const app = express();
const router = require('./routes/routes');

app.get('/', (req, res) => {
    res.send('hello world');
});
app.set('view engine', 'hbs');

app.use(router);

app.listen(3000, () => {
    console.log('server is running');
});