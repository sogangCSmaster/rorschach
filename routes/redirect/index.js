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
            var user = result;
            
            if(test=="test1"){
                var coin1 = user.coin1;
                var useCount1 = user.useCount1;

                coin1 = Number(coin1);
                useCount1 = Number(useCount1);
                if(useCount1>=coin1){
                    return res.send("코인이 부족합니다. 충전 후 다시 실행해 주세요.");
                } else {
                    return res.redirect('/test1');
                }
            } else if (test=="test2"){
                var coin1 = user.coin2;
                var useCount1 = user.useCount2;

                coin1 = Number(coin1);
                useCount1 = Number(useCount1);
                if(useCount1>=coin1){
                    return res.send("코인이 부족합니다. 충전 후 다시 실행해 주세요.");
                } else {
                    return res.redirect('/test2');
                }
            }
        }
    })

module.exports = router;