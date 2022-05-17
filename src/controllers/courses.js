const Course = require( '../models/course' )

const getCourses = async ( req, res ) => {

    const courses = await Course.find().populate( 'professor' );

    res.json( courses );

};

const createCourse = async ( req, res ) => {

    const course = new Course( req.body );

    await course.save();
    
    res.json({
        message: 'Course saved'
    });
};

const updateCourse = async ( req, res ) => {

    await Course.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Course updated'
    });

}

const deleteCourse = async ( req, res ) => {

    await Course.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Course deleted'
    });

}

module.exports = { getCourses, createCourse, updateCourse, deleteCourse };