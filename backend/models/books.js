const mongoose = require( "mongoose" );

const booksSchema = new mongoose.Schema( {
    name: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    src: {
        type: String,
        // required: true,
    },
    group: {
        type: String,
        // required: true,
    },
} );

module.exports = mongoose.model( "books", booksSchema );