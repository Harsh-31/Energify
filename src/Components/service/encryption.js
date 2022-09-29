import bcrypt from "bcryptjs";

export function saveOTP(otp) {
    console.log(otp);
    bcrypt.hash(`${otp}`, 10, function(err, hash) {
        if(err){
            console.log(err);
        }
        console.log(hash)
        localStorage.setItem("_otp", hash);
    });
}

export function saveUser(data) {
    localStorage.setItem("_energify_user", JSON.stringify(data));
}

export function getUser() {
    const data = window.localStorage.getItem("_energify_user");
    return JSON.parse(data);
}


export function encryptPassword(pass) {
    return new Promise(function(resolve, reject) {
        bcrypt.hash(`${pass}`, 10, function(err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

export function matchPassword(insertpass, realpass) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(insertpass, realpass, function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

export function verifyOTP(otp) {
    const hashed = window.localStorage.getItem("_otp");
    return new Promise(function(resolve, reject) {
        bcrypt.compare(otp, hashed, function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}