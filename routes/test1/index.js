const express = require('express');
const router = express.Router();
const moment = require('moment');
const query = require('../query');

router.route("/test1")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }

        res.render('test1/index', { moment });
    })
    .post(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        var { name, sex, graduate, job, diagnosis, birthday, testdate, comName_input, inspector } = req.body;
        var { memberID, comName } = req.session.user;
        console.warn(testdate);
        console.log(req.session.user);
        birthday = moment(birthday, 'YYYY-MM-DD').format('YYYY-MM-DD');
        testdate = moment(testdate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        console.log(birthday, testdate);
        var sql = "INSERT INTO test (name, sex, graduate, job, diagnosis, birthday, testdate, comName_input, inspector, memberID, comName) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var insertId = await query.executeSQL(sql, [name, sex, graduate, job, diagnosis, birthday, testdate, comName_input, inspector, memberID, comName])
        insertId = insertId.insertId;
        req.session.insertId = insertId;
        res.redirect("/scoring1");
    })

module.exports = router;