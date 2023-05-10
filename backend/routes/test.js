const express = require( "express" );

const route = express.Router();
// const userSub = require("../models/users");
const userSub = require( "../houses" );

// Get One
route.get( "/users", async ( req, res ) => {
    try
    {
        res.json( userSub );
    } catch ( err )
    {
        res.status( 500 ).send( { message: err.message } );
    }
    // console.log("get one", res);
    // try {
    //   const users = await userSub.find();
    //   res.json(users);
    // } catch (err) {
    //   res.status(500).send({ message: err.message });
    // }
} );

// Create One
route.post( "/users", async ( req, res ) => {
    console.log( req.body, "req" );
    const user = new userSub( {
        name: req.body?.name,
        surname: req.body?.surname,
    } );
    try
    {
        const newUser = await user.save();
        res.status( 201 ).json( newUser );
    } catch ( err )
    {
        res.status( 400 ).send( { message: err.message } );
    }
} );
// get one
route.get( "/users/:id", getOne, async ( req, res ) => {
    res.send( res.getOne );
} );

// delete one
route.delete( "/users/:id", getOne, async ( req, res ) => {
    console.log( res );
    try
    {
        await res.getOne.remove();
        res.json( { msg: "deleted" } );
    } catch ( er )
    {
        return res.status( 500 ).send( { msg: "error" } );
    }
} );

async function getOne ( req, res, next ) {
    let user;
    try
    {
        user = await userSub.findById( req.params.id );
        // const user = await userSub.findById('62bc16bbfaef3e9b9b98a4b9');
        if ( user === null )
        {
            return res.status( 400 ).json( { msg: "errrrr" } );
        }
        res.json( user );
    } catch ( err )
    {
        // return res.status(500).json({ message: err.message });
    }
    res.getOne = user;
    next();
}

module.exports = route;