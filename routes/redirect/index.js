const express = require('express');
const router = express.Router();
const config = require('../../config.json');
const axios = require('axios');

router.route("/redirect")
    .get(async(req, res, next)=> {
        try{
            var { m, p, test } = req.query;
            var api = config.api;
            api = api + `/memberList.php?m=${m}&p=${p}`;
            var result = await axios.get(api);
            result = result.data;
            if(result.memberID==""){
                return res.status(400).send("아이디와 비밀번호가 맞지 않습니다. 관리자에게 문의 주세요.")
            } else {
                if(test=="test1"){
                    req.session.user = result;
                    var user = req.session.user;
                    var coin1 = user.coin1;
                    var useCount1 = user.useCount1;
                    coin1 = Number(coin1);
                    useCount1 = Number(useCount1);
                    if(useCount1>=coin1){
                        return res.send("코인이 부족합니다.");
                    } else {
                        req.session.m = m;
                        req.session.p = p;
                        return res.redirect("/test1");
                    }
                } else if(test=="test2") {
                    req.session.user = result;
                    var coin1 = user.coin1;
                    var useCount1 = user.useCount1;
                    coin1 = Number(coin1);
                    useCount1 = Number(useCount1);
                    if(useCount1>=coin1){
                        return res.send("코인이 부족합니다.");
                    } else {
                        req.session.m = m;
                        req.session.p = p;
                        return res.redirect("/test2");
                    }
                }
            }
        } catch(err){
            next(err);
        }
        
    });

module.exports = router;