const express = require('express');
const router = express.Router();

router.route("/")
    .get(async(req, res, next) => {
        res.render('main/index');
    });

module.exports = router;