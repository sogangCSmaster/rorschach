const core = require('../lower_section/core.js');

function checkFQminus(scores) {
  // FQx- 반응이 모두 I, II, III 카드에서 나타날 때
  var card1 = false;
  var card2 = false;
  var card3 = false;

  scores.forEach((score) => {
    if (score.fq === '-') {
      if (score.card == 1) {
        card1 = true;
      } else if (score.card == 2) {
        card2 = true;
      } else if (score.card == 3) {
        card3 = true;
      }
    }
  });

  return card1 && card2 && card3;
}

exports.checkFQminus = checkFQminus;

function checkFQminusSpaceHalf(scores) {
  var FQminus = 0;
  var FQSminus = 0;
  scores.forEach((score) => {
    if (score.fq === '-') {
      FQminus += 1;
      if (score.loc == 'WS' || score.loc == 'DS' || score.loc == 'DdS') {
        FQSminus += 1;
      }
    }
  });
  return FQSminus > FQminus / 2;
}

exports.checkFQminusSpaceHalf = checkFQminusSpaceHalf;

function checkFQminusMovementHalf(scores) {
  // 1 : M- = 1, 2 : M- >=2, 3 : 1/2 초과가 FM, m 에서 나타남,
  // 0 : 운동 반응이 1/2 이하일 때
  
  var FQminus = 0;
  var FQM = 0;
  var FQm = 0;
  var FQFM = 0;

  scores.forEach((score) => {
    if (score.fq === '-') {
      FQminus += 1;
      if (score.det && (score.det.active1 || score.det.passive1 || score.det['a-p1'])) {
        FQM += 1;
      }
      if (score.det && (score.det.active2 || score.det.passive2 || score.det['a-p2'])) {
        FQFM += 1;
      }
      if (score.det && (score.det.active3 || score.det.passive3 || score.det['a-p3'])) {
        FQm += 1;
      }
    }
  });
  if (FQminus / 2 < FQM + FQFM + FQm) {
    if (FQM == 1) {
      return 1;
    } else if (FQM >= 2) {
      return 2;
    } else if (FQFM + FQm > FQminus / 2) {
      return 3;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
exports.checkFQminusMovementHalf = checkFQminusMovementHalf;

function checkFQminusF(scores) {
  let count = 0;
  let FQminus = 0;
  scores.forEach((score) => {
    if (score.fq === '-') {
      FQminus += 1;
      if (score.det && (score.det.reflection1 || score.det.reflection2 || score.det.form2)) {
        count += 1;
      }
    }
  })
  return count > FQminus / 2;
}

exports.checkFQminusF = checkFQminusF;

function checkFQminus3andPureF(scores) {
  // return 1: Lambda > 0.99
  // return 2 : Lambda < 1.00
  let FQminus = 0;
  let pureF = 0;
  let lambda = core.getLambda(scores);
  scores.forEach((score) => {
    if (score.fq === '-') {
      FQminus += 1;
      if (score.det && score.det.form1) {
        pureF += 1;
      }
    }
  })
  if (FQminus > 3 && pureF > FQminus / 2) {
    if (lambda > 0.99) {
      return 1;
    } else {
      return 2;
    }
  } else {
    return 0;
  }
}
exports.checkFQminus3andPureF = checkFQminus3andPureF;

function checkHomogeneousContent(scores) {

}
exports.checkHomogeneousContent = checkHomogeneousContent;

function checkFQminus3(scores) {
  var firstCard = 0;
  var lastCard = 0;
  var FQminus = 0;
  // return 1: 1/2 초과가 각 카드의 첫번째 반응일 때
  // return 2: 1/2 초과가 각 카드의 마지막 반응일 때
  //
  for (var i = 0; i < scores.length; i++) {
    if (scores[i].fq === '-') {
      FQminus += 1;
      // 각 카드의 첫번째 반응
      if (i == 0 || scores[i-1].card != scores[i].card) {
        firstCard += 1;
      }
      if (i == scores.length - 1 || scores[i].card != scores[i+1].card) {
        lastCard += 1;
      }
    }
  }
  if (firstCard > FQminus / 2) {
    return 1;
  } else if (lastCard > FQminus / 2) {
    return 2;
  }
  return 0;
}
exports.checkFQminus3 = checkFQminus3;
