const Topic = require( '../models/topic' )

const getTopics = async ( req, res ) => {

    const topics = await Topic.find();

    res.json( topics );

};

const createTopic = async ( req, res ) => {

    const topic = new Topic( req.body );

    await topic.save();
    
    res.json({
        message: 'Topic saved'
    });
};

const updateTopic = async ( req, res ) => {

    await Topic.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Topic updated'
    });

}

const deleteTopic = async ( req, res ) => {

    await Topic.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Topic deleted'
    });

}

module.exports = { getTopics, createTopic, updateTopic, deleteTopic };