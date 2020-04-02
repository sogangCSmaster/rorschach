const express = require('express');
const router = express.Router();
const query = require('../query');
const config = require('../../config.json');
const axios = require('axios');

router.route("/scoring1")
    .get(async(req, res, next) => {
        var { user, insertId } = req.session;
        if(!user){
            return res.redirect("/login");
        }
        if(!insertId){
            return res.redirect("/");
        }

        var sql = "SELECT id FROM score WHERE id =?";
        var score = await query.executeSQL(sql, [insertId]);
        if (score.length) {
            return res.redirect(`/scoring1/${insertId}`);
        }
        var sql = "select score.id as id, test.name as name, test.sex as sex, test.testdate as testdate from score left join test on score.id=test.id";
        var datas = await query.executeSQL(sql);
        var tempsaveUrl = `/scoring1/${insertId}`;

        res.render('scoring1/index', { datas, tempsaveUrl, score: '[]' });
    })
    .post(async(req, res, next) => {
        var { insertId } = req.session;
        var { id } = req.body;
        var sql = "SELECT score FROM score WHERE id=?";
        var score = await query.executeSQL(sql, [id]);
        score = score[0].score;
        var sql = "INSERT INTO score (id, score) VALUES (?, ?)";
        await query.executeSQL(sql, [insertId, score]);
        res.redirect("/");
    })

router.route('/scoring1/:id(\\d+)')
    .get(async(req, res, next) => {
        var { user } = req.session;
        var { id: insertId } = req.params;
        if (!user) {
            return res.redirect('/login');
        }
        if (!insertId) {
            return res.redirect('/')
        }
        var sql = "select score.id as id, test.name as name, test.sex as sex, test.testdate as testdate from score left join test on score.id=test.id";

        var datas = await query.executeSQL(sql);

        var sql2 = "SELECT id, score FROM score WHERE id = ?"
        var scores = await query.executeSQL(sql2, [insertId]);
        var score = scores[0] || { score: [] } ;
        score = score.score;
        var tempsaveUrl = `/scoring1/${insertId}`;

        res.render('scoring1/index', { datas, score, tempsaveUrl });
    })
    .post(async(req, res, next) => {
        var { stringifyText: score, testID } = req.body;
        var { user } = req.session;
        var { id: updateId } = req.params;
        if (!user) {
            return res.redirect('/login');
        }
        if (!updateId) {
            return res.redirect('/');
        }
        var sql1 = "SELECT id FROM score WHERE id=?";
        var ret = await query.executeSQL(sql1, [updateId]);
        if (ret.length) {
            var sql = "UPDATE score set score=? WHERE id=?";
            await query.executeSQL(sql, [score, updateId])
        } else {
            var sql = "INSERT INTO score (id, score) VALUES (?, ?)";
            await query.executeSQL(sql, [updateId, score])
        }
        var api = config.api;
        var { m } = req.session;
        api = api + `/coinProcess.php?m=${m}&c=RORS&n=${testID}&p=add`;
        await axios.get(api);
        res.json({success: true});
    })
module.exports = router
