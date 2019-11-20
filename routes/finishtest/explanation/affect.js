function caculateAffect(DEPI, CDI, Lambda, M, EBLeft, EBRight, WSumC, EA, EBPer, FM, m, SumCprime, SumT, SumV, SumY, Afr, twoABplusArtplusAy, CP, FC, CF, C, age, copyingStyle, approachStyle, PureC, S, approach, Blends, R){
    var IntellectualIndex = twoABplusArtplusAy;
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
    if(nextStep==2){
        var STEP2 = step2(M, WSumC, Lambda, EBLeft, EBRight, EA);
        result.push(STEP2);
        if(STEP2.goNext==true){
            return result;
        }
        nextStep = STEP2.nextStep;
    }
    if(nextStep==3){
        var STEP3 = step3(M, WSumC, Lambda, EBPer);
        result.push(STEP3);
        if(STEP3.goNext==true){
            return result;
        }
        nextStep = STEP3.nextStep;
    }
    if(nextStep==4){
        var STEP4 = step4(FM, m, SumCprime, SumT, SumV, SumY);
        result.push(STEP4);
        if(STEP4.goNext==true){
            return result;
        }
        nextStep = STEP4.nextStep;
    }
    if(nextStep==5){
        var STEP5 = step5(SumCprime, WSumC);
        result.push(STEP5);
        if(STEP5.goNext==true){
            return result;
        }
        nextStep = STEP5.nextStep;
    }

    if(nextStep==6){
        var STEP6 = step6(Afr, age, copyingStyle, approachStyle);
        result.push(STEP6);
        if(STEP6.goNext==true){
            return result;
        }
        nextStep = STEP6.nextStep;
    }
    if(nextStep==7){
        var STEP7 = step7(IntellectualIndex);
        result.push(STEP7);
        if(STEP7.goNext==true){
            return result;
        }
        nextStep = STEP7.nextStep;
    }
    if(nextStep==8){
        var STEP8 = step8(CP);
        result.push(STEP8);
        if(STEP8.goNext==true){
            return result;
        }
        nextStep = STEP8.nextStep;
    }
    if(nextStep==9){
        var STEP9 = step9(FC, CF, C, PureC);
        result.push(STEP9);
        if(STEP9.goNext==true){
            return result;
        }
        nextStep = STEP9.nextStep;
    }
    if(nextStep==10){
        var STEP10 = step10();
        result.push(STEP10);
        if(STEP10.goNext==true){
            return result;
        }
        nextStep = STEP10.nextStep;
    }
    if(nextStep==11){
        var STEP11 = step11(S, approach);
        result.push(STEP11);
        if(STEP11.goNext==true){
            return result;
        }
        nextStep = STEP11.nextStep;
    }
    if(nextStep==12){
        var STEP12 = step12(copyingStyle, approachStyle, Blends, R);
        result.push(STEP12);
        if(STEP12.goNext==true){
            return result;
        }
        nextStep = STEP12.nextStep;
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
    result.goNext = false;
    result.nextStep = 2;
    result.curStep = 1;
    result.textData= textData;
    return result;
}

function step2(M, WSumC, Lambda, EBLeft, EBRight, EA){
    var result = {};
    var textData = [];
    if((EA<=10 && (EBLeft>=2 || EBRight>=2)) || (EA>10 && (EBLeft>=2.5 || EBRight>=2.5))){
        if(M < WSumC){
            if(Lambda<1){
                textData.push(`[잠정 결과4] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 진성 외향형(True Extratensive)의 대처방식(coping style)으로 분류된다. 수검자는 정서의 영향을 강하게 받기 때문에 사고하는 동안 의사결정과 문제해결 활동에 감정이 섞이는 경향이 뚜렷할 것이다.`);
                textData.push(`외향형의 수검자는 문제해결 과정에서 일상적으로 시행착오 방식을 사용한다. 문제해결 과정에서 자신이 설정한 가정이나 추정을 검증하는 과정을 거치게 되므로 실패는 흔하게 발생한다. 그러므로 수검자는 다른 유형에 비해 실패에 관심을 덜 가지고 실패에도 더 잘 견딜 수 있다. 하지만, 만성적인 실패로 인한 정서적 충격은 때때로 다른 유형에 비해 더 심할 수 있다.`);
                textData.push(`외향형의 수검자는 다른 유형에 비해 감정을 솔직하게 드러내기 쉬우며, 감정을 세심하게 조절하거나 통제하여 표현하는 것에 관심이 더 적을 수 있다. `);
                result.curStep = 2;
                result.textData = textData;
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
            
            if(Lambda>0.99){
                textData.push(`[잠정 결과5] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 회피 외향형(Avoidant Extratensive)의 대처방식(coping style)으로 분류된다. 외향형 수검자의 경우 사고하는 동안 의사결정과 문제해결 활동에 감정이 섞이는 경향이 뚜렷하다.`);
                textData.push(`자극장의 복잡성이나 모호성을 무시하여 정보를 단순화하는 회피 유형(Avoidant style)이 나타나고 있어서 내적-외적 정서 경험을 무시하므로 복잡한 정서 경험을 정확하게 구분하지 못하는 수검자의 특성이 증가할 수 있다. 그렇기에 사고하는 동안 의사결정에 미치는 감정의 영향이 상황에 맞지 않게 지나치게 많거나 지나치게 적을 수 있다. 어떤 경우더라도 수검자의 행동은 결과적으로 효과적이지(effective) 않을 것이다. `);
                textData.push(`외향형의 수검자는 문제해결 과정에서 일상적으로 시행착오 방식을 사용한다. 자신이 설정한 가정이나 추정을 검증하는 과정을 거치게 되므로 문제해결에서 실패가 있더라도 더 잘 견디고 관심을 덜 가질 것이다. 의사결정에서 복잡성을 무시하고 단순화하는 회피 유형은 실수에 신경 쓰지 않는 경향이 과도해지도록 해서 효과적이지 않은(ineffective) 행동을 지속하도록 하는 부주의한 접근(lackadaisical approach)을 만들 수 있다. `);
                textData.push(`그리고 다른 유형에 비해 감정을 솔직하게 드러내기 쉬우며, 감정을 세심하게 조절하거나 통제하여 표현하는 것에 관심이 더 적은 외향형 수검자의 경향성이 복잡성을 무시하고 단순성을 유지하려는 회피 유형의 영향으로 더 심해질 수 있다. 때로는 감정 표현의 통제에 소홀해져서 (실제로는 그렇지 않지만) 충동적으로 보일 수도 있다.`);
                result.curStep = 2;
                result.textData = textData;
                result.nextStep = 4;
                result.goNext = false;
                return result;
            }

        }

        if(M>WSumC){
            if(Lambda<1){
                textData.push(`[잠정 결과6] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 진성 내향형(True Introversive)의 대처방식(coping style)으로 분류된다. 사고하는 동안 의사결정과 문제해결 활동에서 감정은 주도적이거나 중요한 기능을 하지 못하는 주변 수준에 머물 것이다. `);
                textData.push(`내향형의 수검자는 문제해결 과정에서 심사숙고를 거쳐 상황에 적절한 방법을 모색한 뒤에 행동하는 경향이 있다. 자신의 판단능력에 대한 확신과 믿음이 있기에 외적 평가(feedback)보다 내적 평가(evaluation)에 더 의지하여 판단하는 경향이 뚜렷하다. 그러므로 외적평가에 근거하여 문제를 해결하는 시행착오 방식은 될 수 있는 한 피한다.`);
                textData.push(`내향형의 수검자는 문제해결의 실패를 견디는 힘이 다른 유형보다 적기 때문에 의사결정을 할 때 더 신중하게 이행하는 게 일반적이다.`);
                textData.push(`그리고 내향형의 수검자는 감정을 거리낌 없이 솔직하게 표현하기보다, 감정을 상황에 맞게 조절하거나 통제하는 것에 더 관심을 기울인다.`);
                result.curStep = 2;
                result.textData = textData;
                result.nextStep = 3;
                result.goNext = false;
                return result;
            }
            if(Lambda>0.99){
                textData.push(`[잠정 결과7] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 회피 내향형(Avoidant Introversive)의 대처방식(coping style)으로 분류된다. 사고하는 동안 의사결정과 문제해결 활동에서 감정은 주도적이거나 중요한 기능을 하지 못하는 주변 수준에 머물 것이다.`);
                textData.push(`내향형의 수검자는 문제해결 과정에서 심사숙고를 거쳐 상황에 적절한 방법을 모색한 뒤에 행동하는 경향이 있다. 자신의 판단능력에 대한 확신과 믿음이 있기에 외적 평가(feedback)보다 내적 평가(evaluation)에 더 의지하여 의사결정을 하는 경향이 뚜렷하다. 그러므로 외적평가에 근거하여 문제를 해결하는 시행착오 방식은 될 수 있는 한 피한다.`);
                textData.push(`이러한 심사숙고의 과정은 추론능력을 요구하기 때문에 심리적 복잡성이 증가하며, 이를 견디는 참을성도 요구하게 된다. 단순하고 복잡하지 않은 것을 유지하려는 회피 유형(avoidant style)의 경향은 수검자의 내향형 관념 지향과 상충하므로 갈등이 유발된다. 이러한 갈등으로 인해 수검자의 전반적 관념 지향의 효율성(effectiveness)을 저하될 수 있다. 회피 유형은 갈등으로 인한 심리적 복잡성을 해결하기 위해 내향형 관념 지향을 무시하거나 더 단순하게 처리하도록 이끌고, 사고의 형태도 덜 명확하도록 만들어, 잘못된 판단의 가능성을 높일 수 있다.`);
                textData.push(`내향형의 수검자는 문제해결 실패를 견디는 힘이 다른 유형보다 적기 때문에 의사결정을 할 때 더 신중하게 이행하는 게 일반적이다. 하지만, 회피 유형은 더 단순한 해결을 선호하기 때문에 신중함을 포기하거나, 문제해결에서 감정을 수반하는 방식을 포함 시킬 수 있다.`);
                textData.push(`내향형의 수검자는 감정을 조절하는데 많은 관심을 기울이고, 정서를 표현하는 방식을 선택하는 데 노력을 많이 기울인다. 하지만 복잡한 것을 단순화하려는 경향을 가진 회피 유형이 나타날 경우, 때때로 정서를 조절하거나 표현하는 방식을 선택하는 노력이 매우 복잡하다고 여겨 아예 정서표현을 과도하게 통제하거나, 정서표현의 방식을 선택하고 통제하는 것을 회피할 수 있다(통제하지 않을 수 있다).`);
                result.curStep = 2;
                result.textData = textData;
                result.nextStep = 4;
                result.goNext = false;
                return result;
            }
        }
    }

    if((EA<=10 && (EBLeft<2 || EBRight<2)) || (EA>10 && (EBLeft<2.5 || EBRight<2.5))){
        if(Lambda<1){
            textData.push(`[잠정 결과8] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 진성 양향형(True Ambitent)의 대처방식(coping style)으로 분류된다. 의사결정과 문제해결에서 일관적인 접근 방식이 계발되지 않은 것으로 볼 수 있다. 그렇기에 정서가 사고과정에 미치는 영향이 일관적이지 않을 것이다.`);
            textData.push(`유사한 상황인데도 어떤 경우에는 정서를 한쪽으로 밀어두거나 주변적인 역할만 하는 내향형(심사숙고)과 비슷한 접근 방식을 사용하거나, 어떤 경우에는 정서의 영향을 강하게 받는 외향형(시행착오)과 비슷한 접근 방식을 사용할 수 있다. 감정 사용의 일관성 결여는 때때로 수검자를 혼란스럽게(confused) 할 수 있다. 그 결과로 감정이 사고에 지나치게 영향을 주거나, 반대로 감정이 의사결정에서 충분히 고려되지 않을 수 있다.`);
            textData.push(`또한, 감정 사용의 일관성 결여는 정서표현의 형태가 일정하지 않도록 이끌 수 있다. 유사한 상황인데도 어떤 경우에는 정서를 잘 조절하는데, 어떤 경우에는 정서를 잘 조절하지 못하고 강렬하게 표현할 수도 있다.`);
            result.curStep = 2;
            result.textData = textData;
            result.nextStep = 4;
            result.goNext = false;
            return result;
        }
        if(Lambda>0.99){
            textData.push(`[잠정 결과9] 가용 자원비율(EB)과 Lambda(L)를 고려할 때, 수검자는 회피 양향형(Avoidant Ambitent)의 대처방식(coping style)으로 분류된다. 의사결정과 문제해결에서 일관적인 접근 방식이 계발되지 않은 것으로 볼 수 있다. 그렇기에 정서가 사고과정에 미치는 영향이 일관적이지 않을 것이다.`);
            textData.push(`수검자의 문제해결 접근 방식의 흐름을 결정(dominant orientation)하는 회피 유형은 복잡하고 모호한 것을 단순화하는 경향이 있다. 그런데 그 흐름에 영향을 받는(secondary orientation) 문제해결 과정의 일관된 방식(내향형: 심사숙고, 정서억제-외향형: 시행착오, 정서표출)이 양향형에서는 나타나지 않으므로 회피 내향형이나 회피 외향형처럼 회피 유형의 영향이 일관된 흐름으로 나타나지 않는다. 회피 유형이 일관되고 전형적인 방식으로 적용되는 것은 수검자가 상황을 복잡하고 모호하다고 지각하는 정도에 관련되어 있다. 다시 말해서 수검자가 지각하는 상황의 복잡성이나 모호성이 높으면 회피 유형의 특징이 두드러지게 나타날 것이다.`);
            textData.push(`양향형의 수검자는 유사한 상황인데도 어떤 경우에는 감정을 과도하게 억제하거나, 어떤 경우에는 잘 조절하지 않고 강렬하게 표현할 수 있다. 또한, 어떤 경우에는 정교하지 않은 형태의 사고가 자주 관찰될 수 있다. 회피 유형(avoidant style)이 나타나면 이러한 경향성은 더욱 심해질 수 있다.`);
            textData.push(`이러한 경향은 어린 아동에서는 흔하게 나타나는 특성이다. 아동은 대개 복잡하고 모호한 상황을 다루기 힘들며, 문제해결의 접근 방식이 일관적이지 않은 경향을 보인다. 하지만, 주위에서 아동이기 때문에 그럴 수 있다고 여기고 실수에 대해 이해해 주고 수용해주기 때문에 적응의 어려움을 유발하지는 않는다.`);
            textData.push(`청소년이나 성인은 어린 아동이 아니므로 회피 양향형의 문제해결 접근 방식을 사용하여 발생하는 실수에 대해 주위에서 이해 주거나 수용해주지 않는다. 그리고 (모호하고 복잡한 상황을 견디고 정서를 일관된 방식으로 활용하지 못하는) 회피 양향형의 수검자는 오랫동안 복잡한 환경에 효과적으로(effective) 대처하고 적응하는데 필요한 행동을 하지 못할 것이다. 다시 말해서 적응 문제가 발생할 수 있다.`);
            result.curStep = 2;
            result.textData = textData;
            result.nextStep = 4;
            result.goNext = false;
            return result;
        }
    }

    if(EA<4){
        textData.push(`[잠정 결과1] 가용 자원(EA)이 지나치게 낮아 가용 자원비율(EB)에 따른 문제해결과 의사결정에서 대처방식(coping style)을 분류할 수 없다. 이러한 특징은 대개 회피 유형(avoidant style)에서 주로 나타난다. 정서 영역의 후반부에서 이 문제를 다시 다루므로 대처 유형에 따른 정서의 영향 부분에서는 다루지 않는다.`);
        result.curStep = 2;
        result.textData = textData;
        result.nextStep = 4;
        result.goNext = false;
        return result;
    }
    if(M==0 && WSumC>3.5){
        textData.push(`[잠정 결과2] 가용 자원비율(EB)에서 사고자원(M)이 드러나지 않고 정서자원(WSumC)만 나타나는 것은 정서에 압도되어 있거나 정서가 범람(flooded)하고 있음을 시사한다. 그렇기에 가용 자원비율(EB)이 문제해결과 의사결정과정에서 대처방식을 반영한다고 보기 어려우므로, 가용 자원비율(EB)은 대처 유형이 아니라 현재 정서 상태에 초점을 두고 해석해야 한다.`);
        textData.push(`매우 강한 정서가 사고과정에 영향을 주어 의사결정에 필요한 주의와 집중력을 손상시킬 것이다. 이러한 강렬한 정서는 상당한 혼란(disruptive)을 유발하고, 관념적 충동성이나 행동적 충동성을 유발할 수 있다.`);
        textData.push(`이러한 정서적 범람(emotional flooding)은 일상적이지 않은 강렬한 정서를 수검자가 효과적으로(effectively) 다루지 못할 때 일시적으로 발생한다. 그렇기에 정서에 관련된 다른 정보를 해석할 때는 이러한 맥락에서 이루어지어야 한다.`);
        textData.push(`정서와 관련된 변인은 현재 수검자의 정서 상태에 대한 정보를 제공하지만, 이를 통해 현재 수검자의 정서 상태가 일시적인지 지속적인 특성인 파악하는 것은 어렵다.`);
        result.curStep = 2;
        result.textData = textData;
        result.nextStep = 4;
        result.goNext = false;
        return result;
    }
    if(M>=3 && WSumC==0){
        textData.push(`[잠정 결과3] 가용 자원비율(EB)에서 정서자원(WSumC)이 드러나지 않고 사고자원(M)만 나타나는 경우, 정서를 과도하게 억제하거나 억압하는 것일 수 있다. 그렇기에 가용 자원비율(EB)이 문제해결과 의사결정과정에서 대처방식을 반영한다고 보기 어려우므로, 가용 자원비율(EB)은 대처 유형이 아니라 현재 정서 상태에 초점을 두고 해석해야 한다.`);
        textData.push(`현재 수검자는 감정을 엄격하게 숨기고 통제하는 데 노력을 많이 들이고 있을 것이다. 이렇게 감정을 극단적으로 억제하는 것은 일상적인 상태가 아니므로 오랫동안 유지하는 것은 어렵다. 마치 숨을 참고 있는 것처럼 짧은 기간이라도 감정을 모두 억제하는 것은 매우 불편할 수밖에 없다.`);
        textData.push(`억제를 오랫동안 지속한다면 감정은 어떤 형태로 표출되거나 대치될 수밖에 없다. 감정을 의도적으로 표출하거나 대치하지 않는다면, 수검자는 감정의 강도가 증가하거나 불안정한 상태(labile state)에 빠지게 되어 정서에 압도될 수 있다.`);
        textData.push(`불안정성(lability)은 정서가 대부분의 심리 기능을 지배하는 상황을 말한다. 이러한 불안정성은 현실의 상황을 고려하지 않고 압도된 정서를 경감시키는 방향으로 의사결정을 하도록 강제하거나 행동하도록 밀어붙일 수 있다.`);
        textData.push(`과도한 억제를 지속하고 있다면 정서 관련 자료를 신중하게 해석해야 한다. 정서와 관련된 변인은 현재 수검자의 정서 상태에 대한 정보를 제공하지만, 이를 통해 현재 수검자의 정서 상태가 일시적인지 지속적인 특성인 파악하는 것은 어렵다.`);
        result.curStep = 2;
        result.textData = textData;
        result.nextStep = 4;
        result.goNext = false;
        return result;
    }

    result.goNext = false;
    result.nextStep = 3;
    result.curStep = 2;
    result.textData= textData;
    return result;
}

function step3(M, WSumC, Lambda, EBPer){
    var result = {};
    var textData = [];
    
    if(M<WSumC && Lambda<=0.99){
        if(EBPer<2.5){
            textData.push(`[잠정 결과1] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 유연한(flexible) 진성 외향형(True Extratensive)의 대처방식(coping style)을 가지고 있는 것으로 볼 수 있다. 문제해결과 의사결정에서 정서자원을 주로 사용하기 때문에 사고과정에 감정이 많은 영향을 주지만, 상황에 따라 더 명확한 관념적 접근이 필요할 경우 감정을 한쪽으로 미뤄두고 감정의 영향을 배제할 수 있을 것이다. 그렇기에 정서표현의 조절에도 어느 정도 관심을 보일 수 있다.`);
            result.goNext = false;
            result.nextStep = 4;
            result.curStep = 3;
            result.textData= textData;
            return result;
        }
        if(EBPer>=2.5){
            textData.push(`[잠정 결과2] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 지배적(pervasive) 진성 외향형(True Extratensive)의 대처방식(coping style)을 가지고 있는 것으로 볼 수 있다. 문제해결과 의사결정에서 정서자원을 지배적으로 사용하기 때문에 사고과정에 감정이 영향이 다른 유형에 비해 상당할 수 있다. 그렇기에 반응을 지연하고 심사숙고하는 것이 효과적인(effective) 상황에서도 시행착오 방식의 접근을 사용하여 상황에 적절하게 대처하는 데 어려움이 있을 수 있다. 그리고 정서표현의 조절에 관심을 적기 때문에 수검자의 감정이 상황에 적절하지 않게 지각될 수도 있다.`);
            result.curStep = 3;
            result.textData = textData;
            result.nextStep = 4;
            result.goNext = false;
            return result;
        }
    }
    if(M<WSumC && Lambda<=0.99){
        if(EBPer<2.5){
            textData.push(`[잠정 결과3] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 유연한(flexible) 진성 내향형(True Introversive)의 대처방식을 가지고 있는 것으로 볼 수 있다. 문제해결과 의사결정에서 사고자원을 주로 사용하기 때문에 사고과정에 감정의 영향이 적으며, 주로 관념적 접근을 사용한다. 때로는 감정이 사고과정에 영향을 주어 시행착오 방식에서 볼 수 있는 직관적인 의사결정을 할 수도 있다. 감정을 활용하는데 유연한 모습을 어느 정도 가지고 있을 수 있다.`);
            result.curStep = 3;
            result.textData = textData;
            result.nextStep = 4;
            result.goNext = false;
            return result;
        }
        if(EBPEr>=2.5){
            textData.push(`[잠정 결과4] 지배적 경험유형(EBPer)을 고려할 때, 수검자는 지배적(pervasive) 진성 내향형(True Introversive)의 대처방식을 가지고 있는 것으로 볼 수 있다. 문제해결과 의사결정에서 사고자원을 지배적으로 사용하기 때문에 사고과정에 감정의 영향이 거의 없을 수 있다. 그렇기에 시행착오 방식의 직관적 의사결정이 더 효과적인(effective) 상황에서도 관념적 접근을 사용하기에 상황에 적절하게 대처하는 데 어려움이 있을 수 있다. 정서표현의 조절에 상당히 엄격하기에 수검자의 감정이 상황에 적절하지 않은 것으로 지각될 수도 있다.`);
            result.curStep = 3;
            result.textData = textData;
            result.nextStep = 4;
            result.goNext = false;
            return result;
        }
    }

    result.goNext = false;
    result.nextStep = 4;
    result.curStep = 3;
    result.textData= textData;
    return result;
}


function step4(FM, m, SumCprime, SumT, SumV, SumY){
    var result = {};
    var textData = [];
    if(FM+m>SumCprime+SumT+SumV+SumY){
        if(SumCprime<=2 && SumT==1 && SumV==0 && SumY<=2){
            textData.push(`[잠정 결과1] 심리적 고통을 반영하는 eb의 우항 점수를 고려할 때, 부정적 정서 상태를 유발하는 원인이 드러나지 않으므로, 정서적 고통을 유발하는 어떠한 원인을 가정할 필요가 없다.`);
            result.curStep = 4;
            result.textData = textData;
            result.nextStep = 5;
            result.goNext = false;
            return result;
        }
        if(SumCprime>=3){
            textData.push(`[잠정 결과2a] 심리적 고통을 반영하는 eb 우항의 SumC’ 점수를 고려할 때, 수검자는 감정을 내재화하는 경향이 뚜렷할 것이다. 정서표출을 억제하고 그로 인한 영향을 억누르는 경향으로 인해 불편해지거나(irritating) 부정적 감정을 느낄 것으로 보인다.`);
            textData.push(`\n`);
        }
        if(SumT>=2){
            textData.push(`[잠정 결과2b] 심리적 고통을 반영하는 eb 우항의 SumT 점수를 고려할 때, 수검자가 최근에 정서적으로 중요한 대상을 상실한 개인력이 없다면, 만성적으로 외로움을 느끼고 있거나, 정서적으로 빈곤한(emotional neediness) 상태일 수 있다.`);
            textData.push(`\n`);
        }
        if(SumV>=1){
            textData.push(`[잠정 결과2c] 심리적 고통을 반영하는 eb 우항의 SumV 점수를 고려할 때, 수검자가 최근에 후회나 죄책감을 느끼고 있다는 개인력이 없다면, 지속하여 자신을 질책하거나, 비하하는 경향을 보이고, 그로 인해 부정적 감정이 생겨나거나 마음이 어지럽혀지는(disquieting) 것일 수 있다.`);
            textData.push(`\n`);
        }
        if(SumY>=3){
            textData.push(`[잠정 결과2d] 심리적 고통을 반영하는 eb 우항의 SumY 점수를 고려할 때, 수검자는 스트레스 상황을 해결할 수 없다는 무력감으로 인해 부정적 감정을 겪고 있을 것이다.`);
            textData.push(`\n`);
        }
        result.curStep = 4;
        result.textData = textData;
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
    if((FM+m>=3) && (FM+m<SumCprime+SumT+SumV+SumY)){
        textData.push(`[잠정 결과3] 심리적 고통을 반영하는 eb 점수를 고려할 때, 수검자는 정서적 불편(distress)을 겪고 있을 수 있다. 수검자가 겪고 있는 정서적 불편은 우울이나, 불안처럼 직접적인 감정의 형태를 가질 수 있다. 그리고 수면 곤란이나, 무기력 같은 여러 신체 증상이나 심한 긴장이나, 걱정 같은 간접적인 형태를 가지는 등 다양한 양상을 보일 수 있다.`);
        textData.push(`수검자가 경험하는 정서적 불편의 원인은 eb의 우항을 구성하는 어떤 지표가 정상범주를 이탈하는지를 통해 탐색할 수 있다.<br/>`);
        textData.push(`* 정상범주: SumC’< 3, SumT= 1, SumV= 0, SumY < 2.`);
        textData.push(`<br/>`);
        if(SumCprime>=3){
            textData.push(`[잠정 결과2a] 심리적 고통을 반영하는 eb 우항의 SumC’ 점수를 고려할 때, 수검자는 감정을 내재화하는 경향이 뚜렷할 것이다. 정서표출을 억제하고 그로 인한 영향을 억누르는 경향으로 인해 불편해지거나(irritating) 부정적 감정을 느낄 것으로 보인다.`);
            textData.push(`<br/>`);
        }
        if(SumT>=2){
            textData.push(`[잠정 결과2b] 심리적 고통을 반영하는 eb 우항의 SumT 점수를 고려할 때, 수검자가 최근에 정서적으로 중요한 대상을 상실한 개인력이 없다면, 만성적으로 외로움을 느끼고 있거나, 정서적으로 빈곤한(emotional neediness) 상태일 수 있다.`);
            textData.push(`<br/>`);
        }
        if(SumV>=1){
            textData.push(`[잠정 결과2c] 심리적 고통을 반영하는 eb 우항의 SumV 점수를 고려할 때, 수검자가 최근에 후회나 죄책감을 느끼고 있다는 개인력이 없다면, 지속하여 자신을 질책하거나, 비하하는 경향을 보이고, 그로 인해 부정적 감정이 생겨나거나 마음이 어지럽혀지는(disquieting) 것일 수 있다.`);
            textData.push(`<br/>`);
        }
        if(SumY>=3){
            textData.push(`[잠정 결과2d] 심리적 고통을 반영하는 eb 우항의 SumY 점수를 고려할 때, 수검자는 스트레스 상황을 해결할 수 없다는 무력감으로 인해 부정적 감정을 겪고 있을 것이다.`);
            textData.push(`<br/>`);
        }
        result.curStep = 4;
        result.textData = textData;
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
    if((FM+m<3) && (SumCprime+SumT+SumV+SumY>=4)){
        textData.push(`[잠정 결과3] 심리적 고통을 반영하는 eb 점수를 고려할 때, 수검자는 정서적 불편(distress)을 겪고 있을 수 있다. 수검자가 겪고 있는 정서적 불편은 우울이나, 불안처럼 직접적인 감정의 형태를 가질 수 있다. 그리고 수면 곤란이나, 무기력 같은 여러 신체 증상이나 심한 긴장이나, 걱정 같은 간접적인 형태를 가지는 등 다양한 양상을 보일 수 있다.`);
        textData.push(`수검자가 경험하는 정서적 불편의 원인은 eb의 우항을 구성하는 어떤 지표가 정상범주를 이탈하는지를 통해 탐색할 수 있다.<br/>`);
        textData.push(`* 정상범주: SumC’< 3, SumT= 1, SumV= 0, SumY < 2.`);
        textData.push(`<br/>`);
        if(SumCprime>=3){
            textData.push(`[잠정 결과2a] 심리적 고통을 반영하는 eb 우항의 SumC’ 점수를 고려할 때, 수검자는 감정을 내재화하는 경향이 뚜렷할 것이다. 정서표출을 억제하고 그로 인한 영향을 억누르는 경향으로 인해 불편해지거나(irritating) 부정적 감정을 느낄 것으로 보인다.`);
            textData.push(`<br/>`);
        }
        if(SumT>=2){
            textData.push(`[잠정 결과2b] 심리적 고통을 반영하는 eb 우항의 SumT 점수를 고려할 때, 수검자가 최근에 정서적으로 중요한 대상을 상실한 개인력이 없다면, 만성적으로 외로움을 느끼고 있거나, 정서적으로 빈곤한(emotional neediness) 상태일 수 있다.`);
            textData.push(`<br/>`);
        }
        if(SumV>=1){
            textData.push(`[잠정 결과2c] 심리적 고통을 반영하는 eb 우항의 SumV 점수를 고려할 때, 수검자가 최근에 후회나 죄책감을 느끼고 있다는 개인력이 없다면, 지속하여 자신을 질책하거나, 비하하는 경향을 보이고, 그로 인해 부정적 감정이 생겨나거나 마음이 어지럽혀지는(disquieting) 것일 수 있다.`);
            textData.push(`<br/>`);
        }
        if(SumY>=3){
            textData.push(`[잠정 결과2d] 심리적 고통을 반영하는 eb 우항의 SumY 점수를 고려할 때, 수검자는 스트레스 상황을 해결할 수 없다는 무력감으로 인해 부정적 감정을 겪고 있을 것이다.`);
            textData.push(`<br/>`);
        }
        result.curStep = 4;
        result.textData = textData;
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
    result.curStep = 4;
    result.textData = textData;
    result.nextStep = 5;
    result.goNext = false;
    return result;
}

function step5(SumCprime, WSumC){
    var result = {};
    var textData = [];
    if(SumCprime<=WSumC){
        textData.push(`[잠정 결과1] [정상범주] 무채색(SumC’)과 유채색(WSumC)의 비율을 고려할 때, 수검자는 정서를 억압하거나 억제하여 내재화하는 방어기제를 현저하게 사용하지 않는 것으로 볼 수 있다.`);
        result.curStep = 5;
        result.textData = textData;
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }
    if(SumCprime>WSumC){
        textData.push(`[잠정 결과2] 무채색(SumC’)과 유채색(WSumC)의 비율을 고려할 때, 수검자는 정서를 억압하거나 억제하여 내재화하는 방어기제를 현저하게 사용하여 상당히 불편한(irritating) 감정을 겪고 있을 수 있다.`);
        result.curStep = 5;
        result.textData = textData;
        result.nextStep = 6;
        result.goNext = false;
        return result;
    }

    result.curStep = 5;
    result.textData = textData;
    result.nextStep = 6;
    result.goNext = false;
    return result;
}

function step6(Afr, age, copyingStyle, approachStyle){
    var result = {};
    var textData = [];
    var average = [];
    if(age>=14){
        if(copyingStyle=="Extratensive"){
            average = [0.60, 0.89];
        }
        if(copyingStyle=="Introversive"){
            average = [0.53, 0.78];
        }
        if(copyingStyle=="Ambitent"){
            average = [0.53, 0.83];
        }
        if(approachStyle=="Avoidant"){
            average = [0.45, 0.65];
        }
    }
    if(5<=age && age<=6){
        average = [0.57, 1.05];
    }
    if(7<=age && age<=9){
        average = [0.55, 0.92];
    }
    if(10<=age && age<=13){
        average = [0.53, 0.83];
    }

    if(average[0]<=Afr && Afr<=average[1]){
        textData.push(`[잠정 결과1] [정상범주] 정서비율(Afr) 점수를 고려할 때, 수검자는 문제해결과 의사결정에서 사용하는 개별적인 대처방식(particular coping style)에 따라 일반적인 수준에서 정서가 포함된 자극을 다루고 있는 것으로 볼 수 있다. 해당하는 대처방식(coping style)에서 감정을 다루는 방식 이외의 다른 해석 결과는 없을 것이다.`);
        textData.push(`정서 자극 처리에는 어떤 반응이나 변화가 요구된다. 지속하여 정서표현의 조절이나 통제의 어려움을 겪고 있는 수검자는 정서 자극에 관심을 줄여서 이러한 요구를 경감시키는 경향이 있으므로 평균 범위의 정서비율(Afr)을 보일 수 있다. 그러므로 개인력에서 지속하여 정서 조절의 문제를 보였는지 검토할 필요가 있다.`);
        result.curStep = 6;
        result.textData = textData;
        result.nextStep = 7;
        result.goNext = false;
        return result;
    }

    if(Afr>average[1]){
        textData.push(`[잠정 결과2] 정서비율(Afr) 점수를 고려할 때, 수검자는 정서 자극에 쉽게 끌리고 정서 변화에 관심을 상당히 많이 가질 것이다. 이러한 결과는 외향형 대처방식(coping style)을 가진 수검자에게 흔하지만, 그들에게만 국한되는 특징은 아니다.`);
        textData.push(`이러한 경향은 단순히 정서에 강하게 관심을 가지는 것을 반영하며, 다른 사람에 비해 불리한 점(liability)을 의미하지 않는다. 정서 자극은 정서에 더 강한 관심을 가지도록 하고, 이러한 경향을 더 강화할 수 있다.`);
        textData.push(`정서 자극 처리에는 어떤 반응이나 변화를 요구하므로 심리적 부담이 수반할 수 있다. 그러므로 정서 조절이나 통제의 어려움이 있으면 다른 사람에 비해 불리한 점(liability)일 수 있다. 정서 자극을 추구하는 경향은 예상되거나 요구되는 정서 변화를 증가시키기 때문에 정서 처리 과정에서 발생하는 심리적 부담이 증가할 수 있다. 그러므로 개인력에서 정서 조절의 문제가 있는지 검토할 필요가 있다.`);
        result.curStep = 6;
        result.textData = textData;
        result.nextStep = 7;
        result.goNext = false;
        return result;
    }

    if(0.43<Afr && Afr<average[0]){
        textData.push(`[잠정 결과3] 정서비율(Afr) 점수를 고려할 때, 수검자는 정서 자극을 처리하는데 관심이 적거나, 덜 적극적일 것이다. 이러한 결과는 회피 유형의 대처방식(coping style)을 가진 수검자에게 흔하게 나타나며, 복잡한 자극을 단순화하거나 회피하는 경향이 반영된 것이다.`);
        textData.push(`이러한 경향은 단순히 정서에 덜 관여하는 것을 반영하며, 다른 사람에 비해 불리한 점(liability)을 의미하지 않는다.`);
        textData.push(`정서 자극 처리에는 어떤 반응이나 변화를 요구하므로 심리적 부담이 수반할 수 있다. 정서 조절이나 통제의 문제가 있는 수검자에서 볼 때, 정서 덜 관여하는 경향은 자신의 문제를 더 심화시키는 상황을 회피하여 적응 유지하는 방식으로 볼 수 있다. 개인력에서 정서 조절의 문제가 있는지 검토할 필요가 있다.`);
        result.curStep = 6;
        result.textData = textData;
        result.nextStep = 7;
        result.goNext = false;
        return result;
    }
    if(Afr<=0.43){
        textData.push(`[잠정 결과4] 정서비율(Afr) 점수를 고려할 때, 수검자는 정서 자극을 현저하게 회피하고 있을 것이다. 수검자는 정서를 다루는 것을 상당히 불편할 수 있다. 그래서 정서적 교류를 포함할 수밖에 없는 사회적 상황이 어색하거나, 더욱이 사회적으로 고립되어 있을 수도 있다. 정서를 억제하거나(step5) 현저한 정서적 방어(step 7, 8)를 의미할 수 있으므로 관련된 정보를 탐색할 필요가 있다.`);
        textData.push(`아동이나 청소년에서 이러한 경향이 나타날 경우, 심리적 발달에 기여 하는 많은 일상적 변화에도 회피적으로 반응하거나 지나치게 조심스럽게 접근하기 때문에 발달 자극을 충분히 접하지 못하게 될 수도 있다. 그러므로 아동이나 청소년에서 이러한 경향이 나타나면 더 관심을 기울여야 한다.`);
        result.curStep = 6;
        result.textData = textData;
        result.nextStep = 7;
        result.goNext = false;
        return result;
    }


    result.curStep = 6;
    result.textData = textData;
    result.nextStep = 7;
    result.goNext = false;
    return result;
}


function step7(IntellectualIndex){
    var result = {};
    var textData = [];

    if(IntellectualIndex<4){
        textData.push(`[잠정 결과0] [정상범주] 주지화 지표(Intellectualization Index) 점수를 고려할 때, 주지화 방어기제의 사용은 일반적 수준일 것이다.`);
        result.curStep = 7;
        result.textData = textData;
        result.nextStep = 8;
        result.goNext = false;
        return result;
    }
    if(4<=IntellectualIndex && IntellectualIndex<=6){
        textData.push(`[잠정 결과1] 주지화 지표(Intellectualization Index) 점수를 고려할 때, 수검자는 다른 사람들보다 더 감정을 지적인 수준에서 다루는 경향이 있을 것이다. `);
        textData.push(`주지화 과정은 감정의 영향을 줄이거나 무효화시키며, 또한 상황의 영향이나 진정한 의미를 왜곡하는 부정(denial)의 형태로 작용할 수 있다.`);
        result.curStep = 7;
        result.textData = textData;
        result.nextStep = 8;
        result.goNext = false;
        return result;
    }
    if(7<=IntellectualIndex){
        textData.push(`[잠정 결과2] 주지화 지표(Intellectualization Index) 점수를 고려할 때, 수검자는 정서적 스트레스가 지각되는 상황에서 주지화를 주된 방어기제로 사용할 것이다.`);
        textData.push(`주지화 전략은 정서 자극의 강도가 증가할수록 효과적이지 않게(less effective) 되므로 강한 정서 경험을 할 때면 혼란(disorganization)에 빠지기 더 쉬워질 수 있다.`);
        result.curStep = 7;
        result.textData = textData;
        result.nextStep = 8;
        result.goNext = false;
        return result;
    }


    result.curStep = 7;
    result.textData = textData;
    result.nextStep = 8;
    result.goNext = false;
    return result;
}

function step8(CP){
    var result = {};
    var textData = [];
    if(CP>=1){
        textData.push(`[잠정 결과] 색채투사(CP)를 고려할 때, 수검자는 자주 불쾌한 정서나 정서 자극을 부정하고, 상황에 적절하지 않은 긍정 정서나 정서가(emotion value)로 대치하는 경향을 보일 것이다. 부정은 현실을 무시하거나 위배(violate)하는 히스테리 과정(hysteroid-liked process)과 유사하다.`);
        textData.push(`수검자는 부정적 정서를 다루는 자신의 능력을 미심쩍어 하며, 자주 자신의 정서표현을 조절하는 데 문제가 있을 수 있다. 그렇기에 지각되거나 예상되는 어려움(harshness)을 다루는 것을 회피하기 위해 현실을 왜곡하여 경향이 있다.`);
        textData.push(`현실을 왜곡하는 방어는 세련되지 않아 쉽게 드러날 수밖에 없으므로, 이러한 방어를 자주 사용하는 수검자는 다른 사람들이 자신을 ‘정서적으로 깊이가 없다.’ 판단하는 것을 알게 될 수 있다.`);
        result.curStep = 8;
        result.textData = textData;
        result.nextStep = 9;
        result.goNext = false;
        return result;    
    }

    result.curStep = 8;
    result.textData = textData;
    result.nextStep = 9;
    result.goNext = false;
    return result;
}

function step9(FC, CF, C, PureC){
    var result = {};
    var textData = [];

    if((FC>=CF+C+1) || (FC==2*(CF+C))){
        if(PureC==0){
            textData.push(`[잠정 결과1] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 정서 표출을 대부분의 성인만큼 잘 통제하거나 조절할 수 있을 것이다.`);
            textData.push(`15세 미만의 어린 수검자에서는 드물게 나타나기 때문에 만약 이러한 결과가 나타났다면, 정서를 상당히 엄격하게 통제하고 있음을 시사한다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 11;
            result.goNext = false;
            return result;        
        }
        if(PureC==1){
            textData.push(`[잠정 결과4] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 정서표출을 대부분의 시간 동안에 다른 성인들만큼 조절할 수 있을 것이다. 어떤 경우에는 조절 오류가 나타나는 동안에는 다른 성인들만큼 정서표출을 잘 통제하지 못할 수 있다.`);
            textData.push(`15세 미만의 어린 수검자의 검사 결과에서는 드물게 나타난다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 11;
            result.goNext = false;
            return result;        
        }
        if(PureC>=2){
            textData.push(`[잠정 결과6] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 정서표출을 효과적으로(effectively) 조절하기 위해 노력하지만, 심한 조절 오류가 빈번하게 발생할 가능성이 있다. 성인의 검사 결과에서 이러한 반응은 흔하지 않은 것이므로 통제능력 관련 주제에 대해 다시 살펴볼 필요가 있다.`);
            textData.push(`아동이나 어린 청소년은 적절한 정서표현에 대해 아직 배우는 과정에 있기에 이러한 반응이 검사 결과에서 흔하게 나타날 수 있다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 10;
            result.goNext = false;
            return result;
        }
    }

    if(2*(CF+C)<FC && FC<3*(CF+C)){
        if(PureC==0){
            textData.push(`[잠정 결과2] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 정서표출을 대부분의 다른 사람들보다 더 엄격하게 통제하는 경향이 있을 것이다.`);
            textData.push(`15세 미만의 어린 수검자의 검사 결과에서는 매우 드물게 나타난다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 11;
            result.goNext = false;
            return result;
        }
    }

    if(FC>2*(CF+C)){
        if(PureC>=1){
            textData.push(`[잠정 결과5] 형태-색채 비율(FC: CF+C) 점수를 고려할 때, 수검자는 대부분의 정서표현을 엄중히 조절할 것이다. 달리 보면, 정서표현의 조절 실패가 발생하기 쉽기에 엄중하게 통제하는 것일 수 있다.`);
            textData.push(`그리고 이러한 검사 결과를 보이는 수검자가 대개 가지고 있는 정서에 대한 갈등은 때때로 엄중하게 조절하려는 일상적인 노력이 허물어지게 하는 원인이 될 수 있다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 10;
            result.goNext = false;
            return result;
        }
    }
    if(FC>=3*(CF+C)){
        if(PureC==0){
            textData.push(`[잠정 결과3] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 대부분의 다른 사람들보다 정서표현을 훨씬 더 과도하게 통제할 것이다. `);
            textData.push(`수검자가 정서적으로 억압되어 있음을 시사하며, 대개 강렬한 감정 표현에 개입하는 것을 두려워하거나, 감정을 통제하는 자신의 능력을 미심쩍어할 것이다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 11;
            result.goNext = false;
            return result;
        }
    }

    if((CF+C==FC) || (CF+C==FC+2)){
        if(PureC==0 || PureC==1){
            textData.push(`[잠정 결과7] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 대부분의 다른 성인들보다 정서표출의 조절에 덜 엄격할 것이다. 일반적 사람들보다 감정 표현이 더 분명하고 강렬할 수 있다.`);
            textData.push(`통제능력에 관련된 어려움이 없는 성인의 경우 반드시 부정적으로 해석할 필요는 없다. 하지만, 대인관계 문제나 현실검증능력의 문제 또는 정서적 혼란(disruption)을 겪고 있는 수검자에게는 상당히 불리한 점(liability)일 수 있다. 어떤 상태든지 상황에 적절하지 않은 형태의 정서표현이 나타날 수 있다.`);
            textData.push(`아동이나 어린 청소년의 검사 결과에서는 흔하게 나타나지만, 내향형 대처방식(coping style)을 가진 사람에게는 흔하게 나타나지 않는다. 일반적인 양상이 아닌 경우 원인을 탐색해 볼 필요가 있다.`);
            if(PureC==0){
                result.curStep = 9;
                result.textData = textData;
                result.nextStep = 11;
                result.goNext = false;
                return result;
            }
            if(PureC==1){
                result.curStep = 9;
                result.textData = textData;
                result.nextStep = 10;
                result.goNext = false;
                return result;
            }
        }

        if(PureC>=2){
            textData.push(`[잠정 결과8] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 심한 정서 조절 문제를 가지고 있을 것이다. 이러한 사람들의 정서표현은 자주 과도하고 강렬하며, 때때로 충동적 인상을 줄 수 있다. `);
            textData.push(`통제능력에 관련된 어려움이 없다면, 수검자의 심리구조가 덜 성숙하지 않아 정서 조절이 매우 중요하다는 것을 간과하고 있는 것일 수 있다. 이러한 결과는 정서적으로 충만하고 조절 능력이 제한되어 있어 자주 감정을 드러내 보이는 경향을 나타내며, 아이들의 행동에서 자주 볼 수 있는 특징이다. 만약, 통제능력에 관련된 문제가 있다면 수검자의 현재 상태를 그 결과로 봐야 한다.`);
            textData.push(`아동과 청소년의 검사 결과에서는 매우 흔하게 나타나며, 내향형의 대처방식(coping style)을 가진 사람에서는 흔하지 않다. 만약, 내향형의 수검자가 이런 결과를 보인다면, 관념적 방식의 유효성(efficacy)과 완전성(integrity)이 손상되어 있거나, 자주 다른 심리 작용 때문에 방해받고 있을 것이다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 10;
            result.goNext = false;
            return result;
        }
    }

    if(CF+C>=FC+3){
        if(PureC==0){
            textData.push(`[잠정 결과9] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자는 다른 사람들에 비해 정서표출의 조절을 더 적게 할 것이다. 이러한 결과를 보이는 성인은 강렬하게 표현되는 자신의 감정 때문에 때때로 놀라기도 한다.`);
            textData.push(`수검자의 덜 억제된 정서표현이 효율적이거나(effectiveness) 비효율적인지는(ineffectiveness) 사회적 환경이 그러한 정서표현을 어떻게 수용하는지에 따라 달라지기 때문에 반드시 불리한 점(liability)이라고 볼 수 없다. 그러므로 수검자가 속한 사회적 환경에 대한 정보를 통해 해석을 조정할 필요가 있다.`);
            textData.push(`수검자가 현실검증능력의 문제나 정서적 혼란(disruption)을 경험하고 있다면, 상황에 부적절하고 많이 통제되지 않은 정서표현이 나타날 수 있다.`);
            textData.push(`아동이나 어린 청소년의 검사 결과에서는 흔하게 나타날 수 있다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 11;
            result.goNext = false;
            return result;
        }
        if(PureC>=1){
            textData.push(`[잠정 결과10] 형태-색채 비율(FC: CF+C)을 고려할 때, 수검자의 정서표현 조절은 상당히 느슨할 것이다. 수검자는 자주 다른 사람들에게 충동적으로 보일 수 있으며, 아니면 최소한 과도하게 감정적이거나 성숙하지 않은 사람으로 보일 수 있다. `);
            textData.push(`수검자가 현실검증능력의 문제나 정서적 혼란(disruption)을 경험하고 있다면, 정서표현의 조절 실패 결과는 사회적응 시도에 매우 부정적인 영향을 자주 줄 것이다.`);
            textData.push(`내향형 수검자에서 이러한 결과가 나타났다면, 관념적 방식의 기능이나 효율성(effectiveness)에 심한 문제가 있다는 신호일 수 있다.`);
            textData.push(`대부분의 어린 아동의 검사 결과에서는 흔하게 나타나지만, 성인에서는 흔하지 않은 결과이다.`);
            result.curStep = 9;
            result.textData = textData;
            result.nextStep = 10;
            result.goNext = false;
            return result;
        }
    }



    result.curStep = 9;
    result.textData = textData;
    result.nextStep = 10;
    result.goNext = false;
    return result;
}


function step10(){
    var result = {};
    var textData = ["질적분석<br/><br/><br/><br/><br/>"]
    result.curStep = 10;
    result.textData = textData;
    result.nextStep = 11;
    result.goNext = false;
    return result;
}

function step11(S, approach){
    var result  = {};
    var textData = [];

    
    var card1 = approach[1].join(' ');
    card1 = card1.split("S").length-1
    var card2 = approach[2].join(' ');
    card2 = card2.split("S").length-1
    var card3 = approach[3].join(' ');
    card3 = card3.split("S").length-1
    var card4 = approach[4].join(' ');
    card4 = card4.split("S").length-1
    var card5 = approach[5].join(' ');
    card5 = card5.split("S").length-1
    var card6 = approach[6].join(' ');
    card6 = card6.split("S").length-1
    var card7 = approach[7].join(' ');
    card7 = card7.split("S").length-1
    var card8 = approach[1].join(' ');
    card8 = card8.split("S").length-1
    var card9 = approach[9].join(' ');
    card9 = card9.split("S").length-1
    var card10 = approach[10].join(' ');
    card10 = card10.split("S").length-1


    if(0<=S && S<=2){
        textData.push(`[잠정 결과1] [정상범주] 공간 반응(S)을 고려할 때, 수검자의 환경에 대한 거부나 분노는 일반적 수준일 것이다.`);
        result.curStep = 11;
        result.textData = textData;
        result.nextStep = 12;
        result.goNext = false;
        return result;
    }
    if(S==3 && (card1+card2==3)){
        textData.push(`[잠정 결과2] 공간 반응(S)을 고려할 때, 수검자는 검사를 받을 충분한 준비가 되어 있지 않으며, 상황요구에 거부적인 태도를 보일 것이다. `);
        textData.push(`이러한 수검자의 저항은 일상적이지 않으며, 상황에 관련된 거부일 것이다.`);
        result.curStep = 11;
        result.textData = textData;
        result.nextStep = 12;
        result.goNext = false;
        return result;
    }

    if((4<=S && S<=5) && (4<=card1+card2+card3 && card1+card2+card3<=5)){
        textData.push(`[잠정 결과3] 공간 반응(S)을 고려할 때, 수검자는 검사 상황으로 인해 상당히 불편(irritated)할 것이다.`);
        textData.push(`이러한 결과는 원하지 않는 도전에 직면할 경우 과도하게 저항하는 경향이나, 더 지속적인 권위에 대한 거부적 태도를 반영하는 것일 수 있다.`);
        result.curStep = 11;
        result.textData = textData;
        result.nextStep = 12;
        result.goNext = false;
        return result;
    }
    if(S==3 && card1+card2<=2){
        textData.push(`[잠정 결과4] 공간 반응(S)을 고려할 때, 수검자는 대부분의 다른 사람들보다 더 환경에 거부적이고 저항적인 경향을 보일 것이다.`);
        textData.push(`이러한 경향은 수검자에게 불리한 점(liability)으로 작용하지 않겠지만, 원만한 사회적 관계를 형성하는 데 이롭지 않을 것이다.`);
        result.curStep = 11;
        result.textData = textData;
        result.nextStep = 12;
        result.goNext = false;
        return result;
    }
    if(S>=4 && card1+card2+card3<=3){
        textData.push(`[잠정 결과5] 공간 반응(S)을 고려할 때, 수검자는 상당한 분노를 경험하고 있으며, 분노가 일반화되어 수검자가 가진 환경에 대한 태도에 뚜렷하게 영향을 끼치고 있을 것이다. 특성적인 형태를 가지고 있어 수검자의 심리 기능에 영향을 주므로 의사결정이나 대처 행동에 항상 영향을 미칠 것이다. `);
        textData.push(`분노는 사람마다 다양한 형태로 표출될 것이다. 어떤 사람은 분노를 직접적이고 분명한 행동으로 표현할 수 있으며, 어떤 사람은 더 교묘하게 우회적으로 표현할 수 있으며, 감정을 억제하는 성격 특징을 가진 사람은 단지 속만 끓일 수 있다.`);
        textData.push(`이러한 경향을 가진 수검자는 사회적 관계에서 쉽게 타협하지 못하고 참을성을 잃기 때문에 다른 사람들과 깊이 있는 관계를 유지하기 어렵다. `);
        textData.push(`수검자가 정서표현의 통제나 조절에 문제를 보일 경우, 그로 인해 더 강렬해진 정서표현에 대단히 거부적 태도가 포함될 수 있다.`);
        result.curStep = 11;
        result.textData = textData;
        result.nextStep = 12;
        result.goNext = false;
        return result;
    }



    result.curStep = 11;
    result.textData = textData;
    result.nextStep = 12;
    result.goNext = false;
    return result;
}

function step12(copyingStyle, approachStyle, Blends, R){
    var result = {};
    var textData = [];
    var percentage = ((Blends/R) * 100).toFixed(3);
    var average = [];
    if(approachStyle=="True" && copyingStyle=="Extratensive"){
        average = [19, 33];
    }
    if(approachStyle=="True" && copyingStyle=="Introversive"){
        average = [13, 26];
    }
    if(approachStyle=="True" && copyingStyle=="Ambitent"){
        average = [16, 36];
    }
    if(approachStyle=="Avoidant"){
        average = [8, 14];
    }

    if(average[0]<=percentage && percentage<=average[1]){
        textData.push(`[잠정 결과1] [정상범주] 복합반응 비율(Blends : R)을 고려할 때, 수검자의 심리 기능은 비슷한 대처 경향을 가진 사람들과 다르지 않은 일반적 수준에서 복잡성을 보일 것이다.`);
        result.curStep = 12;
        result.textData = textData;
        result.nextStep = 13;
        result.goNext = false;
        return result;
    }

    if(percentage < average[0]){
        textData.push(`[잠정 결과2] 복합반응 비율(Blends : R)을 고려할 때, 수검자의 심리 기능은 예상되는 수준보다 덜 복잡할 것이다. 이러한 결과는 수검자의 심리구조가 현저하게 미성숙한 경우에 흔하게 나타난다. 수검자가 복잡한 정서적 상황에 직면할 때 행동에 어려움이 나타날 수 있다.`);
        result.curStep = 12;
        result.textData = textData;
        result.nextStep = 13;
        result.goNext = false;
        return result;
    }
    if(average[1] < percentage){
        textData.push(`[잠정 결과3] 복합반응 비율(Blends : R)을 고려할 때, 수검자의 심리 기능은 예상되는 수준보다 더 복잡할 것이다. 대부분의 복합반응은 하나 이상의 정서 관련 변인을 포함할 것이다. 이러한 결과는 예기치 못한 심리적 복잡성이 일반적으로 정서에 근거하고 있다는 알 수 있게 한다.`);
        textData.push(`수검자가 정서 경험을 다루는데 이용할 수 있는 적절한 가용자원을 가지고 있다면 불리한 점(liability)은 아닐 것이다. 만약, 수검자의 가용 자원이 더 제한되어 있고, 통제나 조절에 문제가 있다면, 복잡성의 증가는 행동의 일관성이나 안정성에 정서가 좋지 않은 영향을 주게 할 수 있다.`);
        result.curStep = 12;
        result.textData = textData;
        result.nextStep = 13;
        result.goNext = false;
        return result;
    }

    result.curStep = 12;
    result.textData = textData;
    result.nextStep = 13;
    result.goNext = false;
    return result;

}