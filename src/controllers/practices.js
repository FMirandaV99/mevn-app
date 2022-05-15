const Practice = require( '../models/practice' )

const getPractices = async ( req, res ) => {

    const practices = await Practice.find().populate( 'topic' );

    res.json( practices );

};

const createPractice = async ( req, res ) => {

    const practice = new Practice( req.body );

    await practice.save();
    
    res.json({
        message: 'Practice saved'
    });
};

const updatePractice = async ( req, res ) => {

    await Practice.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Practice updated'
    });

}

const deletePractice = async ( req, res ) => {

    await Practice.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Practice deleted'
    });

}

module.exports = { getPractices, createPractice, updatePractice, deletePractice };