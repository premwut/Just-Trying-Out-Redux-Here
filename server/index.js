'use strict';
const dbConnection = require('./mysql.js');
const app = require('./app');

const PORT = process.env.PORT || 9000

try {
    dbConnection.connect(err => {
        if (err) throw err;
        console.log('connected');
    });
    
} catch (e) {
    console.err(e)
}

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});