function caculateControl(AdjD, CDI, EA, EBLeft, EBRight, Lambda, age, M, WSumC, Adjes, es, FM, m, SumCprime, SumV, SumT, SumY){
    var result = [];
    var nextStep = 0;
    var STEP1 = step1(AdjD, CDI);
    result.push(STEP1);
    nextStep = STEP1.nextStep;

    if(nextStep==2){
        var STEP2 = step2(age, EA, AdjD);
        result.push(STEP2);
        nextStep = STEP2.nextStep;
    }

    if(nextStep==3){
        var STEP3 = step3(EBLeft, EBRight, EA, Lambda, age, M, WSumC);
        result.push(STEP3);
        if(STEP3.goNext==true){
            return result;
        }
        nextStep = STEP3.nextStep;
    }
    if(nextStep==4){
        var STEP4 = step4(Adjes);
        result.push(STEP4);
        if(STEP4.goNext==true){
            return result;
        }
        nextStep = STEP4.nextStep;
    }
    if(nextStep==5){
        var STEP5 = step5(es, FM, m, SumCprime, SumV, SumT, SumY);
        result.push(STEP5);
        if(STEP5.goNext==true){
            return result;
        }
        nextStep = STEP5.nextStep;
    }

    return result;
    
}
exports.caculateControl = caculateControl;

function step1(AdjD, CDI){
    var textData = [];

    if(AdjD==0){
        if(CDI<=3){
            textData.push(`[잠정 결과1] 일반적 통제능력(Adj D)과 대처결함지표(CDI)를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력은 정상집단의 예상범주에서 기능할 것이다.`);
            textData.push(`수검자의 성격 구조가 정상집단에서 기대할 수 있는 수준만큼 성숙한 것으로 보이며, 자아의 기능은 적절할 것이다.`);
            textData.push(`전반적 적응 수준은 정상집단의 예상범주에 있을 것으로 추정되며, 수검자의 현재 적응 수준에 대한 명확한 판단을 위해서는 추가적인 정보가 필요할 수 있다.`);
            
        } else if(CDI>=4){
            textData.push(`[잠정 결과2] 일반적 통제능력(Adj D)과 대처결함지표(CDI)를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력은 정상집단의 예상범주보다 낮은 수준에서 기능할 것이다.`);
            textData.push(`수검자는 일상의 요구에 대처하는 과정에서 문제가 쉽게 발생하는 경향이 있다. 수검자가 경험하는 어려움은 대인관계의 영역에서 주로 나타나며, 이러한 어려움은 통제 문제를 유발할 수 있다. 다시 말해서 일상에서 겪게 되는 여러 문제에 적절하게 대처하지 못할 것이다.`);
            textData.push(`수검자의 성격 구조는 정상집단에서 기대할 수 있는 수준보다 덜 성숙하며, 자아의 기능이 충분하지 않아 전반적인 적응 수준은 정상집단의 예상범주보다 낮을 것이다.`);
        }
    } else if(AdjD>=1){
        textData.push(`[잠정 결과3] 일반적 통제능력(Adj D)과 대처결함지표(CDI)를 통해 볼 때, 수검자는 대부분의 다른 사람들보다 통제 문제를 겪을 가능성이 더 낮으며, 스트레스 저항력은 대부분의 다른 사람들보다 더 강할 것이다.`);
        textData.push(`하지만, Adj D 점수가 양수라고 해서 적응 수준이 더 낫다는 것을 의미하지는 않는다. 단순히 다른 사람들보다 행동을 의도적으로 통제하는 능력이 더 높다는 것을 의미한다. 그러므로 전반적인 적응 수준에 대한 명확한 판단을 위해서는 추가적인 정보가 필요할 수 있다.`);
    } else if (AdjD==-1){
        textData.push(`[잠정 결과4] 일반적 통제능력(Adj D)과 대처결함지표(CDI)를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력은 정상집단의 예상범주보다 낮은 수준일 것이다. 전반적인 적응 수준도 정상집단의 예상범주보다 낮을 것이다. 수검자의 현재 적응 수준에 대한 명확한 판단을 위해서는 추가적인 정보가 필요할 수 있다.`);
        textData.push(`수검자는 현재 만성적인 자극 과부하 상태일 수 있다. 아마도 통제능력과 효과적으로(effectively) 스트레스를 다루는 능력은 정상집단의 예상범주보다 저하되어 있을 것이다. 어떤 결정이나 행동은 충분한 사고를 통해 이루어지지 않을 수 있고, 적절하게 실행되지 않을 수도 있다. 그리고 충동적인 경향이 있을 수 있다.`);
        textData.push(`수검자는 구조화되어 있고 단서가 상당히 명확한 상황에서는 안정적인 수 있지만, 스트레스를 받으면 심리적 혼란(disorganization)을 경험하기 쉽다. 수검자가 심한 심리적 어려움을 겪고 있지 않다면, 친숙한 환경에서 일상적이고 예상 가능한 수준의 기대와 요구를 경험하고 있기 때문일 것이다. 수검자가 익숙한 수준을 초과하는 기대와 요구가 있으면 통제 실패 위험성이 더 높아질 것이다.`);
    } else if (AdjD<=-2){
        textData.push(`[잠정 결과5] 일반적 통제능력(Adj D)과 대처결함지표(CDI)를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력은 정상집단의 예상범주보다 매우 낮은 수준일 것이다. 전반적인 적응 수준도 정상집단의 예상범주보다 매우 낮을 것이다. 수검자의 현재 적응 수준에 대한 명확한 판단을 위해서는 추가적인 정보가 필요할 수 있다.`);
        textData.push(`수검자는 스트레스를 겪으면 통제에 실패하고 혼란에 빠지기 매우 쉬울 것이다. 수검자의 개인력을 보면 잘못된 판단, 정서적 혼란, 효율적이지 않은(ineffectiveness) 행동 등으로 이루어진 사건이 많았을 것이다.`);
        textData.push(`수검자는 만성적인 자극 과부하 상태에 있으며, 고도로 구조화되어 있고 통제감(sense of control)을 어느 정도 느낄 수 있는 일상적인 상황에서만 오랫동안 일반적 기능을 보일 수 있다.`);
        textData.push(`[주의] 사회적, 직업적 성취가 높은 사람이 타당한 음수의 Adj D점수를 보인다면, 어떤 심리적 혼란(disorganization)이 진행되고 있다고 봐야 한다.`);
    }
    var result = {};
    result.nextStep = 2;
    result.textData = textData;
    result.curStep = 1;
    return result;
}

function step2(age, EA, AdjD){
    var textData = [];
    var result = {};
    if(age>=13){
        if(7<=EA && EA<=11){
            if(AdjD==0){
                textData.push(`[잠정 결과1] 일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하고 신뢰할 수 있다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD>0){
                textData.push(`[잠정 결과2] 일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하지 않으며 신뢰할 수 없다.`);
                textData.push(`수검자가 현재 가지고 있는 가용 자원(EA)보다 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)이 낮을 수 있으며, 이러한 양상은 일반적이지 않다.`);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 스트레스 수준(es)과 일반적 스트레스 수준(Adj es)에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(7<=EA){
            if(AdjD<0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표가 타당한지에 대한 판단을 보류해야 한다.`);
                textData.push(`수검자가 현재 가지고 있는 가용 자원(EA)보다 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)이 높을 수 있으며, 이러한 양상은 일반적이지 않다.`);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)의 일반적이지 않은 상승에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(11<EA){
            if(AdjD>0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하고 신뢰할 수 있다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD==0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA) 점수를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 수검자의 원래 능력 수준보다 낮게 추정되었을 가능성이 있다.`);
                textData.push(`상황 변인을 제외한 일반적인 스트레스(Adj es) 수준이 예상보다 높은 상태일 수 있다. `);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 일반적 스트레스 수준(Adj es)의 일반적이지 않은 상승에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(EA<7){
            if(AdjD<0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 가용 자원이 정상집단의 예상값보다 더 제한되어 있기에 통제능력과 스트레스 저항력을 반영한 지표가 음수를 보이는 것은 쉽게 예상할 수 있다. 현재 수검자의 일반적 통제능력(Adj D) 점수는 타당하고 신뢰할 수 있다.`);
                textData.push(`수검자는 가용 자원이 낮아(Low EA) 복잡한 사회를 살다 보면 겪게 되는 다양한 일상적인 스트레스에도 쉽게 심리가 혼란될(disorganized) 정도로 만성적으로 더 취약할 것이다.`);
                textData.push(`어린 아동의 경우 심리적 발달이 충분하지 않아 가용 자원(EA)이 예상한 수준만큼 나타나지 않을 수 있으므로 해석에 주의해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD>=0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 가용 자원이 정상집단의 예상값보다 더 제한되어 있지만, 수검자는 상황 단서가 상당히 명료하고 잘 구조화되어 있는 환경에서는 더 효과적으로(effectively) 기능할 수 있다. `);
                textData.push(`가용 자원이 낮아(Low EA) 복잡한 사회를 살다 보면 겪게 되는 다양한 평소의 일상적인 스트레스에도 쉽게 심리가 혼란될(disorganized) 정도로 만성적으로 더 취약한 수검자로 잘못 해석할 수 있으니 주의해야 한다. `);
                textData.push(`어린 아동의 경우 심리적 발달이 충분하지 않아 가용 자원(EA)이 예상한 수준만큼 나타나지 않을 수 있으므로 해석에 주의해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

    }

    if(10<=age && age<=12){
        if(6<=EA && EA<=10){
            if(AdjD==0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하고 신뢰할 수 있다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD>0){
                textData.push(`[잠정 결과2] 일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하지 않으며 신뢰할 수 없다.`);
                textData.push(`수검자가 현재 가지고 있는 가용 자원(EA)보다 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)이 낮을 수 있으며, 이러한 양상은 일반적이지 않다.`);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 스트레스 수준(es)과 일반적 스트레스 수준(Adj es)에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(6<=EA){
            if(AdjD<0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표가 타당한지에 대한 판단을 보류해야 한다.`);
                textData.push(`수검자가 현재 가지고 있는 가용 자원(EA)보다 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)이 높을 수 있으며, 이러한 양상은 일반적이지 않다.`);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)의 일반적이지 않은 상승에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(10<EA){
            if(AdjD>0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하고 신뢰할 수 있다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD==0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA) 점수를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 수검자의 원래 능력 수준보다 낮게 추정되었을 가능성이 있다.`);
                textData.push(`상황 변인을 제외한 일반적인 스트레스(Adj es) 수준이 예상보다 높은 상태일 수 있다. `);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 일반적 스트레스 수준(Adj es)의 일반적이지 않은 상승에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(EA<6){
            if(AdjD<0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 가용 자원이 정상집단의 예상값보다 더 제한되어 있기에 통제능력과 스트레스 저항력을 반영한 지표가 음수를 보이는 것은 쉽게 예상할 수 있다. 현재 수검자의 일반적 통제능력(Adj D) 점수는 타당하고 신뢰할 수 있다.`);
                textData.push(`수검자는 가용 자원이 낮아(Low EA) 복잡한 사회를 살다 보면 겪게 되는 다양한 일상적인 스트레스에도 쉽게 심리가 혼란될(disorganized) 정도로 만성적으로 더 취약할 것이다.`);
                textData.push(`어린 아동의 경우 심리적 발달이 충분하지 않아 가용 자원(EA)이 예상한 수준만큼 나타나지 않을 수 있으므로 해석에 주의해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD>=0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 가용 자원이 정상집단의 예상값보다 더 제한되어 있지만, 수검자는 상황 단서가 상당히 명료하고 잘 구조화되어 있는 환경에서는 더 효과적으로(effectively) 기능할 수 있다. `);
                textData.push(`가용 자원이 낮아(Low EA) 복잡한 사회를 살다 보면 겪게 되는 다양한 평소의 일상적인 스트레스에도 쉽게 심리가 혼란될(disorganized) 정도로 만성적으로 더 취약한 수검자로 잘못 해석할 수 있으니 주의해야 한다. `);
                textData.push(`어린 아동의 경우 심리적 발달이 충분하지 않아 가용 자원(EA)이 예상한 수준만큼 나타나지 않을 수 있으므로 해석에 주의해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

    }
    if(age<10){
        if(4<=EA && EA<=9){
            if(AdjD==0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하고 신뢰할 수 있다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD>0){
                textData.push(`[잠정 결과2] 일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하지 않으며 신뢰할 수 없다.`);
                textData.push(`수검자가 현재 가지고 있는 가용 자원(EA)보다 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)이 낮을 수 있으며, 이러한 양상은 일반적이지 않다.`);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 스트레스 수준(es)과 일반적 스트레스 수준(Adj es)에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(4<=EA){
            if(AdjD<0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표가 타당한지에 대한 판단을 보류해야 한다.`);
                textData.push(`수검자가 현재 가지고 있는 가용 자원(EA)보다 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)이 높을 수 있으며, 이러한 양상은 일반적이지 않다.`);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 상황 변인을 제외한 일반적 스트레스 수준(Adj es)의 일반적이지 않은 상승에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(9<EA){
            if(AdjD>0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 타당하고 신뢰할 수 있다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD==0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA) 점수를 통해 볼 때, 수검자의 통제능력과 스트레스 저항력을 반영하는 지표는 수검자의 원래 능력 수준보다 낮게 추정되었을 가능성이 있다.`);
                textData.push(`상황 변인을 제외한 일반적인 스트레스(Adj es) 수준이 예상보다 높은 상태일 수 있다. `);
                textData.push(`4단계(step4)에서 현재 경험하고 있는 일반적 스트레스 수준(Adj es)의 일반적이지 않은 상승에 초점을 두고 통제능력과 스트레스 저항력에 대한 지표를 다시 점검해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

        if(EA<4){
            if(AdjD<0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 가용 자원이 정상집단의 예상값보다 더 제한되어 있기에 통제능력과 스트레스 저항력을 반영한 지표가 음수를 보이는 것은 쉽게 예상할 수 있다. 현재 수검자의 일반적 통제능력(Adj D) 점수는 타당하고 신뢰할 수 있다.`);
                textData.push(`수검자는 가용 자원이 낮아(Low EA) 복잡한 사회를 살다 보면 겪게 되는 다양한 일상적인 스트레스에도 쉽게 심리가 혼란될(disorganized) 정도로 만성적으로 더 취약할 것이다.`);
                textData.push(`어린 아동의 경우 심리적 발달이 충분하지 않아 가용 자원(EA)이 예상한 수준만큼 나타나지 않을 수 있으므로 해석에 주의해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
            if(AdjD>=0){
                textData.push(`일반적 통제능력(Adj D)과 가용 자원(EA)을 통해 볼 때, 수검자의 가용 자원이 정상집단의 예상값보다 더 제한되어 있지만, 수검자는 상황 단서가 상당히 명료하고 잘 구조화되어 있는 환경에서는 더 효과적으로(effectively) 기능할 수 있다. `);
                textData.push(`가용 자원이 낮아(Low EA) 복잡한 사회를 살다 보면 겪게 되는 다양한 평소의 일상적인 스트레스에도 쉽게 심리가 혼란될(disorganized) 정도로 만성적으로 더 취약한 수검자로 잘못 해석할 수 있으니 주의해야 한다. `);
                textData.push(`어린 아동의 경우 심리적 발달이 충분하지 않아 가용 자원(EA)이 예상한 수준만큼 나타나지 않을 수 있으므로 해석에 주의해야 한다.`);
                result.nextStep = 3;
                result.textData = textData;
                result.curStep = 2;
                return result;
            }
        }

    }
    result.goNext = false;
    result.nextStep = 3;
    result.curStep = 2;
    result.textData= textData;
    return result;

}

function step3(EBLeft, EBRight, EA, Lambda, age, M, WSumC){
    var result = {};
    var textData = [];
    if(EBLeft>0 && EBRight>0){
        if((EA>3.5 && Lambda<=0.99) || (EA>6 && Lambda>=1)){
            textData.push(`가용 자원비율(EB)과 Lambda(L)를 통해 볼 때, 가용 자원(EA)의 지표와 일반적 통제능력(Adj D)의 지표는 타당하고 신뢰할 수 있다.`);
            result.nextStep = 4;
            result.textData = textData;
            result.curStep = 3;
            result.goNext = false;
            return result;
        }

        if(EA<4){
            if(Lambda<=0.99){
                textData.push(`가용 자원비율(EB)과 Lambda(L)를 통해 볼 때, 가용 자원(EA)의 지표는 신뢰할 수 있으나, 일반적 통제능력(Adj D)의 지표는 신뢰할 수 없다.`);
                textData.push(`가용 자원(EA)이 낮은 수검자(Low EA People)는 잘 구조화되어 있고 단서가 명확한 상황이 아니라면 통제능력이 적절하게 기능한다고 보기 어렵다. `);
                textData.push(`4단계(step4)와 5단계(step5)에서 전체 스트레스(es) 양과 상황 변인을 제외한 일반적 스트레스(Adj es) 양을 나타내는 지표 점수를 고려하여 조심스럽게 해석해야 한다.`);
                result.nextStep = 4;
                result.textData = textData;
                result.curStep = 3;
                result.goNext = false;
                return result;
            }
            if(Lambda>=1){
                textData.push(`가용 자원비율(EB)과 Lambda(L)를 통해 볼 때, 가용 자원(EA)의 지표는 타당하지 않다. 그러므로 가용 자원(EA)을 토대로 산출하는 통제능력(D, Adj D) 지표를 통해 수검자의 통제능력을 평가하는 것은 적절하지 않다.`);
                textData.push(`전체 반응 수(R)가 17개 미만일 경우 상황적 방어를 고려할 수 있다.`);
                result.nextStep = 4;
                result.textData = textData;
                result.curStep = 3;
                result.goNext = true;
                return result;
            }
        }

        if((age>=18 && (3.5<EA && EA<6.5)) || ((13<=age && age<=17) && (3.5<EA && EA<7))){
            if(Lambda>=1){
                textData.push(`가용 자원비율(EB)과 Lambda(L)를 통해 볼 때, 가용 자원(EA)의 지표는 타당하며, 일반적 통제능력(Adj D) 지표는 타당하지 않을 수 있다.`);
                textData.push(`일반적 통제능력(Adj D)이 양수라면, 상황 변인을 제외한 일반적 스트레스(Adj es)가 매우 낮은 것일 수 있다. 5단계에서 전체 스트레스(es)를 신중하게 평가하여 수검자의 통제능력에 대한 가정을 수정해야 한다.`);
                result.nextStep = 4;
                result.textData = textData;
                result.curStep = 3;
                result.goNext = false;
                return result;
            }
        }
    }

    if(EBLeft==0 || EBRight==0){
        if(M==0 && WSumC>3.5){
            textData.push(`가용 자원비율(EB)과 Lambda(L)를 통해 볼 때, 가용 자원(EA)의 지표와 일반적 통제능력(Adj D) 지표를 통해 유추한 수검자의 통제능력에 대한 가설은 적절하지 않다.`);
            textData.push(`수검자의 일반적 통제능력(Adj D)은 파악할 수 없으며, 현재 통제능력(D)은 취약한 상태라고 결론 내리는 게 적절하다. 주의할 점은 현재 통제능력(D) 지표가 해석적 의미가 있으려면, 가용 자원(EA)은 5.0을 초과하고, 회피 유형에 해당하지 않아야(Lambda(L) < 1.0) 한다는 것이다.`);
            textData.push(`현재 수검자는 강렬한 감정에 압도되어 통제할 수 없는 상태에 있을 수 있다. 이러한 정서적 범람(Emotional Flooding) 상태는 만성적이거나 성격 특성에 의한 과정이 아니라 일상적이지 않은 강한 정서를 효과적으로(effectively) 처리하지 못하여 발생하는 것이다.`);
            textData.push(`수검자가 경험하는 이러한 감정의 강도는 파괴적이고, 감정을 자극적이고 압도적인 불안정한 형태로 만들 수 있다. `);
            textData.push(`감정의 불안정성(lability)은 (충동적으로 보일 수도 있는) 평소와 다른 행동을 유발한다. 이러한 행동은 일종의 해소 형태를 가지며, 행동 이후에 어떤 종류의 심리적 재구성이 전형적으로 뒤따른다.`);
            textData.push(`정서적 범람 상태는 사고과정에도 중대한 영향을 주어 의사결정을 내리는 동안, 정확한 주의와 집중력 유지에 필요한 관념 활동을 지연시킨다. 이러한 상황에서는 관념적 충동성이나 행동적 충동성이 나타날 가능성이 유의미하게 증가한다. `);
            textData.push(`정서적 범람(Emotional Flooding)에 대한 자세한 내용은 [정서 군집]에서 다룬다.`);
            result.nextStep = 4;
            result.textData = textData;
            result.curStep = 3;
            result.goNext = true;
            return result;
        }
        if(M>3 && WSumC==0){
            textData.push(`가용 자원비율(EB)과 Lambda(L)를 통해 볼 때, 가용 자원(EA)의 지표와 일반적 통제능력(Adj D) 지표를 통해 유추한 수검자의 통제능력에 대한 가설은 적절하지 않다. `);
            textData.push(`수검자의 일반적 통제능력(Adj D)은 파악할 수 없으며, 현재 통제능력(D)은 취약한 상태라고 결론 내리는 게 적절하다. 주의할 점은 현재 통제능력(D) 지표가 해석적 의미가 있으려면, 가용 자원(EA)은 5.0을 초과하고, 회피 유형에 해당하지 않아야(Lambda(L) < 1.0) 한다는 것이다.`);
            textData.push(`수검자는 감정을 억제하거나 차단하는데, 상당히 많은 에너지를 투입하고 있을 것이다. 이런 경우, 일반적인 사람이 가지고 있는 가용 자원보다 더 많은 자원을 필요로 한다. 자극 과부하(stimulus overload)에 대한 취약성의 결과로 상당한 혼란(disorganization)이 나타날 수 있다.`);
            textData.push(`정서적 억제(emotional constriction)에 대한 자세한 내용은 [정서 군집]에서 다룬다.`);
            result.nextStep = 4;
            result.textData = textData;
            result.curStep = 3;
            result.goNext = true;
            return result;
        }
    }
    result.goNext = false;
    result.nextStep = 4;
    result.curStep = 3;
    result.textData= textData;
    return result;
}

function step4(Adjes){
    var textData = [];
    var result = {};
    if(5<=Adjes && Adjes<=9){
        textData.push(`[잠정 결과1] [정상범주] 일반적 스트레스(Adj es)를 통해 볼 때, 가용 자원(EA)이 타당한 상태라면 수검자의 일반적 통제능력(Adj D) 지표는 타당하고 신뢰할 수 있다.`);
        result.textData = textData;
        result.curStep = 4;
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
    if(Adjes > 9){
        textData.push(`[잠정 결과2] 일반적 스트레스(Adj es)를 통해 볼 때, 가용 자원(EA)이 타당한 상태라면 수검자의 일반적 통제능력(Adj D) 지표는 과소 추정되었을 것이며, 통제능력과 스트레스 저항력의 타당하고 신뢰할 수 있는 지표로 보기 어렵다.`);
        textData.push(`상황 변인을 제외한 일반적 스트레스(Adj es)가 높다는 것은 일상적이지 않은 심리적 복잡성을 겪고 있음을 시사한다. 어떠한 원인에 의해 심리적 혼란을 경험하고 있을 수 있다.`);
        textData.push(`5단계(step5)에서 수검자의 일반적인 통제능력(Adj D)이 낮게 추정된 이유를 살펴봐야 한다.`);
        result.textData = textData;
        result.curStep = 4;
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
    if(Adjes<5){
        textData.push(`[잠정 결과3] 일반적 스트레스(Adj es) 점수를 통해 볼 때, 가용 자원(EA)이 타당한 상태라면 수검자의 일반적 통제능력(Adj D) 지표는 과대 추정되었을 것이며, 통제능력과 스트레스 저항력의 타당하고 신뢰할 수 있는 지표로 보기 어렵다.`);
        textData.push(`일반적 통제능력(Adj D)이 양수일 경우 과대 추정되었을 가능성이 증가한다.`);
        textData.push(`5단계(step5)에서 수검자의 일반적인 통제능력(Adj D)이 높게 추정된 이유를 살펴봐야 한다.`);
        result.textData = textData;
        result.curStep = 4;
        result.nextStep = 5;
        result.goNext = false;
        return result;
    }
}

function step5(es, FM, m, SumCprime, SumV, SumT, SumY){
    var textData = [];
    var result = {};
    if(es>=4 && (FM+m<SumCprime+SumV+SumT+SumY)){
        textData.push(`[잠정 결과1] 스트레스 비율(eb)을 통해 볼 때, 어떠한 원인이 일반적 통제능력(Adj D) 지표에 영향을 주고 있는지 확신할 수 없지만, 수검자는 어떤 심리적 불편(distress)을 겪고 있을 가능성이 있다.`);
        textData.push(`수검자가 겪고 있는 심리적 불편을 만들어 내는 심리 활동의 종류와 심리적 불편의 유형은 Adj es 점수를 구성하는 지표를 통해 파악해야 한다. `);
        textData.push(`일반적으로 정상집단의 경우 eb의 좌항(FM+m)이 우항(SumC'+SumV+SumT+SumY)보다 클 것이므로 수검자가 보이는 이러한 점수 형태는 일반적인 양상이 아닐 수 있다.`);
        result.textData = textData;
        result.curStep = 5;
        result.nextStep = 6;
        result.goNext = true;
        return result;
    }
    if(FM>=6){
        textData.push(`[잠정 결과2] 스트레스 비율(eb)을 통해 볼 때, 정상집단의 예상범주(FM= 3 ~ 5)보다 많은 충족되지 않은 욕구에 의한 심리 활동이 일반적 통제능력과 스트레스 저항력에 영향을 주고 있을 것이다.`);
        textData.push(`수검자의 사고방식은 통상적인 방식보다 더 일정한 규칙이 없고 앞뒤가 맞지 않아 조리가 없어 보일 것이다.`);
        textData.push(`이러한 관념 활동은 일반적인 것보다 욕구가 더 많이 충족되지 않았을 때 야기된다. 충족되지 않은 욕구는 관념 활동에 영향을 주어 사고과정을 원활하지 않게 만들 수 있다.`);
        textData.push(`욕구 관련 요구(need-related demand)는 의도적 사고방식을 방해하고, 주의력과 집중력에 간섭할 수 있다. 다시 말해서, 의식적 사고 활동이 적절하게 이행되지 않고, 주의력과 집중력이 저하 될 수 있다. 이러한 종류의 통제 밖에 있는 외곽사고는 강박사고, 외상 경험, 정서 결핍 때문에 나타날 수 있다.`);
        result.textData = textData;
        result.curStep = 5;
        result.nextStep = 6;
        result.goNext = true;
        return result;
    }
    if(FM<=1){
        textData.push(`[잠정 결과3] 스트레스 비율(eb)을 통해 볼 때, 정상집단의 예상범주(FM= 3 ~ 5)보다 적은 충족되지 않은 욕구와 관련된 심리적 활동이 일반적 통제능력과 스트레스 저항력에 영향을 주고 있을 것이다. `);
        textData.push(`충족되지 않은 욕구가 정상집단의 예상범주보다 적다는 것은 수검자의 욕구 상태가 일반적인 방식으로 경험되지 않는다는 것을 의미할 수 있다.`);
        textData.push(`또는 다른 사람들보다 빠르게 행동화하여 해소되는 것을 의미할 수 있다. 이러한 경향성은 통제능력이 적절하게 기능하지 않는 충동적인 모습이나, 억제되지 않는 자극추구 경향으로 보일 수 있다.`);
        result.textData = textData;
        result.curStep = 5;
        result.nextStep = 6;
        result.goNext = true;
        return result;
    }
    if(SumCprime>=3){
        textData.push(`[잠정 결과4] 스트레스 비율(eb)을 통해 볼 때, 정상집단의 예상범주(SumC’ ≤1)보다 많은 정서 억제에 관련된 심리 활동이 일반적 통제능력과 스트레스 저항력에 영향을 주고 있을 것이다. `);
        textData.push(`수검자는 다른 사람에 비해 외현화하고 싶은 감정을 과도하게 내재화하여, 감정 표현을 억제하는 경향이 뚜렷한 것으로 볼 수 있다. 자세한 내용은 정서 영역에서 다룬다.`);
        textData.push(`이러한 심리 과정은 불안, 슬픔, 긴장, 걱정 등을 포함하는 주관적 불편을 경험하게 한다. 그리고 신체적 기능 이상의 원인이 될 수도 있다.`);
        result.textData = textData;
        result.curStep = 5;
        result.nextStep = 6;
        result.goNext = true;
        return result;
    }
    if(SumV>=1){
        textData.push(`[잠정 결과5] 스트레스 비율(eb)을 통해 볼 때, 정상집단의 예상범주(SumV=0)보다 많은 부정적 자기성찰에 관련된 심리 활동이 일반적 통제능력과 스트레스 저항력에 영향을 주고 있을 것이다.`);
        textData.push(`수검자는 일반적인 대부분의 다른 사람들보다 자기의 부정적인 특징에 초점을 두는 자기 탐색(self-inspecting) 행동을 많이 할 것이다. 이러한 자기 탐색은 불편이나 자기비하를 경험하게 하고, 우울장애나 자기 파괴적 사고(self destructive thinking)의 전조가 될 수 있다.`);
        textData.push(`차원 반응(Vista)은 대개 지속적 자기비하를 반영하지만, 상황적으로 촉발된 죄책감이나 수치심을 반영할 수도 있다. 그렇기에 상황적으로 촉발된 것인지 검토하기 위해 개인력을 조심스럽게 검토해야 한다. 상황적 요인이 발견된다면, 차원반응(SumV)을 제외한 Adj es 점수를 산출하여 Adj D 점수를 다시 계산해야 한다.`);
        textData.push(`만약 Adj D점수가 바뀐다면, 수검자의 일반적인 통제능력과 스트레스 저항력에 대한 해석할 때, 원래 Adj D 점수에 따른 해석에 바뀐 Adj D점수에 따른 대안적 해석을 추가해야 한다.`);
        textData.push(`
        * 차원(Vista) 반응을 조정한 이유에 대해서도 다룬다.`);
        result.textData = textData;
        result.curStep = 5;
        result.nextStep = 6;
        result.goNext = true;
        return result;
    }
    if(SumT>=2){
        textData.push(`[잠정 결과6] 스트레스 비율(eb)을 통해 볼 때, 정상집단의 예상범주(SumT=1)보다 많은 대인관계 위축에 관련된 심리 활동이 일반적 통제능력과 스트레스 저항력에 영향을 주고 있을 것이다.`);
        textData.push(`수검자는 정서적으로 중요한 대상을 상실하면서 정서적 결핍을 느꼈을 것이다. 이러한 경험은 주로 상황적이므로 개인력을 탐색하여 일시적인 상태인지 지속적인 특성적인지 판단해야 한다.`);
        textData.push(`개인력에서 최근의 상황적 요인이 발견된다면, 재질 반응(SumT)을 1로 고정하여 Adj es를 다시 산출하여 Adj D를 다시 계산해야 한다. 만약 Adj D점수가 바뀐다면, 수검자의 일반적인 통제능력과 스트레스 저항력에 대한 해석할 때, 원래 Adj D 점수에 따른 해석에 바뀐 Adj D점수에 따른 대안적 해석을 추가해야 한다.`);
        textData.push(`
        * 재질(Texture) 반응을 조정한 이유에 대해서도 다룬다.
        `);
        textData.push(`개인력에서 최근의 상황적 요인이 발견되지 않는다면, 정서적 결핍이나 고독감의 근원이 오래되었으며, 대인관계에서 과도한 친밀감의 욕구를 보인다고 가정하는 게 적절하다. `);
        result.textData = textData;
        result.curStep = 5;
        result.nextStep = 6;
        result.goNext = true;
        return result;
    }
    result.textData = textData;
    result.curStep = 5;
    result.nextStep = 6;
    result.goNext = true;
    return result;
}