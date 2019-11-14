exports.getBlends(scores) {
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
