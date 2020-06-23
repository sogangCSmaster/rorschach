// self perception
function calculateExnerTable7(scores) {
    var result = [];
    var step = 1;
    return nextStep(step, result, scores);
}

exports.calculateExnerTable7 = calculateExnerTable7;

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
        result.textData.push(`[잠정 결과] 반사(Reflection) 반응을 고려할 때, 수검자의 세계관은 과장된 자존감과 과대한 자기중심성에 의해 지배되는 경향이 있을 것이다.`);
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
    var result = {};
    result.textData = [];
    result.curStep = 3;

    if (EgocentricityIndex < 0.33) {
        if (Reflections == 0) {
            result.textData.push(`[잠정 결과3a] 자기중심지표(Egocentricity Index)와 반사(Reflection) 반응을 고려할 때, 수검자가 보는 자신의 가치(personal worth)는 실제보다 부정적인 경향을 보일 것이다. 다른 사람과 비교할 때 수검자는 자신에게 호의적이지 않을 것이다. 이러한 특성은 대체로 우울증의 전조일 수 있다.`);
        } else {
            result.textData.push(`[잠정 결과3b] 자기중심지표(Egocentricity Index)와 반사(Reflection) 반응을 고려할 때, 수검자의 자기개념과 자기가치(self-value)에 심한 갈등이 있을 것이다. 상당한 기분 변동이 나타날 가능성이 있으며, 행동에서 기능 이상이 있을 수 있다.`);
            result.textData.push(`* 자기중심지표가 평균 미만이고 반사반응이 있는 경우는 드물다.`);
        }
    }
    if (EgocentricityIndex >= 0.33 && EgocentricityIndex <= 0.44) {
        if (Reflections == 0) {
            result.textData.push(`[잠정 결과2a] [정상범주] 자기중심지표(Egocentricity Index)와 반사(Reflection) 반응을 고려할 때, 수검자가 자기에게 몰두하는 수준은 대부분의 다른 사람들보다 더 많거나 더 적지 않은 적절한 상태일 것이다.`);
        } else {
            result.textData.push(`[잠정 결과2b] 자기중심지표(Egocentricity Index)와 반사(Reflection) 반응을 고려할 때, 수검자의 자기애 특징이 자기에 대한 과도한 몰두를 만들어 내고 있을 것이다.`);
            result.textData.push(`수검자는 자기점검(self-examining)의 행동 양상을 보일 수 있다. 높은 자신의 가치(personal worth)에 대한 가정이 잘못되었을 수도 있다는 인식을 가질 수 있다. 자기회의(self-doubt) 문제가 흔하게 나타날 수도 있다.`);
            result.textData.push(`이러한 결과는 성인에서는 긍정적이지 않다. 왜냐하면, 과대한 자신의 가치(personal worth)에 대한 느낌이 도전받으면 과거에 효과적이었던 방어의 사용을 증가시키기 때문이다. 이것은 심리적 기능을 더 혼란스럽고 효과적이지(effective) 않은 수준으로 이끌고, 기분 변동이 흔하게 나타나게 한다.`);
            result.textData.push(`이러한 결과는 아마도 어린 청소년에서는 사회적 성숙 과정이 진행되고 있는 것을 의미하는 유익한 것일 수 있다.`);
            result.textData.push(`* 자기중심지표가 평균 범위이고, 반사반응이 있는 것은 이상한 양상이다.`);
        }
    }
    if (EgocentricityIndex > 0.44){
        if (Reflections >= 1) {
            result.textData.push(`[잠정 결과1a] 자기중심지표(Egocentricity Index)와  반사(Reflection) 반응을 고려할 때, 수검자는 대부분의 사람들보다 더 많이 자신에게 몰두하는 경향이 있을 것이다.`);
            result.textData.push(`자기애 특징이 개인의 심리에 강하게 새겨져 있으며, 지속하여 다른 사람에 비하여 자기에 대해 호의적으로 판단할 것이다.`);
        } else {
            result.textData.push(`[잠정 결과1b] 자기중심지표(Egocentricity Index)와 반사(Reflection) 반응을 고려할 때, 수검자는 자기에게 대단히 강한 관심을 보일 것이다. 이러한 양상은 외부 세계에 대한 무관심으로 이어지기 쉽다.`);
            result.textData.push(`평균을 초과하는 자기중심지표에는 대부분, 높은 자존심이나 자신의 가치(personal worth)에 대한 높은 추단(estimate)이 반영된다. 하지만, 어떤 경우에는 이러한 자기에 대한 강한 관심에 자신에 대한 만족스럽지 않은 느낌이 반영되기도 한다. 만약 후자의 경우라면, 검사 결과에 자기비하의 근거 또는 사회 부적응 문제가 포함되어 있을 것이다.`);
        }
    }
    result.nextStep = 4;
    result.goNext = false;
    return result;
}

function step4({ FD, SumV, R, EgocentricityIndex, Reflections }) {
    var result = {};
    result.textData = [];
    result.curStep = 4;

    if (FD == 0 && SumV == 0) {
        if (R >= 17) {
            result.textData.push(`[잠정 결과1a] 형태차원(FD) 반응과 차원(Vista) 반응 그리고 전체 반응수(R)를 고려할 때, 수검자는 일반적인 수준보다 더 자기인식(self-awareness)에 몰두하지 않을 것이다. 낮은 자기인식 수준으로 인해 자기성찰(self-examination)이 충분히 작용하지 않을 것이다. 그렇기에 자신에 대해 바람직한 수준보다 더 순진한(naive) 지각을 보일 것이다.`);
            result.textData.push(`아동이나 어린 청소년에서 흔하게 발견되는 특징이다.`);
        } else {
            result.textData.push(`[잠정 결과1b] 형태차원(FD) 반응과 차원(Vista) 반응 그리고 전체 반응수(R)를 고려할 때, 검사 결과에서 드러나는 정보가 제한적이기 때문에 자기성찰(Self-examination)에 대해 해석하지 않는 게 적절하다.`);
        }
    }
    if (FD >= 1 && FD <= 2 && SumV == 0) {
        result.textData.push(`[잠정 결과2] [정상범주] 형태차원(FD) 반응과 차원(Vista) 반응을 고려할 때, 수검자는 자기점검(self-inspecting) 행동에 어느 정도 정기적으로 시간을 들일 것이다.`);
        result.textData.push(`대개 자기성찰(Self-examination) 과정은 자기개념의 재평가를 촉진하는 경향이 있으므로 긍정적인 결과라고 할 수 있다.`);
    }
    if (FD >= 3 && SumV == 0) {
        if (EgocentricityIndex >= 0.33 && EgocentricityIndex <= 0.44) {
            result.textData.push(`[잠정 결과3a] 형태차원(FD) 반응과 차원(Vista) 반응 그리고 자기중심성지표(egocentricity)를 고려할 때, 수검자는 자기개념에 일반적이지 않은 관심을 보이며, 자기점검(self-inspecting)을 하고 있을 것이다. 이것은 자기향상을 위해 노력하는 것에 관련되어 있을 것이다.`);
        } else if (EgocentricityIndex < 0.33) {
            result.textData.push(`잠정 결과3b] 형태차원(FD) 반응과 차원(Vista) 반응 그리고 자기중심성지표(egocentricity)를 고려할 때, 수검자는 자기개념에 일반적이지 않은 관심을 보이며, 자기점검(self-inspecting)을 하고 있을 것이다. 이것이 단지 자신에 대한 반복적인 생각(rumination: 반추)을 의미한다면, 자기향상에 역효과를 낳을 것이다.`);
        }
    } 
    if (SumV >= 1) {
        if (FD == 0 && Reflections == 0) {
            result.textData.push(`[잠정 결과3c] 차원(Vista) 반응을 고려할 때, 수검자는 부정적으로 지각되는 자기의 특징에 몰두하고 있으며, 그로 인해 고통스러운 감정이 생겨날 것이다.`);
            result.textData.push(`이러한 경향성은 생애 전환기(사춘기, 노년기)에 있는 사람이나, 최근에 중대한 생활사건(정서적 상실, 실패, 신체적 또는 심리적 어려움 등)을 경험한 사람에게서는 흔하게 나타난다. 그리고 자기 노출이 필요한 초기 단계의 심리치료에서도 흔하게 나타난다. 어떤 원인에 의해서든지, 상당한 자기초점(self-focusing) 주의가 나타나고 있다는 것을 가리킨다.`);
        } else if (Reflections >= 1) {
            result.textData.push(`[잠정 결과3d] 차원(Vista) 반응과 반사(Reflection) 반응을 고려할 때, 수검자는 자기개념에서 심한 갈등을 경험하고 있을 것이다.`);
            result.textData.push(`높은 자기가치(self-value)에 대비되는 ‘지각된 자기의 부정적 특징의 문제’에 대하여 어떠한 것이 적절한 것인지 논증을 시도하는 것으로 보는 게 대체로 정확하다.`);
            result.textData.push(`* 차원(Vista) 반응과 반사(Reflection) 반응이 함께 나타나는 것은 매우 드물다.`);
        }
    }
    result.nextStep = 5;
    result.goNext = false;
    return result;
}

function step5({ AnPlusXy }) {
    var result = {};
    result.textData = [];
    result.curStep = 5;

    if (AnPlusXy == 2) {
        result.textData.push(`[잠정 결과1] 해부(An) 반응과 엑스레이(Xy) 반응을 고려할 때, 수검자는 아마도 신체에 대한 어떤 관심을 보일 것이다.`);
        result.textData.push(`* 핵심단어: 신체 관심[body concern]`);
        result.textData.push(`해부(An)와 엑스레이(Xy)가 포함된 수검자의 반응에서 결정인의 형태질(FQ)이 마이너스(minus)이거나 병적인 내용(MOR)이 포함되어 있다면, 신체에 대한 중대한 관심이 반영되었을 것이다. 이 문제에 대해서는 8단계에서 다시 검토하게 된다.`);
        result.textData.push(`만약, 해부(An)와 엑스레이(Xy)가 포함된 수검자의 반응에서 결정인의 형태질(FQ)이 마이너스(minus)가 아니거나 병적인 내용(MOR)이 포함되어 있지 않다면, 반드시 이 결과를 심리적 구조에 관련된 중대한 문제로 간주하지 않는다.`);
    } 
    if (AnPlusXy >= 3) {
        result.textData.push(`[잠정 결과2] 해부(An) 반응과 엑스레이(Xy) 반응을 고려할 때, 수검자는 대체로 신체에 관한 어떤 관심이나 몰두를 확실히 보일 것이다.`);
        result.textData.push(`* 핵심단어: 신체 관심[body concern]`);
        result.textData.push(`이러한 결과는 신체적 문제를 가진 사람에게 흔하게 나타난다. 만약 신체에 건강 문제가 없다면, 신체 또는 자기개념에 대하여 반복적으로 생각하며(rumination: 반추), 취약한 느낌으로 인해 혼란스러워(disconcerting)하는 경우일 것이다.`);
    }
    result.nextStep = 6;
    result.goNext = false;
    return result;
}

function step6({ MOR, Reflections }) {
    var result = {};
    result.textData = [];
    result.curStep = 6;

    console.log('ref', Reflections)
    if (MOR == 2) {
        result.textData.push(`[잠정 결과1a] 병적인 내용(MOR)을 고려할 때, 수검자의 자기개념에 아마도 자기에 대한 비관적 관점을 촉진하는 어떤 부정적 특징이 포함되어 있을 것이다.</br>`);
        if (Reflections >= 1) {
            result.textData.push(`[잠정 결과1b] 반사(Reflection) 반응을 고려할 때, 수검자는 자기가치(self-value)에 관련된 갈등을 겪고 있을 것이다. 또는 높게 평가된 자기개념을 훼손하는 상황적 사건을 최근에 겪었을 것이다.`);
        }
    } else if (MOR >= 3) {
        result.textData.push(`[잠정 결과2a] 병적인 내용(MOR)을 고려할 때, 수검자의 자기개념에는 부정적인 속성이 두드러질 것이다. 일반적으로, 수검자의 사고에는 예상보다 더 많은 자기에 대한 비관적 관점이 자주 포함될 것이다.</br>`);
        if (Reflections >= 1) {
            result.textData.push(`[잠정 결과2b] 반사(Reflection) 반응을 고려할 때, 수검자는 자기개념이나 자기가치에 관련된 현저한 갈등을 겪고 있을 수 있다. 또는 괴롭거나 무력한 인상을 과장되게 표현하려고 시도하는 것일 수 있다.`);
        }
    }

    result.nextStep = 7;
    result.goNext = false;
    return result;
}

// Interpersonal
// lower_section self_perception
function step7({ HumanCont, H, Hrest, R, step7b, approachStyle, copyingStyle }) {
    var result = {};
    result.textData = [];
    result.curStep = 7;

    // 7a
    if (HumanCont >= 3) {
        if (
            (approachStyle == 'True' && copyingStyle == 'Introversive' && H >= Hrest + 2) ||
            ((copyingStyle == 'Avoidant' || (approachStyle == 'True' && (copyingStyle == 'Extratensive' || copyingStyle == 'Ambitent'))) && ((R >= 17 && R <= 27 && H >= Hrest) || ((R < 17 || R > 27) && (H >= Hrest || H == Hrest-1))))
        ) {
            result.textData.push(`[7a.잠정 결과1] [정상범주] [Pure H ≥ Other H] 인간내용(Pure H : Other H)과 경험유형(EBstyle)을 고려할 때, 수검자의 자기개념은 상상보다 경험에 더 많이 근거하고 있을 것이다.`);
            result.textData.push(`사회적 상호작용은 아마도 자기개념을 형성하는 데 상당히 이바지했을 것이다.`);
            result.textData.push(`이러한 결과를 보이는 수검자가 반드시 정확하거나 현실적인 자기개념 또는 자기가치(self-value)를 보이는 것은 아니다.`);
        }
        if (copyingStyle == 'Introversive' && approachStyle == 'True' && Hrest >= H+3) {
            ok = true;
        }
        if (copyingStyle == 'Avoidant' || (approachStyle =='True' && (copyingStyle == 'Extratensive' || copyingStyle == 'Ambitent'))) {
            var ok = false;
            if (R >= 17 && R <= 27 && H < Hrest) {
                ok = true;
            } else if ((R < 17 || R > 27 ) && (Hrest > H)) {
                ok = true;
            }
        }
        if (ok) {
            result.textData.push(`[7a.잠정 결과2] <span style='color: blue'>[Pure H < Other H]</span> 인간내용(Pure H : Other H)과 경험유형(EBstyle)을 고려할 때, 수검자의 자기개념 또는 자기가치(self-value)는 대부분 상상적 인상이나 현실 경험의 왜곡에 근거하는 경향을 보일 것이다.`);
            result.textData.push(`이러한 결과를 보이는 수검자는 대개 성숙하지 않고, 빈번하게 자신에 대한 인식이 매우 왜곡되어 있을 것이다.`);
            result.textData.push(`이렇게 일반적인 수준보다 더 제한적인 자기인식은 때때로 의사결정과 문제해결 활동에서 매우 부정적인 결과를 낳을 수 있다. 그리고 다른 사람에 관련된 잠재적 어려움을 만들 수도 있다.</br>`);
        }
    }

    // 7b, 7a 에서 이동해온다.
    var [cond1, cond2, cond3, cond4, cond5] = step7b;
    console.log('cond1', cond1, 'cond2', cond2, 'cond3', cond3, 'cond4', cond4, 'cond5', cond5)
    if (cond1) {
        result.textData.push(`[7b.잠정 결과1] 인간 내용 반응이 포함된 반응의 결정인 형태질(FQx)을 고려할 때, 수검자는 혼란되어(confused) 있거나 자기개념에 대하여 왜곡된 관념을 가지고 있을 것이다.</br>`);
    }
    if (cond2) {
        result.textData.push(`[7b.잠정 결과2] 인간 내용 반응이 있는 반응에 포함된 인지적 특수점수(DV, DR, INCOM, ALOG, CONTAM)를 고려할 때, 수검자의 자기에 대한 사고에 인지적 어긋남이나 기능 이상이 영향을 주어 왜곡이 나타날 수 있다.</br>`);
    }
    if (cond3) {
        result.textData.push(`[7b.잠정 결과3] 인간 내용 반응이 있는 반응에 포함된 병적인 내용(MOR)을 고려할 때, 수검자의 자기개념에는 손상된 느낌이 포함되어 있을 것이다.</br>`);
    }
    if (cond4) {
        result.textData.push(`[7b.잠정 결과4] 인간 경험(Hx) 반응을 고려할 때, 수검자는 자기개념 또는 자기가치(self-value)의 문제를 지나치게 지적인(intellectualized) 방식으로 다루려 시도하고, 현실을 무시할지도 모른다.</br>`);
    }
    if (cond5) {
        result.textData.push(`[7b.잠정 결과5] 인간 경험(Hx) 반응과 추상(AB) 반응을 고려할 때, 수검자는 자주 관념적 충동 조절 문제를 보일 것이다. 그 결과로 많은 자기개념의 특징이 심하게 왜곡될 것이다.</br>`);
    }
    result.nextStep = 8;
    result.goNext = false;
    return result;
}

function step8({}) {
    var result = {};
    result.textData = [];
    result.curStep = 8;
    //result.textData.push('[질적 해석]<br/><br/><br/><br/><br/><br/><br/><br/>');
    result.nextStep = 8;
    result.goNext = true;
    return result;
}
