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

function step4({ OBSPosivie, HVIPositive, MOR }){
    var result = {};
    result.textData = [];
    result.curStep = 4;

    if(OBSPosivie){
        result.textData.push(`[잠정 결과1] 강박지표(OBS)를 고려할 때, 수검자의 개념 형성과 응용에 영향을 주는 정신적 태세나 태도는 정확성과 완벽주의에 관련되어 있을 것이다. `);
        result.textData.push(`강박 유형의 수검자는 대개 개념 형성과 응용에서 대단히 주의하도록 노력한다. 수검자의 표현은 다른 사람에 비해 더 많이 장황할 수 있는데, 이것은 정확하게 하려는 노력 때문에 증가한 개념적 사고의 복잡성이 반영된 것일 수 있다.`);
        result.textData.push(`강박 유형은 필요한 것보다 더 많은 관념적 노력과 활동을 요구하므로, 어느 정도 능률적이지 않은(inefficient) 것으로 볼 수 있다. 하지만, 그것을 뒷받침하는 근거가 충분하지 않다면 불리한 점(liability)으로 고려하지 않는다. `);
        result.textData.push(`사고에 조리가 없이 모순되거나, 했던 말을 다시 되풀이하거나, 적합하지 않은 단어를 사용하거나, 이상한 어구로 인해 어법에 혼란되거나, 말을 끝맺지 못하는 등의 어긋난 삽화는 강박유형으로 인한 인지적 능률(efficiency) 저하를 뒷받침하는 근거일 수 있다. <br/><br/>`);
    }
    if(HVIPositive){
        result.textData.push(`[잠정 결과2] 과경계지표(HVI)를 고려할 때, 수검자의 개념 형성과 응용에 영향을 주는 정신적 태세나 태도는 과잉경계에 관련될 것이다. 과잉경계는 수검자의 심리에서 중요한 역할을 하고, 자주 개념적 사고에 현저한 영향을 주는 경향을 보이는 특성적 특징을 가졌다.`);
        result.textData.push(`수검자는 ‘앞으로 닥칠 일을 미리 생각하여 대비하는 예기와 주의 깊게 살피고 경계하는 과잉각성을’ 지속하여 유지하는 ‘준비 상태’에 머물기 위해 상당한 에너지를 사용할 것이다. 그리고 행동을 구성하고 이행하는데 신중한 모습을 보일 것이다. `);
        result.textData.push(`과잉경계 태세는 아마도 개념적 사고를 바람직한 것보다 명료하지 않게 만들고, 더 많이 유연하지 않게 만들 것이다. 그리고 자주 논리적이지 않은 형태의 사고를 유발할 것이다. 병적인 상태는 아니지만, 이러한 경향이 심해지면 사고에 매우 명백한 편집적 특성(paranoid-like characteristic)이 포함될 것이다. <br/>`);
        result.textData.push(`과잉경계 태세는 성장기에 점진적으로 발달한 환경에 대한 부정적이고 신뢰하지 못하는 태도와 관련되어 있다. 이러한 경향성은 중요한 타인이 아동의 행동에 어떻게 반응할지 정확하게 예측할 수 없었던 사건의 누적으로 형성된 게 명백하다. 특히, 정서적 행동에 대한 중요한 타인의 반응이 예측되지 않았을 던 경험의 누적이 그러한 경향을 발달시켰을 것이다. 이로 인해 불안정감(insecurity)과 취약감(vulnerability)이 유발되어, 수검자는 행동을 구성하고 이행하는데 더욱더 신중해지는 경향을 보였을 것이다. `);
        result.textData.push(`그리고 수검자는 서서히 개인적 공간에 집착하고, 대인 관계에서 매우 경계하는 경향을 점진적으로 발달시켰을 것이다. 대인관계에서 친밀함을 기대하지 않으며, 다른 사람이 친밀함을 표현하는 몸짓(gestures)에 자주 혼란스러워(confused)하거나 의심스러워할 것이다.`);
    }

    if(MOR>=3){
        result.textData.push(`[잠정 결과3] 병적인 내용(MOR)을 고려할 때, 수검자의 개념 형성과 응용에 영향을 주는 정신적 태세나 태도는 비관주의에 관련될 것이다. `);
        result.textData.push(`병적인 내용(MOR)은 자기개념의 문제에 직접 관련되어 있다. 여기에 반영되는 비관적 태세는 심한 정도에 상관없이 수검자와 세상의 관계를 회의감이나 낙담으로 개념화한다. 이러한 태세는 노력의 질(quality)에 상관없이 자주 자신의 노력 결과를 비관적으로 예상하게 만든다. `);
        result.textData.push(`비관주의는 무심결에 문제를 다룰 때 자주 편협하고 경직되며 구체적인(concrete) 방식으로 사고하도록 유도한다. 그러므로 수검자가 결함 있는 논리나 잘못된 판단을 인식하고 있더라도 그것들을 자주 무시하게 만든다. <br/>`);
        result.textData.push(`요컨대, 비관적 태세로 인해 개념적 사고의 질(quality)이 상당히 저하되고, 때때로 매우 혼란된(disorganized) 상황을 만들어 낼 수도 있다. `);
        result.textData.push(`병적인 내용(MOR) 3개부터 비관적 태세가 있는 것으로 보며, 중등도 수준으로 사고에 영향을 주는 중요한 태세로 해석한다. 병적인 내용(MOR)이 4개 이상이면 비관적 태세가 더 명백해지고, 사고에 미치는 영향은 기하급수적으로 증가할 것이다. `);
    }

    result.nextStep = 5;
    result.goNext = false;
    return result;
}

function step5({ FM, m, Lambda}){
    var result = {};
    result.textData = [];
    result.curStep = 5;

    if(3<=FM+m && FM+m<=6){
        if(FM>m){
            result.textData.push(`[잠정 결과1a] [정상범주] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자의 관념적 주의 초점에 영향을 미치는 주변적 관념은 일반적인 수준일 것이다. 이 경우 충족되지 않은 욕구로 인해 발생하는 주변적 사고(FM)는 2개 이하일 것이다. `);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }
        if(FM<m){
            result.textData.push(`[잠정 결과1b] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자의 관념적 주의 초점에 영향을 미치는 주변적 관념은 대개 상황적 스트레스에 의해 증가해 있을 것이다. `);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }

        if(FM<=1){
            result.textData.push(`[잠정 결과1c] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자는 관념의 주의 초점에 영향을 미치는 주변적 관념을 최소화하거나 회피하려고 할 것이다. 다시 말해, 욕구 상태에 의해 자연스럽게 발생하는 정신적 방해를 줄이려는 뚜렷한 경향을 보일 것이다. <br/><br/>`);
            result.textData.push(`- 회피 유형(avoidant style)일 경우, 욕구를 경험할 때마다 신속하게 감소시키는 행동을 할 것이다.<br/>`);
            result.textData.push(`- 회피 유형(avoidant style)이 아닐 경우, 주변적 사고를 더 통제되고 더 목표지향적 사고의 흐름에 방어적으로 병합시키는 개념적 책략을 발휘할 것이다. 욕구가 해소되지 않고 그대로 남아 있거나 더 강렬해지더라도, 이러한 책략은 충족되지 않은 욕구에 의한 주변적 사고의 영향력을 일시적으로 줄어들게 할 것이다. <br/><br/>`);
            result.textData.push(`<em>예) 매우 배고픈 사람이 음식 목록이나 조리법을 떠올리면서 배고픔으로 발생하는 주변적 정신 활동을 중화시키는 것을 볼 수 있다. </em>`);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }
    }

    if(FM+m<=2){
        if(Lambda<=0.99){
            result.textData.push(`[잠정 결과2a] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자는 관념의 주의 초점에 영향을 미치는 주변적 관념을 최소화하거나 회피하려는 일상적이지 않은 상태일 것이다. `);
            result.textData.push(`회피 유형(avoidant style)이 아닐 경우, 수검자는 사고를 목표지향적 개념적 체계에 주변적 사고를 방어적으로 병합시킬 것이다. `);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }
        if(Lambda>=1){
            result.textData.push(`[잠정 결과2b] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자는 관념의 주의 초점에 영향을 미치는 주변적 관념을 최소화하거나 회피하려는 일상적이지 않은 상태일 것이다. `);
            result.textData.push(`회피 유형(avoidant coping style)일 경우, 주변적 사고의 방해로 만들어지는 불편(irritation)을 줄이기 위해 빠르게 반응하는 경향을 보일 것이다. 이러한 경향은 충족되지 않은 욕구에 의한 주변적 사고(FM)가 1개 이하라면 더 명확할 것이다. <br/>`);
            result.textData.push(`이러한 책략은 심리적 균형을 유지하려는 항상성(homeostatic)의 관점에서 볼 때 긍정적일 수 있다. 하지만 조급하게 만들어 낸 반응이라 자주 심사숙고를 거치지 않으며, 장기적으로는 효율성(effectiveness)이 매우 제한적이기 때문에 부정적인 것으로 볼 수 있다.`);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }
    }

    if((FM+m==7 && (FM==7 || (FM==6 && m==1))) || (FM+m>=8 && FM>=6)){
        if(m<=2){
            result.textData.push(`[잠정 결과3a] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자는 관념의 주의 초점에 영향을 미치는 주변적 관념을 내적 욕구 상태로 인해 상당한 수준으로 경험하고 있을 것이다. `);
            result.textData.push(`대개, 증가한 주변적 정신 활동의 상태는 일시적이지 않고 더 만성적일 것이고, 주의와 집중을 방해받는 빈도를 증가시킬 것이다.`);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }
        if(m>=3){
            result.textData.push(`[잠정 결과3b] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자가 경험하고 있는 관념의 주의 초점에 영향을 미치는 주변적 관념은 상황에 관련된 스트레스로 인해 증가해 있을 것이다.`);
            result.nextStep = 6;
            result.goNext = false;
            return result;
        }
    }

    if((FM+m==7 && FM<=3) || (FM+m>=8 || FM<=4)){
        result.textData.push(`[잠정 결과4] 스트레스 유형 비율(eb)의 좌항(FM+m)을 고려할 때, 수검자는 관념의 주의 초점에 영향을 미치는 주변적 관념을 예기치 않은 상황에 관련된 스트레스로 인해 현저하게 경험하고 있을 것이다. `);
        result.textData.push(`대개, 증가한 주변적 정신 활동의 상태는 일시적이지만, 주변적 사고가 증가해 있는 동안 줄곧 주의와 집중 활동이 저하된다는 점을 중요하게 보아야 한다. `);
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }

    result.nextStep = 6;
    result.goNext = false;
    return result;

}

function step6({ Ma, Mp }){
    var result = {};
    result.textData = [];
    result.curStep = 6;
    if(Ma+1==Mp){
        result.textData.push(`[잠정 결과1] 의식적 사고를 반영하는 인간 운동의 능동-수동 비율(Ma : Mp)을 고려할 때, 수검자는 더 자주 명백하게 다른 사람에 비해 스트레스 상황에서 현실을 환상으로 대체하는 경향을 보일 것이다. `);
        result.textData.push(`효과적인(effective) 방어전략일 수 있으며, 다른 사람에게 현저하게 의존적이라는 증거가 없다면 불리한 점(liability)으로 고려하지 않아도 된다. 수검자가 다른 사람에게 일상적이지 않은 의존 경향을 보인다면, 환상의 지나친 사용은 그러한 의존 경향을 악화시킬 뿐이다. `);
        result.nextStep = 7;
        result.goNext = false;
        return result;
    }

    if(Ma+2<=Mp){
        result.textData.push(`[잠정 결과2] 의식적 사고를 반영하는 인간운동의 능동-수동 비율(Ma : Mp)을 고려할 때, 수검자는 환상으로 도망치는 유형화된 경향을 불쾌한 상황을 다루는 일상적인 책략으로 사용할 것이다. 이러한 경향은 주로 의사결정과 책임을 회피하는 것을 특징으로 하는 백설 공주 증후군이라고도 부른다. `);
        result.textData.push(`수검자는 현실을 부정하기 위해 환상을 과도하게 남용할 것이다. 하지만, 그 결과는 흔히 수검자가 원하는 것과 정반대인 경우가 많을 것이다. 이러한 대처 형태는 다른 사람에게 의존을 요구하기 때문에 자신에게 스스로 무력함을 부과하게 만든다. 이러한 특징을 가진 수검자는 다른 사람의 조종이나 속임에 빠지기 쉽다. <br/>`);
        result.textData.push(`특히, 지배적인 내향형의 수검자에게 이러한 방어적 대처방식은 해로울 수 있다. 왜냐하면, 상황이 매우 복잡하거나 잠재적으로 스트레스가 많을 것으로 보이면, 기본적 관념의 지향이 의존 지향으로 종속되기 때문이다.`);
        result.nextStep = 7;
        result.goNext = false;
        return result;
    }

    result.nextStep = 7;
    result.goNext = false;
    return result;
}

function step7({ twoABplusArtplusAy }){
    var result = {};
    result.textData = [];
    result.curStep = 7;

    if(4<=twoABplusArtplusAy && twoABplusArtplusAy<=6){
        result.textData.push(`[잠정 결과1] 주지화 지표(Intellectualization index)를 고려할 때, 수검자는 감정을 주지화하는 경향이 강할 것이다. 상황의 실재하는 영향에 대응하여 그것을 부정하고 왜곡된 형태의 개념적 사고를 채택하거나 수용할 수 있다. `);
        result.nextStep = 8;
        result.goNext = false;
        return result;
    }

    if(twoABplusArtplusAy>=7){
        result.textData.push(`[잠정 결과2] 주지화 지표(Intellectualization index)를 고려할 때, 수검자는 스트레스가 많을 것으로 지각되는 상황에서 주지화를 주요한 방어 책략으로 사용할 것이다. 부정을 숨기거나 묵인하는 유사 주지화 과정(pseudo-intellectual process)일 수 있다. 결과적으로 직접적 또는 실질적으로 감정을 다룰 가능성을 감소시킬 것이다. `);
        result.textData.push(`이러한 수검자는 스트레스 자극의 크기가 증가할수록 주지화가 효과적이지(effective) 않게 되기 때문에 강한 정서를 경험하는 동안 관념이 혼란스러워지기(disorganized) 쉽다. 또한, 다른 사람에 비해 왜곡된 개념을 수용하기 쉬울 수 있다.`);
        result.textData.push(`극단적인 주지화는 망상적 사고에서 보이는 잘못된 개념을 형성하거나 유지하는 기본 요소로 기능할 수도 있다.`);
        result.nextStep = 8;
        result.goNext = false;
        return result;
    }

    result.nextStep = 8;
    result.goNext = false;
    return result;
}

function step8({ DV1, DV2, DR1, DR2, INCOM1, INCOM2, FABCOM1, FABCOM2, ALOG, CONTAM, WSum6, age }){
    var result = {};
    result.curStep = 8;
    result.textData = [];

    // To do
    result.textData.push(`To do....조금 복잡함...`);

    result.nextStep = 9;
    result.goNext = false;
    return result;
}


function step9(){
    var result = {};
    result.curStep = 9;
    result.textData = [];

    result.textData.push(`[질적 해석]<br/><br/><br/><br/><br/><br/><br/><br/><br/>`);

    result.nextStep = 10;
    result.goNext = false;
    return result;
}

function step10({ Mminus, Mnone }){
    var result = {};
    result.textData = [];
    result.curStep = 10;

    if(Mminus==0 && Mnone==0){
        result.textData.push(`[잠정 결과1] [정상범주] 가장 명확하게 개념적 사고를 표상하는 인간운동(M)의 형태질을 고려할 때, 수검자의 인지적 중재와 명료성을 방해하는 어떤 몰두가 만들어 내는 사고의 특징이 나타나지 않는다. `);
        result.goNext = false;
        result.nextStep = 11;
        return result;
    }

    if(Mminus==1 && Mnone==0){
        result.textData.push(`[잠정결과2] 가장 명확하게 개념적 사고를 표상하는 인간운동(M)의 형태질을 고려할 때, 수검자의 인지적 중재와 사고의 명료성을 방해하는 사고의 특징이 어떤 몰두로 인해 만들어지고 있을 것이다. `);
        result.textData.push(`적절하지 않은 형태의 인간운동(M-)이 하나만 있는 것은 관념적 혼란(disarray)이 살짝 드러나서 언뜻 보이는 것일 수 있다. 이것이 사실이라면 앞 단계에서 다룬 결정적 특수점수의 의미는 중요할 수밖에 없으며, 사고장애의 가능성에 주의해야 한다.`);
        result.goNext = false;
        result.nextStep = 11;
        return result;
    }

    if(Mminus==0 && Mnone>=1){
        result.textData.push(`[잠정 결과3] 가장 명확하게 개념적 사고를 표상하는 인간운동(M)의 형태질을 고려할 때, 수검자는 사고의 명료성을 방해하는 관념적 통제의 문제를 겪고 있을 것이다. `);
        result.textData.push(`형태 없는 인간 운동(M none)의 대부분은 슬픔, 분노, 고통, 희열, 사랑 등의 감정 요소를 포함하는 경우, 이것은 감정이 사고를 압도하고, 현실로부터 떨어지게 만드는 불안정한(lability) 상태일 수 있다.`);
        result.textData.push(`형태 없는 인간 운동(M none)의 반응이 평화, 창의, 지성같이 심원할(esoteric) 것일 경우, 이것은 관념이 불안정하고(fluid), 내적인 몰두가 현실에 겹쳐지거나 현실을 대체하는 상태일 수 있다.`);
        result.textData.push(`감정 요소를 포함하거나 심원한 관념을 포함하는 두 가지 상태는 모두 사고를 통제하는 능력이 손상되어 있을 것이다. 어떻든지, 더 심원한 관념을 포함하는 형태 없는 인간 운동(M none)은 환각 경험이 생기게 하는 것과 유사한 과정을 포함할 수 있다. `);
        result.goNext = false;
        result.nextStep = 11;
        return result;
    }

    if(Mminus + Mnone>=2){
        result.textData.push(`[잠정 결과4] 가장 명확하게 개념적 사고를 표상하는 인간운동(M)의 형태질을 고려할 때, 수검자의 사고는 특이하거나 혼란되어(disturbed) 있을 것이다.`);
        result.textData.push(`이러한 양상은 부분적으로 산발적인(semi-isolated) 몰두의 결과로 발생할 수도 있지만, 아마도 가중치를 부여한 6개의 결정적 특수점수의 합(WSum6)의 상당한 상승으로 확인되는 더 광범위한 형태의 관념적 혼란(disarray)을 의미할 것이다.`);
        result.goNext = false;
        result.nextStep = 11;
        return result;
    }

    result.nextStep = 11;
    result.goNext = false;
    return result;
}

function step11(){
    var result = {};
    result.textData = [];
    result.curStep = 11;

    result.textData.push(`[질적 해석]<br/><br/><br/><br/><br/><br/><br/><br/><br/>`);

    result.goNext = true;
    result.nextStep = 11;
    return result;
}