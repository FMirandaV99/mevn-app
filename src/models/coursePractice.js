const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const coursePracticeSchema = new Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    practice: { type: mongoose.Schema.Types.ObjectId, ref: 'Practice' },
    hours: Number,
    date: Date,
    assistant: String,
    groups: String,
    caracter: String
});

module.exports = mongoose.model( 'CoursePractice', coursePracticeSchema );