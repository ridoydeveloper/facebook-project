import createError from "../controllers/errorController.js";
import  Jwt  from "jsonwebtoken";
// check user is authenticated or not
export const adminhMiddleware = ( req , res , next ) => {


   try {


    const token = req.cookies.access_token;

     // check token


     if(!token){

        return next(createError(401,"You are not authenticated"));
    }

    // if logeed in

    const login_user = Jwt.verify( token , process.env.JWT_SECRET);

    if(!login_user){

        return next(createError(401, "Invalid token"))
    }
  
    if(!login_user.isAdmin){

        return next(createError(401, "Only admin can access this fetures"))
    }

    
   if(login_user){

     req.user = login_user;
     next();
   }

   } catch (error) {

    return next(error)
    
   }


}