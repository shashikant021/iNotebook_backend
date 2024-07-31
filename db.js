const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&directConnection=true&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully !");
})
}

module.exports = connectToMongo;














// require('dotenv').config();

// const mongoose = require('mongoose');
// const mongoURI = process.env.MONGO_URI;

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log("Connected to Mongo Successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); 
//   }
// };

// module.exports = connectToMongo;
