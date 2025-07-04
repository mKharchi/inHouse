import validator from 'validator'
import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


//route for admin login
const loginAdmin = async (req, res) => {
try {
    
    const { email , password} = req.body
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
        
        const token = jwt.sign(email+password , process.env.JWT_SECRET)
        res.json({
            success:true , token
        })


    }else{
        res.json({
            success:false , message:"invalid credentials"
        })

    }
} catch (error) {
    
        res.json({
            success:false , message:error.message
        })
}
}




export { loginAdmin }