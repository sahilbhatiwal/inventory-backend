const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
exports.isAuthenticated = async (req, res, next) => {
  try {
    // get bearer token
    let token =
      req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error("Token Missing");

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    const user = await userModel.findById(decoded.id);

    if (!user) throw new Error("invalid user ");

    user.password = undefined;
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: `some error occuresd ${err}`,
    });
  }
};
