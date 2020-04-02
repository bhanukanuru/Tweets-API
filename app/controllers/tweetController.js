const Tweet = require('../models/tweetModel')

module.exports.show=(req,res)=>{
    const name = req.params.name
    //console.log(name)
    Tweet.findOne({name})
   .then((user)=>{
        if(user){
            res.json(user)
        }
        else{
            const newTweet =new Tweet({name : name})
            newTweet.save()
            .then((tweet)=>{
               // console.log(tweet)
                res.json(tweet)
            })
            .catch((err)=>{
                res.json(err)
            })
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}