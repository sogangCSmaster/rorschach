// Cognitive Mediation

function calculateExnerTable5(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable5 = calculateExnerTable5;

function nextStep(stepNum, result, scores) {
    var step = eval(`step${stepNum}(scores)`);
    result.push(step);
    if (step.goNext == true) {
        return result;
    }
    console.log('step', stepNum);
    return eval(`nextStep('${step.nextStep}', result, scores)`);
}

function step1({ XAper, WDAper }) {
    var result = {};
    result.textData = [];
    result.curStep = 1;

    if(XAper>0.9 && XAper<=WDAper){
        result.textData.push(`[잠정 결과2] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자는 중재 활동이 상황에 적합해 보이도록 각별하게 노력할 것이다. 이러한 경향은 강박적 유형(obsessive style)의 사람에서 흔하게 나타나지만, 기계적으로 강박성(obsessiveness)과 같다고 여겨서는 안 된다. 단순히 상황을 정확하게 해석하려는 현저한 경향이 수검자의 중재 활동에 영향을 주고 있는 것을 의미한다. - 강박지표(OBS)가 상승한 경우 흔하게 나타날 수 있다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(0.78<=XAper && XAper<=0.9 && XAper<=WDAper){
        result.textData.push(`[잠정 결과1] [정상범주] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 중재 활동이 상황에 적합한 행동을 유도하고 있을 것이다. 대개 중재가 상황에 적절하며, 관습적인 현실검증능력에 필요한 기본 요소가 온전할 것이다. `);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(XAper>=0.78 && XAper>WDAper){
        result.textData.push(`[잠정 결과8] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자는 일반적으로 적절한 현실검증능력(reality testing)을 보이지만, 때때로 현실(reality)과 환상(fantasy)을 구별하고 적절한 판단을 발휘하는 데 약간의 어려움을 보일 수 있다.<br/>`)
        result.textData.push(`반응 위치에서 단서가 더 명확한 부분(W, D)의 형태질 보다 단서가 덜 명확한 부분(Dd)의 형태질이 더 좋을 것이다. 확장된 적합한 형태 비율(XA%)에서 나타나는 것보다 일상생활에서 현실(reality)을 효과적으로 다루는 데 더 어려울 것이므로, 현실검증능력(reality testing)의 적절성을 하향 조정하여 해석할 필요가 있다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(XAper>=0.78 && WDAper<0.75){
        result.textData.push(`[잠정 결과3] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 처리 활동에 문제가 있거나, 수검자가 심한 혼란(disarray)을 겪는 것처럼 가장하는(simulate) 것일 수 있다.<br/>`);
        result.textData.push(`현재 지표 점수는 매우 드물게 나타나는 것으로 반응 수(R)가 16개 이하이거나, 상당수의 반응 위치가 드문 부분(Dd)인 이상한 조합일 수 있다. 계산 오류가 없으면 반응 위치에서 단서가 더 명확한 부분(W, D)의 형태질(FQ: minus, Noform)보다 단서가 덜 명확한 부분(Dd)의 형태질(FQ: o, u)이 더 좋을 것이다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }

    if(0.7<=XAper && XAper <=0.77 && WDAper>=0.8){
        result.textData.push(`[잠정 결과4] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 중재 활동은 단서가 명확한 상황에서는 적절하지만, 단서가 덜 명확한 상황에서는 적절하지 않을 것이다.<br/>`);
        result.textData.push(`중재 활동의 효율성(effectiveness) 저하는 (또는 현실검증능력의 저하는) 다양한 요인으로 야기될 수 있다. 일반적으로 정서적 또는 관념적 간섭이 원인일 수 있지만, 때로는 처리 활동의 문제가 잘못된 판단(중재 오류)으로 이어질 수 있다. 좋지 않은 형태질(FQ: minus, NoForm) 반응을 재검토하여 그러한 원인에 대한 정보를 얻을 수 있다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(0.7<=XAper && XAper <=0.77 && WDAper<0.8){
        result.textData.push(`[잠정 결과9] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 현실검증능력(reality testing)은 경도(mild)에서 중등도(moderate) 수준으로 손상되었을 것이다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if((0.7<=XAper && XAper<=0.77) && (0.75<=WDAper && WDAper<=0.79)){
        result.textData.push(`[잠정 결과6] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 중재 활동은 중등도 수준의 기능 이상을 보일 것이다. * XA%< 0.70, 0.75≤WDA%≤0.79 경우, 더 상당한 수준의 기능 이상을 보일 것이다. <br/>`);
        result.textData.push(`단서가 명확한 반응 위치(W, D)는 드문 부분(Dd)에 비해 원위적 특성(단서)이 유도하는 반응이 더 다양하고 많으며 서로 독립적이어서 해석 근거의 왜곡 가능성이 작다. 단서가 명확한 반응 위치(W, D)에서 뚜렷한 저하가 나타나는 것은 명확한 특징을 무시하거나 왜곡하는 현실검증능력의 문제가 반영된 것일 수 있다.`);
        result.textData.push(`이러한 문제는 대개 정서적 또는 관념적 간섭으로 인해 나타난다. 단서가 명확한 반응 위치(W, D)에서 좋지 않은 형태질(FQ: minus, NoForm) 반응을 검토하여 중재 손상의 원인에 대해 이해할 수 있다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(0.7<=XAper && XAper<=0.77 && WDAper<0.75){
        result.textData.push(`[잠정 결과10] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 현실검증능력(reality testing)은 중등도(moderate) 이상의 현저한(substantial) 수준으로 손상되었을(impairment) 것이다. `);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(XAper<0.7 && WDAper>=0.8){
        result.textData.push(`[잠정 결과5] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자는 적절한 해석에 대한 단서가 명확하지 않은 상황에서 중재 활동 또는 현실검증능력이 현저하게 약해질 것이다. <br/>`);
        result.textData.push(`일반적으로 적합한 형태 비율을 반영하는 두 지표(XA%, WDA%)의 차이는 잘못된 판단이 포함된 드문 부분(Dd) 반응과 상관관계를 이룬다. 여기서 드문 부분(Dd) 반응은 처리의 효율적 사용(economy)을 반영하는 것이 아니라, 그 대신에, 방어, 거부적 태세, 사소한 것에 대한 특이한 몰두 때문에 발생하는 (이전에 얻었던) 심상을 재구성하는 어떤 방식을 반영하는 것이다. 좋지 않은 형태질(FQ: minus, NoForm) 반응을 재검토하여 어떠한 원인이 효과적인(effective) 중재를 방해하는지 정보를 얻을 수 있다.`);
        result.nextStep = 2;
        result.goNext = false;
        return result;
    }
    if(XAper<0.7 && WDAper<0.75){
        var stat = '';

        if(0.65<=WDAper && WDAper<=0.74){
            stat = '7a';
        } else if(WDAper<0.65){
            stat = '7a';
        }
        if (stat == '7a') {
            result.textData.push(`[잠정 결과7a] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 중재 활동이 상당히 손상되었을 것이다. `);
            result.textData.push(`수검자는 일상적으로 심리적 측면을 관리하는 데 지속적이고 광범위한(pervasive) 어려움을 겪을 것이다. 때때로 정신증적 수준의 혼란(disturbance)을 겪을 것이다.`);
            result.textData.push(`흔한 영역의 적합한 형태 비율(WDA%)이 낮을수록 정신증적 상태의 가능성이 명확해지고, 일상생활에서 다른 사람의 도움이나 감독이 필요한 정도가 증가할 수 있다. <br/>`);
            result.textData.push(`정신증적 과정(psychotic-like process)이 존재할 경우 흔하게 나타나지만, 중재 활동에 관련된 모든 자료를 살펴보지 않고 결론은 내리는 것은 적절하지 않다.<br/>`);

        }
        if(0.65<=WDAper && WDAper<=0.74){
            result.textData.push(`[잠정결과7a1] 중재 활동의 기능 이상이 심하고, 현실검증능력도 현저하게 영향을 받을 것이다.<br/><br/>`);
        } else if(WDAper<0.65){
            result.textData.push(`[잠정결과7a2] 중재 활동의 기능 이상이 극심하고, 현실검증능력도 현저하게 손상되었을 것이다<br/><br/>`);
        }
        if (stat == '7a') {
            result.nextStep = 2;
            result.goNext = false;
        }

        if((WDAper-XAper) >= 0.1){
            result.textData.push(`[잠정 결과7b] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)의 점수 차이를 통해, 수검자의 현실검증능력 손상이 일상 기능에 미치는 영향의 정도를 파악할 수 있다.<br/>`);
            result.textData.push(`[잠정결과7b1] 단서가 덜 명확한 상황에서 중재 활동의 기능 장애가 현저해질 것이다.<br/>`);
        } else if((WDAper-XAper) <0.1 && (WDAper-XAper) > 0){
            result.textData.push(`[잠정 결과7b] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)의 점수 차이를 통해, 수검자의 현실검증능력 손상이 일상 기능에 미치는 영향의 정도를 파악할 수 있다.<br/>`);
            result.textData.push(`[잠정결과7b2] 현실검증능력의 손상이 전반적이어서 명확한 원위적 특징(단서)에 상관없이 중재 활동에 기능장애가 나타날 것이다.<br/>`);
        }
    }
    
      
    result.nextStep = 2;
    result.goNext = false;
    return result;
}

function step2({ fqx_none }) {
    var result = {};
    result.textData = [];
    result.curStep = 2;

    if(fqx_none >=2 ){
        result.textData.push(`[잠정 결과] 형태 없는 반응(FQx none: NoForm)을 고려할 때, 수검자의 중재 활동의 효율성(effectiveness)은 때때로 관념적 태세나 강한 정서의 간섭으로 인해 방해받을 것이다.<br/><br/>`);
        result.textData.push(`<b>* 형태질 없는 운동 반응: 관념적 태세에 의해 반점의 윤곽이 무시되는 것이다.</b><br/>`);
        result.textData.push(`<b>* 운동 반응을 제외한 형태질 없는 반응: 강한 정서로 인해 반점 윤곽이 무시되는 것이다.</b><br/>`);
    }

    

    result.goNext = false;
    result.nextStep = 3;
    return result;
}

function step3({ fqx_minus, Xminusper }) {
    var result = {};
    result.textData = [];
    result.curStep = 3;

    if (parseFloat(Xminusper) == 0 && parseFloat(fqx_minus) == 0) {
        result.textData.push(`[잠정 결과0] 왜곡된 형태 비율(X-%)을 고려할 때, 수검자의 중재 활동에서 기능 이상은 뚜렷하지 않을 것이다. 대부분의 검사기록에서 적절하지 않은 형태(FQx-) 반응이 나타는 점을 고려하면, 수검자는 반응과정에서 적절하고 정확하게 반응하려는 경향을 뚜렷하게 가지고 있을 것이다.`);
        result.goNext = false;
        result.nextStep = '4';
        return result;
    }
    if(Xminusper < 0.15 && fqx_minus >= 1 && fqx_minus <= 3){
        result.textData.push(`[잠정 결과1] [정상범주] 왜곡된 형태 비율(X-%)을 고려할 때, 수검자의 중재 활동에서 기능 이상은 대부분의 다른 사람보다 더 많이 발생하지 않을 것이다.`);
        result.textData.push(`적절하지 않은 형태(FQx-) 반응은 대부분의 검사기록에서 나타난다. 그러므로 현재 검사 결과에서 나타난 반응은 인과관계가 뚜렷하지 않은 우연 수준에서 발생한 결과일 수 있다. 이러한 결과가 분노, 거부 등의 감정이 뚜렷하게 영향을 주어 야기된 것이라는 것을 배제하기 위해 적절하지 않은 공간(FQx S-) 반응을 다시 검토할 필요가 있다.`);
        result.goNext = false;
        result.nextStep = '3a';
        return result;
    }

    if(0.15<=Xminusper && Xminusper<=0.2){
        result.textData.push(`[잠정 결과2] 왜곡된 형태 비율(X-%)을 고려할 때, 수검자의 중재 활동에서 기능 이상의 발생이 중등도 수준으로 상승하기 때문에 주의를 기울여야 한다. `);
        result.textData.push(`적절하지 않은 형태(FQx-) 반응의 동질성을 파악해 보면 기능 장애의 원인이 좀 더 명확해질 수 있다. 만약, 적절하지 않은 형태(FQx-) 반응의 빈도가 적절하지 않은 공간(FQx S-) 반응 빈도와 같거나 비슷할 경우 중재 활동의 기능 이상은 수검자의 정서적 특성과 직접 연결되어 있을 것이다. 거부, 분노 등의 정서 요인에 의해 반점의 형태가 잘못 해석되는 것일 수 있다.  <br/><br/>`);
        result.textData.push(`반응 수(R)가 평균보다 적으면 해석적 접근을 달리해야 한다. 반응 수(R)가 평균 정도일 때, 적절하지 않은 형태(FQx-) 반응의 빈도가 3개 또는 4개이면 정상범주를 벗어난 것으로 해석하는 기준에 해당하게 된다. 그러므로 평균보다 더 적은 반응 수(R)인 짧은 검사기록(R: 14-16, FQx-: 3)에서 정상범주를 벗어난 것으로 해석하는 기준에 해당하는 왜곡된 형태 비율(X-%)은 실제보다 더 걱정스러운 결과일 수 있다. 신중한 태도로 검사에 임했을 짧은 검사기록을 보이는 수검자에서 이러한 결과가 나타나고, (짧은 기록에서 거의 나타나지 않는) 단서가 덜 명확한 위치(Dd, S)가 아닌 단서가 더 명확한 위치(W, D)에서 잘못된 해석이 발생하는 것이기 때문에 그렇게 볼 수 있다. 그래서 짧은 검사기록에서는 왜곡된 형태 비율(X-%)이 지적하는 것보다 기능 장애가 더 광범위하다고(extensive) 해석해야 한다.`);
        result.goNext = false;
        result.nextStep = '3a';
        return result;
    }
    if(0.21<=Xminusper && Xminusper<=0.25){
        result.textData.push(`[잠정 결과3] 왜곡된 형태 비율(X-%)을 고려할 때, 수검자의 중재 활동에서 기능 이상은 어떤 특정한 문제에 국한되지 않고 아마도 상당히 광범위한(pervasive) 경향을 보일 것이다. 다시 말해서 중재 활동의 기능 이상이 자주 여러 곳에서 나타날 것이다.`);
        result.textData.push(`반응 수(R)가 평균보다 적으면 해석적 접근을 달리해야 한다. 짧은 검사기록(R: 14-16, FQx-: 3)에서 적절하지 않은 형태(FQx-) 반응이 (반응 빈도가 높은) 단서가 더 명확한 위치(W, D)에서 3개 또는 4개가 나타날 경우, 중재 활동의 기능 이상은 광범위하고(pervasive) 아마도 심한 상태일 것이다. `);
        result.textData.push(`적절하지 않은 형태(FQx-) 반응의 동질성을 파악해 보면 기능 장애의 원인이 좀 더 명확해질 수 있다. 반응 수(R)가 평균 정도일 때, 적어도 적절하지 않은 형태(FQx-) 반응의 절반 이상이 단서가 덜 명확한 위치(FQx Dd-, FQx S-)이면 중재 활동의 기능 이상이 광범위한(pervasive) 것으로 보면 안 된다. 그보다 정서나 처리활동 같은 특정 문제에 관련하여 보는 게 적절하다. 적절하지 않은 공간(FQx S-) 반응이 적절하지 않은 형태(FQx-) 반응의 절반 이상이라면 부정적 정서가 중재 활동의 기능 이상에 분명하게 관련되어 있을 것이다. `);
        result.textData.push(`중재 활동의 기능 이상이 광범위한지(pervasive)와 상관없이 손상의 정도를 가볍게 여기면 안 되며, 중재 활동의 문제가 분명히 존재한다는 것을 강조하여 해석해야 한다.`);
        result.goNext = false;
        result.nextStep = '3a';
        return result;
    }
    if(Xminusper > 0.25){
        result.textData.push(`[잠정 결과4] 왜곡된 형태 비율(X-%)을 고려할 때, 수검자의 중재 활동에서 기능 이상은 심한 손상을 보일 수 있다. 특히 왜곡된 형태 비율(X-%)이 0.30 이상일 경우 이러한 경향성이 더 현저할 것이다.`);
        result.textData.push(`적절한 현실검증능력의 기본요소가 심하게 손상되었기 때문에 수검자는 대개 의사결정에서 적절한 판단을 내리지 못하는 무력한 모습(disabling problem)을 보일 것이다. `);
        result.textData.push(`현재 지표의 점수는 반응 수(R)의 1/4가 적절하지 않은 형태(FQx-) 반응이라는 것을 의미한다. 적절하지 않은 형태(FQx-) 반응은 어떤 일관성을 보이는 동질성이 있을 것이다. 그리고 기능 이상의 폭은 그것의 광범위함(pervasive)을 극적으로 표현할 것이다. 다시 말해서 기능 이상이 중재 활동의 전반에 퍼져 있어서 적절하게 기능하지 못할 수 있다. `);
        result.goNext = false;
        result.nextStep = '3a';
        return result;
    }
    if(Xminusper > 0.7){
        result.textData.push(`[잠정 결과5] 왜곡된 형태 비율(X-%)을 고려할 때, 수검자의 중재 활동의 기능 이상에 대한 정보는 신뢰할 수 없을 것이다. 증상을 과장하려고 시도하거나 꾀병을 부린 것일 수 있다. 활성기 정신증적 상태(active psychotic-like state)와 일치하는 증거를 확인할 수 없다면 꾀병으로 봐야 한다. `);
        result.textData.push(`단서가 덜 명확한 위치(FQx Dd-, FQx S-) 반응에 상관없이 현재 지표 점수는 적절하지 않을 것이다. 대개 이 정도의 점수를 보이는 수검자는 검사를 받을 수 없을 정도로 심각한 어려움을 겪고 있는 사람일 것이다. 이러한 어려움은 최근의 행동이력이나 개인력에서 쉽게 드러난다. `);
        result.goNext = false;
        result.nextStep = '3a';
        return result;
    }

    result.nextStep = '3a';
    result.goNext = false;
    return result;
}

function step3a({ checkFQminus, checkFQminusSpaceHalf, checkFQminusMovementHalf, checkFQminusF, checkFQminus3andPureF, checkFQminus3, checkHomogeneousContent }){
    var result = {};
    result.textData = [];
    result.curStep = '3a';

    console.log(checkFQminus, checkFQminusSpaceHalf, checkFQminusMovementHalf, checkFQminusF, checkFQminus3andPureF, checkFQminus3, checkHomogeneousContent)

    if(checkFQminus){
        result.textData.push(`[잠정 결과1] 적절하지 않은 형태(FQx-)를 고려할 때, 수검자가 보이는 중재 활동의 기능 이상은 검사 상황에 대한 반작용일 것이다. 검사 과제의 특성을 제대로 이해하지 못하여 불안해하거나 매우 거부적인 태도(FQx S-)로 수행한 것일 수 있다. 이 경우에 기능 이상은 일시적일 것이다.`);
        result.textData.push(`검사 결과를 일반화하는 과정에서 왜곡된 형태 비율(X-%)을 그대로 사용할 경우, 수검자가 친숙한 상황에서도 기능 이상을 보일 것이라고 과대 추정할 수도 있다. 그러므로 검사 상황(의뢰 사유, 수검자의 편견 등), 수검자의 개인력 등을 고려하여 기능 이상이 일시적인지, 또는 친숙하지 않은 상황이나 원치 않은 요구를 받는 상황에서 기능 이상이 반복적으로 나타나는지 확인해야 한다. <br/><br/>`);
    }

    if(checkFQminusSpaceHalf){
        result.textData.push(`[잠정 결과2] 적절하지 않은 형태(FQx-)를 고려할 때, 공간 반응(FQx S-)으로 묶이면 수검자가 보이는 중재 활동의 기능 이상은 분노, 거부적 태도 등 정서적 문제의 결과물일 것이다.`);
        result.textData.push(`다른 정서적 문제로 기능 이상이 발생하면 적절하지 않은 형태(FQx-) 반응의 결정인은 유채색, 무채색, 음영 등으로 묶일 것이다. 정서(Affect) 영역의 해석에서 어떠한 정서가 영향을 미치는지에 대한 정보를 얻을 수 있다. <br/><br/>`);
    }

    if(checkFQminusMovementHalf==1){
        result.textData.push(`[잠정 결과3a] 목표 지향적이고 통제된 형태의 사고를 반영하는 인간운동(M) 반응에서 적절하지 않은 형태(FQx-)가 나타나면, 수검자는 일시적인 잘못된 논리로 중재 활동에 이상을 보일 수 있다. <br/><br/>`);
    }
    if(checkFQminusMovementHalf==2){
        result.textData.push(`[잠정 결과3b] 목표 지향적이고 통제된 형태의 사고를 반영하는 인간운동(M) 반응에서 적절하지 않은 형태(FQx-)가 나타나면, 수검자의 중재 활동이 혼란된(disordered) 형태의 사고에 의해 영향을 받는 것일 수 있다. <br/><br/>`);
    }
    if(checkFQminusMovementHalf==3){
        result.textData.push(`[잠정 결과3c] 주변적이고 의도적이지 않은 형태의 관념 활동을 반영하는 운동(FM, m) 반응에서 적절하지 않은 형태(FQx-)가 나타나면, 수검자의 중재 활동이 욕구나 스트레스 경험 때문에 생겨난 주변적인 정신활동으로 방해받을 것이다. <br/><br/>`);
    }

    if(checkFQminusF){
        result.textData.push(`[잠정 결과4] 반사 반응에서 적절하지 않은 형태(FQx-)가 나타나면, 수검자의 중재 활동이 자기개념에 관련된 문제로 인해 방해받을 것이다. <br/><br/>`);
    }

    if(checkFQminus3andPureF==1){
        result.textData.push(`[잠정 결과5a] 순수 형태(F) 반응에서 적절하지 않은 형태(FQx-)가 나타나면, 수검자는 이제는 효과적이지 않은(ineffective) 회피 유형(avoidant style)을 현실 왜곡을 통해 유지하려고 노력하기 때문에 중재 활동에서 이상이 나타나고 있을 것이다. <br/><br/>`);
    }
    if(checkFQminus3andPureF==2){
        result.textData.push(`[잠정 결과5b] 순수 형태(F) 반응에서 적절하지 않은 형태(FQx-)가 나타나면, 수검자는 더 의도적이고 방어적으로 현실을 왜곡하고 있을 것이다. 불편을 유발하는 명료한 현실에 직면하는 것을 회피하기 위해 명료하지 않은 심상을 만들어 내는 것일 수 있다. 이러한 노력 때문에 이러한 노력 때문에 중재 활동에 이상이 나타날 것이다.<br/><br/>`);
    }

    if(checkHomogeneousContent) {
        result.textData.push(`[잠정 결과6] 적절하지 않은 형태(FQx-) 반응에서 동일한 내용이 관찰될 경우, 수검자가 몰두하고 있는 특정한 주제로 인해 중재 활동에 이상이 유발되고 있을 것이다. 내용 범주 또는 자기지각(self-perception) 군집에 관련된 자료에 수검자가 몰두하는 주제가 반영되어 있을 것이다.<br/><br/>`);
    }
    if(checkFQminus3==1){
        result.textData.push(`[잠정 결과7a] 적절하지 않은 형태(FQx-)가 각 카드의 첫 반응일 경우, 수검자가 중재 활동에 열의가 없거나 성급하게 접근한다는 것을 의미한다. 그로 인해 중재 활동에 이상이 나타날 수 있다. `);
        result.textData.push(`처리 활동의 문제로 발생할 수도 있지만, 중재 활동의 충동적인 경향으로 나타날 수도 있다. 첫 반응 이후에 나타나는 반응이 적절할 경우 충동성에 대한 가설이 더 확실할 것이다.<br/><br/>`);
    }
    console.log('checkFQminus3', checkFQminus3);
    if(checkFQminus3==2){
        console.log('asdasdsa')
        result.textData.push(`[잠정 결과7b] 적절하지 않은 형태(FQx-)가 각 카드의 마지막 반응일 경우, 수검자에게 그 반응의 내용은 특별한 의미가 있을 것이다. 내용 분석을 통해 그것에 대해 명확히 할 수 있을 것이다.`);
        result.textData.push(`다만, 적절하지 않은 형태(FQx-) 반응이 모두 각 카드의 마지막 반응일 경우, 수검자가 어떤 원인으로 인해 혼란된(disturbance) 특징을 과장하는 것일 수 있다. 그러므로 해석에 신중해야 한다.</br>`);
    }



    result.nextStep = '3b';
    result.goNext = false;
    return result;
}


function step3b({}){
    var result = {};
    result.textData = [];
    result.curStep = '3b';
    //result.textData.push(`[질적 해석]<br/><br/><br/><br/><br/><br/><br/>`);
    result.nextStep = '4';
    result.goNext = false;
    return result;
}

function step4({ R, P, age }){
    var result = {};
    result.textData = [];
    result.curStep = 4;
    var pAverage = [];

    if(17<=R && R<=27){
        if(age>=12){
            pAverage = [5, 7];
        }
        if(age<12){
            pAverage = [4, 7];
        }
    }
    if(R<=16){
        pAverage = [4, 6];
    }
    if(R>=28){
        pAverage = [6, 9];
    }

    if (pAverage[0]<= P && P<=pAverage[1]){
        result.textData.push(`[잠정 결과1] [정상범주] 가장 분명한 원위적 특징(단서)을 사용하는 평범 반응(P)을 고려할 때, 수검자는 어떤 행동이 수용되는지 어떤 행동이 기대되는지 단서가 명확하여 쉽게 알 수 있는 상황에서 그 단서에 적합한 관습적 행동을 할 수 있을 것이다.`);
        result.textData.push(`정보 처리 과정에 문제가 있더라도 상황이 단순하고 명확하게 정의된 경우에는 관습적이지 않게 반응할 확률이 낮을 것이다. 다시 말해서 잉크 반점의 명확한 원위적 특징(단서)을 활용하여 대상을 표상하는 능력은 정상범주에서 기능하고 있는 것으로 볼 수 있다. `);
        result.goNext = false;
        result.nextStep = 5;
        return result;
    }

    if(P>pAverage[1]){
        result.textData.push(`[잠정 결과2a] 가장 분명한 원위적 특징(단서)을 사용하는 평범 반응(P)을 고려할 때, 수검자의 관습이나 정확성에 대한 관심은 일반적인 범주를 벗어나 있을 것이다. 사회적으로 어떤 행동이 수용되는지 어떤 행동이 기대되는지에 대한 단서를 찾는데 몰두할 것이다. `);
        result.textData.push(`수검자에게 불리한 점(liability)이라고 할 수는 없지만, 사회적 수용에 지나치게 관심을 기울이는 것은 아닌지 의문을 제기할 수 있다. `);
        result.textData.push(`강박적 유형에서는 흔하게 나타난다. 강박적 유형을 보이지 않는다면, 완벽주의에 관련된 분명한 경향이 반영된 것일 수 있다. `);
        result.goNext = false;
        result.nextStep = 5;
        return result;
    }

    if(P<pAverage[0]){
        result.textData.push(`[잠정 결과2b] 가장 분명한 원위적 특징(단서)을 사용하는 평범 반응(P)을 고려할 때, 수검자는 어떤 행동이 수용되는지 어떤 행동이 기대되는지 단서가 단순하고 명확하게 정의된 상황에도 (단서에 부합되지 않는) 관습적이지 않거나 개성적인 반응을 할 것이다. `);
        result.textData.push(`수검자에게 불리한 점(liability)이라고 할 수는 없지만, 개인적 욕구나 바람을 우선시하기 때문에 지속하여 사회적 관습이나 기대를 고려하지 않는 것인지 의문을 제기할 수 있다. 6단계에서 좀 더 자세히 다룰 것이다. <br/><br/>`);
        result.textData.push(`<b>* 사회화 관점에서도 분석할 수 있다. </b>`);
        result.goNext = false;
        result.nextStep = 5;
        return result;
    }

    result.nextStep = 5;
    result.goNext = false;
    return result;
}

function step5({ fqx_plus }){
    var result = {};
    result.curStep = 5;
    result.textData = [];

    if(fqx_plus==0){
        result.textData.push(`[잠정 결과1] 지나치게 정교한 관습적 형태(FQx+) 반응을 고려할 때, 수검자는 검사 과정에서 열의가 없었거나, 방어적이었을 것이다. 더욱이 중재 활동에 손상이 있을 가능성이 있다. 다시 말해서 관습적 반응에 대한 노력이 부족할 것이다.`);
        result.textData.push(`이러한 결론을 내리기 전에 형태질(FQ) 채점이 제대로 이루어졌는지 확인해야 한다. 수검자의 학력 수준과 지적 수준을 고려하여 해석해야 한다. `);
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }

    if(1<=fqx_plus && fqx_plus<=3){
        result.textData.push(`[잠정 결과2] [정상범주] 지나치게 정교한 관습적 형태(FQx+) 반응을 고려할 때, 수검자는 검사 과정에서 적절한 동기를 보이고, 중재 활동에서 정확하고 관습적으로 반응하려고 노력했을 것이다. `);
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }

    if(fqx_plus>=4){
        result.textData.push(`[잠정 결과3] 지나치게 정교한 관습적 형태(FQx+) 반응을 고려할 때, 수검자는 정밀하거나 정확하게 하려는 경향이 현저할 것이다. `);
        result.textData.push(`수검자에게 불리한 점(liability)이라고 할 수는 없지만, 의사결정에서 지나치게 조심스러울 모습을 보일 수 있다. 이러한 결과가 강박적 유형인 수검자에서 나타난다면, 중재 활동에 완벽주의 경향이 더 많다는 것을 반영한다. `);
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }

    result.goNext = false;
    result.nextStep = 6;
    return result;
}

function step6({ Lambda, Xplusper, Xuper, Xminusper }){
    var result = {};
    result.textData = [];
    result.curStep = 6;
    if((0.7<=Xplusper && Xplusper<=0.85) && (0.1<=Xuper && Xuper<=0.2) ){
        result.textData.push(`[잠정 결과1a] [정상범주] 관습적인 형태 사용 비율(X+%)과 관습적이지 않은 형태 사용 비율(Xu%)을 고려할 때, 수검자의 중재 활동에서 의사결정이나 행동은 사회적 요구나 기대에 일치하는 경향이 높을 것이다. `);
        result.goNext = true;
        result.nextStep = 7;
        return result;
    }

    if((0.7<=Xplusper && Xplusper<=0.85) && (Xuper>0.2)){
        result.textData.push(`[잠정 결과1b] 관습적인 형태 사용 비율(X+%)과 관습적이지 않은 형태 사용 비율(Xu%)을 고려할 때, 수검자의 중재 활동에서 어떤 형태의 기능 이상이 간헐적으로 사회적 기대나 요구에 일치하게 의사결정하고 행동하는 것을 방해할 것이다.`);
        result.goNext = true;
        result.nextStep = 7;
        return result;
    }
    if(Xplusper>0.85){
        result.textData.push(`[잠정 결과2] 관습적인 형태 사용 비율(X+%)과 관습적이지 않은 형태 사용 비율(Xu%)을 고려할 때, 수검자의 중재 활동에서 의사결정과 행동을 지나치게 사회적 요구나 기대에 일치하도록 하는 경향이 있을 것이다.`);
        result.textData.push(`수검자에게 불리한 점(liability)이라고 할 수는 없지만, 사회적으로 받아들여지는 것에 지나친 몰두 때문에 개성이 희생당할 수 있다. `);
        result.textData.push(`높은 관습적 형태 사용 비율(X+%)은 강박적이거나 완벽주의적인 경향이 반영된 것일 수 있다.`);
        result.goNext = true;
        result.nextStep= 7;
        return result;
    }
    if((0.55<=Xplusper && Xplusper<=0.69) && Xuper>=0.2){
        if(Lambda<=0.99){
            result.textData.push(`[잠정 결과3a] 관습적인 형태 사용 비율(X+%)과 관습적이지 않은 형태 사용 비율(Xu%)을 고려할 때, 수검자의 중재 활동에서 대부분의 다른 사람들보다 사회적 요구나 기대를 무시하는 의사결정이나 행동을 할 것이다. `);
            result.textData.push(`수검자는 환경과 갈등을 겪고 있을 수 있으며, 주변 환경과 상당히 다른 가치 체계를 가지고 있을 수도 있다. 이것은 관습적 행동을 적게 할 수 있다는 것을 의미하며, 수용될 수 없는 행동이나 반사회적 행동을 한다는 것을 의미하지 않는다.`);
            result.goNext = true;
            result.nextStep = 7;
            return result;
        }
        if(Lambda<=1){
            result.textData.push(`[잠정 결과3b] 저하된 관습적인 형태 사용 비율(X+%)과 상승한 관습적이지 않은 형태 사용 비율(Xu%)이 회피 유형(avoidant style)과 함께 나타날 경우, 수검자는 사회적으로 소외되어 있거나, 사회적 상황에 방어적 경향을 보일 것이다. `);
            result.textData.push(`수검자는 우호적이거나 호혜적이지 않으며 위협적으로 생각되는 환경과 거리를 유지하기 위해 관습적 행동을 회피하는 것일 수 있다. `);
            result.goNext = true;
            result.nextStep = 7;
            return result;
        }
    }

    if(Xplusper<0.55){
        if(Xminusper>0.2){
            result.textData.push(`[잠정 결과4a] 관습적인 형태 사용 비율(X+%)과 관습적이지 않은 형태 사용 비율(Xu%)을 고려할 때, 수검자의 중재 활동에서 기능 이상과 현실검증능력의 문제가 있어서, 의사결정이나 행동이 매우 독특하거나 관습적이지 않고 부적절할 수 있다. 그러므로 해석할 때 이를 강조하고 수검자의 개성적 반응에 대해서는 언급하지 않아야 한다.`);
            result.goNext = true;
            result.nextStep = 7;
            return result;
        }
        if((Xminusper<=0.2 && Xuper>=0.25) || (Xminusper<0.15 && Xuper>=0.3)){
            result.textData.push(`[잠정 결과4b] 관습적인 형태 사용 비율(X+%)과 관습적이지 않은 형태 사용 비율(Xu%)을 고려할 때, 수검자는 중재 활동에서 현실검증능력의 문제는 없으나 매우 관습적이지 않은 반응을 보일 것이다. `);
            result.textData.push(`수검자의 행동은 일상적이지 않지만, 상황에 적절한 반응이므로 현실검증능력의 문제가 있다고 볼 수 없다. 다만, 중재 활동에서 사회적 요구나 기대에 영향을 받지 않는다는 것을 의미한다. `);
            result.textData.push(`수검자에게 불리한 점(liability)이라고 할 수는 없지만, 사회적 관습을 무시하거나 회피하는 방식으로 행동할 가능성이 있다. 관습적이지 않은 행동이 효과적인(effective) 정도는 그것이 얼마나 창의적인지, 그리고 개성에 관련된 주변 환경의 융통성에 크게 의존한다. `);
            result.goNext = true;
            result.nextStep = 7;
            return result;
        }
    }


    result.nextStep = 7;
    result.goNext = true;
    return result;
}
