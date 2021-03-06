function checkDone(order){
    if(order.length >= 7){
        return true;
    } else {
        return false;
    }
}

function uniquePush(arr, name) {
    var pushed = false;
    if (Array.isArray(name)) {
        name.forEach((label) => {
            if (!arr.includes(label)) {
                arr.push(label);
                pushed = true;
            }
        })
    } else {
        if (!arr.includes(name)) {
            arr.push(name);
            pushed = true;
        }
    }
    return pushed;
}

function getOrder(PTI, DEPI, CDI, D, AdjD, Lambda, Reflections, copyingStyle, p, a, HVIPositive, OBSPositive, EA, Mminus, Mp, Ma, Sum6, SumShading, CF, Afr, Xminusper, Zd, MOR, AG, T, EgocentricityIndex){
    var order = [];
    var thirdOrder = [];
    var main = [];
    var mainChecked = [];
    var thirdChecked = [];
    var thirdParty = [];
    var result = {};
    if (parseInt(PTI) > 3 && order.length < 7){
        main = ["PTI > 3"];
        checkd = uniquePush(order, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각']);
        mainChecked.push(checked)
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(DEPI) > 5 && parseInt(CDI) > 3 && order.length < 7){
        main = ["DEPI > 5 & CDI > 3"];
        checked = uniquePush(order, ["대인지각", "자기지각", "통제력", "정서", "정보처리", "인지적 중재", "관념화"]);
        mainChecked.push(checked)
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(DEPI) > 5 && order.length < 7){
        main = ["DEPI > 5"];
        checked = uniquePush(order, ["정서", "통제력", "자기지각", "대인지각", "정보처리", "인지적 중재", "관념화"]);
        mainChecked.push(checked)
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(D) < parseInt(AdjD) && order.length < 7){
        main.push("D < Adj D");
        checked = uniquePush(order, '통제력');
        mainChecked.push(checked)
    }

    if (parseInt(CDI) > 3 && order.length < 7){
        main.push("CDI > 3");
        checked = uniquePush(order, ['통제력', '대인지각', '자기지각', '정서', '정보처리', '인지적 중재', '관념화']);
        mainChecked.push(checked)
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    if (parseInt(AdjD) < 0 && order.length < 7){
        main.push("AdjD is minus");
        checked = uniquePush(order, '통제력');
        mainChecked.push(checked)
    }

    if(parseFloat(Lambda) > 0.99 && order.length < 7){
        main.push("Lambda > 0.99");
        checked = uniquePush(order, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'])
        mainChecked.push(checked)
        result.main = main;
        result.order = order;
        result.thirdParty = thirdParty;
        //return result;
    }

    // Reflections : Fr + rF
    if (parseInt(Reflections) > 0 && order.length < 7){
        main.push("Fr + rF > 0");
        checked = uniquePush(order, ['자기지각', '대인지각', '통제력'])
        mainChecked.push(checked)
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }
    }

    if (copyingStyle=="Introversive" && order.length < 7){
        main.push("EB is Introversive");
        checked = uniquePush(order, ['관념화', '정보처리', '인지적 중재', '통제력', '정서', '자기지각', '대인지각'])
        mainChecked.push(checked)
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }

    }
    if (copyingStyle=="Extratensive" && order.length < 7){
        main.push("EB is Extratensive");
        checked = uniquePush(order, ['정서', '자기지각', '대인지각', '통제력', '정보처리', '인지적 중재', '관념화'])
        mainChecked.push(checked)
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }
    }

    if(parseInt(p) > parseInt(a) + 1 && order.length < 7){
        main.push("p > a+1");
        checked = uniquePush(order, ['관념화', '정보처리', '인지적 중재', '통제력', '자기지각', '대인지각', '정서'])
        mainChecked.push(checked)
        if(order.length>=7){
            result.main = main;
            result.order = order;
            result.thirdParty = thirdParty;
            //return result;
        }

    }

    if(HVIPositive==true && order.length < 7){
        main.push("HVI positive");
        checked = uniquePush(order, ['관념화', '정보처리', '인지적 중재', '통제력', '자기지각', '대인지각', '정서'])
        mainChecked.push(checked)
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
        checked = uniquePush(thirdOrder, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'])
        thirdChecked.push(checked)
    }

    if (parseInt(DEPI) == 5 && thirdOrder.length < 7){
        thirdParty.push("DEPI = 5");
        checked = uniquePush(thirdOrder, ['정서', '통제력', '자기지각', '대인지각', '정보처리', '인지적 중재', '관념화'])
        thirdChecked.push(checked)
    }

    if(parseInt(EA) > 12 && thirdOrder.length < 7){
        thirdParty.push("EA > 12");
        checked = uniquePush(thirdOrder, ['통제력', '관념화', '정보처리', '인지적 중재', '정서', '자기지각', '대인지각'])
        thirdChecked.push(checked)
    }

    if(((parseInt(Mminus) > 0) || (parseInt(Mp) > parseInt(Ma)) || (parseInt(Sum6) > 6)) && thirdOrder.length < 7){
        thirdParty.push("M- > 0 or Mp>Ma or Sum6 Special Score>6");
        checked = uniquePush(thirdOrder, ['관념화', '인지적 중재', '정보처리', '통제력', '정서', '자기지각', '대인지각']);
        thirdChecked.push(checked)
    }


    if(((SumShading) || (CF) || (parseFloat(Afr)<0.46)) && thirdOrder.length < 7){
        thirdParty.push("Sum Shading > FM+m or Cf+C > FC+1 or Affective Ratio(Afr) < 0.46");
        checked = uniquePush(thirdOrder, ['정서', '통제력', '자기지각', '대인지각', '정보처리', '인지적 중재', '관념화'])
        thirdChecked.push(checked)
    }

    if((parseInt(Xminusper>20) || parseInt(Zd>3) || parseInt(Zd<-3)) && thirdOrder.length < 7){
        thirdParty.push("X-% > 20% or Zd > +3.0  or Zd < -3.0");
        checked = uniquePush(thirdOrder, ['정보처리', '인지적 중재', '관념화', '통제력', '정서', '자기지각', '대인지각'])
        thirdChecked.push(checked)
    }


    // 3r + (2) / R < .33  여기서 3r
    if(parseFloat(EgocentricityIndex)<0.33 && thirdOrder.length < 7){
        thirdParty.push("Egocentricity Index < 0.33");
        checked = uniquePush(thirdOrder, ['자기지각', '대인지각', '정서', '통제력', '정보처리', '인지적 중재', '관념화'])
        thirdChecked.push(checked)
    }

    if((parseInt(MOR > 2) || parseInt(AG > 2)) && thirdOrder.length < 7){
        thirdParty.push("MOR > 2 or AG > 2");
        checked = uniquePush(thirdOrder, ['자기지각', '대인지각', '통제력', '관념화', '인지적 중재', '정보처리', '정서'])
        thirdChecked.push(checked)
    }

    if((parseInt(T)==0 || parseInt(T)>1) && thirdOrder.length < 7){
        thirdParty.push("T=0 or T > 1");
        checked = uniquePush(thirdOrder, ['자기지각', '대인지각', '정서', '통제력', '정보처리', '인지적 중재', '관념화'])
        thirdChecked.push(checked)
    }
    result.main = main;//[]
    result.thirdParty = thirdParty;//[]
    if (order.length == 0) {
        order = ['통제력', '정서', '정보처리', '인지적 중재', '관념화', '자기지각', '대인지각']
    }
    result.randomCheck = false;
    if (!mainChecked.includes(true) && !thirdChecked.includes(true)) {
        result.randomCheck = true;
    }
    if (order.length < 7 && thirdOrder.length > 0) {
        uniquePush(order, thirdOrder);
    } else {
        thirdChecked = thirdChecked.map((t) => false);
    }
    result.order = order;
    result.thirdChecked = thirdChecked;
    result.mainChecked = mainChecked;
    return result;
}

exports.getOrder = getOrder;
