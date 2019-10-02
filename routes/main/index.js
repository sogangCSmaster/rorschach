const express = require('express');
const router = express.Router();

router.route("/")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        res.render('main/index');
    });

module.exports = router;