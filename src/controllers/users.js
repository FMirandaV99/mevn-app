const { generateAccesToken } = require( '../helpers/auth' );
const User = require( '../models/user' )

const getUsers = async ( req, res ) => {

    const users = await User.find();

    res.json( users );

};

const createUser = async ( req, res ) => {

    const { username, password } = req.body;

    const oldUser = await User.findOne( { username } );

    if (oldUser) {
        return res.status(409).json({
            message: "User already exist. Please login"
        });
    }

    const user = new User( req.body );

    await user.save();
    
    res.json({
        message: 'User saved'
    });
};

const updateUser = async ( req, res ) => {

    const { username, password } = req.body;

    const oldUser = await User.findOne( { username } );

    if (oldUser) {
        return res.status(409).json({
            message: "User already exist"
        });
    }

    await User.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'User updated'
    });

}

const deleteUser = async ( req, res ) => {

    await User.findByIdAndRemove( req.params.id );

    res.json({
        message: 'User deleted'
    });

}

const login = async ( req, res ) => {

    const { username, password } = req.body;

    const user = await User.findOne( { username } );

    if(user && user.password === password) {

        const accesToken = generateAccesToken( user );

        return res.json({
            accesToken
        });

    } else {

        return res.status(401).json({
            message: "Username or password incorrect"
        })

    }

}

module.exports = { getUsers, createUser, updateUser, deleteUser, login };