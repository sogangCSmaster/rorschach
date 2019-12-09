const express = require('express');
const router = express.Router();
const query = require('../query');

router.route("/scoring2")
    .get(async(req, res, next) => {
        var { user, insertId } = req.session;
        if(!user){
            return res.redirect("/login");
        }
        if(!insertId){
            return res.redirect("/");
        }
        var sql = "select score.id, test.name, test.sex, test.testdate from score left join test on score.id=test.id";
        var datas = await query.executeSQL(sql);

        res.render('scoring2/index', { datas });
        // res.render('scoring2/index');
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