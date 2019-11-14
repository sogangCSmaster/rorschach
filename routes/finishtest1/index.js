const express = require('express');
const router = express.Router();
const query = require('../query');
const axios = require('axios');
const config = require('../../config.json');
const moment = require('moment');
const location_features = require('./upper_section/location_features');
const contents = require('./upper_section/contents');
const approach = require('./upper_section/approach');
const single = require('./upper_section/single');
const dq = require('./upper_section/dq');
const form_quality = require('./upper_section/form_quality');
const special_scores = require('./upper_section/special_scores');
const core = require('./lower_section/core');
const affection = require('./lower_section/affection');

router.route("/finishtest1")
    .get(async(req, res, next) => {
        if(!req.session.user){
            return res.redirect('/login');
        }

        var { id } = req.query;
        var sql = "SELECT id, score FROM score WHERE id=?";
        var data = await query.executeSQL(sql, [id]);
        sql = "SELECT * FROM test WHERE id=?";
        var testconfig = await query.executeSQL(sql, [id]);
        testconfig = testconfig[0];
        if(testconfig.sex=="male"){
            testconfig.sex="남";
        } else {
            testconfig.sex="여";
        }
        data = data[0];
        var score = data.score;
        score = JSON.parse(score);

        //testconfig => 이름, 검사주체 등 기본정보
        //score => 테스트

        var upper = {};
        upper.location_features = {};
        upper.location_features.Zf = location_features.getZf(score);
        upper.location_features.ZSum = location_features.getZSum(score);
        upper.location_features.ZEst = location_features.getZEst(score);
        upper.location_features.W = location_features.getW(score);
        upper.location_features.D = location_features.getD(score);
        upper.location_features.Dd = location_features.getDd(score);
        upper.location_features.S = location_features.getS(score);
        upper.location_features.Wv = location_features.getWv(score);
        upper.location_features.WPlusD = location_features.getWPlusD(score);
        upper.contents = contents.getContents(score);
        upper.approach = approach.getApproach(score);
        upper.determinants = {};
        upper.determinants.F = single.getF(score);
        upper.determinants.M = single.getM(score);
        upper.determinants.FM = single.getFM(score);
        upper.determinants.m = single.getm(score);
        upper.determinants.FC = single.getFC(score);
        upper.determinants.CF = single.getCF(score);
        upper.determinants.C = single.getC(score);
        upper.determinants.Cn = single.getCn(score);
        upper.determinants.FCprime = single.getFCprime(score);
        upper.determinants.CprimeF = single.getCprimeF(score);
        upper.determinants.Cprime = single.getCprime(score);
        upper.determinants.FY = single.getFY(score);
        upper.determinants.YF = single.getYF(score);
        upper.determinants.Y = single.getY(score);
        upper.determinants.FT = single.getFT(score);
        upper.determinants.TF = single.getTF(score);
        upper.determinants.T = single.getT(score);
        upper.determinants.FV = single.getFV(score);
        upper.determinants.VF = single.getVF(score);
        upper.determinants.V = single.getV(score);
        upper.determinants.FD = single.getFD(score);
        upper.determinants.Fr = single.getFr(score);
        upper.determinants.rF = single.getrF(score);
        upper.determinants.two = single.get2(score);
        upper.determinants.P = single.getP(score);

        upper.dq = {};
        upper.dq.plus = dq.getPlus(score);
        upper.dq.o = dq.getO(score);
        upper.dq.VSlashPlus = dq.getVSlashPlus(score);
        upper.dq.v = dq.getV(score);

        upper.form_quality = {};
        upper.form_quality.FQx = form_quality.getFQx(score);
        upper.form_quality.MQuality = form_quality.getMQual(score);
        upper.form_quality.WPlusD = form_quality.getWPlusD(score);

        upper.special_scores = {};
        upper.special_scores.DV1 = special_scores.getDV1(score);
        upper.special_scores.DV2 = special_scores.getDV2(score);
        upper.special_scores.INCOM1 = special_scores.getINCOM1(score);
        upper.special_scores.INCOM2 = special_scores.getINCOM2(score);
        upper.special_scores.DR1 = special_scores.getDR1(score);
        upper.special_scores.DR2 = special_scores.getDR2(score);
        upper.special_scores.FABCOM1 = special_scores.getFABCOM1(score);
        upper.special_scores.FABCOM2 = special_scores.getFABCOM2(score);
        upper.special_scores.ALOG = special_scores.getALOG(score);
        upper.special_scores.CONTAM = special_scores.getCONTAM(score);
        upper.special_scores.Sum6 = special_scores.getSum6(score);
        upper.special_scores.WSum6 = special_scores.getWSum6(score);
        upper.special_scores.AG = special_scores.getAG(score);
        upper.special_scores.AB = special_scores.getAB(score);
        upper.special_scores.COP = special_scores.getCOP(score);
        upper.special_scores.CP = special_scores.getCP(score);
        upper.special_scores.GHR = special_scores.getGHR(score);
        upper.special_scores.MOR = special_scores.getMOR(score);
        upper.special_scores.PHR = special_scores.getPHR(score);
        upper.special_scores.PSV = special_scores.getPSV(score);
        upper.special_scores.PER = special_scores.getPER(score);

        
        var lower = {};
        lower.core = {};
        lower.core.R = core.getR(score);
        lower.core.Lambda = core.getLambda(score);
        lower.core.EBLeft = core.getEBLeft(score);
        lower.core.ebLeft = core.getebLeft(score);
        lower.core.EBRight = core.getEBRight(score);
        lower.core.ebRight = core.getebRight(score);
        lower.core.EA = core.getEA(score);
        lower.core.EBPer = core.getEBPer(score);
        lower.core.es = core.getes(score);
        lower.core.Adjes = core.getAdjes(score);
        lower.core.D = core.getD(score);
        lower.core.AdjD = core.getAdjD(score);
        lower.core.FM = core.getFM(score);
        lower.core.m = core.getm(score);
        lower.core.SumCprime = core.getSumCprime(score);
        lower.core.SumV = core.getSumV(score);
        lower.core.SumT = core.getSumT(score);
        lower.core.SumY = core.getSumY(score);

        lower.affection = {};
        lower.affection.FCCFCLeft = affection.getFCCFCLeft(score);
        lower.affection.FCCFCRight = affection.getFCCFCRight(score);
        lower.affection.PureC = affection.getPureC(score);
        lower.affection.SumCprime = affection.getSumCprime(score);
        lower.affection.WSumC = affection.getWSumC(score);
        lower.affection.Afr = affection.getAfr(score);
        lower.affection.S = affection.getS(score);
        lower.affection.Blends = affection.getBlends(score);
        lower.affection.R = affection.getR(score);
        lower.affection.CP = affection.getCP(score);
        

        

        res.render('testresult/index', { testconfig, moment, upper, lower });

    })
    .post(async(req, res, next) => {
        var { stringifyText, testID } = req.body;
        var score = stringifyText;
        var sql = "INSERT IGNORE INTO score (id, score) VALUES (?, ?)";
        query.executeSQL(sql, [testID, score]);

        // 코인 사용
        var api = config.api;
        var { m } = req.session;
        console.warn(m);
        api = api + `/coinProcess.php?m=${m}&c=RORS&n=${testID}&p=add`;
        console.warn(api);
        var response = await axios.get(api);
        console.warn("hljksdhfkjasdhfsd");
        console.warn(response.data);


        res.redirect(`/finishtest1?id=${testID}`);
    })

module.exports = router;
