function getExperience(EBLeft, EBRight, EA, L, EBPer, M, WSumC){
    var copyingStyle = ""
    var approachStyle = "";
    var dominantStyle = "";
    if ((EA <= 10 && Math.abs(EBLeft - EBRight) >= 2) ||
        (EA >10 && Math.abs(EBLeft - EBRight) >= 2.5)
    ) {
        if (M < WSumC) {
            if (L < 1.0) {
                copyingStyle = "Extratensive";
                approachStyle = "True";
            }
            else if (L > 0.99) {
                approachStyle = "Avoidant";
                copyingStyle = "Extratensive";
            }
        } else if (M > WSumC) {
            if (L < 1.0) {
                copyingStyle = "Introversive";
                approachStyle = "True";
            } else if (L > 0.99) {
                copyingStyle = "Introversive";
                approachStyle = "Avoidant";
            }
        }

    } else if (
        (EA <= 10 && Math.abs(EBLeft - EBRight) < 2) ||
        (EA > 10 && Math.abs(EBLeft - EBRight) < 2.5)
    ) {
        if (L < 1.0) {
            approachStyle = "True";
            copyingStyle = "Ambitent";
        } else if (L > 0.99) {
            approachStyle = "Avoidant";
            copyingStyle = "Ambitent";
        }
    }

    if (EA < 4.0) {
        copyingStyle = "";
        approachStyle = "";
    } else if (M == 0 && WSumC > 3.5) {
        copyingStyle = "";
        approachStyle = "";
    } else if (M >= 3 && WSumC == 0) {
        copyingStyle = "";
        approachStyle = "";
    }

    if (copyingStyle != "" && approachStyle != "") {
        if(EBPer < 2.5){
            dominantStyle = "Flexible";
        } else if(EBPer >= 2.5){
            dominantStyle = "Pervasive";
        }
    }

    return { copyingStyle, dominantStyle, approachStyle };
}

exports.getExperience = getExperience;
