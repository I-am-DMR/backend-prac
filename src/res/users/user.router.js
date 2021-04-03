const { Router } =require ('express')
const {me} =require("./users.controller")

const router = Router()
router.get('/', me)
module.exports={router}