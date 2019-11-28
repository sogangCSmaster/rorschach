function calculateExnerTable8(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable8 = calculateExnerTable8;

function nextStep(stepNum, result, scores) {
    var step = eval(`step${stepNum}(scores)`);
    result.push(step);
    if (step.goNext == true) {
        return result;
    }
    return eval(`nextStep('${step.nextStep}', result, scores)`);
}

function step1({ CDI }) {
    var result = {};
    result.textData = [];
    result.curStep = 1;

    if (CDI >= 4) {
        result.textData.push(`[잠정 결과] 대처결함지표(CDI)를 고려할 때, 수검자는 예상보다 사회적으로 성숙하지 않았을 것이다. 수검자는 환경과 상호작용할 때 어려움을 자주 경험하는 경향을 보일 수 있다. 특히, 대인 영역에서 그러한 경향이 뚜렷할 수 있다.
- 수검자는 사회기술이 제한되어 있어서 친밀하고 성숙한 관계를 만들고 유지하는 데 어려움을 겪을 것이다. 그리고 다른 사람의 욕구나 관심에 민감하지 않은 경향을 보일 수 있다.`);
        result.textData.push(`다른 사람과 관계는 일반적인 것보다 더 피상적이고, 유지되기 쉽지 않을 수 있다. 이러한 사람은 다른 사람들과 거리를 두거나, 서툴거나, 다른 사람을 다룰 때 무력한 것으로 비춰질 것이다.
- 수검자의 개인력에는 사회적 혼란(chaos) 또는 대인 불만족으로 특징 지워지는 경우가 자주 있었을 것이다. 수검자는 때때로 사회적 교류를 꺼리며 피하고, 피상적인 관계만 지속하는, 예상보다 더 고립된 생활 방식에 머물 것이다. 하지만 수검자의 사회적 기대(aspiration)는 대부분의 다른 사람과 다르지 않을 것이다.`);
        result.textData.push(`수검자는 친밀하고 지속적인 관계를 추구하지만, 사회적 상황에서 서툴기 때문에 다른 사람에게 수용 받지 못하거나 거절 받기 쉬울 것이다.`);
        result.textData.push(`수검자는 자신의 삶이 만족스럽지 않을 것이고, 사회적 상황에서 자주 혼란(confusion)과 무력감을 경험할 것이다. 이러한 경향을 보이는 많은 사람이 사회적 실패의 반응으로 주기적인 우울 삽화(periodic bouts of depression)를 겪는다.`);
        result.textData.push(`9세 이하의 어린 아동은 자신의 정체성 그리고 또래와 관계에 대한 주제로 분투하기 때문에 대처결함지표(CDI)의 상승이 흔하게 나타난다. `);
        result.textData.push(`9세를 초과하는 아동과 청소년은 대처결함지표(CDI)의 상승이 흔하지 않다. 이 나이에서 대처결함지표(CDI)에 해당할 경우, 예상보다 사회적으로 성숙하지 않았을 것이다. 대처결함지표(CDI)에 해당하는 성인에서처럼 관계를 수립하거나 유지하는 데 어떤 문제가 있을 것이다.`);
    }
    result.nextStep = 2;
    result.goNext = false;
    return result;
}
