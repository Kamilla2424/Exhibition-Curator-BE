const mongoose = require('mongoose');
const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config(
    {
        path: `${__dirname}/../.env.${ENV}`,
    }
);

async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('DATABASE_URI:', process.env.DATABASE_URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connect;