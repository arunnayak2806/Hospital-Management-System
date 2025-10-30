import jwt from 'jsonwebtoken';

const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;

    if (!dtoken) {
      return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    const token_Decode = jwt.verify(dtoken, process.env.JWT_SECRET);

   
    req.docId = token_Decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
