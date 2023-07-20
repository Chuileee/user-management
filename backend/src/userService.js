var userModel =require('./userModel');
var key = 'mystudentsaretalented';
var encryptor = require('simple-encryptor')(key);

module.exports.saveUserInfoService = (userDetails) => {
    return new Promise(function saveUserInfoFun(resolve, reject){
        var userModelData = new userModel();
        userModelData.username = userDetails.username;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;

        //code to encrypt password
        var encryptedPassword = encryptor.encrypt(userDetails.password);  //encryption
        userModelData.password = encryptedPassword; //save the password to the variable

        userModelData.save( function resultHandle(error, result){
            if(error){
                reject(true);
            }else{
                resolve(true);
            }
        });
    });
}

module.exports.userLoginService = (userLoginDetails) => {
    return new Promise(function userLoginFunctionality(resolve, reject){
        userModel.findOne({email:userLoginDetails.email}, function getLoginResult(error,result){
        if(error){
            reject({status: false, message: "Invalid Data"});
        }else{
            if(result != undefined && result !=null){
                var decryptedPassword = encryptor.decrypt(result.password);
                if(decryptedPassword == userLoginDetails.password){
                    resolve({status: true, message: "User validated Successfally"})
                }else{
                    reject({status: false, message: "User validation failed"});
                }
            }else{
                reject({status: false, message: "Error in User Information"});
            }
        }
        });
    });
}