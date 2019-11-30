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
}
exports.getChromaticDiffuse = getChromaticDiffuse;

function getAchromaticTextureAndVista(scores) {
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
    return count;
}
exports.getAchromaticTextureAndVista = getAchromaticTextureAndVista;

function getOnlyShading(scores) {
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
}
exports.getOnlyShading = getOnlyShading;
