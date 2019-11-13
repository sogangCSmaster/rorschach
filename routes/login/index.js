const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config.json');

router.route("/login")
    .get(async(req, res, next) => {
        res.render("login/index");
    })
    .post(async(req, res, next) => {
        var { user, password } = req.body;
        var api = config.api;
        api = api + `/memberList.php?m=${user}&p=${password}`;
        
        var result = await axios.get(api);
        result = result.data;
        if(result.memberID==""){
            return res.redirect("/login");
        } else {
            req.session.user = result;
            req.session.m = user;
            req.session.p = password;
            return res.redirect("/");
        }

    });

module.exports = router;