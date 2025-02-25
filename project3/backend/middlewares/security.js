const utilSecurity = require("../util/security")

module.exports = {
    checkJWT,
    checkLogin,
    checkPermission
};

function checkJWT(req, res, next) {
    // Check for the token being sent in a header or as a query parameter
    let token = req.get("Authorization") || req.query.token;
    token = token.replace("Bearer ", "");
    if (token) {
        req.user = utilSecurity.verifyJWT(token);
    } else {
      // No token was sent
      req.user = null;
    }
    return next();
  };
  

function checkLogin(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json("Unauthorized");
    // A okay
    next();
  };

function checkPermission(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json("Unauthorized");
    if (req.body.email != req.user.email && req.user.is_admin == false) return res.status(401).json("Unauthorized"); 
    next();
  };