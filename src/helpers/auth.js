const jwt = require( 'jsonwebtoken' );

const generateAccesToken = ( user ) => {

    return jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '24h' });

}

const authenticateJWT = ( req, res, next ) => {

    const authHeader = req.headers.authorization;

    if (authHeader) {
    
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = { generateAccesToken, authenticateJWT };