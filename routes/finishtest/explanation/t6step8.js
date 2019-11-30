function t6step8(scores, { age, WSum6, R }) {
  // normal 1 
  // 14세 이상 청소년과 성인 집단 예상 범위
  // DV1, DR1, INCOM1 중 1개만 있음
  var DV1 = 0;
  var DR1 = 0;
  var INCOM1 = 0;
  var CONTAM = 0;
  var FABCOM1 = 0;
  var ALOG = 0;
  var DV2 = 0;
  var DR2 = 0;
  var INCOM2 = 0;
  var FABCOM2 = 0;
  scores.forEach((score) => {
    if (score.score && score.score.DV1) {
      DV1 = 1;
    }
    if (score.score && score.score.DR1) {
      DR1 = 1;
    }
    if (score.score && score.score.INCOM1) {
      INCOM1 = 1;
    }
    if (score.score && score.score.CONTAM) {
      CONTAM = 1;
    }
    if (score.score && score.score.FABCOM1) {
      FABCOM1 = 1;
    }
    if (score.score && score.score.ALOG) {
      ALOG = 1;
    }
    if (score.score && score.score.DV2) {
      DV2 = 1;
    }
    if (score.score && score.score.DR2) {
      DR2 = 1;
    }
    if (score.score && score.score.INCOM2) {
      INCOM2 = 1;
    }
    if (score.score && score.score.FABCOM2) {
      FABCOM2 = 1;
    }
  });

  if (age >= 14 && WSum6 <= 6) {
    if ((DV1 + DR1 + INCOM1) == 1) {
      return '1a';
    }
    if (FABCOM1 && ALOG && !CONTAM && !DV2 && !DR2 && !INCOM2 && !FABCOM2) {
      return '2';
    }
  }
  if (age >=5 && age <= 7 && WSum6 <= 12 && !CONTAM) {
    return '1b';
  }
  if (age >= 8 && age <= 10 && WSum6 <= 10 && !CONTAM) {
    return '1b';
  }
  if (age >= 11 && age <= 13 && WSum6 <= 8 && !CONTAM) {
    return '1b';
  }
  if (age >= 14 && WSum6 >= 7 && WSum6 <= 10 && R >= 17 && !CONTAM && !DV2 && !DR2 && !INCOM2 && !FABCOM2) {
    return '3';
  }
  if (age >= 14 && WSum6 >= 7 && WSum6 <= 9 && R<= 16 && !CONTAM && !DV2 && !DR2 && INCOM2 && !FABCOM2) {
    return '3';
  }
  if (age >= 11 && age <= 13 && WSum6 >= 9 && WSum6 <= 12 && !CONTAM) {
    return '3';
  }
  if (age >= 8 && age <= 10 && WSum6 >= 11 && WSum6 <= 14 && !CONTAM) {
    return '3';
  }
  if (age >= 5 && age <= 7 && WSum6 >= 13 && WSum6 <= 15 && !CONTAM) {
    return '3';
  }

  if (age >= 14 && WSum6 >= 11 && WSum6 <= 17 && R >= 17) {
    return '4';
  }
  if (age >= 14 && WSum6 >= 10 && WSum6 <= 12 && R <= 16) {
    return '4';
  }
  if (age >= 11 && age <= 13 && WSum6 >= 13 && WSum6 <= 17) {
    return '4';
  }
  if (age >= 8 && age <= 10 && WSum6 >= 15 && WSum6 <= 19) {
    return '4';
  }
  if (age >= 5 && age <= 7 && WSum6 >= 16 && WSum6 <= 20) {
    return '4';
  }
  if (age >= 14 && WSum6 > 17 && R >= 17) {
    return '5';
  }
  if (age >= 14 && WSum6 > 12 && R <= 16) {
    return '5';
  }
  if (age >= 11 && age <= 13 && WSum6 > 18) {
    return '5';
  }
  if (age >= 8 && age <= 10 && WSum6 > 19) {
    return '5';
  }
  if (age >= 5 && age <= 7 && WSum6 > 20) {
    return '5';
  }
}

exports.t6step8 = t6step8;
