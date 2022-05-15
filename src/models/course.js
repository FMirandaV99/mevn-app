const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const practiceSchema = new Schema({
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
    subject: String,
    year: Number,
    career: String,
    hoursPerWeek: Number
});

module.exports = mongoose.model( 'Practice', practiceSchema );