const express = require( 'express' );
const { getUsers, createUser, updateUser, deleteUser, login } = require( '../controllers/users' );
const { authenticateJWT } = require( '../helpers/auth' );

const router = express.Router();

router.get( '/', authenticateJWT, getUsers );
router.post( '/create', createUser );
router.put( '/update/:id', authenticateJWT, updateUser );
router.delete( '/delete/:id', authenticateJWT, deleteUser );
router.post( '/login', login );

module.exports = router;