const mongoose = require('mongoose')
const {
    uri
} = require('../db/db')

const connect = (url = uri, opts = {}) => {
    return mongoose.connect(
        uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true
        }
    )

}
module.exports = {
    connect
}