const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

const checkUserAuth = async (req, res, next) => {
  let token;
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { userId } = jwt.verify(token, process.env.SECREAT_KEY);
      req.user = await userModel.findById(userId).select("-password");
      next();
    } catch (error) {
      console.error("Error in checkUserAuth middleware:", error);
      return res.status(401).json({
        message: "Failed Unauthorized User",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "Token Not Found",
    });
  }

  // If none of the above conditions are met, call next() to continue to the next middleware
  next();
};

module.exports = checkUserAuth;

