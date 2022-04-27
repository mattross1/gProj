const dbq = require('./sqlquery');
const cors = require('cors');
const express = require('express');
const em = express();
const port = 3000;

const mysql = require('mysql');
const config = require('./sqlcfg.js');

const connection = mysql.createConnection(config.cfgObj);

em.use(cors());

em.get('/', async (req, res) => {
    connection.query(req.header('paras'), function(error, results, fields) {
        if(error) throw error;
        console.log('', results);
        res.send(results);
    });
})

em.listen(port, () => {
    console.log('APP OPEN ON', port);
})
