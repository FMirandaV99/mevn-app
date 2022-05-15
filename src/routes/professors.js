const express = require( 'express' );
const { getProfessors, createProfessor, updateProfessor, deleteProfessor } = require( '../controllers/professors' );
const { authenticateJWT } = require( '../helpers/auth' );

const router = express.Router();

router.get( '/', authenticateJWT, getProfessors );
router.post( '/create', authenticateJWT, createProfessor );
router.put( '/update/:id', authenticateJWT, updateProfessor );
router.delete( '/delete/:id', authenticateJWT, deleteProfessor );

module.exports = router;