const express = require('express');
const router = express.Router();
const moment = require('moment');
const query = require('../query');

router.route("/test2")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        
        res.render('test2/index', { moment });
    })
    .post(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        var { name, sex, graduate, job, diagnosis, birthday, testdate, comName_input, inspector } = req.body;
        console.warn(req.body);
        var { memberID, comName } = req.session.user;
        if(!job){
            job = "";
        }
        if(!diagnosis){
            diagnosis = "";
        }
        if(!comName_input){
            comName_input = "";
        }
        if(!inspector){
            inspector = "";
        }
        birthday = moment(birthday, 'YYYY-MM-DD').format('YYYY-MM-DD');
        testdate = moment(testdate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        var test = "test2"

        var sql = "INSERT INTO test (name, test, sex, graduate, job, diagnosis, birthday, testdate, comName_input, inspector, memberID, comName) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var insertId = await query.executeSQL(sql, [name, test, sex, graduate, job, diagnosis, birthday, testdate, comName_input, inspector, memberID, comName])
        insertId = insertId.insertId;
        req.session.insertId = insertId;
        res.redirect("/scoring2");
    })

module.exports = router;