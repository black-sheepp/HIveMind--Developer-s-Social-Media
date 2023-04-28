const Post = require("../Models/postSchema")

module.exports.createPost = async function(req,res){
    try{
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        })
    
        if(post){
            return res.redirect('back')
        }
    }catch(err){
        console.log('Error in creating post')
    }
}