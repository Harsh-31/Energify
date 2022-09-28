import bcrypt from "bcryptjs";

export function saveOTP(otp) {
    bcrypt.hash(`${otp}`, 10, function(err, hash) {
        if(err){
            console.log(err);
        }
        localStorage.setItem("_otp", hash);
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