const mongoose = require('mongoose');
const legacy = 'legacy_builds_db';

mongoose.connect(`mongodb://127.0.0.1/${legacy}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`${legacy} connection established`))
    .catch((err) => console.log('cannot establish connection to the database', err));