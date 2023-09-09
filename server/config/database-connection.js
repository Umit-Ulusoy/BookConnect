const mongoose = require('mongoose');

mongoose.set('debug', true);

const connectToDatabase = async () => {
    try {
        await mongoose
        .connect(
            process.env.MONGODB_CONNECTION_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true
                        });

        console.log('Database connection established.');
    } catch (error) {
        console.error(`Database connection couldn't be established! Error: ${error.message}`);
    }
}

module.exports = connectToDatabase;