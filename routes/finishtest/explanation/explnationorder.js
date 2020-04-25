function checkDone(order){
    if(order.length >= 7){
        return true;
    } else {
        return false;
    }
}

function uniquePush(arr, name) {
    if (Array.isArray(name)) {
        name.forEach((label) => {
            if (!arr.includes(label)) {
                arr.push(label);
            }
        })
    } else {
        if (!arr.includes(name)) {
            arr.push(name);
        }
    }
}

function getOrder(PTI, DEPI, CDI, D, AdjD, Lambda, Reflections, copyingStyle, p, a, HVIPositive, OBSPositive, EA, Mminus, Mp, Ma, Sum6, SumShading, CF, Afr, Xminusper, Zd, MOR, AG, T, EgocentricityIndex){
    var order = [];
    var thirdOrder = [];
    var main = [];
    var thirdParty = [];
    var result = {};
    if (parseInt(PTI) > 3 && order.length < 7){
        main = ["PTI > 3"];
        uniquePush(order, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각']);
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(DEPI) > 5 && parseInt(CDI) > 3 && order.length < 7){
        main = ["DEPI > 5 & CDI > 3"];
        uniquePush(order, ["대인지각", "자기지각", "통제력", "정서", "정보처리", "인지적 중재", "관념화"]);
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(DEPI) > 5 && order.length < 7){
        main = ["DEPI > 5"];
        uniquePush(order, ["정서", "통제력", "자기지각", "대인지각", "정보처리", "인지적 중재", "관념화"]);
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(D) < parseInt(AdjD) && order.length < 7){
        main.push("D < Adj D");
        uniquePush(order, '통제력');
    }

    if (parseInt(CDI) > 3 && order.length < 7){
        main.push("CDI > 3");
        uniquePush(order, ['통제력', '대인지각', '자기지각', '정서', '정보처리', '인지적 중재', '관념화']);
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(AdjD) < 0 && order.length < 7){
        main.push("AdjD is minus");
        uniquePush(order, '통제력');
    }

    if(parseFloat(Lambda) > 0.99 && order.length < 7){
        main.push("Lambda > 0.99");
        uniquePush(order, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'])
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    // Reflections : Fr + rF
    if (parseInt(Reflections) > 0 && order.length < 7){
        main.push("Fr + rF > 0");
        uniquePush(order, ['자기지각', '대인지각', '통제력'])
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }
    }

    if (copyingStyle=="Introversive" && order.length < 7){
        main.push("EB is Introversive");
        uniquePush(order, ['관념화', '정보처리', '인지적 중재', '통제력', '정서', '자기지각', '대인지각'])
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }

    }
    if (copyingStyle=="Extratensive" && order.length < 7){
        main.push("EB is Extratensive");
        uniquePush(order, ['정서', '자기지각', '대인지각', '통제력', '정보처리', '인지적 중재', '관념화'])
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }
    }

    if(parseInt(p) > parseInt(a) + 1 && order.length < 7){
        main.push("p > a+1");
        uniquePush(order, ['관념화', '정보처리', '인지적 중재', '통제력', '자기지각', '대인지각', '정서'])
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }

    }

    if(HVIPositive==true && order.length < 7){
        main.push("HVI positive");
        uniquePush(order, ['관념화', '정보처리', '인지적 중재', '통제력', '자기지각', '대인지각', '정서'])
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }
    }
    
    ///

    if(OBSPositive==true && thirdOrder.length < 7){
        thirdParty.push("OBS positive");
        uniquePush(thirdOrder, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'])
    }

    if (parseInt(DEPI) == 5 && thirdOrder.length < 7){
        thirdParty.push("DEPI = 5");
        uniquePush(thirdOrder, ['정서', '통제력', '자기지각', '대인지각', '정보처리', '인지적 중재', '관념화'])
    }

    if(parseInt(EA) > 12 && thirdOrder.length < 7){
        thirdParty.push("EA > 12");
        uniquePush(thirdOrder, ['통제력', '관념화', '정보처리', '인지적 중재', '정서', '자기지각', '대인지각'])
    }

    if(((parseInt(Mminus) > 0) || (parseInt(Mp) > parseInt(Ma)) || (parseInt(Sum6) > 6)) && thirdOrder.length < 7){
        thirdParty.push("M- > 0 or Mp>Ma or Sum6 Special Score>6");
        uniquePush(thirdOrder, ['관념화', '인지적 중재', '정보처리', '통제력', '정서', '자기지각', '대인지각']);
    }


    if(((SumShading) || (CF) || (parseFloat(Afr)<0.46)) && thirdOrder.length < 7){
        thirdParty.push("Sum Shading > FM+m or Cf+C > FC+1 or Affective Ratio(Afr) < 0.46");
        uniquePush(thirdOrder, ['정서', '통제력', '자기지각', '대인지각', '정보처리', '인지적 중재', '관념화'])
    }

    if((parseInt(Xminusper>20) || parseInt(Zd>3) || parseInt(Zd<-3)) && thirdOrder.length < 7){
        thirdParty.push("X-% > 20% or Zd > +3.0  or Zd < -3.0");
        uniquePush(thirdOrder, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'])
    }


    // 3r + (2) / R < .33  여기서 3r
    if(parseFloat(EgocentricityIndex)<0.33 && thirdOrder.length < 7){
        thirdParty.push("Egocentricity Index < 0.33");
        uniquePush(thirdOrder, ['자기지각', '대인지각', '정서', '통제력', '정보처리', '인지적 중재', '관념화'])
    }

    if((parseInt(MOR > 2) || parseInt(AG > 2)) && thirdOrder.length < 7){
        thirdParty.push("MOR > 2 or AG > 2");
        uniquePush(thirdOrder, ['자기지각', '대인지각', '통제력', '관념화', '인지적 중재', '정보처리', '정서'])
    }

    if((parseInt(T)==0 || parseInt(T)>1) && thirdOrder.length < 7){
        thirdParty.push("T=0 or T > 1");
        uniquePush(thirdOrder, ['자기지각', '대인지각', '정서', '통제력', '정보처리', '인지적 중재', '관념화'])
    }
    result.main = main;//[]
    result.thirdParty = thirdParty;//[]
    if (result.order.length == 0) {
        result.order = ['통제력', '정서', '정보처리', '인지적 중재', '관념화', '자기지각', '대인지각']
    }
    result.mainCheck = false;
    result.thirdCheck = false;
    result.randomCheck = false;
    if (order.length != 0) {
        result.mainCheck = true;
    }
    if (order.length < 7 && thirdOrder.length > 0) {
        result.thirdCheck = true;
        uniquePush(order, thirdOrder)
    }
    if (!result.mainCheck && !result.thirdCheck) {
        order.randomCheck = true;
    }
    return result;
}

exports.getOrder = getOrder;
