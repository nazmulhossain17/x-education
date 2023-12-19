const { jwtKey } = require("../config");
const { errorResponse } = require("../controller/admin.controller");
const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
  try {
    // console.log("User Object:", req.user);

    if (!req.user || !req.user.isAdmin) {
      return errorResponse(res, {
        statusCode: 403,
        message: "Forbidden.",
      });
    }

    next();
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: "Error finding user",
    });
  }
};

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Please Login",
      });
    }
    const decoded = jwt.verify(token, jwtKey);
    // req.body.userId = decoded._id;
    // console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: error.message,
    });
  }
};

const isLoggedOut = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (token) {
      return errorResponse(res, {
        statusCode: 404,
        message: "User is already logged in",
      });
    }

    next();
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: error.message,
    });
  }
};

module.exports = { isAdmin, isLoggedIn, isLoggedOut };
