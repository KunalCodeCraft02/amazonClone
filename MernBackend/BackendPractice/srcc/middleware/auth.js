// const jwt = require("jsonwebtoken");
// const Backend = require("../models/schema");

// const auth = async (req,res,next)=>{
//     try{
//         const token = req.cookies.jwt
//         const verifyuser = jwt.verify(token,"mynameiskunalandiamcoderandhacker");
//         console.log(verifyuser);

//          const user = Backend.findOne({_id:verifyuser._id})
//          console.log(user);
//          next();
         

//     }
//     catch(err){
//         res.status(404).send(err)
//     }
// }

// module.exports = auth;