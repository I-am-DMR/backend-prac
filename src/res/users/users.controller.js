const {user}=require("./user.model")
const me = (req, res) => {
    res.status(200).json({data:req.user})
}
module.exports={me}