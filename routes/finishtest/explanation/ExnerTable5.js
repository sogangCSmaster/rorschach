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
    return eval(`nextStep(${step.nextStep}, result, scores)`);
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
        result.textData.push(`[잠정 결과7a] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)을 고려할 때, 수검자의 중재 활동이 상당히 손상되었을 것이다. `);
        result.textData.push(`수검자는 일상적으로 심리적 측면을 관리하는 데 지속적이고 광범위한(pervasive) 어려움을 겪을 것이다. 때때로 정신증적 수준의 혼란(disturbance)을 겪을 것이다.`);
        result.textData.push(`흔한 영역의 적합한 형태 비율(WDA%)이 낮을수록 정신증적 상태의 가능성이 명확해지고, 일상생활에서 다른 사람의 도움이나 감독이 필요한 정도가 증가할 수 있다. <br/>`);
        result.textData.push(`정신증적 과정(psychotic-like process)이 존재할 경우 흔하게 나타나지만, 중재 활동에 관련된 모든 자료를 살펴보지 않고 결론은 내리는 것은 적절하지 않다.<br/><br/>`);
        result.textData.push(`[잠정 결과7b] 확장된 적합한 형태 비율(XA%)과 흔한 영역의 적합한 형태 비율(WDA%)의 점수 차이를 통해, 수검자의 현실검증능력 손상이 일상 기능에 미치는 영향의 정도를 파악할 수 있다.`);

        if(0.65<=WDAper && WDAper<=0.74){
            result.textData.push(`[잠정결과7a1] 중재 활동의 기능 이상이 심하고, 현실검증능력도 현저하게 영향을 받을 것이다.`);
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
        if(WDAper<0.65){
            result.textData.push(`[잠정결과7a2] 중재 활동의 기능 이상이 극심하고, 현실검증능력도 현저하게 손상되었을 것이다.`);
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
        if((WDAper-XAper) >= 0.1){
            result.textData.push(`[잠정결과7b1] 단서가 덜 명확한 상황에서 중재 활동의 기능 장애가 현저해질 것이다.`);
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
        if((WDAper-XAper) <0.1){
            result.textData.push(`[잠정결과7b2] 현실검증능력의 손상이 전반적이어서 명확한 원위적 특징(단서)에 상관없이 중재 활동에 기능장애가 나타날 것이다.`);
            result.nextStep = 2;
            result.goNext =false;
            return result;
        }
    }
    
    
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

function step3({  }) {

}

function step4({  }) {
    var result = {};
    result.textData = [];

    if (W > M) {
        if (W / M == 1.5 || W / M == 2 || W / M == 3) {
            result.textData.push('잠정 결과1a] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)과 결과를 얻는데 필요한 가용 자원을 반영하는 경험유형(EBstyle)을 고려할 때, 수검자는 자신이 가지고 있는 성취역량(가용 자원)에 비해 높은 성취목표(기대수준)를 가지고 있을 것이다. ');
            result.textData.push('성취목표(기대수준)와 성취역량(가용 자원)이 일치하는 것이 적절한 상태이다. 하지만, 수검자는 낮은 자원 수준에도 불구하고 높은 목표를 가지고 있으므로 실패나 좌절의 경험을 자주 겪을 것이다. 이러한 경향은 특히, 발달질(DQ)에서 DQ+의 빈도가 낮으면 더 명확해질 것이다.');
            result.textData.push('자기 지각 영역에서 자기 효능감에 관련하여 개념화를 할 수도 있다.');
            result.textData.push('* 기준을 초과하지 않는 점수는 목표와 능력이 균형을 이루는 것이 아니라, 단지 해석적 의미가 없다는 것을 뜻한다.');
        } else if ((W / M >= 5 && W / M <= 8) || (W / M == 4) || (W / M == 3)) {
            result.textData.push('[잠정 결과1b] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)에서 성취역량(가용 자원)에 비해 높은 성취목표(기대수준)를 가지고 있는 것으로 나타나지만, 수검자의 연령을 고려하면 적절한 수준으로 볼 수 있다.');
            result.textData.push('아동과 어린 청소년의 경우, 현실적인 역량보다 자신의 능력 수준을 지나치게 높게 평가하고, 그것에 근거하여 상당히 높은 목표를 설정하는 경향이 있다. 하지만 어린 수검자는 그러한 목표에 큰 가치를 부여하지 않는다.');
            result.textData.push('그렇기에 낮은 자원 수준으로 인해 실패를 겪더라도 크게 신경을 쓰지 않으며, 그로 인한 좌절을 경험하는 기간도 짧을 것이다.');
        }
        result.goNext = false;
        result.nextStep = 5;
        return result;
    }

    if (W < M) {
        if (W / M == 0.75 && Zf >= 11) {
            result.textData.push('[잠정 결과2a] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)과 결과를 얻는데 필요한 가용 자원을 반영하는 경험유형(EBstyle)을 고려할 때, 수검자는 자신이 가지고 있는 성취역량(가용 자원)에 비해 낮은 성취목표(기대수준)를 가지고 있을 것이다. 이러한 결과를 보이는 수검자는 성취목표를 설정하는 데 있어서 신중하고 조심스러울 것이다.');
            result.goNext = false;
            result.nextStep = 5;
            return result;
        } else if (W / M == 1.2 && Zf < 11) {
            result.textData.push('[잠정 결과2b] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)과 결과를 얻는데 필요한 가용 자원을 반영하는 경험유형(EBstyle)을 고려할 때, 수검자는 자신이 가지고 있는 성취역량(가용 자원)에 비해 낮은 성취목표(기대수준)를 가지고 있을 것이다. 이러한 결과를 보이는 수검자는 성취목표를 설정하는데 지나치게 노력을 아끼고 열의가 없을 것이다. 이러한 경향은 회피 유형(Avoidant style)의 검사 결과에서 자주 나타날 수 있다.');
            result.goNext = false;
            result.nextStep = 5;
            return result;
        }
    }

    result.goNext = true;
    return result;
}

function step5({ Zd }) {
    var result = {};
    result.textData = [];
    if (Zd >= -3.0 && Zd <= 3.0) {
        result.textData.push('[잠정 결과1] [정상범주] 정보 처리 능률(Zd)을 고려할 때, 수검자는 자극 장의 탐색 활동에서 다른 사람들과 비슷한 수준의 능률(efficiency)을 보일 것이다. 다시 말해서 효과적인(effectively) 처리에 대한 동기가 적절한 수준일 것이다.');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }
    if (Zd < -3.0) {
        result.textData.push('[잠정결과2] [과소 통합 형태의 탐색 활동: under-incorporative form of scanning activity] 정보 처리 능률(Zd)을 고려할 때, 수검자는 과소 통합 형태의 탐색 활동을 할 것이다. 자극 장을 성급하게 아무렇게나 탐색하고, 자주 자극 장에 존재하는 중요한 부분이나 결정적인 단서를 주의 깊게 살피지 않을 것이다. 다시 말해서 효과적인(effectively) 처리에 대한 동기가 낮을 것이다.');
        result.textData.push('청소년이나 성인의 경우에서는 상당히 불리한 점(liability)이 될 수 있다. 과소 통합은 현재의 단서를 잘못 해석할 잠재성을 만들어 내며, 효과적이지(effective) 않은 행동 방식으로 이어진다. 과소 통합 형태의 탐색 활동은 지연과 충분한 탐색을 강조하는 인지 재구조화 방법을 통해 쉽게 교정할 수 있다.');
        result.textData.push('10세 미만의 아동에서는 과소 통합이 흔하게 나타나기 때문에 아동이 심한 어려움을 호소하지 않는다면 크게 관심을 두지 않아도 된다.');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }
    if (Zd > 3.0) {
        result.textData.push('[잠정 결과3] [과다 통합 형태의 탐색 활동: over-incorporation form of scanning activity] 정보 처리 능률(Zd)을 고려할 때, 수검자는 특성적인 유형인 과다 통합 형태의 탐색 활동을 보일 것이다. 탐색 활동에서 노력을 더 많이 들이는 격심하고 지속적인 수고(exertion)를 보일 것이다. 수검자는 부주의한 것을 명백하게 피하길 원하며, 상황의 특징을 탐색하는데 필요한 것보다 더 많이 노력을 들이는 것에 동기화되어 있을 것이다. 다시 말해서 효과적인(effectively) 처리에 대한 동기가 높을 것이다.');
        result.textData.push('비록 추가되는 노력 때문에 능률적이지(efficient) 않지만, 입력에 포함되는 모든 자극 단서를 확보하므로 때때로 자원이 될 수 있다.');
        result.textData.push('이러한 결과는 수검자가 심리적 혼란(disorganization)을 겪고 있으면 불리한 점(liability)이 될 수 있다. 이러한 유형이 과도해지면 의사결정에서 불필요하게 머뭇거릴 수 있다.');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }

    result.goNext = true;
    return result;
}

function step6({ PSV }) {
    var result = {};
    result.textData = [];

    if (PSV == 1) {
        result.textData.push('[잠정 결과1] 보속 반응(PSV)을 고려할 때, 수검자는 때때로 주의전환에 약간의 어려움을 보일 수 있으며, 그로 인해 처리 활동이 능률적이지(efficiency) 않게 될 것이다.');
        result.textData.push('참고) 카드 내 보속은 처리 능률(efficiency)의 문제로 볼 수 있지만, 내용 보속은 처리 작용과 관련이 없으며 몰두해 있는 주제에 대한 정보를 제공한다. 그리고 기계적 보속은 심각한 인지적-신경학적 문제를 반영한다.');
        result.goNext = false;
        result.nextStep = 7;
        return result;
    }
    if (PSV >= 2) {
        result.textData.push('[잠정 결과2] 보속 반응(PSV)을 고려할 때, 수검자는 주의전환에 상당한 어려움을 보일 수 있으며, 그로 인해 처리 활동 활동이 현저하게 능률적이지(efficiency) 않게 될 것이다.');
        result.textData.push('이러한 결과는 어린 아동, 상당한 심리적 혼란(disarray)을 겪고 있는 사람, 신경학적 문제가 있는 사람에서 나타나므로 로르샤하 검사에 근거한 인지 기능은 더 조심스럽게 평가해야 한다.');
        result.textData.push('참고) 카드 내 보속은 처리 능률(efficiency)의 문제로 볼 수 있지만, 내용 보속은 처리 작용과 관련이 없으며 몰두해 있는 주제에 대한 정보를 제공한다. 그리고 기계적 보속은 심각한 인지적-신경학적 문제를 반영한다.');
        result.goNext = false;
        result.nextStep = 7;
        return result;
    }

    result.goNext = true;
    return result;
}

function step7() {

}

function step8() {

}
