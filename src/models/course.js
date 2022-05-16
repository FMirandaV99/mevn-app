const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const courseSchema = new Schema({
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
    subject: String,
    year: Number,
    career: String,
    hoursPerWeek: Number
});

module.exports = mongoose.model( 'Course', courseSchema );