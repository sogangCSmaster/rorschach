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

        var sql = "SELECT test.id, test.name, DATE_FORMAT(testdate, '%Y-%m-%d') as testdate, test, comName, comName_input, scoring FROM test LEFT OUTER JOIN score ON score.id = test.id WHERE memberID=? ORDER BY test.id DESC";
        var datas = await query.executeSQL(sql, [m]);

        res.render('main/index', { datas, moment });
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
        console.log(req.body);


        var sql = "SELECT id, name, DATE_FORMAT(testdate, '%Y-%m-%d') as testdate, test, comName, comName_input FROM test WHERE memberID=? AND (testdate between ? AND ?) AND ";
        if(searchfor=="name"){
            sql = sql + "name like ?";
        } else if(searchfor=="comName"){
            sql = sql + "comName_input like ?";
        }
        sql = sql + " ORDER BY test.id DESC"
        var temp = "%" + searchtext + "%"
        var datas = await query.executeSQL(sql, [m, start, end, temp]);

        res.render('main/index', { datas, moment });

    })

module.exports = router;
