const jwt=require("jsonwebtoken");

const SetUser=(email)=>{
    
    
    return jwt.sign({email}, process.env.JWT_SECRET,{expiresIn:'1h'});
}

const getUser=(token)=>{
    if(!token){
        return null;
    }
    return jwt.verify(token, process.env.JWT_SECRET);
}


function checkforAuthentication(req, res, next){
    const token = req.cookies?.token;
    // if(!token){
    //     return res.render('login',{message:"Not Logged in"});
    // }
    try {
          req.user=getUser(token);
    } catch (error) {
            return res.render('login',{message:"Invalid/expired token"});
    }
  
    return next();
}
module.exports={getUser,SetUser,checkforAuthentication}