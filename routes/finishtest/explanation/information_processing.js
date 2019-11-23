function calculateExnerTable4(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable4 = calculateExnerTable4;

function nextStep(stepNum, result, scores) {
    var step = eval(`step${stepNum}(scores)`);
    result.push(step);
    console.warn(step);
    if (step.goNext == true) {
        return result;
    }
    return eval(`nextStep(${step.nextStep}, result, scores)`);
}

function step1({ L, Zf }) {
    var result = {};
    result.textData = [];
    result.curStep = 1;
    if (L <= 0.99) {
        if (Zf >= 14) {
            result.textData.push('[잠정 결과1a] 조직화(Z)를 고려할 때, 수검자는 반점 영역을 처리하는데 일상적인 것보다 더 많은 노력을 들일 것이다.');
        } else if (Zf >= 9 && Zf <= 13) {
            result.textData.push('[잠정 결과1b] [정상범주] 조직화(Z)를 고려할 때, 수검자는 반점 영역을 처리하는데 대부분의 사람에서 예상되는 수준으로 노력을 들일 것이다.');
        } else if (Zf <= 8) {
            result.textData.push('[잠정 결과1c] 조직화(Z)를 고려할 때, 수검자는 반점 영역을 처리하는데 조심스럽거나, 처리 접근에 열의가 없을 것이다. 주의를 기울여 충분히 자극 장을 탐색하지 않고 눈에 쉽게 띄는 몇 개의 자극으로만 정보를 처리하는 경향이 보일 수 있다.');
        }
        result.goNext = false;
        result.nextStep = 2;
        return result;
    }
    if (L >= 1) {
        if (Zf >= 11) {
            result.textData.push('[잠정 결과2a] 조직화(Z)를 고려할 때, 수검자는 반점 영역을 처리하는데 회피 유형(avoidant style)에서 예상되는 것보다 노력을 더 많이 들일 것이다. 이러한 결과가 나타난 원인에 대해 파악할 필요가 있다.');
        } else if (Zf >= 6 && Zf <= 10) {
            result.textData.push('[잠정 결과2b] [정상범주] 조직화(Z)를 고려할 때, 수검자는 반점 영역을 처리하는데 복잡한 것을 피하고 (노력을) 아끼는 경향을 보이는 회피 유형(avoidant style)에서 예상할 수 있는 수준으로 노력을 들일 것이다. 경계하거나 조심스러운 경향을 보이는 회피 유형에 일치하는 결과이고, 처리노력이 적절하지 않다는 것을 의미하지 않는다.');
        } else if (Zf <= 5) {
            result.textData.push('[잠정 결과2c] 조직화(Z)를 고려할 때, 수검자가 반점 영역을 처리하는데 미치는 회피 유형(avoidant style)의 영향이 매우 상당할 것이다. 이러한 제한적인 처리노력으로 인해 잠재적인 적응 문제가 생길 수 있다.');
        }
        result.goNext = false;
        result.nextStep = 2;
    }
    result.goNext = false;
    result.nextStep = 2;
    return result;
}

function step2({ Dd, W, D }) {
    var result = {};
    result.textData = [];
    result.curStep = 2;
    if (Dd <= 3) {
        if (D >= 1.3 * W || D <= 1.6 * W) {
            result.textData.push('[잠정 결과1] [정상범주] 반응 위치 비율(W:D:Dd)을 고려할 때, 수검자가 들이는 처리 노력이나 처리 전략은 대부분의 다른 사람들에서 예상할 수 있는 범주에 있을 것이다. 이 결과는 잠정적이므로 3단계(step3)에서 다루는 위치 계열에 따라 노력이나 동기를 더 확인할 필요가 있다.');
        } else if (W > D) {
            result.textData.push('[잠정 결과2a] 반응 위치 비율(W:D:Dd)을 고려할 때, 수검자가 들이는 처리 노력이나 처리 전략이 여느 때와 무언가 다를 것이다. 수검자는 처리 노력을 많이 들일 것이다. 이러한 경향성은 전체 반응(W)이 8개를 초과할 경우 더 명확할 것이다.');
        } else if (W < D) {
            result.textData.push('[잠정 결과2b] 반응 위치 비율(W:D:Dd)을 고려할 때, 수검자가 들이는 처리 노력이나 처리 전략이 여느 때와 무언가 다를 것이다. 수검자는 처리 노력을 매우 아낄(economical) 것이다. 이러한 경향성은 부분 반응(D)이 전체 반응(W)보다 2배 이상 많으면 더 명확할 것이다.');
        }
        result.goNext = false;
        result.nextStep = 3;
        return result;
    }

    if (Dd >= 4) {
        if (W > D) {
            result.textData.push('[잠정 결과2c1] 반응 위치 비율(W:D:Dd)을 고려할 때, 수검자가 들이는 처리 노력이나 처리 전략이 여느 때와 무언가 다를 것이다. 수검자는 처리 노력을 많이 들일 것이다. 흔하지 않은 부분 반응(Dd)은 자극 장을 엄밀히 검토하고 단기 기억에 저장한 심상을 재구성해야 반응할 수 있으므로, 흔하지 않은 부분 반응(Dd)이 많다는 것은 처리 노력을 더 많이 들인다는 것을 의미한다.<br/>');
        } else if (W < D) {
            result.textData.push('[잠정 결과2c2] 반응 위치 비율(W:D:Dd)을 고려할 때, 수검자가 들이는 처리 노력이나 처리 전략이 여느 때와 무언가 다를 것이다. 처리 노력이 많이 필요한 흔하지 않은 부분 반응(Dd)이 많은 상황에서 처리 노력이 더 많이 드는 전체 반응(W)보다 처리 노력이 덜 드는 부분 반응(D)이 많다는 것은 아래 사항에 해당하는 경우일 수 있다. <br/>');
            result.textData.push('1) 완벽주의에 가까운 강박적인 경향으로(obsessive-like tendency) 인해 자극 장의 세부적인 면에 불필요하게 몰두할 것이다. 수검자는 자신의 의사결정 능력을 자주 언짢게 느끼고 있으며, 수검자는 덜 복잡하고 더 다루기 쉬운 자극 장을 처리하는 게 더 쉽다는 걸 알기 때문에 전체 반응(W)보다 처리노력이 덜 드는 부분 반응(D)을 더 많이 할 것이다. 특히, 강박지표(OBS)에 해당하면 이러한 경향성이 더 뚜렷할 수 있다.<br/>');
            result.textData.push('2) 수검자는 매우 조심스럽고 의심이 많으며, 무언가 모호하게 지각되는 것에 최소한으로 관여하려고 할 것이다. 모호한 것을 최소화하기 위해 윤곽이 명확한 드문 부분(Dd)을 선택하거나, 반응 위치를 조합하여 윤곽이 명확해 보이는 드문 부분(Dd)을 만들기 때문에 드문 부분 반응(Dd)이 많아질 수 있다. 이러한 결과는 회피 유형(avoidant style)이나 과경계지표(HVI)에 해당하는 수검자에서 흔하게 나타난다.<br/>');
            result.textData.push('3) 수검자가 거부적 태세(Negativistic set)를 가지고 있어서, 공백(white space)을 과도하게 사용하도록 촉진된 것일 수 있다. 어떤 공간 반응은 전체 반응(WS)이나 부분 반응(DS)일 수 있지만, 과도하게 공백을 사용할 경우 드문 부분 반응(DdS)이 흔하게 나타난다. 흔하지 않은 종류의 처리 전략이지만 어떤 집단에서는 특별하지 않을 수 있다. 상당한 정서적 혼란(disarray) 상태에서는 흔하게 나타난다.<br/>');
        }
        result.goNext = false;
        result.nextStep = 3;
        return result;
    }

    result.goNext = false;
    result.nextStep = 3;
    return result;
}

function step3({  }) {
    var result = {};
    result.textData = [];
    result.curStep = 3;
    result.textData.push('[질적 해석]<br/><br/><br/><br/><br/><br/><br/><br/>');


    result.goNext = false;
    result.nextStep = 4;
    return result;
}

function step4({W, M, Zf, }) {
    var result = {};
    result.textData = [];
    result.curStep = 4;
    if (W > M) {
        if (W / M == 1.5 || W / M == 2 || W / M == 3) {
            result.textData.push('잠정 결과1a] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)과 결과를 얻는데 필요한 가용 자원을 반영하는 경험유형(EBstyle)을 고려할 때, 수검자는 자신이 가지고 있는 성취역량(가용 자원)에 비해 높은 성취목표(기대수준)를 가지고 있을 것이다. <br/>');
            result.textData.push('성취목표(기대수준)와 성취역량(가용 자원)이 일치하는 것이 적절한 상태이다. 하지만, 수검자는 낮은 자원 수준에도 불구하고 높은 목표를 가지고 있으므로 실패나 좌절의 경험을 자주 겪을 것이다. 이러한 경향은 특히, 발달질(DQ)에서 DQ+의 빈도가 낮으면 더 명확해질 것이다.<br/>');
            result.textData.push('자기 지각 영역에서 자기 효능감에 관련하여 개념화를 할 수도 있다.<br/>');
            result.textData.push('* 기준을 초과하지 않는 점수는 목표와 능력이 균형을 이루는 것이 아니라, 단지 해석적 의미가 없다는 것을 뜻한다.<br/>');
        } else if ((W / M >= 5 && W / M <= 8) || (W / M == 4) || (W / M == 3)) {
            result.textData.push('[잠정 결과1b] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)에서 성취역량(가용 자원)에 비해 높은 성취목표(기대수준)를 가지고 있는 것으로 나타나지만, 수검자의 연령을 고려하면 적절한 수준으로 볼 수 있다.<br/>');
            result.textData.push('아동과 어린 청소년의 경우, 현실적인 역량보다 자신의 능력 수준을 지나치게 높게 평가하고, 그것에 근거하여 상당히 높은 목표를 설정하는 경향이 있다. 하지만 어린 수검자는 그러한 목표에 큰 가치를 부여하지 않는다.<br/>');
            result.textData.push('그렇기에 낮은 자원 수준으로 인해 실패를 겪더라도 크게 신경을 쓰지 않으며, 그로 인한 좌절을 경험하는 기간도 짧을 것이다.<br/>');
        }
        result.goNext = false;
        result.nextStep = 5;
        return result;
    }

    if (W < M) {
        if (W / M == 0.75 && Zf >= 11) {
            result.textData.push('[잠정 결과2a] 처리 노력에 영향을 주는 동기 수준을 결정하는 ‘어떤 행동이 어떤 결과를 가져올 것이라는 믿음’을 반영하는 기대 비율(Aspirational Ratio)과 결과를 얻는데 필요한 가용 자원을 반영하는 경험유형(EBstyle)을 고려할 때, 수검자는 자신이 가지고 있는 성취역량(가용 자원)에 비해 낮은 성취목표(기대수준)를 가지고 있을 것이다. 이러한 결과를 보이는 수검자는 성취목표를 설정하는 데 있어서 신중하고 조심스러울 것이다.<br/>');
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

    result.goNext = false;
    result.nextStep = 5;
    return result;
}

function step5({ Zd }) {
    var result = {};
    result.textData = [];
    result.curStep = 5;
    if (Zd >= -3.0 && Zd <= 3.0) {
        result.textData.push('[잠정 결과1] [정상범주] 정보 처리 능률(Zd)을 고려할 때, 수검자는 자극 장의 탐색 활동에서 다른 사람들과 비슷한 수준의 능률(efficiency)을 보일 것이다. 다시 말해서 효과적인(effectively) 처리에 대한 동기가 적절한 수준일 것이다.');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }
    if (Zd < -3.0) {
        result.textData.push('[잠정결과2] [과소 통합 형태의 탐색 활동: under-incorporative form of scanning activity] 정보 처리 능률(Zd)을 고려할 때, 수검자는 과소 통합 형태의 탐색 활동을 할 것이다. 자극 장을 성급하게 아무렇게나 탐색하고, 자주 자극 장에 존재하는 중요한 부분이나 결정적인 단서를 주의 깊게 살피지 않을 것이다. 다시 말해서 효과적인(effectively) 처리에 대한 동기가 낮을 것이다.<br/>');
        result.textData.push('청소년이나 성인의 경우에서는 상당히 불리한 점(liability)이 될 수 있다. 과소 통합은 현재의 단서를 잘못 해석할 잠재성을 만들어 내며, 효과적이지(effective) 않은 행동 방식으로 이어진다. 과소 통합 형태의 탐색 활동은 지연과 충분한 탐색을 강조하는 인지 재구조화 방법을 통해 쉽게 교정할 수 있다.<br/>');
        result.textData.push('10세 미만의 아동에서는 과소 통합이 흔하게 나타나기 때문에 아동이 심한 어려움을 호소하지 않는다면 크게 관심을 두지 않아도 된다.<br/>');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }
    if (Zd > 3.0) {
        result.textData.push('[잠정 결과3] [과다 통합 형태의 탐색 활동: over-incorporation form of scanning activity] 정보 처리 능률(Zd)을 고려할 때, 수검자는 특성적인 유형인 과다 통합 형태의 탐색 활동을 보일 것이다. 탐색 활동에서 노력을 더 많이 들이는 격심하고 지속적인 수고(exertion)를 보일 것이다. 수검자는 부주의한 것을 명백하게 피하길 원하며, 상황의 특징을 탐색하는데 필요한 것보다 더 많이 노력을 들이는 것에 동기화되어 있을 것이다. 다시 말해서 효과적인(effectively) 처리에 대한 동기가 높을 것이다.<br/>');
        result.textData.push('비록 추가되는 노력 때문에 능률적이지(efficient) 않지만, 입력에 포함되는 모든 자극 단서를 확보하므로 때때로 자원이 될 수 있다.<br/>');
        result.textData.push('이러한 결과는 수검자가 심리적 혼란(disorganization)을 겪고 있으면 불리한 점(liability)이 될 수 있다. 이러한 유형이 과도해지면 의사결정에서 불필요하게 머뭇거릴 수 있다.<br/>');
        result.goNext = false;
        result.nextStep = 6;
        return result;
    }

    result.goNext = false;
    result.nextStep = 6;
    return result;
}

function step6({ PSV }) {
    var result = {};
    result.textData = [];
    result.curStep = 6;
    if (PSV == 1) {
        result.textData.push('[잠정 결과1] 보속 반응(PSV)을 고려할 때, 수검자는 때때로 주의전환에 약간의 어려움을 보일 수 있으며, 그로 인해 처리 활동이 능률적이지(efficiency) 않게 될 것이다.<br/>');
        result.textData.push(`<span style="font-weight: bold;">참고) 카드 내 보속은 처리 능률(efficiency)의 문제로 볼 수 있지만, 내용 보속은 처리 작용과 관련이 없으며 몰두해 있는 주제에 대한 정보를 제공한다. 그리고 기계적 보속은 심각한 인지적-신경학적 문제를 반영한다.<span>`);
        result.goNext = false;
        result.nextStep = 7;
        return result;
    }
    if (PSV >= 2) {
        result.textData.push('[잠정 결과2] 보속 반응(PSV)을 고려할 때, 수검자는 주의전환에 상당한 어려움을 보일 수 있으며, 그로 인해 처리 활동 활동이 현저하게 능률적이지(efficiency) 않게 될 것이다.<br/>');
        result.textData.push('이러한 결과는 어린 아동, 상당한 심리적 혼란(disarray)을 겪고 있는 사람, 신경학적 문제가 있는 사람에서 나타나므로 로르샤하 검사에 근거한 인지 기능은 더 조심스럽게 평가해야 한다.<br/>');
        result.textData.push('참고) 카드 내 보속은 처리 능률(efficiency)의 문제로 볼 수 있지만, 내용 보속은 처리 작용과 관련이 없으며 몰두해 있는 주제에 대한 정보를 제공한다. 그리고 기계적 보속은 심각한 인지적-신경학적 문제를 반영한다.<br/>');
        result.goNext = false;
        result.nextStep = 7;
        return result;
    }

    result.goNext = false;
    result.nextStep = 7;
    return result;
}

function step7({ age, dqplus, dqVSlashPlus, dqv, copyingStyle }) {
    var result = {};
    result.textData = [];
    result.curStep = 7;

    // 13세 이상 청소년
    if(age>=13){
        var averageDQplus = [];

        if(copyingStyle=="Introversive"){
            averageDQplus = [7, 10];
        } else if (copyingStyle=="Extratensive" || copyingStyle=="Ambitent"){
            averageDQplus = [5, 8];
        }

        if(copyingStyle=="Interversive" || copyingStyle=="Ambitent"){
            averageDQv = [0, 1];
        } else if(copyingStyle=="Extratensive"){
            averageDQv = [1, 2]
        }

        var sum = dqv + dqVSlashPlus;
        var sumaverage = 0;
        if(copyingStyle=="Introversive" || copyingStyle=="Ambitent"){
            sumaverage = 1;
        } else {
            sumaverage = 2;
        }

        if(averageDQplus[0]<=dqplus && dqplus<=averageDQplus[1]){
            if(sum<=sumaverage){
                result.textData.push(`[잠정 결과1] [정상범주] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 대개 매우 적절할 것이다. <br />`)
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }

            if(sum>sumaverage){
                result.textData.push(`[잠정 결과2] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 대개 적절할 것이다. 하지만, 때때로 처리활동이 불안정해져서 적절하지 않거나 성숙하지 않은 수준으로 약해질 수 있다.<br/>`)
                result.textData.push(`이러한 결과는 아동에서는 흔하게 나타나지만, 청소년이나 성인에서는 흔하지 않다. 정교하지 않은 처리는 입력된 정보가 자주 느슨하거나 흠결 있게 해석되는 원인이나, 적응 어려움의 전조가 될 수 있다.`);
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }

        }

        if(dqplus>averageDQplus[1]){
            if(sum<=sumaverage){
                result.textData.push(`[잠정 결과3] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 양호할 것이고, 아마도 더 정확히 말하면 복잡할 것이다. <br/>`);
                result.textData.push(`학력 수준이 높은 수검자에서 흔하게 나타나며, 더 능률적인(efficient) 인지 기능이나 더 효과적인(effective) 형태의 적응을 의미하지는 않는다. 이것은 단순히 처리의 질(quality)이 높다는 것을 의미할 뿐이다. <br/>`);

                result.nextStep = 8;
                result.goNext = false;
                return result;
            }

            if(sum>sumaverage){
                result.textData.push(`[잠정 결과4] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 대개 매우 양호할 것이고, 아마도 더 정확히 말하면 복잡할 것이다. 또한, 때때로 처리 활동의 질(quality)에 심한 결함이 생기거나, 처리 결과의 형태가 성숙하지 않을 수 있다.<br/>`);
                result.textData.push(`어떤 종류의 현저한 심리적 혼란(disarray)이 있는 사람에서 흔하게 나타난다. 처리의 문제는 새로 입력된 정보를 해석하거나, 개념을 형성하고 응용하는데 잠재적 문제를 만들 수 있다.`);
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }
        }

        if(dqplus<averageDQplus[0]){
            if(sum<=sumaverage){
                result.textData.push(`[잠정 결과5] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 아마도 적절할 것이다. 하지만, 일반적인 것보다 더 조심스러워하고 처리 노력을 아낄(economical) 것이다. 이러한 결과는 회피 유형(avoidant style)에서 가장 흔하게 나타난다. 회피 유형은 수검자의 심리 활동의 관리(directing)에서 매우 지배적인 역할을 할 것이다.`);
                result.nextStep = 9;
                result.goNext = false;
                return result;
            }

            if(sum>sumaverage){
                result.textData.push(`[잠정 결과6] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 자주 적절하지 않을 것이다. 특히, 복잡한 상황에 놓이면 그러한 경향이 뚜렷할 것이다. 느슨하거나 결함 있는 처리는 자주 적응 어려움으로 이어질 것이다.`);
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }
        }



    }

    if(age<=12){
        var averageDQplus = [5, 8];
        var sum = dqv + dqVSlashPlus;

        if(averageDQplus[0]<=dqplus && dqplus<=averageDQplus[1]){
            if(sum==5){
                result.textData.push(`[잠정 결과1] [정상범주] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 대개 매우 적절할 것이다. <br />`)
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }

            if(sum>5){
                result.textData.push(`[잠정 결과2] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 대개 적절할 것이다. 하지만, 때때로 처리활동이 불안정해져서 적절하지 않거나 성숙하지 않은 수준으로 약해질 수 있다.<br/>`)
                result.textData.push(`이러한 결과는 아동에서는 흔하게 나타나지만, 청소년이나 성인에서는 흔하지 않다. 정교하지 않은 처리는 입력된 정보가 자주 느슨하거나 흠결 있게 해석되는 원인이나, 적응 어려움의 전조가 될 수 있다.`);
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }

        }

        if(dqplus>averageDQplus[1]){
            if(sum==5){
                result.textData.push(`[잠정 결과3] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 양호할 것이고, 아마도 더 정확히 말하면 복잡할 것이다. <br/>`);
                result.textData.push(`학력 수준이 높은 수검자에서 흔하게 나타나며, 더 능률적인(efficient) 인지 기능이나 더 효과적인(effective) 형태의 적응을 의미하지는 않는다. 이것은 단순히 처리의 질(quality)이 높다는 것을 의미할 뿐이다. <br/>`);

                result.nextStep = 8;
                result.goNext = false;
                return result;
            }

            if(sum>5){
                result.textData.push(`[잠정 결과4] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 대개 매우 양호할 것이고, 아마도 더 정확히 말하면 복잡할 것이다. 또한, 때때로 처리 활동의 질(quality)에 심한 결함이 생기거나, 처리 결과의 형태가 성숙하지 않을 수 있다.<br/>`);
                result.textData.push(`어떤 종류의 현저한 심리적 혼란(disarray)이 있는 사람에서 흔하게 나타난다. 처리의 문제는 새로 입력된 정보를 해석하거나, 개념을 형성하고 응용하는데 잠재적 문제를 만들 수 있다.`);
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }
        }

        if(dqplus<averageDQplus[0]){
            if(sum==5){
                result.textData.push(`[잠정 결과5] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 아마도 적절할 것이다. 하지만, 일반적인 것보다 더 조심스러워하고 처리 노력을 아낄(economical) 것이다. 이러한 결과는 회피 유형(avoidant style)에서 가장 흔하게 나타난다. 회피 유형은 수검자의 심리 활동의 관리(directing)에서 매우 지배적인 역할을 할 것이다.`);
                result.nextStep = 9;
                result.goNext = false;
                return result;
            }

            if(sum>5){
                result.textData.push(`[잠정 결과6] 발달질(DQ)의 분포를 고려할 때, 수검자가 보이는 처리의 질(quality)은 자주 적절하지 않을 것이다. 특히, 복잡한 상황에 놓이면 그러한 경향이 뚜렷할 것이다. 느슨하거나 결함 있는 처리는 자주 적응 어려움으로 이어질 것이다.`);
                result.nextStep = 8;
                result.goNext = false;
                return result;
            }
        }
    }


    result.goNext = false;
    result.nextStep = 8;
    return result;
}

function step8() {
    var result = {};
    result.textData = [];
    result.curStep = 8;
    result.textData.push('[질적 해석]<br/><br/><br/><br/><br/><br/><br/><br/>');

    result.goNext = true;
    result.nextStep = 8;
    return result;

}
