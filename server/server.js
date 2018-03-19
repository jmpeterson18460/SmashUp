let express = require('express');
let app = express ();
const PORT = 5002;
let bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Hey! Listen!', PORT);
})