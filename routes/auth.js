let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Record = require('../public/javascripts/loginRecord');

router.get('/', (req, res, next) => {
    Record.find((err, loginnRecord ) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(Recordnames);

            res.render('contacts', {title: 'Business Contacts', loginnRecords: loginnRecord})

        }
    })
});

module.exports = router