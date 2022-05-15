const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const practiceSchema = new Schema({
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    description: String,
    name: String
});

module.exports = mongoose.model( 'Practice', practiceSchema );