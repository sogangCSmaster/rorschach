const express = require('express');
const router = express.Router();
const query = require('../query');

router.route("/scoring1")
    .get(async(req, res, next) => {
        var { user, insertId } = req.session;
        if(!user){
            return res.redirect("/login");
        }
        if(!insertId){
            return res.redirect("/");
        }

        var sql = "select score.id as id, test.name as name, test.sex as sex, test.testdate as testdate from score left join test on score.id=test.id";
        var datas = await query.executeSQL(sql);

        res.render('scoring1/index', { datas });
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

module.exports = router