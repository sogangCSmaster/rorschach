const express = require('express');
const router = express.Router();
const query = require('../query');
const axios = require('axios');
const config = require('../../config.json');

router.route("/finishtest1")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }

        var { id } = req.query;
        var sql = "SELECT id, score FROM score WHERE id=?";
        var data = await query.executeSQL(sql, [id]);
        sql = "SELECT * FROM test WHERE id=?";
        var testconfig = await query.executeSQL(sql, [id]);
        testconfig = testconfig[0];
        data = data[0];
        var score = data.score;
        score = JSON.parse(score);

        //testconfig => 이름, 검사주체 등 기본정보
        //score => 테스트

        res.render('testresult/index', { testconfig });

    })
    .post(async(req, res, next) => {
        var { stringifyText, testID } = req.body;
        var score = stringifyText;
        var sql = "INSERT IGNORE INTO score (id, score) VALUES (?, ?)";
        query.executeSQL(sql, [testID, score]);

        // 코인 사용
        var api = config.api;
        var { m } = req.session;
        api = api + `/memberList.php?m=${m}&c=RORS&n=${testID}&p=add`;
        axios.get(api);


        res.end();
    })

module.exports = router;
