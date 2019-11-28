function calculateExnerTable7(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable7 = calculateExnerTable6;

function nextStep(stepNum, result, scores) {
    var step = eval(`step${stepNum}(scores)`);
    result.push(step);
    if (step.goNext == true) {
        return result;
    }
    return eval(`nextStep('${step.nextStep}', result, scores)`);
}

function step1({ OBSPositive, HVIPositive }){
    var result = {};
    result.textData = [];
    result.curStep = 1;

    if(OBSPositive){
        result.textData.push(`[잠정 결과1] 강박지표(OBS)를 고려할 때, 수검자는 완벽주의에 몰두하는 강박적인 경향을 보일 것이다. 이것이 수검자의 특정한 자기개념을 형성하는 성격의 유형적 특징일 것이다. `);
        result.textData.push(`강박성에 대한 이론은 다양하지만, 다음의 공통적인 가정을 모두 공유한다. 강박적인 사람은 자신이 어떤 요구에 대처하거나 목표를 달성하는 과정에서 적절하게 행동할 수 있는지 의문을 가지기 때문에, 안전하지 않다는 느낄 것이다. 완벽을 추구하는 것은 안전하지 않다는 걱정을 통제하는 방법이며, 더욱이 적절하지 않다는 느낌을 확신시켜주는 섬뜩한 실수를 회피하는 방법이다.`);
        result.textData.push(`<br/>대개 강박적인 사람은 자기개념에 과대적인 특징이 두드러지지 않는다. 그 대신에, 강박적이지 않은 사람에 비해 자기에 대한 관점은 더 조심스럽고 때로는 때때로 더 부정적인 경향을 보일 수 있다. 만약, 강박적인 사람의 자기개념에 비현실적인 과장된 표현이 포함되어 있다면, 강박적이지 않은 사람에 비해 실패를 겪을 때 심리적 문제를 경험할 위험성이 더 클 수 있다. 그 이유는 강박적인 사람은 실수의 결과와 중대성을 확대하여 생각하고, 즉시 자신을 비하는 경향이 있기 때문이다. <br/>`);
        result.textData.push(`완벽주의에 몰두하는 것은 반드시 불리한 점(liability)이 되지 않겠지만, 과도해지거나 상당한 실패를 경험할 때에는 불리한 점(liability)이 될 수 있다. `);
        result.textData.push(`강박적인 사람은 정확성과 명확성에 확고한 가치를 두며, 그러한 가치를 공유하지 않는 사람은 상대할 가치가 없다고 여기는 경향이 있다.`);
        result.goNext = false;
        result.nextStep = 2;
        return result;
    }

    if(HVIPositive){
        result.textData.push(`[잠정 결과2] 과경계지표(HVI)를 고려할 때, 수검자는 자신의 취약성에 몰두하고, 환경을 불신하는 과잉경계 경향을 보일 것이다. 이것이 수검자의 특정한 자기개념을 형성하는 성격의 유형적 특징일 것이다.`);
        result.textData.push(`과잉경계하는 사람은 자신의 통합(integrity)에 매우 높은 관심을 가진다. 그렇기에 실제 상황에 관련 없이 어려움이나 실패의 원인을 외부 힘의 탓으로 돌리는 경향이 있다. `);
        result.textData.push(`다른 사람의 행동과 반응을 명확하게 예측할 수 없다는 느낌은 수검자가 모욕을 당하거나 농락당하는 것을 피하고, 자신의 행동이 상황에 적절하도록 확실히 준비하는 것에 높은 관심을 불러일으킨다. 이러한 신중한 상태는 매우 융통성이 없으며, 이것을 유지하기 위해 상당한 에너지를 들이게 한다. `);
        result.textData.push(`환경에 대한 과잉경계가 과도해지면 수검자의 관념에 편집증적 특징이 현저하게 두드러질 것이다.`);
        result.goNext = false;
        result.nextStep = 2;
        return result;
    }

    result.nextStep = 2;
    result.goNext = false;
    return result;
}

function step2({ Reflections }){
    var result = {};
    result.textData = [];
    result.curStep = 2;

    if(Reflections>0){
        result.textData.push(`잠정 결과] 반사(Reflection) 반응을 고려할 때, 수검자의 세계관은 과장된 자존감과 과대한 자기중심성에 의해 지배되는 경향이 있을 것이다.`);
        result.textData.push(`자기애 특성은 성격의 기본적인 특징으로, 개인의 과대한 자존심은 자주 재확인과 강화를 요구하기 때문에 의사결정과 행동에 높은 영향을 미친다. 이러한 특징을 가진 청소년과 성인은 깊이 있고 의미 있는 대인관계를 만들고 유지하는 데 어려움이 있을 수 있다.`);
        result.textData.push(`어떤 경우에는 자기점검이 유발될 수도 있다. 만약 자기점검이 나타나면, 자기에게 높은 가치가 있다는 것과 아마도 그 근거가 확실하지 않을지도 모른다는 인식 사이에서 몸부림치는 내적 갈등이 발생할 수 있다.`);
        result.textData.push(`만약 수검자의 과대한 자존감에 환경이 확신을 제공하지 않는다면, 수검자는 비사회적 또는 반사회적 태세를 상당히 쉽게 표출할 것이다.`);
        result.goNext = false;
        result.nextStep = 3;
        return result;
    }

    result.nextStep = 3;
    result.goNext = false;
    return result;
}

function step3({ EgocentricityIndex, Reflections }){
    
}