function calculateExnerTable2(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable2 = calculateExnerTable2;

function nextStep(stepNum, result, scores) {
    var step = eval(`step${stepNum}(scores)`);
    result.push(step);
    if (step.goNext == true) {
        return result;
    }
    return eval(`nextStep(${step.nextStep}, result, scores)`);
}

function step1({D, AdjD, es, Adjes, }) {
    var result = {};
    result.textData = [];

    if (D < AdjD) {
        if (es - Ades >= 2) {
            result.goNext = false;
            result.nextStep = 2; //다음 step으로 진행
            result.textData.push('[잠정 결과1] 2가지 통제능력(D & Adj D)과 2가지 스트레스 양(es &Adj es)을 통해 볼 때 수검자의 일반적 통제능력(Adj D)과 현재 통제능력(D)의 점수 차이는 타당하며, 아래의 가정도 타당할 것이다.');
            result.textData.push('(기본 가정: disorganization) 수검자는 상황 관련 스트레스로 인해 자극 요구(stimulus demand)의 증가를 경험하고, 의사결정이나 행동이 평소처럼 잘 조직화 되지 않을 수 있다.');
            result.textData.push('(2차 가정: impulsiveness) D 점수가 음수일 경우 수검자는 현재 과부하 상태에 놓여 있고, 평소보다 충동적일 수 있다.');

            return result;
        }
        if (es - Adjes == 1) {
            result.goNext = true; // 다음 군집으로 진행
            result.textData.push('[잠정 결과2] 2가지 통제능력(D & Adj D)과 2가지 스트레스 양(es &Adj es)을 통해 볼 때, 상황 스트레스 관련(m, SumY) 지표에 대한 채점이 정확한지 검토해야 한다. ');
            result.textData.push('********이동 미구현입니다********');
            return result;
        }
    }

    result.goNext = true;
    result.textData.push('[해당 사항 없음]');

    return result;
}

function step2({ AdjD, D }) {
    var result = { };
    result.textData = [];
    if (AdjD - D == 1) {
        result.goNext = false;
        result.nextStep = 3;
        result.textData.push('[잠정 결과1] 2가지 통제능력(D & Adj D) 지표의 점수 차이를 볼 때, 수검자가 경험하는 상황적 스트레스가 경도에서 중등도 사이일 것이다.');
        result.textData.push('심리적 혼란(disruption)을 경험하고 있지만, 일상적인 의사결정이나 행동 방식은 혼란되지(disorganizing) 않을 수 있다.');
        return result;
    }
    if (ADjD - D >= 2) {
        result.goNext = false;
        result.nextStep = 3;
        result.textData.push('[잠정 결과2] 2가지 통제능력(D & Adj D) 지표의 점수 차이를 볼 때, 수검자가 경험하는 상황적 스트레스가 상당히 많을 것이다.');
        result.textData.push('상황적 스트레스의 강한 영향으로 일상적인 방식의 사고나 행동이 상당히 방해받을 수 있다.');
        return result;
    }
    result.goNext = true;
    return result;
}

function step3({ m, SumY }) {
    var result = { };
    result.textData = [];

    if (Math.abs(m - SumY) >= 3 && (m <= 3*SumY || SumY <= 3*m)) {
        result.textData.push('[잠정 결과1] 침투적 사고(m)와 무력감(SumY)의 비율을 고려할 때, 상황 관련 스트레스가 사고와 정서에 모두 영향을 미치는 것으로 볼 수 있다. 의식 밖에 있는 침투적 사고로 인해 주의집중력이 저하되고, 무력감이나 무능감에 관련된 감정으로 인해 걱정, 불안, 슬픔 등을 경험할 수 있다. 한쪽 값이 다른 쪽보다 2점을 초과하여 크다면, 그 값을 통해 스트레스의 영향에 대한 의미 있는 실마리를 얻을 수 있다.');
        result.goNext = false;
        result.nextStep = 4;
        return result;
    }
    if (m > 3*SumY) {
        result.textData.push('[잠정 결과2] 침투적 사고(m)와 무력감(SumY)의 비율을 고려할 때, 상황 관련 스트레스가 정서보다 사고에 더 큰 영향을 주는 것으로 볼 수 있다. 의식 밖에 있는 침투적 사고로 인해 주의와 집중력이 뚜렷하게 손상될 수 있으며, 명료한 판단이 어려울 수 있다.');
        result.goNext = false;
        result.nextStep = 4;
        return result;
    }
    if (SumY > 3*m) {
        result.textData.push('[잠정 결과3] 침투적 사고(m)와 무력감(SumY)의 비율을 고려할 때, 상황 관련 스트레스가 사고보다 정서에 더 큰 영향을 주는 것으로 볼 수 있다. 무력감이나 무능감에 관련된 감정으로 인해 수검자는 설명하기 어렵거나 불가능한 긴장, 불안, 불편을 경험하고 매우 혼란스러워(disruptive)할 수 있다.');
        result.goNext = false;
        result.nextStep = 4;
        return result;
    }

    result.goNext = true;
    return result;
}

function step4({ SumT, SumV, EgocentricityIndex }) {
    var result = {};
    result.textData = [];
    if ((SumT == 1 && SumV == 0) || (SumV >= 1 && EgocentricityIndex <= 0.32)) {
        result.textData.push('[잠정 결과1] 안정적 특성에 가까운 지표인 재질(Texture)반응과 차원(Vista)반응을 고려할 때, 개인력에서 재질반응(정서적 상실)이나 차원반응(죄책감, 후회)을 증가시키는 심리적 외상사건이 있을 가능성이 적고 일반적 통제능력(Adj D) 지표는 적절하게 산출되었을 것이며, 수검자의 통제능력(D & Adj D) 지표 사이의 점수 차이는 타당하며 다시 검토할 필요가 없을 것이다.');
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
    if ((SumT > 1) || (SumV >= 1 && EgocentricityIndex >= 0.33)) {
        result.textData.push('[잠정 결과2] 안정적 특성에 가까운 지표인 재질(Texture)반응과 차원(Vista)반응을 고려할 때, 개인력에서 재질반응(정서적 상실)이나 차원반응(죄책감, 후회)을 정상집단의 예상값(SumT=1, SumV=0)보다 증가시키는 심리적 외상사건에 대한 정보가 명확하게 없다면, 일반적 통제능력(Adj D)이 낮은 것은 지속적이고 특성적이므로 수검자의 통제능력(D & Adj D) 지표 사이의 점수 차이는 타당하며 다시 검토할 필요가 없을 것이다.');
        result.textData.push('****** 2단계 재검토가 무엇인가요..******');
        result.goNext = false;
        result.nextStep = 5;
        return result;
    }
    result.goNext = true;
    return result;
}

function step5({ D, PureC, Mminus, Mnone }) {
    var result = {};
    result.textData = [];

    if (D >= 0) {
        result.textData.push('[잠정 결과1] 상황관련 스트레스에 영향받는 현재 통제능력(D)이 균형 상태(D = 0) 이상이라는 것은 상황적 스트레스의 영향이 존재하지만 아마도 심하지는 않을 것이다.');
        result.textData.push('수검자는 어떤 상황적 스트레스를 겪고 있으며, 현재 통제능력은 일반적 통제능력보다 낮아진 상태일 것이라는 1단계의 기본 가정(disorganization)이 성립할 것이다.');
        result.textData.push('하지만 통제능력의 저하로 인해 충동성을 보일 것이라는 1단계의 2차 가정(impulsiveness)은 성립하지 않을 것이다.');
        result.goNext = false;
        result.nextStep = 6;
        if (PureC > 0) {
            result.textData.push('[잠정 결과1a] 일반적으로 조절되지 않은 정서를 반영하는 지표(Pure C)는 충동성이 아니라 가용 자원이 정서 조절이나 억제에 사용되지 않는다는 것을 의미한다. 그러므로 정서가 평소보다 통제되지 않을 것이다.');
            result.textData.push('[정서]군집에서 구체적으로 다룬다.');
        }
        if (Mminus > 0 || Mnone > 0) {
            result.textData.push('[잠정 결과1b] 일반적으로 통제되지 않은 생각을 반영하는 지표(M- , M none)는 상황 요인에 의한 관념의 통제 저하(loss of ideational control)를 의미하지 않는다. 대신에 [관념화] 군집에서 다루는 지속적인 사고의 문제를 의심할 수 있다.');
            result.textData.push('[관념화]군집에서 구체적으로 다룬다.');
        }
        return result;
    }

    if (D < 0) {
        result.textData.push('[잠정 결과2a] 상황관련 스트레스에 영향을 받는 현재 통제능력(D)이 음수라면, 수검자가 효과적으로(effectively) 반응할 수 있는 것보다 많은 내적 요구를 경험하는 과부하 상태라는 것을 의미한다.');
        result.textData.push('통제능력이 감소하고 의사결정을 내리거나 행동을 이행하는 데 어려움을 겪을 수 있고, 충동적인 경향을 보일 수 있다.');
        result.goNext = false;
        result.nextStep = 6;
        if (PureC > 0) {
            result.textData.push('[잠정 결과2a1] 일반적으로 조절되지 않은 정서를 반영하는 지표(Pure C)는 정서에서 충동성이 매우 뚜렷하게 나타난다는 것을 의미한다.');
        }
        if (Mminus > 0 || Mnone > 0) {
            result.textData.push('[잠정 결과2a2] 일반적으로 통제되지 않은 생각을 반영하는 지표(M- , M none)는 과부하 상태로 인해 관념의 통제가 손상되었을 가능성을 의미한다.');
        }
        return result;
    }

    if (D == -1) {
        result.textData.push('[잠정 결과2b] 상황관련 스트레스에 영향받는 현재 통제능력(D)이 –1일 경우, 수검자는 친숙하고 구조화되어 있고 이해하기 쉬운 환경에서는 충분히 기능할 것이다.');
        result.textData.push('상황이 더 복잡해지고 모호해지면 수검자는 혼란(disorganization)되고, 충동적 사고와 충동적 행동에 대한 취약성이 증가할 것이다. 이러한 취약성은 가용 자원(EA)이 정상집단의 예상범주보다 낮으면 현저하게 증가한다.');
        result.goNext = false;
        result.nextStep = 6;

        if (PureC > 0) {
            result.textData.push('[잠정 결과2b1] 일반적으로 조절되지 않은 정서를 반영하는 지표(Pure C)가 있다면, 정서적 충동성이 나타날 가능성이 크며, 그러한 특징은 잘 통제되지 않은 행동으로 나타날 수 있다.');
        }
        if (Mminus > 0 || Mnone > 0) {
            result.textData.push('[잠정 결과2b2] 일반적으로 통제되지 않은 생각을 반영하는 지표(M-, M none)가 있다면, 상황적 스트레스가 판단을 흐리게 하고, 이상한 생각을 만들어 낸다는 잠정적 가설을 세울 수 있다.');
            result.textData.push('[관념화] 군집에서 구체적으로 다룬다.');
        }
        return result;
    }
    if (D <= -2) {
        result.textData.push('[잠정 결과2c] 상황관련 스트레스에 영향받는 현재 통제능력(D)이 –2 이하일 경우, 수검자가 통제 어려움을 겪을 가능성이 매우 크다. 가용 자원(EA)에 상관없이 심리적 혼란(disorganization)을 겪을 가능성이 클 것이다. 관념적 충동성과 행동적 충동성이 발생하기 쉽다.');
        result.textData.push('적절하고 효과적인(effective) 기능은 매우 구조화되어 있고 일상적인 상황을 제외하면 대개 상당히 불규칙적으로 나타난다. 현재 통제능력(D) 지표가 –3 이하면 이러한 양상은 기하급수적으로 증가할 것이다.');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }
    result.goNext = true;
    return result;
}

function step6() {

}

function step7() {

}
