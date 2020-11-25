const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config.json')
const query = require('../query');
const moment = require('moment');

router.route("/")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        var { m, p } = req.session;
        var api = config.api;
        api = api + `/memberList.php?m=${m}&p=${p}`;
        
        var result = await axios.get(api);
        result = result.data;
        req.session.user = result;

        session_id = req.session.id;
        if(m=="test3"){
            var sql = "SELECT test.id, test.name, DATE_FORMAT(testdate, '%Y-%m-%d') as testdate, test, comName, comName_input, inspector, scoring FROM test LEFT OUTER JOIN score ON score.id = test.id ORDER BY test.id DESC";
            var datas = await query.executeSQL(sql, [m]);
        } else {
            var sql = "SELECT test.id, test.name, DATE_FORMAT(testdate, '%Y-%m-%d') as testdate, test, comName, comName_input, inspector, scoring FROM test LEFT OUTER JOIN score ON score.id = test.id WHERE memberID=? ORDER BY test.id DESC";
            var datas = await query.executeSQL(sql, [m]);
        }

        res.render('main/index', { datas, moment, session_id });
    })
    .post(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        var { m, p } = req.session;
        var api = config.api;
        api = api + `/memberList.php?m=${m}&p=${p}`;
        
        var result = await axios.get(api);
        result = result.data;
        req.session.user = result;

        var { start, end, searchfor, searchtext } = req.body;
        

        if(m=="test3"){
            var sql = "SELECT test.id, test.name, DATE_FORMAT(testdate, '%Y-%m-%d') as testdate, test, comName, comName_input, inspector, scoring FROM test LEFT OUTER JOIN score ON score.id = test.id WHERE ";
        } else {
            var sql = "SELECT test.id, test.name, DATE_FORMAT(testdate, '%Y-%m-%d') as testdate, test, comName, comName_input, inspector, scoring FROM test LEFT OUTER JOIN score ON score.id = test.id WHERE memberID=? AND ";
        }
        if(searchfor=="name"){
            sql = sql + "test.name like ?";
        } else if(searchfor=="comName"){
            sql = sql + "comName_input like ?";
        } else if(searchfor=='inspector'){
            sql = sql + "inspector like ?";
        }
        sql = sql + " ORDER BY test.id DESC"
        var temp = "%" + searchtext + "%"
        
        if(m=="test3"){
            var datas = await query.executeSQL(sql, [temp]);
        } else {
            var datas = await query.executeSQL(sql, [m, temp]);
        }

        res.render('main/index', { datas, moment });

    })

module.exports = router;
