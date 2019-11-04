const express = require('express');
const router = express.Router();
const query = require('../query');

var ZEstMapper = {
    1: '-', 14: 45.5, 27: 91.5, 40: 137.5,
    2: 2.5, 15: 49.0, 28: 95.0, 41: 141.0,
    3: 6.0, 16: 52.5, 29: 98.5, 42: 144.5,
    4: 10.0, 17: 56.0, 30: 102.5, 43: 148.0,
    5: 13.5, 18: 59.5, 31: 105.5, 44: 152.0,
    6: 17.0, 19: 63.0, 32: 109.5, 45: 155.5,
    7: 20.5, 20: 66.5, 33: 112.5, 46: 159.0,
    8: 24.0, 21: 70.0, 34: 116.5, 47: 162.5,
    9: 27.5, 22: 73.5, 35: 120.0, 48: 166.0,
    10: 31.0, 23: 77.0, 36: 123.5, 49: 169.5,
    11: 34.5, 24: 81.0, 37: 127.0, 50: 173.0,
    12: 38.0, 25: 84.5, 38: 130.5,
    13: 41.5, 26: 88.0, 39: 134.0
}

router.route("/finishtest1")
    .post(async(req, res, next) => {
        var { stringifyText, testID } = req.body;
        var score = stringifyText;
        var sql = "INSERT IGNORE INTO score (id, score) VALUES (?, ?)";
        query.executeSQL(sql, [score, testID]);
        var regex = /[+-]?\d+(\.\d+)?/g;
        var Zf = 0;
        var ZSum = 0;
        var sumW = 0;
        var sumD = 0;
        var sumDd = 0;
        var sumS = 0;
        var Wv = 0;

        var dqPlus = 0;
        var dqO = 0;
        var dqVPlus = 0;
        var dqV = 0;
        
        score = JSON.parse(score);
        console.warn(score);
        for(var i=1; i<score.length; i++){
            if('z' in score[i]){
                Zf = Zf + 1;
                var Zvalue = score[i].z.match(regex).map(function(v) { return parseFloat(v); });
                Zvalue = Zvalue[0];
                ZSum = ZSum + Zvalue;
            }
            var loc = score[i].loc;
            var dq = score[i].dq;
            if(loc == 'D'){
                sumD = sumD + 1;
            } else if(loc == 'W'){
                sumW = sumW + 1;
                if(dq == 'v'){
                    Wv = Wv + 1;
                }
            } else if(loc == 'Dd'){
                sumDd = sumDd + 1;
            } else if(loc == 'S'){
                sumS = sumS + 1;
            }
            if(dq=='+'){
                dqPlus = dqPlus + 1;
            } else if(dq=='v'){
                dqV = dqV + 1;
            } else if(dq=='o'){
                dqO = dqO + 1;
            } else if(dq=='v/+'){
                dqVPlus = dqVPlus + 1;
            }
            
        }

        var WplusD = sumW + sumD;

        var ZEst = ZEstMapper[Zf];
        console.log(ZEst);



        res.end();
    })

module.exports = router;