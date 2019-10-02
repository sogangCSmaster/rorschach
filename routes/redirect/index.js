const express = require('express');
const router = express.Router();
const config = require('../../config.json');
const axios = require('axios');

router.route("/redirect")
    .get(async(req, res, next)=> {
        var { m, p } = req.query;
        var api = config.api + `/memberList.php?m=${m}&p=${p}`;
        var data = await axios.get(api);
        data = data.data;
        req.session.user = data;
        res.redirect("/");
    });

module.exports = router;