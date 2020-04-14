const express = require('express');
const router = express.Router();
const config = require('../../config.json');
const axios = require('axios');

router.route("/redirect")
    .get(async(req, res, next)=> {
        try{
            var { m, test } = req.query;
            res.render('redirect/index', {m, test});
        } catch(err){
            next(err);
        }
    })
    .post(async(req, res, next) => {
        var { user, password, test } = req.body;
        console.warn(req.body);
        var api = config.api;
        api = api + `/memberList.php?m=${user}&p=${password}`;
        
        var result = await axios.get(api);
        result = result.data;
        console.warn(result);
        if(result.memberID==""){
            return res.redirect("/login");
        } else {
            req.session.user = result;
            return res.redirect("/");
        }
    })

module.exports = router;
