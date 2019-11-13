const express = require('express');
const router = express.Router();
const config = require('../../config.json');
const axios = require('axios');

router.route("/redirect")
    .get(async(req, res, next)=> {
        var { m, p } = req.query;
        var api = config.api;
        api = api + `/memberList.php?m=${m}&p=${p}`;
        var result = await axios.get(api);
        result = result.data;
        if(result.memberID==""){
            return res.status(400).send("아이디와 비밀번호가 맞지 않습니다. 관리자에게 문의 주세요.")
        } else {
            req.session.user = result;
            req.session.m = m;
            req.session.p = p;
            return res.redirect("/");
        }
    });

module.exports = router;