const User = require('../models/userModel')

module.exports.getData = async (req, res, next)=> {
    try {
        const data = await User.find()
        res.status(200).json({
            status : "success",
            data : {
                data
            }
        })
    }
    catch(err) {
        res.status(404).json({
            status: "fail",
            message : err
        })
        next(err)
    }
} 
module.exports.postData = async (req, res, next) => {
    try {
        // const newUser = new User({})
        // newUser.save()
        // console.log(req.body)
       const newUser = await User.create(req.body)
       res.status(201).json({
        status : "success",
        data : {
            newUser
        }
    })
    }
    catch(err) {
        res.status(400).json({
            status : "fail",
            message : err
        })
        next(err)
    }
}
module.exports.putData = async (req, res, next) => {
    try {
      
       const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
           new: true
       })
       res.status(200).json({
        status : "success",
        data : {
            newUser
        }
    })
    }
    catch(err) {
        res.status(404).json({
            status : "fail",
            message : err
        })
        next(err)
    }
}
module.exports.deleteData = async (req, res, next) => {
    try {
        res.end("del Hi")
    }
    catch(err) {
        next(err)
    }
}