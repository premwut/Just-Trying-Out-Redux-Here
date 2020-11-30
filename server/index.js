'use strict';
const db = require('./knexfile.js');
const app = require('./app');

const PORT = process.env.PORT || 9000

// try {
//     db.connect(err => {
//         if (err) throw err;
//         console.log('connected');
//     });
    
// } catch (e) {
//     console.err(e)
// }
app.use('./api', (req, res, next) => {
    next();
});
app.locals.db = db;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});