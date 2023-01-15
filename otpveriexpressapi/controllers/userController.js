import dotenv from 'dotenv';
dotenv.config();
import initMB from 'messagebird';
const messagebird = initMB(process.env.MESSAGEBIRD_API_KEY)

class UserController {
    //send otp to user
    static userLogin = async (req, res) => {
        const { phonenumber } = req.body;
        const newPhoneNumber = "+91" + phonenumber;
        var params = {
            template: "Your  Login OTP is %token ",
            timeout: 300

        };
        messagebird.verify.create(newPhoneNumber, params, (err, response) => {
            if (err) {
                console.log("OTP send Error:", err);
                res.status(200).send({ "status": "failed", "message": "Unable to send OTP" })
            }
            console.log("OTP Send Response:", response);
            res.status(200).send({ "status": "success", "message": "OTP Send Successfully", "id": response.id });
        })
    }
    //Verify OTP is Correct or Not

    static verifyOTP = async (req, res) => {
        const { id, otpcode } = req.body;
        messagebird.verify.verify(id, token, (err, response) => {
            if (err) {
                console.log("OTP Verification Error:", err);
                res.status(200).send({ "status": "failed", "message": "Invalid OTP" })
            }
            console.log("OTP Verification Response:", response);
            res.status(200).send({ "status": "success", "message": "Log In Success" });


        })

    }

}
export default UserController;