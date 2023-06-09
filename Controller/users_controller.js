const User = require("../Models/userSchema")
const Post = require("../Models/postSchema")

module.exports.createUser = async function(req,res){
    try{
        if(req.body.password != req.body.confirm_password){
            console.log("password not matched")
            return res.redirect('back')
        }
    
        let user = await User.findOne({email: req.body.email});
    
        if(!user){
            User.create(req.body);
            return res.redirect('/sign-in')
        }

        if(user){
            return res.redirect('/sign-in')
        }else{
            return res.redirect('back')
        }

    }catch(err){
        console.log('error creating user',err)
    }
}

module.exports.createSession = function(req,res){
    return res.redirect('/user/dashboard');
}

module.exports.dashboard = async function(req,res){
    let post = await Post.find({}).sort({createdAt:-1}).populate('user')
    if(post){
        return res.render("dashboard",{
        title: "Dashboard",
        post: post
    })
    }
}

module.exports.profile = function(req,res){
    return res.render("profile",{
        title: "Profile"
    })
}

module.exports.signOut = function(req,res){
    // req.logout();
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}