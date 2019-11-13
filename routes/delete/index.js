const express = require('express');
const router = express.Router();
const query = require('../query');

router.route("/delete")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }
        
        var { id } = req.query;
        var sql = "DELETE FROM test WHERE id=?";
        await query.executeSQL(sql, [id]);
        sql = "DELETE FROM score WHERE id=?";
        await query.executeSQL(sql, [id]);
        res.send("done");
    })

module.exports = router;