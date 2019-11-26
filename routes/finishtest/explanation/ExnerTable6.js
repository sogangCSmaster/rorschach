function calculateExnerTable6(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable6 = calculateExnerTable6;

function nextStep(stepNum, result, scores) {
    var step = eval(`step${stepNum}(scores)`);
    result.push(step);
    if (step.goNext == true) {
        return result;
    }
    return eval(`nextStep('${step.nextStep}', result, scores)`);
}

function step1({EA, EBLeft, EBRight, Lambda, copyingStyle, approachStyle}){
    var result = {};
    result.textData = [];
    result.curStep = 1;
    var M = EBLeft;
    var WSumC = EBRight;
    if((EA<=10 && (Math.abs(EBLeft-EBRight)>=2)) || (EA>10 && (Math.abs(EBRight-EBLeft)>=2.5))){
        if(M>WSumC){
            if(Lambda<=0.99 && approachStyle=="True" && copyingStyle=="Introversive"){
                result.textData.push(`[잠정 결과1] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 진성 내향형(True Introversive)의 대처방식(coping style)으로 분류된다. `);
                result.textData.push(`수검자는 의사결정과 문제해결 활동에서 개념적 사고에 의존하는 관념적인 사람일 것이다. 외부의 평가(external feedback)보다 내적인 평가(internal evaluation)를 더 신뢰하는 경향이 있고 감정에 직접 영향받는 것을 피할 것이다. `);
                result.textData.push(`수검자는 사물에 대해 깊게 생각하고 다양한 대안을 고려할 때까지 행동을 지연할 것이다. 결정을 내릴 때까지 신중하고 정확하고 논리적인 결정을 하려고 애쓰고, 시행착오를 범할 수 있는 행동을 하지 않으려고 할 것이다.<br/><br/>`);
                result.textData.push(`이러한 대처방식은 사고가 논리적이고 분명하고 일관성이 있고, 동시에 직관적이고 시행착오 접근이 바람직한 환경에서도 적응할 수 있을 만큼 융통성이 있다면 일상생활의 요구를 흡족하게(sufficiently) 처리하는 데 매우 효과적일(effective) 것이다.`);
                result.nextStep = 2;
                result.goNext = false;
                return result;
            }
            if(Lambda>=1 && approachStyle=="Avoidant" && copyingStyle=="Introversive"){
                result.textData.push(`[잠정 결과2] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 회피 내향형(Aviodant Introversive)의 대처방식(coping style)으로 분류된다. `);
                result.textData.push(`수검자는 의사결정과 문제해결 활동에서 관념적인 경향이 있지만, 회피 유형(avoidant style)이 지배적이기 때문에 진성 내향형의 수검자와는 본질적으로 다른 양상을 보일 것이다. `);
                result.textData.push(`수검자는 다양한 대안을 고려하며 결정을 지연하지만, 복잡한 것을 회피하는 경향으로 인해 처리 과정이 철저하지 않게 되어 개념 활동이 훨씬 더 단순해질 것이다. `);
                result.textData.push(`의사결정이나 문제해결에서 감정을 주변적인 수준에 머물게 하는 것을 선호하지만, 복잡하거나 모호한 상황에 직면할 경우 정서의 방해를 받기 쉬울 것이다.`);
                result.textData.push(`<br/>수검자는 대개 복잡하지 않은 논리 체계를 선호하며, 가능하면 시행착오 방식의 탐색을 하지 않으려고 한다. 환경이 일상적이고 모호하지 않으며, 개념 사고가 상당히 명확하고 조리가 있다면 이러한 대처 경향은 상당히 효과적일(effective) 수 있다.`);
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
        }
        if(M<WSumC){
            if(Lambda<=0.99 && approachStyle=="True" && copyingStyle=="Extratensive"){
                result.textData.push(`[잠정 결과3] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 진성 외향형(True Extratensive)의 대처방식(coping style)으로 분류된다.`);
                result.textData.push(`수검자는 의사결정과 문제해결 활동에서 사고에 감정이 섞이는 경향이 뚜렷하며, 감정에 많이 의존하는 경향을 보일 것이다.`);
                result.textData.push(`수검자는 의사결정을 할 때, 내적인 평가(internal evaluation)보다 외부의 평가(external feedback)를 더 신뢰하고, 시행착오 행동의 결과에 따라 판단하는 경향이 뚜렷할 것이다. `);
                result.textData.push(`<br/>이러한 결과를 보이는 수검자가 개념을 형성하고 판단을 만들어 낼 때, 지나치게 심사숙고하는 경향이 뚜렷한 내향형에 비해 조리가 없거나 더 논리적이지 않다는 것을 의미하지 않는다. 오히려 관념에 정서가 영향을 주어 더 복잡한 유형의 사고가 야기될 것이다. 그리고 명확하지 않거나 명료하지 않은 논리체계를 내향형보다 더 많이 받아들이는 경향이 있을 것이다. <br/>`);
                result.textData.push(`직관적인 유형(intuitive style)이 더 현저한 경우, 정서로 인해 지나치게 흐려지지 않고 강렬한 감정에 휘둘리지 않으며, 사고가 비교적 명료하고 조리가 있으면 일상생활에서 매우 효과적일(effective) 것이다. `);
                result.nextStep = 2;
                result.goNext = false;
                return result;
            }
            if(Lambda>=1 && approachStyle=="Avoidant" && copyingStyle=="Extratensive"){
                result.textData.push(`[잠정 결과4] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 회피 외향형(Aviodant Extratensive)의 대처방식(coping style)으로 분류된다. `);
                result.textData.push(`수검자는 의사결정과 문제해결 활동에서 진성 외향형처럼 사고에 감정이 섞이는 경향이 뚜렷하고, 감정에 영향을 많이 받을 것이다. 내적인 평가(internal evaluation)보다 외부의 평가(external feedback)에 매우 많이 의존하고, 의사결정이 필요한 상황에 놓이면 자주 시행착오 행동의 결과에 따라 판단할 것이다.`);
                result.textData.push(`그러나 회피 유형(avoidant style)이 지배적이기 때문에 정서 경험을 충분히 변별하지 못할 수 있고, 감정이 사고에 지나치게 영향을 줄 것이다. 감정 조절에 열의가 없으면, 이러한 소홀함은 충동적인 사고를 증가시키기 쉽다. 이것은 결과적으로 결함이 있거나 너무 단순한 논리를 자주 발생할 수 있으며, 효과적이지(effective) 않거나 상황에 훨씬 적절하지 않은 의사결정이나 행동으로 이어지기 쉬울 수 있다. `);
                result.textData.push(`회피 외향형은 환경이 예측할 수 있고 복잡하지 않으며, 개방적인 감정표현이 주변 환경에서 기꺼이 수용되거나 더욱이 존중받으면 일반적으로 대부분 성공적으로 기능할 수 있다.`);
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
        }
    }

    if((EA<=10 && (Math.abs(EBRight - EBLeft)<2)) || (EA>10 && (Math.abs(EBLeft - EBRight)<2.5))){
        if(Lambda<=0.99 && approachStyle=="True" && copyingStyle=="Ambitent"){
            
        }
    }


    result.nextStep = 2;
    result.goNext = false;
    return result;
}