import User from "../models/User.js";

export const getSignUp = (req,res)=>{
    res.render('signup');
}

export const registerUser = async(req,res)=>{
    const {username,password} = req.body;
    await User.create({username,password});
    res.redirect('/login');
}

export const getLogin = (req,res)=>{
    res.render('signin');
}

export const loginUser = async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username,password});
    if(!user){
        res.send("Username & password is incorrect.!!");
    }
    res.cookie('userid',user._id.toString(),{httpOnly:true});
    res.redirect('/manage-books')
}

