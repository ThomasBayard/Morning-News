const mongoose = require('mongoose');

var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
   useUnifiedTopology: true
  };

mongoose.connect('mongodb+srv://batman_78:2Epozeoner2!@arthurlacapsule-0hsfc.mongodb.net/newsromm?retryWrites=true',
    options,
    function(err) {
     if (err) {
       console.log(`error, failed to connect to the database because --> ${err}`);
     } else {
       console.info('*** Newsroom database coonection done ***');
     }
    }
);

module.exports = mongoose;