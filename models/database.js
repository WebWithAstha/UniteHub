const mongoose = require('mongoose');
exports.connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection Established");
    } catch (error) {
        console.log(error);        
    }
}
