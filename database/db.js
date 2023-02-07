const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

async function ConnectDatabase() {
    let result = await mongoose.connect("mongodb+srv://Zostel:<password>@cluster0.mt1xxf3.mongodb.net/?retryWrites=true&w=majority/Zostel")
    return result;
}

module.exports = ConnectDatabase;