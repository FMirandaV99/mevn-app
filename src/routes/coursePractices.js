const express = require( 'express' );
const { getCoursePractices, createCoursePractice, updateCoursePractice, deleteCoursePractice } = require( '../controllers/coursePractices' );
const { authenticateJWT } = require( '../helpers/auth' );

const router = express.Router();

router.get( '/', authenticateJWT, getCoursePractices );
router.post( '/create', authenticateJWT, createCoursePractice );
router.put( '/update/:id', authenticateJWT, updateCoursePractice );
router.delete( '/delete/:id', authenticateJWT, deleteCoursePractice );

module.exports = router;