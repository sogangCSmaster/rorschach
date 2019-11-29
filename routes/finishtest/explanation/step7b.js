function step7b(scores) {
    //1 : Human Cont (H, (H), Hd, (Hd)) 에서 fq 가 -
    //2: Human Cont 에서 DV, DR, INCOM, FABCOM, ALOG, CONTAM 이 있을 때
    //3: Human Cont 에서 MOR이 있을 때
    //4: Hx
    //5: Hx와 AB가 함께 있을 때

    var cond1 = false;
    var cond2 = false;
    var cond3 = false;
    var cond4 = false;
    var cond5 = false;

    scores.forEach((score) => {
        if (score.fq == '-' && score.react && (score.react['H'] || score.react['(H)'] || score.react['Hd'] || score.react['(Hd)'])) {
            cond1 = true;
        }
        if (score.react && (score.react['H'] || score.react['(H)'] || score.react['Hd'] || score.react['(Hd)']) && 
            score.score && (score.score.DV1 || score.score.DV2 || score.score.DR1 || score.score.DR2 || score.score.INCOM1 || score.score.INCOM2 || score.score.FABCOM1 || score.score.FABCOM2 || score.score.ALOG || score.score.CONTAM)
        ) {
            cond2 = true;
        }
        if (score.react && (score.react['H'] || score.react['(H)'] || score.react['Hd'] || score.react['(Hd)']) && score.score && score.score.MOR) {
            cond3 = true;
        }
        if (score.react && score.react['Hx'] && score.score && score.score.AB) {
            cond4 = true;
        }
    });

    return [cond1, cond2, cond3, cond4];
}

exports.step7b = step7b;