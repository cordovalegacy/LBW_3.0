const mongoose = require('mongoose');
const legacy = 'legacy_builds_db';

mongoose.connect(`mongodb://127.0.0.1/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`${process.env.DB_NAME} connection established`))
    .catch((err) => console.log('cannot establish connection to the database', err));