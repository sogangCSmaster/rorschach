function caculateAffect(DEPI, CDI, M, EBLeft, EBRight, M, WSumC, EA, EBPer, FM, m, SumCprime, SumT, SumV, SumY, Afr, twoABplusArtplusAy, CP, FC, CF, C){
    var result = [];
    var nextStep = 0;
    var STEP1 = step1(DEPI, CDI);
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
}

function step1(DEPI, CDI){
    var result = {};
    var textData = [];

}