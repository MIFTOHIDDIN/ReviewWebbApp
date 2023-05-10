const express = require( "express" );
const cors = require( "cors" );
const mongoose = require( "mongoose" );
// var bodyParser = require("body-parser");

const app = express();
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.uq4pl6p.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on( "error", ( err ) => console.log( err.message, "db ulanmadi" ) );
db.on( "open", () => console.log( " Connected to mongoose DB" ) );

// Utils
const port = 5003;
app.use( cors() );
app.use( express.json() );

// Routes
const booksRoute = require( "./routes/books" );
app.get( "/books", booksRoute );
app.post( "/books", booksRoute );
app.get( "/books/:id", booksRoute );

app.listen( port, () => {
    console.log( `Server is running ${ port }` );
} );