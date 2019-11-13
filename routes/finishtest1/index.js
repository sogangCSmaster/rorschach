const express = require('express');
const router = express.Router();
const query = require('../query');
const axios = require('axios');
const config = require('../../config.json');

router.route("/finishtest1")
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
