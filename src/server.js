module.exports = function() {
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();
    const port = process.env.PORT || 3000;   
   
    app.use(cors());
    
    app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       next();
    });
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
     require('./routes/index')(app)
    // START THE SERVER
    app.listen(port);
    console.log('Running on port ' + port);
}