const express = require( 'express' );
const { getTopics, createTopic, updateTopic, deleteTopic } = require( '../controllers/topics' );
const { authenticateJWT } = require( '../helpers/auth' );

const router = express.Router();

router.get( '/', authenticateJWT, getTopics );
router.post( '/create', authenticateJWT, createTopic );
router.put( '/update/:id', authenticateJWT, updateTopic );
router.delete( '/delete/:id', authenticateJWT, deleteTopic );

module.exports = router;