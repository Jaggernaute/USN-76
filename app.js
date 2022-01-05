let express = require('express');
let path = require('path');

let app = express()


app.use('/', express.static('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(9001)
