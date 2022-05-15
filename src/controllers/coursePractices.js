const CoursePractice = require( '../models/coursePractice' )

const getCoursePractices = async ( req, res ) => {

    const coursePractices = await CoursePractice.find();

    res.json( coursePractices );

};

const createCoursePractice = async ( req, res ) => {

    const coursePractice = new CoursePractice( req.body );

    await coursePractice.save();
    
    res.json({
        message: 'CoursePractice saved'
    });
};

const updateCoursePractice = async ( req, res ) => {

    await CoursePractice.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'CoursePractice updated'
    });

}

const deleteCoursePractice = async ( req, res ) => {

    await CoursePractice.findByIdAndRemove( req.params.id );

    res.json({
        message: 'CoursePractice deleted'
    });

}

module.exports = { getCoursePractices, createCoursePractice, updateCoursePractice, deleteCoursePractice };