const otpGenerator = require("otp-generator");
const { connectDB } = require("./connect");

const generateOtp = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  let mongoDB = await connectDB();
  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
  console.log(OTP);
  let collection = mongoDB.collection("amuraPayee");
  let dbResponse = await collection.findOne({ Email: email });
  let isDuplicate = await collection.findOne({ OTPgenerated: OTP });
  if (!isDuplicate) {
    if (dbResponse) {
      collection.updateOne(
        { _id: dbResponse._id },
        {
          $set: { OTPgenerated: OTP,
          Verified:"true" },
          
        }
      );
      console.log("Otp generated:");
    }
  
  }
  

  return { body: OTP};
};

module.exports = { generateOtp };
