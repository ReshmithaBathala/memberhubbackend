const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, "MEMBER_HUB");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send({ message: "Token is not valid" });
  }
};

module.exports = auth;
