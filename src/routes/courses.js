const express = require( 'express' );
const { getCourses, createCourse, updateCourse, deleteCourse } = require( '../controllers/courses' );
const { authenticateJWT } = require( '../helpers/auth' );

const router = express.Router();

router.get( '/', authenticateJWT, getCourses );
router.post( '/create', authenticateJWT, createCourse );
router.put( '/update/:id', authenticateJWT, updateCourse );
router.delete( '/delete/:id', authenticateJWT, deleteCourse );

module.exports = router;