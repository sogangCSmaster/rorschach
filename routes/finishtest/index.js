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
const interpersonal = require('./lower_section/interpersonal');
const ideation = require('./lower_section/ideation');
const cognitive_mediation = require('./lower_section/cognitive_mediation');
const information_processing = require('./lower_section/information_processing');
const self_perception = require('./lower_section/self_perception');
const special_indices = require('./lower_section/special_indices');
const blends = require('./upper_section/blends');
const S_Constellation = require('./special_indices/S_Constellation');
const PTI = require('./special_indices/PTI');
const DEPI = require('./special_indices/DEPI');
const CDI = require('./special_indices/CDI');
const HVI = require('./special_indices/HVI');
const OBS = require('./special_indices/OBS');
const validity = require('./explanation/validity');
const ExnerTable1 = require('./explanation/ExnerTable1');
const experience = require('./explanation/experince');
const explnationorder = require('./explanation/explnationorder');
const control = require('./explanation/control');
const affect = require('./explanation/affect');

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
        if(data.length==0){
            req.session.insertId = id;
            return res.redirect("/scoring1");
        }
        data = data[0];
        var score = data.score;
        score = JSON.parse(score);
        score = score.slice(1);

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

        upper.blends = blends.getBlendsArray(score);

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

        lower.interpersonal = {};
        lower.interpersonal.COP = interpersonal.getCOP(score);
        lower.interpersonal.AG = interpersonal.getAG(score);
        lower.interpersonal.GHR = interpersonal.getGHR(score);
        lower.interpersonal.PHR = interpersonal.getPHR(score);
        lower.interpersonal.a = interpersonal.geta(score);
        lower.interpersonal.p = interpersonal.getp(score);
        lower.interpersonal.Food = interpersonal.getFood(score);
        lower.interpersonal.SumT = interpersonal.getSumT(score);
        lower.interpersonal.HumanCont = interpersonal.getHumanCont(score); // NaN
        lower.interpersonal.PureH = interpersonal.getPureH(score);
        lower.interpersonal.PER = interpersonal.getPER(score); // Error
        lower.interpersonal.ISOIndex = interpersonal.getISOIndex(score);
        
        lower.ideation = {};
        lower.ideation.a = ideation.geta(score);
        lower.ideation.p = ideation.getp(score);
        lower.ideation.Ma = ideation.getMa(score);
        lower.ideation.Mp = ideation.getMp(score);
        lower.ideation.twoABplusArtplusAy = ideation.twoABplusArtplusAy(score);
        lower.ideation.MOR = ideation.getMOR(score);
        lower.ideation.Sum6 = ideation.getSum6(score);
        lower.ideation.Lv2 = ideation.getLv2(score);
        lower.ideation.WSum6 = ideation.getWSum6(score);
        lower.ideation.Mminus = ideation.getMminus(score);
        lower.ideation.Mnone = ideation.getMnone(score);

        lower.cognitive_mediation = {};
        lower.cognitive_mediation.XAper = cognitive_mediation.getXAper(score);
        lower.cognitive_mediation.WDAper = cognitive_mediation.getWDAper(score);
        lower.cognitive_mediation.Xminusper = cognitive_mediation.getXminusper(score);
        lower.cognitive_mediation.Sminus = cognitive_mediation.getSminus(score);
        lower.cognitive_mediation.P = cognitive_mediation.getP(score);
        lower.cognitive_mediation.Xplusper = cognitive_mediation.getXplusper(score);
        lower.cognitive_mediation.Xuper = cognitive_mediation.getXuper(score);


        lower.information_processing = {};
        lower.information_processing.Zf = information_processing.getZf(score);
        lower.information_processing.W = information_processing.getW(score);
        lower.information_processing.D = information_processing.getD(score);
        lower.information_processing.Dd = information_processing.getDd(score);
        lower.information_processing.M = information_processing.getM(score);
        lower.information_processing.Zd = information_processing.getZd(score);
        lower.information_processing.PSV = information_processing.getPSV(score);
        lower.information_processing.DQplus = information_processing.getDQplus(score);
        lower.information_processing.DQv = information_processing.getDQv(score);

        lower.self_perception = {};
        lower.self_perception.EgocentricityIndex = self_perception.getEgocentricityIndex(score);
        lower.self_perception.Reflections = self_perception.getReflections(score);
        lower.self_perception.SumV = self_perception.getSumV(score);
        lower.self_perception.FD = self_perception.getFD(score);
        lower.self_perception.AnPlusXy = self_perception.getAnPlusXy(score);
        lower.self_perception.MOR = self_perception.getMOR(score);
        lower.self_perception.H = self_perception.getH(score);
        lower.self_perception.Hrest = self_perception.getHrest(score);

        lower.special_indices = {};
        lower.special_indices.SCONPositive = special_indices.getSCONPositive(score);
        lower.special_indices.SCON = special_indices.getSCON(score);
        lower.special_indices.PTIPositive = special_indices.getPTIPositive(score);
        lower.special_indices.PTI = special_indices.getPTI(score);
        lower.special_indices.DEPIPositive = special_indices.getDEPIPositive(score);
        lower.special_indices.DEPI = special_indices.getDEPI(score)
        lower.special_indices.CDIPositive = special_indices.getCDIPositive(score);
        lower.special_indices.CDI = special_indices.getCDI(score);
        lower.special_indices.HVIPositive = special_indices.getHVIPositive(score);
        lower.special_indices.HVI = special_indices.getHVI(score);
        lower.special_indices.OBSPositive = special_indices.getOBSPositive(score);
        lower.special_indices.OBS = special_indices.getOBS(score);

        var SpecialIndices = {};
        SpecialIndices.S_Constellation = {};
        SpecialIndices.S_Constellation.Up8Checked = S_Constellation.getUp8Checked(score);
        SpecialIndices.S_Constellation.SumVplusFD = S_Constellation.getFVPlusVFPlusVPlusFDChecked(score);
        SpecialIndices.S_Constellation.ColorShadingBlends = S_Constellation.getColorShadingBlendsChecked(score);
        SpecialIndices.S_Constellation.Ego = S_Constellation.getEgoChecked(score);
        SpecialIndices.S_Constellation.MOR = S_Constellation.getMORChecked(score);
        SpecialIndices.S_Constellation.Zd = S_Constellation.getZdChecked(score);
        SpecialIndices.S_Constellation.es = S_Constellation.getesChecked(score);
        SpecialIndices.S_Constellation.CF = S_Constellation.getCFChecked(score);
        SpecialIndices.S_Constellation.XPlus = S_Constellation.getXplusperChecked(score);
        SpecialIndices.S_Constellation.S = S_Constellation.getSChecked(score);
        SpecialIndices.S_Constellation.P = S_Constellation.getPChecked(score);
        SpecialIndices.S_Constellation.PureH = S_Constellation.getPureHChecked(score);
        SpecialIndices.S_Constellation.R = S_Constellation.getRChecked(score);

        SpecialIndices.PTI = {};
        SpecialIndices.PTI.XAper = PTI.getXAperChecked(score);
        SpecialIndices.PTI.Xminusper = PTI.getXminusperChecked(score);
        SpecialIndices.PTI.Level2 = PTI.getLevel2Checked(score);
        SpecialIndices.PTI.R = PTI.getRChecked(score);
        SpecialIndices.PTI.M = PTI.getMChecked(score);

        SpecialIndices.DEPI = {};
        SpecialIndices.DEPI.Up5Checked = DEPI.getUp5Checked(score);
        SpecialIndices.DEPI.FV = DEPI.getFVChecked(score);
        SpecialIndices.DEPI.ColorShadingBlends = DEPI.getColorShadingBlendsChecked(score);
        SpecialIndices.DEPI.Ego = DEPI.getEgoChecked(score);
        SpecialIndices.DEPI.Afr = DEPI.getAfrChecked(score);
        SpecialIndices.DEPI.SumShading = DEPI.getSumShadingChecked(score);
        SpecialIndices.DEPI.MOR = DEPI.getMORChecked(score);
        SpecialIndices.DEPI.COP = DEPI.getCOPChecked(score);

        SpecialIndices.CDI = {};
        SpecialIndices.CDI.Up4Checked = CDI.getUp4Checked(score);
        SpecialIndices.CDI.EA = CDI.getEAChecked(score);
        SpecialIndices.CDI.COP = CDI.getCOPChecked(score);
        SpecialIndices.CDI.WSumC = CDI.getWSumCChecked(score);
        SpecialIndices.CDI.Passive = CDI.getPassiveChecked(score);
        SpecialIndices.CDI.SumT = CDI.getSumTChecked(score);

        SpecialIndices.HVI = {};
        SpecialIndices.HVI.Up4Checked = HVI.getUp4Checked(score);
        SpecialIndices.HVI.FT = HVI.getFTChecked(score);
        SpecialIndices.HVI.Zf = HVI.getZfChecked(score);
        SpecialIndices.HVI.Zd = HVI.getZdChecked(score);
        SpecialIndices.HVI.S = HVI.getSChecked(score);
        SpecialIndices.HVI.H = HVI.getHChecked(score);
        SpecialIndices.HVI.ParH = HVI.getParHChecked(score);
        SpecialIndices.HVI.HplusA = HVI.getHplusAChecked(score);
        SpecialIndices.HVI.Cg = HVI.getCgChecked(score);

        SpecialIndices.OBS = {};
        SpecialIndices.OBS.Dd = OBS.getDdChecked(score);
        SpecialIndices.OBS.Zf = OBS.getZfChecked(score);
        SpecialIndices.OBS.Zd = OBS.getZdChecked(score);
        SpecialIndices.OBS.Populars = OBS.getPopularsChecked(score);
        SpecialIndices.OBS.FQplus = OBS.getFQplusChecked1(score);
        SpecialIndices.OBS.Up1Checked = OBS.getUp1Checked(score);
        SpecialIndices.OBS.AllChecked = OBS.getAllChecked(score);
        SpecialIndices.OBS.Up2Checked = OBS.getUp2Checked(score);
        SpecialIndices.OBS.Up3Checked = OBS.getUp3Checked(score);
        SpecialIndices.OBS.FQplusChecked = OBS.getFQplusChecked3(score);

        

        res.render('testresult/index', { testconfig, moment, upper, lower, SpecialIndices });

    })
    .post(async(req, res, next) => {
        var { stringifyText, testID } = req.body;
        var score = stringifyText;
        var sql = "INSERT IGNORE INTO score (id, score) VALUES (?, ?)";
        query.executeSQL(sql, [testID, score]);

        // 코인 사용
        var api = config.api;
        var { m } = req.session;
        api = api + `/coinProcess.php?m=${m}&c=RORS&n=${testID}&p=add`;
        axios.get(api);


        res.redirect(`/finishtest1?id=${testID}`);
    })

    router.route("/finishtest2")
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

            if(data.length==0){
                req.session.insertId = id;
                return res.redirect("/scoring2");
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
    
            upper.blends = blends.getBlendsArray(score);
    
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
    
            lower.interpersonal = {};
            lower.interpersonal.COP = interpersonal.getCOP(score);
            lower.interpersonal.AG = interpersonal.getAG(score);
            lower.interpersonal.GHR = interpersonal.getGHR(score);
            lower.interpersonal.PHR = interpersonal.getPHR(score);
            lower.interpersonal.a = interpersonal.geta(score);
            lower.interpersonal.p = interpersonal.getp(score);
            lower.interpersonal.Food = interpersonal.getFood(score);
            lower.interpersonal.SumT = interpersonal.getSumT(score);
            lower.interpersonal.HumanCont = interpersonal.getHumanCont(score); // NaN
            lower.interpersonal.PureH = interpersonal.getPureH(score);
            lower.interpersonal.PER = interpersonal.getPER(score); // Error
            lower.interpersonal.ISOIndex = interpersonal.getISOIndex(score);
            
            lower.ideation = {};
            lower.ideation.a = ideation.geta(score);
            lower.ideation.p = ideation.getp(score);
            lower.ideation.Ma = ideation.getMa(score);
            lower.ideation.Mp = ideation.getMp(score);
            lower.ideation.twoABplusArtplusAy = ideation.twoABplusArtplusAy(score);
            lower.ideation.MOR = ideation.getMOR(score);
            lower.ideation.Sum6 = ideation.getSum6(score);
            lower.ideation.Lv2 = ideation.getLv2(score);
            lower.ideation.WSum6 = ideation.getWSum6(score);
            lower.ideation.Mminus = ideation.getMminus(score);
            lower.ideation.Mnone = ideation.getMnone(score);
    
            lower.cognitive_mediation = {};
            lower.cognitive_mediation.XAper = cognitive_mediation.getXAper(score);
            lower.cognitive_mediation.WDAper = cognitive_mediation.getWDAper(score);
            lower.cognitive_mediation.Xminusper = cognitive_mediation.getXminusper(score);
            lower.cognitive_mediation.Sminus = cognitive_mediation.getSminus(score);
            lower.cognitive_mediation.P = cognitive_mediation.getP(score);
            lower.cognitive_mediation.Xplusper = cognitive_mediation.getXplusper(score);
            lower.cognitive_mediation.Xuper = cognitive_mediation.getXuper(score);
    
    
            lower.information_processing = {};
            lower.information_processing.Zf = information_processing.getZf(score);
            lower.information_processing.W = information_processing.getW(score);
            lower.information_processing.D = information_processing.getD(score);
            lower.information_processing.Dd = information_processing.getDd(score);
            lower.information_processing.M = information_processing.getM(score);
            lower.information_processing.Zd = information_processing.getZd(score);
            lower.information_processing.PSV = information_processing.getPSV(score);
            lower.information_processing.DQplus = information_processing.getDQplus(score);
            lower.information_processing.DQv = information_processing.getDQv(score);
    
            lower.self_perception = {};
            lower.self_perception.EgocentricityIndex = self_perception.getEgocentricityIndex(score);
            lower.self_perception.Reflections = self_perception.getReflections(score);
            lower.self_perception.SumV = self_perception.getSumV(score);
            lower.self_perception.FD = self_perception.getFD(score);
            lower.self_perception.AnPlusXy = self_perception.getAnPlusXy(score);
            lower.self_perception.MOR = self_perception.getMOR(score);
            lower.self_perception.H = self_perception.getH(score);
            lower.self_perception.Hrest = self_perception.getHrest(score);
    
            lower.special_indices = {};
            lower.special_indices.SCONPositive = special_indices.getSCONPositive(score);
            lower.special_indices.SCON = special_indices.getSCON(score);
            lower.special_indices.PTIPositive = special_indices.getPTIPositive(score);
            lower.special_indices.PTI = special_indices.getPTI(score);
            lower.special_indices.DEPIPositive = special_indices.getDEPIPositive(score);
            lower.special_indices.DEPI = special_indices.getDEPI(score)
            lower.special_indices.CDIPositive = special_indices.getCDIPositive(score);
            lower.special_indices.CDI = special_indices.getCDI(score);
            lower.special_indices.HVIPositive = special_indices.getHVIPositive(score);
            lower.special_indices.HVI = special_indices.getHVI(score);
            lower.special_indices.OBSPositive = special_indices.getOBSPositive(score);
            lower.special_indices.OBS = special_indices.getOBS(score);
    
            var SpecialIndices = {};
            SpecialIndices.S_Constellation = {};
            SpecialIndices.S_Constellation.Up8Checked = S_Constellation.getUp8Checked(score);
            SpecialIndices.S_Constellation.SumVplusFD = S_Constellation.getFVPlusVFPlusVPlusFDChecked(score);
            SpecialIndices.S_Constellation.ColorShadingBlends = S_Constellation.getColorShadingBlendsChecked(score);
            SpecialIndices.S_Constellation.Ego = S_Constellation.getEgoChecked(score);
            SpecialIndices.S_Constellation.MOR = S_Constellation.getMORChecked(score);
            SpecialIndices.S_Constellation.Zd = S_Constellation.getZdChecked(score);
            SpecialIndices.S_Constellation.es = S_Constellation.getesChecked(score);
            SpecialIndices.S_Constellation.CF = S_Constellation.getCFChecked(score);
            SpecialIndices.S_Constellation.XPlus = S_Constellation.getXplusperChecked(score);
            SpecialIndices.S_Constellation.S = S_Constellation.getSChecked(score);
            SpecialIndices.S_Constellation.P = S_Constellation.getPChecked(score);
            SpecialIndices.S_Constellation.PureH = S_Constellation.getPureHChecked(score);
            SpecialIndices.S_Constellation.R = S_Constellation.getRChecked(score);
    
            SpecialIndices.PTI = {};
            SpecialIndices.PTI.XAper = PTI.getXAperChecked(score);
            SpecialIndices.PTI.Xminusper = PTI.getXminusperChecked(score);
            SpecialIndices.PTI.Level2 = PTI.getLevel2Checked(score);
            SpecialIndices.PTI.R = PTI.getRChecked(score);
            SpecialIndices.PTI.M = PTI.getMChecked(score);
    
            SpecialIndices.DEPI = {};
            SpecialIndices.DEPI.Up5Checked = DEPI.getUp5Checked(score);
            SpecialIndices.DEPI.FV = DEPI.getFVChecked(score);
            SpecialIndices.DEPI.ColorShadingBlends = DEPI.getColorShadingBlendsChecked(score);
            SpecialIndices.DEPI.Ego = DEPI.getEgoChecked(score);
            SpecialIndices.DEPI.Afr = DEPI.getAfrChecked(score);
            SpecialIndices.DEPI.SumShading = DEPI.getSumShadingChecked(score);
            SpecialIndices.DEPI.MOR = DEPI.getMORChecked(score);
            SpecialIndices.DEPI.COP = DEPI.getCOPChecked(score);
    
            SpecialIndices.CDI = {};
            SpecialIndices.CDI.Up4Checked = CDI.getUp4Checked(score);
            SpecialIndices.CDI.EA = CDI.getEAChecked(score);
            SpecialIndices.CDI.COP = CDI.getCOPChecked(score);
            SpecialIndices.CDI.WSumC = CDI.getWSumCChecked(score);
            SpecialIndices.CDI.Passive = CDI.getPassiveChecked(score);
            SpecialIndices.CDI.SumT = CDI.getSumTChecked(score);
    
            SpecialIndices.HVI = {};
            SpecialIndices.HVI.Up4Checked = HVI.getUp4Checked(score);
            SpecialIndices.HVI.FT = HVI.getFTChecked(score);
            SpecialIndices.HVI.Zf = HVI.getZfChecked(score);
            SpecialIndices.HVI.Zd = HVI.getZdChecked(score);
            SpecialIndices.HVI.S = HVI.getSChecked(score);
            SpecialIndices.HVI.H = HVI.getHChecked(score);
            SpecialIndices.HVI.ParH = HVI.getParHChecked(score);
            SpecialIndices.HVI.HplusA = HVI.getHplusAChecked(score);
            SpecialIndices.HVI.Cg = HVI.getCgChecked(score);
    
            SpecialIndices.OBS = {};
            SpecialIndices.OBS.Dd = OBS.getDdChecked(score);
            SpecialIndices.OBS.Zf = OBS.getZfChecked(score);
            SpecialIndices.OBS.Zd = OBS.getZdChecked(score);
            SpecialIndices.OBS.Populars = OBS.getPopularsChecked(score);
            SpecialIndices.OBS.FQplus = OBS.getFQplusChecked1(score);
            SpecialIndices.OBS.Up1Checked = OBS.getUp1Checked(score);
            SpecialIndices.OBS.AllChecked = OBS.getAllChecked(score);
            SpecialIndices.OBS.Up2Checked = OBS.getUp2Checked(score);
            SpecialIndices.OBS.Up3Checked = OBS.getUp3Checked(score);
            SpecialIndices.OBS.FQplusChecked = OBS.getFQplusChecked3(score);

            
            var experienceClassification = experience.getExperience(lower.core.EBLeft, lower.core.EBRight, lower.core.EA, lower.core.Lambda, lower.core.EBPer);
            // var experienceClassification = experience.getExperience(3, 5, 10, 0.89, 2.3);
            var step0 = validity.getValidity(lower.core.R, lower.core.Lambda);
            var getExnerTable1 = ExnerTable1.getExnerTable1(lower.core.AdjD, lower.special_indices.CDI, lower.core.EA, testconfig.birthday);
            var Order = explnationorder.getOrder(lower.special_indices.PTI, lower.special_indices.DEPI, lower.special_indices.CDI, lower.core.D, lower.core.AdjD, lower.core.Lambda, lower.self_perception.Reflections, experienceClassification.copyingStyle, lower.ideation.p, lower.ideation.a, lower.special_indices.HVIPositive, lower.special_indices.OBSPositive, lower.core.EA, lower.ideation.Mminus, lower.ideation.Mp, lower.ideation.Ma, upper.special_scores.Sum6, SpecialIndices.DEPI.SumShading, SpecialIndices.S_Constellation.CF, lower.affection.Afr, lower.cognitive_mediation.Xminusper, lower.information_processing.Zd, upper.special_scores.MOR, upper.special_scores.AG, upper.determinants.T, lower.self_perception.EgocentricityIndex);
            var scoreOrder = Order.order;

            var age = moment().diff(testconfig.birthday, 'years');

            var TESTRESULT = [];
            var resultName = "";
            for(var i=0; i< scoreOrder.length; i++){
                if(scoreOrder[i]=='통제력'){
                    resultName = "Control and Stress Tolerance 통제 능력과 스트레스 저항력 평가";
                    steps = control.caculateControl(lower.core.AdjD, lower.special_indices.CDI, lower.core.EA, lower.core.EBLeft, lower.core.EBRight, lower.core.Lambda, age, upper.determinants.M, lower.affection.WSumC, lower.core.Adjes, lower.core.es, lower.core.FM, lower.core.m, lower.core.SumCprime, lower.core.SumV, lower.core.SumT, lower.core.SumY);
                    TESTRESULT.push({resultName, steps});
                }
                if(scoreOrder[i]=='정서'){
                    resultName = "Affect 정서 자원이 사용되는 방식, 정서 상태, 정서의 역기능 평가";
                    steps = affect.caculateAffect(lower.special_indices.DEPI, lower.special_indices.CDI, lower.core.Lambda, upper.determinants.M, lower.core.EBLeft, lower.core.EBRight, lower.affection.WSumC, lower.core.EA, lower.core.EBPer, lower.core.FM, lower.core.m, lower.core.SumCprime, lower.core.SumT, lower.core.SumV, lower.core.SumY, lower.affection.Afr, lower.ideation.twoABplusArtplusAy, upper.special_scores.CP, upper.determinants.FC, upper.determinants.CF, upper.determinants.C, age, experienceClassification.copyingStyle, experienceClassification.approachStyle, lower.affection.PureC, upper.location_features.S, upper.approach, lower.affection.Blends, lower.affection.R);
                    TESTRESULT.push({resultName, steps});
                }
            }
            console.warn(TESTRESULT);

            res.render('testresult/index2', { testconfig, moment, upper, lower, SpecialIndices, step0, getExnerTable1, experienceClassification, Order, TESTRESULT });
        })
        .post(async(req, res, next) => {
            var { stringifyText, testID } = req.body;
            var score = stringifyText;
            var sql = "INSERT IGNORE INTO score (id, score) VALUES (?, ?)";
            query.executeSQL(sql, [testID, score]);

            // 코인 사용
            var api = config.api;
            var { m } = req.session;
            api = api + `/coinProcess.php?m=${m}&c=RORS&n=${testID}&p=add`;
            axios.get(api);


            res.redirect(`/finishtest2?id=${testID}`);
        })

module.exports = router;
