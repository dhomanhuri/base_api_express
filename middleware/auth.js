const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    try {
        //statement when authorized
        let token;
        if (req.headers.authorization.includes(" ")) {
            token = req.headers.authorization.split(" ")[1];
        } else {
            token = req.headers.authorization;
        }
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        // statement when unauthorized
        // ignore clear cookie if use express backend only
        // res.clearCookie("token");
        res.status(401).send({
            status: false,
            message: "access unauthorized",
        });
    }
};
module.exports = { auth };
