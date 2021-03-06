var User = require('../app/models/user'); // get our mongoose model
let config = require('../config');

function register (req, res) {

    // create a sample user
    var record = new User({
        name: req.body.name,
        password: req.body.password,
        admin: true
    });
    
    record.save(function (err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({
            success: true
        });
    });
}

function welcome (req, res) {
    res.send(`Server is running at http://localhost: ${ config.port }`);
}

module.exports = {register,welcome}