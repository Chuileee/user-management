var userService = require('./userService');

var saveUserInfoController = async(req, res) => {
    try{
        var status = await userService.saveUserInfoService(req.body);

        if(status){
            res.send({"status":true, message: "UserInfo saved Successfully."});
        }else{
            res.send({"status": false,message: "Error in saving UserInfo."});
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = { saveUserInfoController}