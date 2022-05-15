const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const professorSchema = new Schema({
    name: String,
    lastName: String
});

module.exports = mongoose.model( 'Professor', professorSchema );