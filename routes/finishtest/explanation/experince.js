function getExperience(EBLeft, EBRight, EA, L, EBPer){
    var copyingStyle = ""
    var approachStyle = "";
    var dominantStyle = "";
    if((EA < 0) || (EBLeft==0 && EBRight>3.5)){
        return { copyingStyle: "", approachStyle: "", dominantStyle: "" };
    }
    
    if(4.0 <= EA && EA <= 10.0){
        if(EBLeft >= EBRight + 2){
            copyingStyle = "Introversive";
        } else if(EBLeft + 2 <= EBRight){
            copyingStyle = "Extratensive";
        } else {
            copyingStyle = "Ambitent";
        }
    } else if(10.0 < EA){
        if(EBLeft >= EBRight + 2.5){
            copyingStyle = "Introversive";
        } else if(EBLeft + 2.5 <= EBRight){
            copyingStyle = "Extratensive";
        } else {
            copyingStyle = "Ambitent";
        }
    }

    
    if(L <= 0.99){
        approachStyle = "True";
        if(EBPer < 2.5){
            dominantStyle = "Flexible";
        } else if(EBPer >= 2/5){
            dominantStyle = "Pervasive";
        }
    } else if(L > 0.99){
        approachStyle = "Avoidant";
    }

    if (approachStyle == "True" && copyingStyle == "") {
        approachStyle = "";
    }


    return { copyingStyle, dominantStyle, approachStyle };

}

exports.getExperience = getExperience;
