const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

async function ConnectDatabase() {
    let result = await mongoose.connect("mongodb+srv://Zostel:zostel12345@cluster0.mt1xxf3.mongodb.net/Zostel")
    return result;
}

module.exports = ConnectDatabase;