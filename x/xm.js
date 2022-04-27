const dbq = require('./sqlquery');
const express = require('express');
const em = express();
const port = 3000;

em.get('/', async (req, res) => {
    let data;
    try {
        data = await dbq('SELECT * from iceTable')
    } catch(e) {
        console.log(e, 'Error Here');
    }
    console.log(data);
})

em.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})