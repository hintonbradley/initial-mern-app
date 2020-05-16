const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

let PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))


