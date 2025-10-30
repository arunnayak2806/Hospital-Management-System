// import jwt from 'jsonwebtoken';

// User authentication middleware

import jwt from 'jsonwebtoken';

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const token = req.headers.token; // make sure frontend sends token in 'token' header
    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    const token_Decode = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId directly to req
    req.userId = token_Decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;


