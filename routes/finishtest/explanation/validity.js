function getValidity(R, L) {
    var result = {};
    result.R = {};
    result.R.R = R;

    if(16 < R && R < 28){
        result.R.check1 = true;
    } else{
        result.R.check1 = false;
    }

    if(27 < R){
        result.R.check2 = true;
    } else {
        result.R.check2 = false;
    }

    if(13 < R && R < 17){
        result.R.check3 = true;
    } else {
        result.R.check3 = false;
    }

    if(14 > R){
        result.R.check4 = true;
    } else {
        result.R.check4 = false;
    }

    if(result.R.check1 || result.R.check2){
        result.R.validate = '타당함';
    } else if (result.R.check3){
        result.R.validate = '타당도 낮음';
    } else if (result.R.check4) {
        result.R.validate = '타당도 없음';
    }

    result.L = {};
    result.L.L = L;
    if(result.L.L == 'Very Low'){
        result.L.check1 = false;
        result.L.check2 = false;
        result.L.check3 = true;
        result.L.validate = '타당하지 않음';
        return result;
    } else if (result.L.L == 'Very high'){
        result.L.check1 = false;
        result.L.check2 = true;
        result.L.check3 = false;
        result.L.validate = '타당하지 않음'
        return result;
    }

    if (0.30 <= L && L <= 0.99 ){
        result.L.check1 = true;
    } else {
        result.L.check1 = false;
    }

    if (0.99 < L){
        result.L.check2 = true;
    } else {
        result.L.check2 = false;
    }

    if (0.30 > L){
        result.L.check3 = true;
    } else {
        result.L.check3 = false;
    }

    if(result.L.check1){
        result.L.validate = '타당함';
    } else if (result.L.check2 || result.L.check3){
        result.L.validate = '타당하지 않음';
    }

    return result;

}

exports.getValidity = getValidity;