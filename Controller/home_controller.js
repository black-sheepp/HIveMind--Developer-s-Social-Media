

module.exports.home = function(req,res){
    if (req.isAuthenticated()) {
        return res.redirect("/user/dashboard");
      }
    return res.render("home",{
        title: "Welcome to HiveMind"
    })
}

module.exports.signIn = function(req,res){
    if (req.isAuthenticated()) {
        return res.redirect("/user/dashboard");
      }
    return res.render("signIn",{
        title: "Sign In"
    })
}

module.exports.signUp = function(req,res){
    if (req.isAuthenticated()) {
        return res.redirect("/user/dashboard");
      }
    return res.render("signUp",{
        title: "Sign Up"
    })
}