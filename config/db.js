require('dotenv').config()
const mongoose = require('mongoose')
const userDB = process.env.MONGO_INITDB_ROOT_USERNAME
const passDB = process.env.MONGO_INITDB_ROOT_PASSWORD
const serviceDB = process.env.MONGO_SERVICE
const nameDB = process.env.MONGO_INITDB_DATABASE
const sources = process.env.AUTH_SOURCE;
const portDB = process.env.MONGO_PORT
const dbUrl = `mongodb://${userDB}:${passDB}@${serviceDB}:${portDB}/${nameDB}?authSource=${sources}`

mongoose.Promise = global.Promise
const connectWithRetry = () => {
  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }, function (err) {
    if (err) {
      console.error(`Failed to connect to mongo on startup - retrying in 5 sec
      ${err}`)
      setTimeout(connectWithRetry(), 5000)
    } else {
      console.log('mongoDB Connected ✅')
    }
  })
}

module.exports = {
  connectWithRetry
}
