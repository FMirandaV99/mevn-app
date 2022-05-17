const express = require( 'express' );
const morgan = require( 'morgan' );
const mongoose = require( 'mongoose' );

require('dotenv/config');

const practices = require( './routes/practices' );
const topics = require( './routes/topics' );
const users = require( './routes/users' );
const professors = require( './routes/professors' );
const courses = require( './routes/courses' );
const coursePractices = require( './routes/coursePractices' );

const app = express();

mongoose.connect( process.env.MONGO_DB )
    .then( db => console.log('DB is connected') )
    .catch( err => console.log(err) );

app.set( 'port', 3000 );

// Middlewares
app.use( morgan('dev') );
app.use( express.json() );

// Routes
app.use( '/api/practices', practices );
app.use( '/api/topics', topics );
app.use( '/api/users', users );
app.use( '/api/professors', professors );
app.use( '/api/courses', courses );
app.use( '/api/coursePractices', coursePractices );

// Static files ( Vue.js App )
app.use( express.static(`${ __dirname }/public`) );

app.listen( app.get('port') , () => {
    console.log(`Server started on port ${ app.get('port') }`);
});