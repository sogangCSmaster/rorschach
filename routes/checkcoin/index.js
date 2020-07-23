const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config.json');

router.route("/checkcoin")
    .get(async(req, res, next) => {
        var user = req.session.m;
        var password = req.session.p;
        var api = config.api;
        api = api + `/memberList.php?m=${user}&p=${password}`;

        var result = await axios.get(api);
        result = result.data;
        res.send(result);
    })

module.exports = router;