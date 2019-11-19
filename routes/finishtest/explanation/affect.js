function caculateAffect(DEPI, CDI, M, EBLeft, EBRight, WSumC, EA, EBPer, FM, m, SumCprime, SumT, SumV, SumY, Afr, twoABplusArtplusAy, CP, FC, CF, C){
    var result = [];
    var nextStep = 1;
    if(nextStep==1){
        var STEP1 = step1(DEPI, CDI);
        result.push(STEP1);
        if(STEP1.goNext==true){
            return result;
        }
        nextStep = STEP1.nextStep;
    }

    return result;
}

exports.caculateAffect = caculateAffect;

function step1(DEPI, CDI){
    var result = {};
    var textData = [];
    if(DEPI==5){
        if(CDI<4){
            textData.push(`[잠정 결과2] 우울지표(DEPI)와 대처결함지표(CDI)를 고려할 때, 수검자의 성격 구조에는 정서적 혼란(disruption)을 자주 경험할 수 있는 잠재성이 내재되어 있어 정서 문제를 쉽게 겪을 것으로 보이며, 수검자가 부정적 정서를 호소하지 않더라도 [정서]군집을 신중하게 탐색해야 한다(내인성 우울: endogenous depression).`);
            textData.push(`수검자는 빈번하게 ‘이유 없이 기분이 좋지 않다, 우울하다, 긴장된다, 불안하다.’ 등으로 자신의 감정 상태에 대해 호소할 수 있다. 하지만, 부정적 정서 경험을 포함하는 주기적인 일화는 호소하지 않을 수 있다.`);
            result.curStep = 1;
            result.textData = textData;
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
        if(CDI>=4){
            textData.push(`[잠정 결과4] 우울지표(DEPI)와 대처결함지표(CDI)를 고려할 때, 수검자의 성격 구조에 정서적 혼란(disruption)을 만드는 잠재성이 내재해 있어 정서 문제를 겪는 게 아니라, 사회 적응 어려움 때문에 정서 문제를 겪고 있을 것이다(반응성 우울: reactive depression).`);
            textData.push(`내인성 우울지표(DEPI)보다 반응성 우울지표(CDI)를 더 의미 있게 해석할 필요가 있다.`);
            result.curStep = 1;
            result.textData = textData;
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
    }
    if(DEPI>=6){
        if(CDI<4){
            textData.push(`[잠정 결과1] 우울지표(DEPI)와 대처결함지표(CDI)를 고려할 때, 수검자를 현저하게 적절하게 기능하지 못하게 하거나 잠재적으로 적절하게 기능하지 못하게 만드는 정서 문제가 있을 것이다.`);
            textData.push(`수검자는 고통스럽고(distress) 우울하다고 호소하며, 상황에 적절하지 않고 통합적이지 않고 체계적이지 않은 행동의 기능 이상을 흔하게 보일 것이다.`);
            textData.push(`진단을 내리거나 치료적 개입을 고려할 때 이 문제를 신중하게 살펴야 한다.`);
            result.curStep = 1;
            result.textData = textData;
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
        if(CDI>=4){
            textData.push(`[잠정 결과3] 우울지표(DEPI)와 대처결함지표(CDI)를 고려할 때, 현재 수검자는 정서적 혼란(disarray) 상태에 놓여 있을 수 있다. 하지만, 이러한 정서적 문제는 대인관계를 형성하고 효과적으로(effective) 유지하고 강화하는 과정에서 겪는 만연한 어려움보다는 부차적일 수 있다. 만성적 정서 문제를 반영하는 내인성 우울지표(DEPI)는 반응성 우울지표(CDI)의 상승에 영향을 받아 상승하였을 가능성이 있으므로 내인성 우울지표(DEPI)보다 반응성 우울지표(CDI)를 더 의미 있게 해석해야 한다. `);
            textData.push(`수검자의 다른 사람과 관계는 대개 깊지 않고 피상적이고, 빈약하여 깨지기 쉬우며, 강화를 제공하지 않을 것이다. 그렇기에 사회적 환경에서 여러 어려움을 겪으며 진흙탕에 빠진 사람처럼 허우적거릴 수 있다. `);
            textData.push(`수검자는 대개 낙담하고, 괴로워하고, 더욱이 절망할 것이다. 이러한 정서적 혼란(disarray)을 겪는 동안에는 때때로 만성적 우울 사례와 매우 유사한 양상을 보일 수 있다. 그렇지만, 수검자의 정서 상태는 지지체계가 강해지거나 약해짐에 따라 더 자주 바뀌기 때문에 전형적인 정서 장애(affective disorder)와 심리적으로 다른 양상을 보인다.`);
            textData.push(`그래서 치료적 개입의 대상을 결정하고 치료 계획을 세울 때, 다른 주요 정서 장애(major affective disorder)와 다르게 접근해야 한다. 사회 적응능력(social adaptability)을 1차 치료목표로 정해야 하며, 항우울제(antidepressant medication) 사용에 관해서는 신중해야 한다.`);
            result.curStep = 1;
            result.textData = textData;
            result.nextStep = 2;
            result.goNext = false;
            return result;
        }
    }
}