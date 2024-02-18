// router.js
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const User = require('../Models/User.model');
const { signAccessToken,refreshAccessToken , verifyRefreshToken } = require('../helpers/jwt_helper');
const { validateAuthSchema } = require('../helpers/validationMiddleware');

router.post('/register', validateAuthSchema, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log('Received email:', email);
    console.log('Received password:', password);

    const doesExist = await User.findOne({ email: email });
    if (doesExist) throw createError.Conflict(`${email} is already registered`);

    const user = new User({ email, password });
    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.id);
    const refreshToken = await refreshAccessToken(savedUser.id);
    res.send({ accessToken , refreshToken});
  } catch (error) {
    next(error);
  }
});

router.post('/login', validateAuthSchema, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) throw createError.BadRequest('Invalid email or password');
    

    const isMatch  = await user.isValidPassword(password);
    if (!isMatch) {
      throw createError.Unauthorized('Invalid email or password');
    }
    const accessToken = await signAccessToken(user.id);
    const refreshToken = await refreshAccessToken(user.id);
    res.send({ accessToken ,refreshToken });


    // Login logic here
  } catch (error) {
    console.error("Error occurred:", error);
    next(error);
  }
});





router.post('/refresh-token' ,async(req, res , next)=>{
// res.send("register") 
try{
  const {refreshToken} =req.body
  console.log(refreshToken)
  if(!refreshToken) throw createError.BadRequest()
    const userId = await verifyRefreshToken(refreshToken);

    const accessToken = await signAccessToken(userId);
    const refToken = await refreshAccessToken(userId);
    res.send({accessToken:accessToken,refreshToken:refToken})

}
catch(error){next(error)
}

})


router.delete('/logout' ,async(req, res , next)=>{
res.send("register")
})


module.exports = router;
