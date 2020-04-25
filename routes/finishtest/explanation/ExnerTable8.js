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

function step1({ CDIPositive }) {
    var result = {};
    result.textData = [];
    result.curStep = 1;

    if (CDIPositive) {
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

function step2({ HVIPositive }) {
    var result = {};
    result.textData = [];
    result.curStep = 2;

    if (HVIPositive) {
        result.textData.push(`[잠정 결과] 과경계지표(HVI)를 고려할 때, 수검자의 심리구조에 과잉경계 유형이 핵심요소로 자리 잡고 있을 것이다. 관념화(ideation)와 자기지각(self-perception) 군집에서 다루었듯이 수검자는 환경에 부정적이거나 신뢰하지 않는 태도가 있기에, 준비 상태를 지속하여 유지하기 위해 상당한 에너지(energy)를 사용할 것이다.`)
        result.textData.push(`수검자는 다른 사람과 관계에서 지나치게 조심스럽고 신중한 경향을 보일 수 있다. 과잉경계하는 사람들은 자신을 매우 취약하다고 느끼는 경향이 있다. 수검자는 행동을 구성하고 이행하는 데 매우 조심스러울 수 있다.`);
        result.textData.push(`수검자는 개인적 공간에 대한 주제에 몰두하고, 대인관계에서 매우 경계하는 모습을 보일 것이다. 일반적으로 관계가 자신에 의해 통제되고 있다는 느낌을 받지 못한다면, 친밀한 관계를 지속하지 않을 수 있다.`);
        result.textData.push(`수검자는 다른 사람에게 친밀감을 기대하지 않으며, 다른 사람이 친밀감의 표현(gestures)을 보이면 매우 자주 미심쩍어할 것이다. 이러한 특징은 반드시 병리적인 것은 아니지만, 심해지면 자주 편집증적 징후(paranoid-like manifestation)를 만들어 낼 수 있다.`);
    }
    result.nextStep = 3;
    result.goNext = false;
    return result;
}

// lower_section, interpersonal
function step3({ a, p }) {
    var result = {};
    result.textData = [];
    result.curStep = 3;

    if (p > a + 1) {
        result.textData.push(`[잠정 결과] 능동 운동과 수동운동 비율(a:p)을 고려할 때, 수검자는 대인관계 역할에서 반드시 순종적인 것은 아니더라도, 일반적으로 다른 사람들에 비해 더 수동적일 것이다.`);
        result.textData.push(`수검자는 대개 의사결정의 책임을 회피하고, 문제의 새로운 해결책을 찾아내거나 새로운 행동 방식을 창안하지 않을 것이다. 특히, 선택의 여지 없이 책임을 떠맡을 다른 사람이 있을 가능성이 있다면 더 그러할 것이다.`);
    }

    result.nextStep = 4;
    result.goNext = false;
    return result;
}

function step4({ age, Food: Fd }) {
    var result = {};
    result.textData = [];
    result.curStep = 4;

    if ((age >= 13 && Fd >= 1) || (age >= 5 && age <= 12 && Fd >= 2)) {
        result.textData.push(`[장점 결과] 음식(Fd: Food) 내용 반응을 고려할 때, 수검자는 일반적으로 예상되는 것보다 명백하게 더 많이 의존적인 행동을 보일 것이다. 이러한 사람들은 다른 사람의 지시와 지지에 의존하는 경향이 있다.`);
        result.textData.push(`수검자의 대인관계에 관련된 기대는 일반적인 수준보다 더 순진한(naive) 경향을 보일 것이다. 수검자는 대개 다른 사람들이 자신의 욕구나 요구에 더 많이 관대할 것으로 기대한다. 또한, 다른 사람들이 자신의 욕구나 요구를 더 많이 기꺼이 용인할 것으로 기대한다.`);
        result.textData.push(`수동적인 유형의 사람의 검사결과에서 음식(Fd: Food) 내용 반응이 예상값보다 많은 경우, 수동 의존적 특징이 수검자의 성격 구조의 중요한 핵심요소라고 결론을 짓는 게 합리적이다.`);
    }
    result.nextStep = 5;
    result.goNext = false;
    return result;
}

function step5({SumT, SumCprime, SumV, SumY, R, age, Lambda}) {
    var result = {};
    result.textData = [];
    result.curStep = 5;
    console.log('SumT', SumT, SumCprime, SumV, SumY);
    if (SumT == 0) {
        if(SumCprime==0 && SumT==0 && SumV==0 && SumY==0){
            if(age<9 || Lambda>=1 || (R<=20 && Lambda>1.2)){
                result.textData.push(`[잠정 결과2b] 재질(Texture) 반응, 다른 음영(SumY, SumV) 반응, 무채색(SumC’) 반응을 고려할 때, 친밀감의 욕구를 인정하고 표현하는 방식을 평가하는데 필요한 정보가 충분히 드러나지 않은 것으로 볼 수 있다. 일반적으로 이러한 양상은 검사에 대한 수검자의 방어적 접근이 반영되었거나, 단순히 성격 구조가 빈곤하여 측정할 수 있는 정보 자체가 적은 것으로 볼 수 있다.<br/><br/>`);
                result.textData.push(`<b>* 과경계지표(HVI)의 첫 번째 항목에 ‘재질(Texture) 반응 없음’이 포함되므로 과경계지표(HVI)를 점검해야 할 것처럼 보일 수 있다. 과경계지표(HVI)는 상당히 복잡한 검사 결과에서 나타나므로, 복잡성과 다른 결정인도 거의 없는 검사 결과를 보이는 음영 반응과 무채색 반응이 나타나지 않으면 과경계지표(HVI)에 해당하지 않을 것이다. </b><br/>`)
                result.textData.push(`<b>* 음영이나 무채색을 표현하는 데 어려움이 있는 9세 미만의 아동에서는 이러한 경향이 흔하게 나타날 수 있으며, 회피 유형에서 반응 수(R)가 20개 이하이고 Lambda(L)값이 1.2를 초과하면 흔하게 나타날 수 있다.</b><br />`);
                result.textData.push(`<br/>재질(Texture) 반응이 없는 경우에 대한 해석적 접근을 지지하는 개인력이 있는지 신중하게 확인할 필요가 있다.`);
                result.goNext = false;
                result.nextStep = 6;
                return result;
            }
        }
        result.textData.push(`[잠정 결과2a] 재질(Texture) 반응을 고려할 때, 수검자는 대부분의 다른 사람들과 다른 방식으로 친밀감의 욕구를 인정하고 표현할 것이다. 이것은 수검자가 친밀감의 욕구가 부족하다는 것을 의미하지는 않는다. 다른 사람들보다 더 친밀한 대인 상황에서 조심스러운 것일 수 있다. 특히, 촉각 교환이 포함되는 경우 그러할 것이다.`);
        result.textData.push(`재질(Texture) 반응이 없는 수검자는 개인적 공간에 지나치게 관심을 가지며, 다른 사람과 친밀한 정서적 연결을 만들고 유지하는데 신중한 경향이 있다.`);
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }


    if(SumT==1){
        result.textData.push(`[잠정 결과1] [정상범주] 재질(Texture) 반응을 고려할 때, 수검자는 대부분의 다른 사람들과 비슷한 방식으로 친밀감의 욕구를 인정하고 표현할 것이다. 이러한 결과를 보이는 사람들은 대개 친밀한 관계를 맺을 수 있고, 일상적인 촉각교환을 관계를 형성하고 유지하는 한 가지 방법으로 받아들일 수 있다.`);
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }
    if(SumT>1){
        result.textData.push(`[잠정 결과3] 재질(Texture) 반응을 고려할 때, 수검자는 충족되지 않은 강렬한 친밀감의 욕구가 있을 것이다. 대부분, 이렇게 증가한 본질적 그리움의 강도는 최근에 겪은 정서적 상실로 야기된 일시적인 반응일 수 있다. 그러나 어떤 경우에는 전혀 적절하게 보상받거나 대체되지 않은 실망으로 발생한 더 지속적인 상태를 의미할 수 있다. `);
        result.textData.push(`일시적이든 지속적이든 어떤 경우에도 대개 수검자는 그리움이나 외로움으로 인해 불편해진다(irritating). 일반적으로, 이러한 종류의 불편(irritation)을 경험하는 사람은 다른 사람과 친밀한 정서적 관계를 원하지만, 어떻게 그것을 달성할 수 있는 가장 좋은 방법인지 몰라 쩔쩔매게 된다. `);
        result.textData.push(`때때로, 이러한 욕구의 강도는 그들의 판단을 흐리고, 다른 사람의 농간에 당하기 쉽게 만든다. 특히, 수검자가 수동적이거나 의존적일 때 그러하다.`);
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }

    result.nextStep = 6;
    result.goNext = false;
    return result;
}

function step6({ Hrest, H, R, copyingStyle, approachStyle }) {

    var HumanCont = Hrest + H;
    var result = {};
    result.textData = [];
    result.curStep = 6;
    result.nextStep = 7;
    result.goNext = false;
    // copyingStyle: 내향형(Introversive), 외향형(Extratensive), 양향형(Ambitent)
    // approachStyle: 진성(True), 회피(Avoidant)

    var Rconditions = [[14, 16], [17, 27], [28, 55]];
    var TrueIntroversive = [[4, 6], [5, 8], [7, 11]];
    var TrueExtratensive = [[2, 4], [3, 6], [4, 7]];
    var TrueAmbitent = [[2, 5], [4, 7], [5, 9]];
    var AvoidantIntroversive = [[2, 5], [4, 7], [5, 9]];
    var AvoidantExtratensive = [[2, 5], [4, 7], [5, 9]];
    var AvoidantAmbitent = [[2, 5], [4, 7], [5, 9]];

    for (var i = 0; i < 3; i++) {
        // R check
        if (R >= Rconditions[i][0] && R <= Rconditions[i][1]) {
            // 진성 내향형
            var cond1 = eval(approachStyle + copyingStyle + '[i][0]');
            var cond2 = eval(approachStyle + copyingStyle + '[i][1]');
            if (approachStyle == 'True' && copyingStyle == 'Introversive') {

                // 예상 범위
                if (HumanCont >= cond1 && HumanCont <= cond2 && H > HumanCont / 2) {
                    result.textData.push(`[잠정 결과1] [정상범주] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 대부분의 다른 사람들만큼 다른 사람에게 관심을 보일 것이다. 그리고 현실에 근거하여 다른 사람을 개념화할 것이다.`);
                    return result;
                    
                }
                if (HumanCont >= cond1 && HumanCont <= cond2 && H <= HumanCont / 2) {
                    result.textData.push(`[잠정 결과2] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 대부분의 다른 사람들만큼 다른 사람에게 관심을 보일 것이다. 하지만 수검자는 다른 사람을 아주 잘 이해하지는 못할 것이다. 수검자는 다른 사람의 (의도를) 잘못 읽는 경향을 보일 수 있고, 자주 사회적 표현(gesture)을 잘못 해석할 수 있다.`);
                    result.textData.push(`때때로, 이러한 수검자는 합리적인 것보다 자신의 관계에 대한 기대가 더 클 수 있다. 다른 경우에는, 수검자의 이해 결여는 잠재적으로 다른 사람들로부터 소외시키는 사회적 실수로 이어질 수 있다.`);
                    return result;
                }
                // > 예상 범위
                if (HumanCont > cond2 && H > HumanCont / 2) {
                    result.textData.push(`[잠정 결과3] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 현실에 근거한 다른 사람에 대한 이해를 바탕으로 다른 사람에게 상당한 관심을 보일 것이다.`);
                    result.textData.push(`대개 이러한 수검자는 다른 사람에 대한 건강한 관심을 보인다. 하지만, 강하게 다른 사람에 대해 신뢰하지 않은 느낌을 포함하는 과잉경계를 보이는 수검자에서는 건강하지 않은 몰두를 반영하는 것일 수도 있다.`);
                    return result;
                }
                if (HumanCont > cond2 && H <= HumanCont / 2) {
                    result.textData.push(`[잠정 결과4] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 다른 사람에게 강한 관심을 보일 것이다. 하지만 수검자는 다른 사람을 아주 잘 이해하지는 못할 것이다.`)
                    result.textData.push(`다른 사람에 갖는 관심은 긍정적인 신호지만, 어떤 경우에는 단순히 조심스럽고 다른 사람을 믿지 못하는 건강하지 않은 몰두를 나타내는 것일 수 있다.`);
                    result.textData.push(`어떤 경우든지, 다른 사람에 대한 이해의 결여는 관계에 대한 현실적이지 않은 기대 또는 다른 사람들로부터 소외시키는 사회적 실수로 이어진다.`);
                    return result;
                }
                // < 예상 범위
                if (HumanCont < cond1 && R >= 17 && H > HumanCont / 2) {
                    result.textData.push(`[잠정 결과5] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 대부분의 다른 사람들만큼 다른 사람에게 관심을 보이지 않을 것이다. 다시 말해서, 다른 사람에 갖는 관심이 일반적인 수준보다 적을 것이다.`);
                    result.textData.push(`이러한 결과는 환경으로부터 정서적으로 위축되거나, 사회적으로 고립된 수검자에서 자주 나타난다.`);
                    result.textData.push(`전체 반응수(R)가 평균 범주(R≥17)일 경우, 다른 사람에 갖는 관심이 적고 고립되어 있지만 다른 사람에 대한 이해는 현실에 기초하고 있을 것이다.`);
                    return result;
                }
            }
            // 외향형, 양향형, 회피형
            if (
                (approachStyle == 'True' && copyingStyle == 'Extratensive') ||
                (approachStyle == 'True' && copyingStyle == 'Ambitent') ||
                (approachStyle == 'Avoidant')
            ) {
                // 예상 범위
                if (HumanCont >= cond1 && HumanCont <= cond2 && H >= HumanCont / 2) {
                    result.textData.push(`[잠정 결과1] [정상범주] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 대부분의 다른 사람들만큼 다른 사람에게 관심을 보일 것이다. 그리고 현실에 근거하여 다른 사람을 개념화할 것이다.`);
                    return result;
                }
                console.log('HumanCont', HumanCont, 'cond1', cond1, 'cond2', cond2, 'H', H, 'HumanCont/2', HumanCont/2)
                if (HumanCont >= cond1 && HumanCont <= cond2 && H < HumanCont / 2) {
                    result.textData.push(`[잠정 결과2] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 대부분의 다른 사람들만큼 다른 사람에게 관심을 보일 것이다. 하지만 수검자는 다른 사람을 아주 잘 이해하지는 못할 것이다. 수검자는 다른 사람의 (의도를) 잘못 읽는 경향을 보일 수 있고, 자주 사회적 표현(gesture)을 잘못 해석할 수 있다.`);
                    result.textData.push(`때때로, 이러한 수검자는 합리적인 것보다 자신의 관계에 대한 기대가 더 클 수 있다. 다른 경우에는, 수검자의 이해 결여는 잠재적으로 다른 사람들로부터 소외시키는 사회적 실수로 이어질 수 있다.`);
                    return result;
                }
                // > 예상 범위
                if (HumanCont > cond2 && H >= HumanCont / 2) {
                    result.textData.push(`[잠정 결과3] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 현실에 근거한 다른 사람에 대한 이해를 바탕으로 다른 사람에게 상당한 관심을 보일 것이다.`);
                    result.textData.push(`대개 이러한 수검자는 다른 사람에 대한 건강한 관심을 보인다. 하지만, 강하게 다른 사람에 대해 신뢰하지 않은 느낌을 포함하는 과잉경계를 보이는 수검자에서는 건강하지 않은 몰두를 반영하는 것일 수도 있다.`);
                    return result;
                }
                if (HumanCont > cond2 && H < HumanCont / 2) {
                    result.textData.push(`[잠정 결과4] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 다른 사람에게 강한 관심을 보일 것이다. 하지만 수검자는 다른 사람을 아주 잘 이해하지는 못할 것이다.`)
                    result.textData.push(`다른 사람에 갖는 관심은 긍정적인 신호지만, 어떤 경우에는 단순히 조심스럽고 다른 사람을 믿지 못하는 건강하지 않은 몰두를 나타내는 것일 수 있다.`);
                    result.textData.push(`어떤 경우든지, 다른 사람에 대한 이해의 결여는 관계에 대한 현실적이지 않은 기대 또는 다른 사람들로부터 소외시키는 사회적 실수로 이어진다.`);
                    return result;
                }
                // < 예상 범위
                if (HumanCont < cond1 && R >= 17 && H >= HumanCont / 2) {
                    result.textData.push(`[잠정 결과5] 순수 인간 내용(Pure H) 반응을 고려할 때, 수검자는 대부분의 다른 사람들만큼 다른 사람에게 관심을 보이지 않을 것이다. 다시 말해서, 다른 사람에 갖는 관심이 일반적인 수준보다 적을 것이다.`);
                    result.textData.push(`이러한 결과는 환경으로부터 정서적으로 위축되거나, 사회적으로 고립된 수검자에서 자주 나타난다.`);
                    result.textData.push(`전체 반응수(R)가 평균 범주(R≥17)일 경우, 다른 사람에 갖는 관심이 적고 고립되어 있지만 다른 사람에 대한 이해는 현실에 기초하고 있을 것이다.`);
                    return result;
                }
            }
        }
    }

    return result;
}

function step7({ GHR, PHR }) {
    var result = {};
    result.textData = [];
    result.curStep = 7;

    if (GHR + PHR >= 3 && GHR > PHR) {
        result.textData.push(`[잠정 결과1] [정상범주] 인간 표상(GHR : PHR) 반응을 고려할 때, 수검자는 전반적으로 상황에 적응적인 형태의 대인행동을 보일 것이다. 인간 표상(GHR : PHR) 반응의 두 값의 차이가 클수록 좋은 인간 표상(GHR)이 나쁜 인간 표상(PHR)에 비해 큰 값을 가질수록 수검자는 광범위한 대인관계에서 대인행동은 효과적이고 대개 다른 사람들에게 호의적으로 평가받을 가능성이 증가할 것이다.`);
        result.textData.push(`* 좋은 인간표상(GHR)은 대개 효과적이고(effective) 적응적인 것으로 여겨지는 대인이력(history)에 관련되어 있다. 좋은 인간 표상(GHR)이 많으면 대개 다른 사람들에게 호의적으로 평가될 것이고, 대인 활동은 상당히 혼란에서 자유로운 경향을 보일 것이다. 좋은 인간 표상(GHR)은 대개 환자가 아닌 사람의 검사 결과에서 나타나지만, 대인 영역까지 문제가 확대되지 않은 환자에서 발견할 수 있다. 심각한 병리적 혼란(disturbance)이 있는 환자에서는 낮은 빈도를 보인다.`);
    } else if (GHR + PHR >= 3 && GHR <= PHR) {
        result.textData.push(`[잠정 결과2] 인간 표상(GHR : PHR) 반응을 고려할 때, 수검자는 전반적으로 바람직한 것보다 상황에 적응적이지 않은 형태의 대인행동을 보일 것이다. 인간 표상(GHR : PHR) 반응의 두 값의 차이가 클수록 나쁜 인간 표상(PHR)이 좋은 인간 표상(GHR)에 비해 큰 값을 가질수록 많은 상황에서 대인행동은 효과적이지(effective) 않을 것이고, 자주 다른 사람들에게 호의적이지 않게 평가될 것 가능성이 증가할 것이다.`);
        result.textData.push(`* 나쁜 인간 표상(PHR)은 효과적이지 않고(ineffective) 적응적이지 않은 대인행동에 높은 관련이 있다. 나쁜 인간 표상(PHR)이 많으면 대개 대인 이력(history)에서 갈등이나 실패가 현저할 것이다. 그들은 자주 다른 사람들이 피하거나(shun) 거절하게(reject) 이끄는 일종의 사회적 서투름(social ineptness)을 분명하게 보일 것이다. 어떤 경우에는 이들의 사회적 서투름이 적절하지 않은 사회적 행동을 낳고, 원치 않는 갈등을 쉽게 발생할 것이다. 나쁜 인간 표상(PHR)은 대개 심한 병리적 혼란(disturbance)을 겪고 있는 사람의 검사 결과에서 상당히 자주 나타난다. 대부분의 환자 집단의 검사 결과에서 낮음과 중등도 사이의 빈도로 나타나며, 환자가 아닌 집단의 검사 결과에서는 낮은 빈도로 나타난다.`);
    }
    result.nextStep = 8;
    result.goNext = false;
    return result;
}

function step8({ COP, AG }) {
    var result = {};
    result.textData = [];
    result.curStep = 8;

    result.nextStep = 9;
    result.goNext = false;

    if (COP == 0 && (AG ==0 || AG == 1)) {
        result.textData.push(`[잠정 결과1] 협조적 운동(COP) 반응과 공격적 운동(AG) 반응을 고려할 때, 수검자는 긍정적인 상호작용을 일상적인 것으로 기대하지 않을 것이다. 이러한 수검자는 대인 상황을 편하지 않게 느끼는 경향이 있고, 그리고 다른 사람에게 무관심하거나 거리가 있고 서먹한 것으로 보일 수 있다.`);
        result.textData.push(`수검자는 다른 사람과 깊이 있고 성숙한 관계를 배제하지 않지만, 일반적으로 현저하게 사교적인 것으로 지각되지 않으며 집단에서 상호작용할(group interaction) 때 자주 외곽에 머물 것이다.`);
        return result;
    }

    if (((COP == 0 || COP == 1) && AG >= 2) || (COP == 2 && AG >= 3)) {
        result.textData.push(`[잠정 결과2] 협조적 운동(COP) 반응과 공격적 운동(AG) 반응을 고려할 때, 수검자는 공격성을 대인관계의 자연스러운 일부분으로 지각할 것이다. 수검자의 일상 행동은 자주 현저하게 강압적이거나 공격적일 수 있다.`);
        result.textData.push(`때때로, 이러한 행동들은 대인 상황에서 안전하지 않은 느낌에 대응하기 위해 고안한 방어적 책략일 수도 있다. 하지만, 자주 단순하게 학습된 다른 사람과 상호작용 방식을 반영할 수도 있다.`);
        result.textData.push(`주장성이나 공격성의 구체적인 양상은 다른 성격 변인이나 상황 특성에 따라 상당히 다를 수 있다.`);
        return result;
    }

    if ((COP == 1 || COP == 2) && (AG == 0 || AG == 1)) {
        result.textData.push(`[잠정 결과3] [정상범주] 협조적 운동(COP) 반응과 공격적 운동(AG) 반응을 고려할 때, 수검자는 대개 사람들 사이에서 긍정적 상호작용을 기대하고, 다른 사람과 상호작용에 참여하는 데에 관심을 가질 것이다. 구체적인 상호작용 방식은 대개 수검자의 다른 특징(특히, 대처방식이나 자기개념)에 의해 명확해질 것이다.`);
        return result;
    }

    if ((COP == 2 || COP == 3) && AG == 2) {
        result.textData.push(`[잠정 결과4] 협조적 운동(COP) 반응과 공격적 운동(AG) 반응을 고려할 때, 수검자는 긍정적인 상호작용에 개방적이고 관심을 보이지만, 상호작용의 형태는 현저하게 더 강압적이거나 공격적일 것이다.`);
        result.textData.push(`이러한 수검자는 공격적인 형태를 사람들 사이의 자연스러운 교환 방식으로 지각하지만, 대개 상호작용은 긍정적일 것으로 기대한다.`);
        return result;
    }

    if (COP >= 3 && (AG == 0 || AG == 1) || (COP >= 4 && AG <= 2)) {
        result.textData.push(`[잠정 결과5] 협조적 운동(COP) 반응과 공격적 운동(AG) 반응을 고려할 때, 수검자는 일반적으로 다른 사람에게 호감을 주는 사교적 사람으로 보일 것이다. 수검자는 주기적으로 다른 사람과 조화로운 상호작용을 기대하고 추구할 것이다.`);
        result.textData.push(`이러한 수검자는 일반적으로 대인 활동을 자신의 일상에서 매우 중요한 부분으로 본다. 그리고 그들의 주변에 의해 집단에서 상호작용할(group interaction) 때 더 사교적인 것으로 인식될 것이다.`);
        return result;
    }
    if (COP >= 3 && AG >= 3) {
        result.textData.push(`[잠정 결과6] 협조적 운동(COP) 반응과 공격적 운동(AG) 반응을 고려할 때, 수검자는 대부분 적절한 대인행동 방식에 관한 심한 갈등이나 혼란(confusion)을 겪고 있을 수 있다. 이러한 결과는 매우 흔하지 않다.`);
        result.textData.push(`수검자는 몹시 다른 사람을 잘 이해하지 못하며, 대인 과정은 일관되지 않거나 너무 단순해서 예측하기 쉬운 경향을 보일 수 있다.`);
        return result;
    }

    return result;

}

function step9({ PER }) {
    var result = {};
    result.textData = [];
    result.curStep = 9;
    result.nextStep = 10;
    result.goNext = false;

    if (PER == 2 || PER == 3) {
        result.textData.push(`[잠정 결과1] 개인적(PER) 반응을 고려할 때, 수검자는 대부분의 다른 사람들보다 대인 상황에서 더 방어적일 것이다. 대인 상황에서 안전하다는 느낌을 유지하는 방법으로 정보 과시를 신뢰할 것이다.`);
        result.textData.push(`이러한 결과를 반드시 대인관계 손상으로 볼 수는 없다. 다만, 아마도 도전이 포함된 상황을 안전하지 않다고 느끼는 것을 의미할 수 있다.`);
        return result;
    }

    if (PER >= 4) {
        result.textData.push(`[잠정 결과2] 개인적(PER) 반응을 고려할 때, 수검자는 대인 상황에서 자신의 통합(integrity)에 대해 확신이 없을 것이다. 대인 상황에서 자기에게 향하는 것으로 지각된 도전을 막아내기 위해 방어적으로 권위주의를 드러내는 경향을 보일 수 있다.`);
        result.textData.push(`이러한 수검자는 대개 다른 사람들에게 경직되거나 편협한 성격으로 여겨지고, 결과적으로 자주 친밀한 관계를 유지하는 데 어려움을 겪을 수 있다. 특히, 그들에게 순종하지 않는 사람들과 그러할 것이다.`);
        return result;
    }
    return result;
}

function step10({ ISOIndex }) {
    var result = {};
    result.textData = [];
    result.curStep = 10;
    result.nextStep = 11;
    result.goNext = false;

    if (ISOIndex >= 0.26 && ISOIndex <= 0.32) {
        result.textData.push(`[잠정 결과1] 고립지표(Isolation Index)를 고려할 때, 수검자는 예상보다 사회적 상호작용에서 적극적이지 않을 것이다. 이러한 결과는 정상집단과 환자 집단의 검사 결과의 15% 이상에서 발견될 정도로 흔하게 나타난다.`);
        result.textData.push(`이러한 결과는 사회적 부적응이나 사회적 갈등을 반영하지 않는다. 그 대신에, 일상적인 사회적 교류에 관심이 없거나, 어쩌면 예상보다 사회적 교류에 열중하는 것에 더 마음 내키지 않는 것일 수 있다.`);
        result.textData.push(`사회적 교류를 내키지 않으면, 인간 내용 반응은 최소한 평균이고 협조적 운동(COP) 반응은 최소한 1개일 것이다. 이것은 사회적 교류에 관심이 있지만, 참여가 제한적이라는 것을 의미한다.`);
        return result;
    }

    if (ISOIndex >= 0.33) {
        result.textData.push(`잠정 결과2] 고립지표(Isolation Index)를 고려할 때, 수검자는 예상보다 더 사회적으로 고립되어 있을 수 있다. 이러한 결과를 보일 때, 인간 내용(human content) 반응은 평균보다 적을 것이고, 드물게 협조적 운동(COP) 반응은 2개 이상일 것이다. 이러한 수검자는 원만하고 의미 있는 대인관계를 만들거나 유지하는 데 어려움을 겪을 수 있다.`);
        result.textData.push(`이러한 결과는 사회적 교류에서 병리적인 종류의 위축을 의미하지 않는다. 단지, 어떤 이유로 인해 다른 사람들과 잘 연결되어 있지 않고 자주 상대적으로 관계에서 보상이 결핍된 것일 수 있다.`);
        return result;
    }

    return result;
}

function step11({}) {
    var result = {};
    result.textData = [];
    result.curStep = 11;
    result.nextStep = 11;
    result.goNext = true;
    result.textData.push('[질적 해석]<br/><br/><br/><br/><br/><br/><br/><br/>');
    return result;
}

