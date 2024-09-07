const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&directConnection=true&ssl=false"
// mongodb+srv://shashikantsahu487:Sahu%401234@cluster0.fxggr.mongodb.net/iNotebook

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully !");
})
}

module.exports = connectToMongo;
