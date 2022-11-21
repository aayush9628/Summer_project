import jwt from 'jsonwebtoken';

// do something based on req, and move to the next
// wants to like a post
// click the like button => auth middleware (next) => like controller
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if(isCustomAuth && token){
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next(); // crucial
    } catch (error) {
        console.log(error);
    }
};

export default auth;