function checkDone(order){
    if(order.length >= 7){
        return true;
    } else {
        return false;
    }
}

function getOrder(PTI, DEPI, CDI, D, AdjD, Lambda, Reflections, copyingStyle, p, a, HVIPositive, OBSPositive, EA, Mminus, Mp, Ma, Sum6, SumShading, CF, Afr, Xminusper, Zd, MOR, AG, T, EgocentricityIndex){
    var order = [];
    var main = [];
    var thirdParty = [];
    var result = {};
    if (PTI > 3){
        main = ["PTI > 3"];
        order = ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'];
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        return result;
    }

    if (DEPI > 5 && CDI > 3){
        main = ["DEPI > 5 & CDI > 3"];
        order = ["대인지각", "자기지각", "통제력", "정서", "정보처리", "인지적 중재", "관념화"];
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        return result;
    }

    if (DEPI > 5){
        main = ["DEPI > 5"];
        order = ["정서", "통제력", "자기지각", "대인지각", "정보처리", "인지적 중재", "관념화"];
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        return result;
    }

    if (D < AdjD){
        main.push("D < Adj D");
        order.push("통제력");
        order.push("");
    }

    if (CDI > 3){
        main.push("CDI > 3");
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        return result;
    }

    if (AdjD < 0){
        main.push("AdjD is minus");
        if(!order.includes('통제력')){
            order.push('통제력');
        }
    }

    if(Lambda > 0.99){
        main.push("Lambda > 0.99");
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        return result;
    }

    // Reflections : Fr + rF
    if (Reflections > 0){
        main.push("Fr + rF > 0");
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }

        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if (copyingStyle=="Introversive"){
        main.push("EB is Introversive");
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }

    }
    if (copyingStyle=="Extratensive"){
        main.push("EB is Extratensive");
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if(p > a + 1){
        main.push("p > a+1");
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }

    }

    if(HVIPositive==true){
        main.push("HVI positive");
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if(OBSPositive==true){
        thirdParty.push("OBS positive");
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if (DEPI == 5){
        thirdParty.push("DEPI = 5");
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if(EA > 12){
        thirdParty.push("EA > 12");
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if((Mminus > 0) || (Mp > Ma) || (Sum6 > 6)){
        thirdParty.push("M- > 0 or Mp>Ma or Sum6 Special Score>6");
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }


    if((SumShading) || (CF) || (Afr<0.46)){
        thirdParty.push("Sum Shading > FM+m or Cf+C > FC+1 or Affective Ratio(Afr) < 0.46");
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

    if((Xminusper>20) || (Zd>3) || (Zd<-3)){
        thirdParty.push("X-% > 20% or Zd > +3.0  or Zd < -3.0");
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }


    // 3r + (2) / R < .33  여기서 3r
    if(EgocentricityIndex<0.33){
        thirdParty.push("Egocentricity Index < 0.33");
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }

    }

    if((MOR > 2) || (AG > 2)){
        thirdParty.push("MOR > 2 or AG > 2");
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }

    }

    if(T==0 || T>1){
        thirdParty.push("T=0 or T > 1");
        if(!order.includes('자기지각')){
            order.push('자기지각');
        }
        if(!order.includes('대인지각')){
            order.push('대인지각');
        }
        if(!order.includes('정서')){
            order.push('정서');
        }
        if(!order.includes('통제력')){
            order.push('통제력');
        }
        if(!order.includes('정보처리')){
            order.push('정보처리');
        }
        if(!order.includes('인지적 중재')){
            order.push('인지적 중재');
        }
        if(!order.includes('관념화')){
            order.push('관념화');
        }
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            return result;
        }
    }

}

exports.getOrder = getOrder;