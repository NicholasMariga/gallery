var config = {}

// Use environment variables for security
config.mongoURI = {
    production: process.env.MONGO_URI_PRODUCTION || 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: process.env.MONGO_URI_DEVELOPMENT || 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: process.env.MONGO_URI_TEST || 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
