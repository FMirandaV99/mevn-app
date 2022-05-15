const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const topicSchema = new Schema({
    name: String
});

module.exports = mongoose.model( 'Topic', topicSchema );