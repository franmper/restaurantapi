const mongoose = require('mongoose');

require('dotenv').config({path: '.env'});

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.DB_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true
      });
      console.log('DB Conectada')
   } catch (e) {
      console.log('Hubo un error');
      console.log(e);
      process.exit(1);
   }
}

module.exports = connectDB