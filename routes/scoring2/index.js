const express = require('express');
const router = express.Router();
const query = require('../query');

router.route("/scoring2")
    .get(async(req, res, next) => {
        var { user, insertId } = req.session;
        if(!user){
            return res.redirect("/login");
        }
        if(!insertId){
            return res.redirect("/");
        }

        res.render('scoring2/index');
    })

module.exports = router