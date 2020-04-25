function getBlends(scores) {
  let cs = 0;
  scores.forEach((score) => {
    if (score && score.det && 
      (score.det.chromatic1 || score.det.chromatic2 || score.det.chromatic3 || score.det.chromatic4 || score.det.achromatic1 || score.det.achromatic2 || score.det.achromatic3) &&
      (score.det.texture1 || score.det.texture2 || score.det.texture3 || score.det.vista1 || score.det.vista2 || score.det.vista3 || score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)
    ) {
      cs += 1;
    }
  });
  return cs;
}

exports.getBlends = getBlends;

function getChromaticDiffuse(scores) {
    /*
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det &&
            (score.det.chromatic1 || score.det.chromatic2 || score.det.chromatic3 || score.det.chromatic4) &&
            (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)
        ) {
            count += 1;
        }
    })
    return count;
    */
    return getYColorShadingBlends(scores);
}
exports.getChromaticDiffuse = getChromaticDiffuse;

function getAchromaticTextureAndVista(scores) {
    /*
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det &&
            (score.det.achromatic1 || score.det.achromatic2 || score.det.achromatic3) &&
            (score.det.vista1 || score.det.vista2 || score.det.vista3) &&
            (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)
        ) {
            count += 1;
        }
    })
    */
    return getOtherColorShadingBlends(scores)
}
exports.getAchromaticTextureAndVista = getAchromaticTextureAndVista;

function getOnlyShading(scores) {
    /*
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && 
            (
                (score.det.achromatic1 || score.det.achromatic2 || score.det.achromatic3) && (score.det.texture1 || score.det.texture2 || score.det.texture3 || score.det.vista1 || score.det.vista2 || score.det.vista3 || score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)
            ) 
        ) {
            count += 1;
        }
        var vista = 0;
        var texture = 0;
        var diffuse = 0;
        if (score && score.det && (score.det.vista1 || score.det.vista2 || score.det.vista3) ) {
            vista = 1;
        }
        if (score && score.det && (score.det.texture1 || score.det.texture2 || score.det.texture3)) {
            texture = 1;
        }
        if (score && score.det && (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)) {
            diffuse = 1;
        }
        if (vista + texture + diffuse >= 2) {
            count += 1;
        }
    });
    return count;
    */
    return getShadingBlends(scores);
}
exports.getOnlyShading = getOnlyShading;

function getYColorShadingBlends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2 && (score.det.chromatic1 || score.det.chromatic2 || score.det.chromatic3) && (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)) {
            count += 1;
        }
    })
    return count;
}
exports.getYColorShadingBlends = getYColorShadingBlends;

function getOtherColorShadingBlends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2 && (score.det.chromatic1 || score.det.chromatic2 || score.det.chromatic3) && (score.det.achromatic1 || score.det.achromatic2 || score.det.achromatic3 || score.det.texture1 || score.det.texture2 || score.det.texture3 || score.det.vista1 || score.det.vista2 || score.det.vista3)) {
            count += 1;
        }
    })
    return count;
}
exports.getOtherColorShadingBlends = getOtherColorShadingBlends;

function getBlendsCreatedBymOrY(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2 && (score.det.active3 || score.det.passive3 || score.det['a-p3'] || score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)) {
            count += 1;
        }
    })
    return count;
}
exports.getBlendsCreatedBymOrY = getBlendsCreatedBymOrY;

function getmBlends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2 && (score.det.active3 || score.det.passive3 || score.det['a-p3'])) {
            count += 1
        }
    })
    return count;
}
exports.getmBlends = getmBlends;

function getYBlends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2 && (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)) {
            count += 1
        }
    })
    return count
}
exports.getYBlends = getYBlends

function getReBlendsPercent(scores) {
    let blends = 0;
    let m = 0;
    let Y = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2) {
            blends += 1
            if (score.det.active3 || score.det.passive3 || score.det['a-p3']) {
                m += 1
            }
            if (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3) {
                Y += 1
            }
        }
    })
    console.lo
    return parseInt((blends - (m + Y - 1)) * 100 / scores.length)
}
exports.getReBlendsPercent = getReBlendsPercent


function get3Blends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 3) {
            count += 1;
        }
    })
    return count;
}
exports.get3Blends = get3Blends;

function get4Blends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 4) {
            count += 1;
        }
    })
    return count;
}
exports.get4Blends = get4Blends;

function getShadingBlends(scores) {
    let count = 0;
    scores.forEach((score) => {
        if (score && score.det && Object.keys(score.det).length >= 2) {
            if ((score.det.achromatic1 || score.det.achromatic2 || score.det.achromatic3) && (score.det.texture1 || score.det.texture2 || score.det.texture3 || score.det.vista1 || score.det.vista2 || score.det.vista3 || score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)) {
                count += 1;
            } else {
                // 음영 결정인 2개 이상
                let det = 0;
                if (score.det.texture1) {
                    det += 1;
                }
                if (score.det.texture2) {
                    det += 1;
                }
                if (score.det.texture3) {
                    det += 1;
                }
                if (score.det.vista1) {
                    det += 1;
                }
                if (score.det.vista2) {
                    det += 1;
                }
                if (score.det.vista3) {
                    det += 1
                }
                if (score.det.diffuse1) {
                    det += 1
                }
                if (score.det.diffuse2) {
                    det += 1
                }
                if (score.det.diffuse3) {
                    det += 1;
                }
                if (det >= 2) {
                    count += 1;
                }
            }
        }
    })
    return count;
}
exports.getShadingBlends = getShadingBlends
