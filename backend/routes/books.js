const express = require( "express" );
const booksSchema = require( "../models/books" );

const route = express.Router();

// Get All
route.get( "/books", async ( req, res ) => {
    console.log( "get method" );
    try
    {
        let users = await booksSchema.find();
        res.status( 200 ).send( users );
    } catch ( err )
    {
        res.status( 500 ).send( { message: err.message } );
    }
} );
// Get One
route.get( "/books/:id", async ( req, res ) => {
    booksSchema.findById( req.params.id ).then( ( st ) => {
        res.status( 200 ).json( { book: st } );
    } );
} );

// create one
route.post( "/books", async ( req, res ) => {
    if ( req.body.token )
    {
        console.log( "post method" );
        const bk = booksSchema.create( req.body );
        res.status( 200 ).send( bk );
    } else
    {
        res.status( 401 ).json( { message: "login first" } );
    }
} );

module.exports = route;