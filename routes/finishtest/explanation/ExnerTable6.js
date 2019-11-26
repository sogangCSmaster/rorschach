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
            result.textData.push(`[잠정 결과5] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 진성 양향형(True Ambitent)의 대처방식(coping style)으로 분류된다. `);
            result.textData.push(`수검자의 의사결정과 문제해결 활동은 관념 활동에 일관성이 없기에 매우 예측하기 어려울 것이다. 의사결정이 필요한 상황이 매우 유사하더라도 다른 양상으로 나타날 수 있다. `);
            result.textData.push(`어떤 때는 내향형과 비슷한 사고유형의 의사결정 접근을 보일 수 있다. 감정을 한쪽으로 밀어 놓고, 상황에 관련된 다양한 문제를 고려하며 사고하기 위해 의사결정을 지연하는 경향을 보일 것이다. 다른 때는 외향형과 더 비슷하게 감정에 몹시 영향을 받는 더욱 직관적 접근을 보일 수 있다. <br/><br/>`);
            result.textData.push(`양향형은 개념 형성과 응용, 그리고 결정을 내리는 방식에도 일관성이 부족하여 능률(efficiency)이 저하되는 경향이 있다. 결과적으로 판단의 실수를 범하기 쉬워서 이전의 판단을 뒤집기도 할 것이다. `);
            result.textData.push(`수검자는 문 해결의 과정에서 겪는 실수에서 얻는 유익이 다른 사람들에 비해 더 적으므로 결과적으로 효과적인(effective) 해결에 도달하는데 걸리는 시간이 대체로 더 많이 요구된다. 다시 말해서, 대부분의 다른 사람들은 상황이 유사한 경우 이전에 효과적이었던(effective) 행동은 계속하고 그렇지 않은 행동은 하지 않게 되는데, 양향형의 수검자는 유사한 상황에서도 다른 접근 방법을 사용하므로 그러한 행동 경향성을 체득하는데 더 많은 시간이 걸릴 수밖에 없을 것이다. `);
            result.textData.push(`양향형의 접근 방식이 자동으로 적응 문제를 유발하지 않지만, 수검자의 일관되지 않은 사고의 특성은 일상생활의 요구에 대응하는데 더 많은 시간과 노력을 요구하기 때문에 수검자에게 불리한 점(liability)이 될 수 있다. `);
            result.nextStep = 3;
            result.goNext = false;
            return result;
        }

        if(Lambda>=1 && approachStyle=="Avoidant" && copyingStyle=="Ambitent"){
            result.textData.push(`[잠정 결과6] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 회피 양향형(Avoidant Ambitent)의 대처방식(coping style)으로 분류되며, 검사 결과에서 도출되는 경험유형 중에서 가장 바람직하지 않은 형태이다. 다른 대처방식보다 능률(efficient)이 낮은 양향형이 복잡성을 피하는 경향인 회피 유형(Avoidant style)에 의해 현저하게 영향을 받는 형태이다. `);
            result.textData.push(`수검자의 의사결정과 문제해결 활동에서 양향형의 일관되지 않은 개념적 사고가 복잡성을 피하는 경향인 회피 유형(Avoidant style)으로 덧씌워질 것이다. 그로 인해 산출되는 개념 형성과 이용의 가짓수가 현저하게 줄어들기 때문에 상황 요구에 능률적으로(efficiency) 대응하기 어려울 것이다. <br/>`);
            result.textData.push(`수검자의 사고는 정교하지 않을 것이고, 다른 유형에 비해 더 빈번하게 정서가 잘 조절되지 않을 것이다. <br/>`);
            result.textData.push(`<span style='font-weight: bold; color: blue;'>어린 아동</span>에서는 흔하게 나타나지만, 주변 환경에서 아동이기 때문에 너그럽게 봐줄 것이다. 하지만 성인에서 이러한 특성이 나타난다면 그러한 관용은 상당히 줄어들 것이다. 다시 말해서, 나이가 증가하면서 ‘자기조절능력’이 증가할 것이라는 사회적 기대에 부합하지 않기 때문에 성인에서 그러한 행동을 보이는 것을 이해하고 수용해주지 않을 것이다. 그래서 회피 양향형의 수검자는 복잡한 환경에서 빈번하게 적응하기 어려울 것이다. `);
            result.nextStep = 3;
            result.goNext = false;
            return result;
        }
    }

    if(EA<4){
        result.textData.push(`[예외 1] 가용 자원(EA)이 지나치게 낮아 가용 자원비율(EB)에 따른 문제해결과 의사결정에서 대처방식(coping style)을 분류할 수 없다. 이러한 특징은 대개 회피 유형(avoidant style)에서 주로 나타난다. `);
        result.nextStep = 3;
        result.goNext = false;
        return result;
    }
    if(EBLeft==0 && EBRight>3.5){
        result.textData.push(`[예외 2] 가용 자원비율(EB)에서 사고자원(M)이 드러나지 않고 정서자원(WSumC)만 나타나는 것은 정서가 압도하거나 범람하고(flooded) 있음을 시사한다. 그렇기에 가용 자원비율(EB)을 통해 문제해결과 의사결정과정의 대처 유형을 나누는 것은 바람직하지 않다.`);
        result.textData.push(`매우 강한 정서가 사고과정에 영향을 주어 의사결정에 필요한 주의와 집중력이 손상될 것이다. 이러한 강렬한 정서는 상당한 혼란(disruptive)을 유발하고, 관념적 충동성이나 행동적 충동성을 유발할 수 있다. `);
        result.textData.push(`이러한 정서적 범람(flooding)은 일상적이지 않은 강렬한 정서를 수검자가 효과적으로 (effectively) 다루지 못할 때 일시적으로 발생한다. `);
        result.nextStep = 3;
        result.goNext = false;
        return result;
    }


    result.nextStep = 2;
    result.goNext = false;
    return result;
}

function step2({ EBper, copyingStyle, approachStyle }){
    var result = {};
    result.textData = [];
    result.curStep = 2;


    if(approachStyle=="True"){
        if(copyingStyle=="Introversive"){
            if(EBper<2.5){
                result.textData.push(`[잠정 결과1a] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 유연한 진성 내향형(flexible True Introversive)의 대처방식(coping style)을 가지고 있을 것이다. 수검자는 의사결정과정에서 다양한 대안을 검토하는 동안 판단을 미루는 지연 전략을 포함하는 관념적 접근을 주로 사용하지만, 상황에 따라 감정이 의사결정에 크게 기여 하는 직관적 접근을 사용하는 유연한 접근법을 사용할 것이다. `);
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }

            if(EBper>=2.5){
                result.textData.push(`[잠정 결과1b] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 지배적 진성 내향형(pervasive True Introversive)의 대처방식(coping style)을 가지고 있을 것이다. 수검자는 의사결정과정에서 현저하게 관념적 접근을 사용하고 있어서, 정서의 영향이 현저한 직관적 접근이나 시행착오 접근이 필요한 상황에서도 정서는 매우 제한적인 역할만 이행하는 유연하지 않은 접근법을 사용할 것이다. `);
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
        }

        if(copyingStyle=="Extratensive"){
            if(EBper<2.5){
                result.textData.push(`[잠정 결과2a] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 유연한 진성 외향형(flexible True Extratensive)의 대처방식(coping style)을 가지고 있을 것이다. 수검자는 의사결정과정에서 시행착오 방식을 포함하는 직관적 접근을 주로 사용하지만, 상황에 따라 감정을 한쪽으로 미뤄두고 다양한 대안을 신중하게 고려하는 관념적 접근을 사용하는 유연한 접근법을 사용할 것이다. `);
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
            if(EBper>=2.5){
                result.textData.push(`[잠정 결과2b] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 지배적 진성 외향형(pervasive True Extratensive)의 대처방식(coping style)을 가지고 있을 것이다. 수검자는 의사결정과정에서 현저하게 직관적인 접근을 사용하고 있어서, 직관적인 접근이 효과적이지(effective) 않은 상황에서도 감정이 사고방식에 상당한 영향을 미치는 유연하지 않은 접근법을 사용할 것이다. `);
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
        }
    }


    result.nextStep = 3;
    result.goNext = false;
    return result;
}


function step3({ a, p }){
    var result = {};
    result.textData = [];
    result.curStep = 3;

    if((a+p==4) && (a==0|| p==0)){
        result.textData.push(`[잠정 결과1] 능동과 수동 운동 비율[a:p]을 고려할 때, 수검자의 생각이나 가치관은 대부분의 다른 사람들보다 대개 더 많이 확고하고 유연하지 않을 것이다. 수검자의 가치관이 경직되어 있어서 상황에 따라 유연하게 접근하기 어려울 수 있다. `);
        result.nextStep = 4;
        result.goNext = false;
        return result;
    }

    if(a+p>=5){
        if((2*p<=a && a<=3*p) || (2*a<=p && p<=3*a)){
            result.textData.push(`[잠정 결과2] 능동과 수동 운동 비율[a:p]을 고려할 때, 수검자의 관념적 태세나 가치관은 상당히 잘 확립되어 있어서 바꾸기 어려울 것이다. 수검자의 가치관이 상당히 경직되어 있어서 상황에 따라 유연하게 접근하기 어려울 것이다.`);
            result.nextStep = 4;
            result.goNext= false;
            return result;
        }

        if(a>3*p || p>3*a){
            result.textData.push(`[잠정 결과3] 능동과 수동 운동 비율[a:p]을 고려할 때, 수검자의 관념적 태세나 가치관이 잘 확립되어 있고 비교적 유연하지 않을 것이다. 수검자는 자신의 태도나 의견을 바꾸기 매우 어려울 것이고, 자신이 가지고 있는 관점과 다른 시각에서 문제를 바라보기 어려울 것이다. `);
            result.nextStep = 4;
            result.goNext = false;
            return result;
        }
    }

    result.nextStep = 4;
    return result;
}