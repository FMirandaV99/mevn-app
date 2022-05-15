const express = require( 'express' );
const { getPractices, createPractice, updatePractice, deletePractice } = require( '../controllers/practices' );
const { authenticateJWT } = require( '../helpers/auth' );

const router = express.Router();

router.get( '/', authenticateJWT, getPractices );
router.post( '/create', authenticateJWT, createPractice );
router.put( '/update/:id', authenticateJWT, updatePractice );
router.delete( '/delete/:id', authenticateJWT, deletePractice );

module.exports = router;