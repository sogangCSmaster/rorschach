const cognitive_mediation = require('../lower_section/cognitive_mediation.js');

function countSingleDetWithKey(scores, key, value) {
  // value가 없으면 key만 센다
  let count = 0;
  scores.forEach((score) => {
    if (score.det && Object.keys(score.det).length >= 1 && score.det[key]) {
      if (value) {
        if (score.det[key].value === value) {
          count += 1;
        }
      } else {
        count += 1;
      }
    }
  })
  return count;
}

function getM(scores) {
  //det의 key size가 1일때
  return countSingleDetWithKey(scores, 'active1') + countSingleDetWithKey(scores, 'passive1') + countSingleDetWithKey(scores, 'a-p1');
}
exports.getM = getM;

function getFM(scores) {
  return countSingleDetWithKey(scores, 'active2') + countSingleDetWithKey(scores, 'passive2') + countSingleDetWithKey(scores, 'a-p2');
}
exports.getFM = getFM;

function getm(scores) {
  return countSingleDetWithKey(scores, 'active3') + countSingleDetWithKey(scores, 'passive3') + countSingleDetWithKey(scores, 'a-p3');
}
exports.getm = getm;

function getFC(scores) {
  return countSingleDetWithKey(scores, 'chromatic1');
}
exports.getFC = getFC;

function getCF(scores) {
  return countSingleDetWithKey(scores, 'chromatic2');
}
exports.getCF = getCF;

function getC(scores) {
  return countSingleDetWithKey(scores, 'chromatic3');
}
exports.getC = getC;

function getCn(scores) {
  return countSingleDetWithKey(scores, 'chromatic4');
}
exports.getCn = getCn;

function getFCprime(scores) {
  return countSingleDetWithKey(scores, 'achromatic3');
}
exports.getFCprime = getFCprime;

function getCprimeF(scores) {
  return countSingleDetWithKey(scores, 'achromatic2');
}
exports.getCprimeF = getCprimeF;

function getCprime(scores) {
  return countSingleDetWithKey(scores, 'achromatic1');
}
exports.getCprime = getCprime;

function getFT(scores) {
  return countSingleDetWithKey(scores, 'texture3');
}
exports.getFT = getFT;

function getTF(scores) {
  return countSingleDetWithKey(scores, 'texture2');
}
exports.getTF = getTF;

function getT(scores) {
  return countSingleDetWithKey(scores, 'texture1');
}
exports.getT = getT;

function getFV(scores) {
  return countSingleDetWithKey(scores, 'vista3');
}
exports.getFV = getFV;

function getVF(scores) {
  return countSingleDetWithKey(scores, 'vista2');
}
exports.getVF = getVF;

function getV(scores) {
  return countSingleDetWithKey(scores, 'vista1');
}
exports.getV = getV;

function getFY(scores) {
  return countSingleDetWithKey(scores, 'diffuse3');
}
exports.getFY = getFY;

function getYF(scores) {
  return countSingleDetWithKey(scores, 'diffuse2');
}
exports.getYF = getYF;

function getY(scores) {
  return countSingleDetWithKey(scores, 'diffuse1');
}
exports.getY = getY;

function getFr(scores) {
  return countSingleDetWithKey(scores, 'reflection1');
}
exports.getFr = getFr;

function getrF(scores) {
  return countSingleDetWithKey(scores, 'reflection2');
}
exports.getrF = getrF;

function getFD(scores) {
  return countSingleDetWithKey(scores, 'form2');
}
exports.getFD = getFD;

function getF(scores) {
  return countSingleDetWithKey(scores, 'form1');
}
exports.getF = getF;

function get2(scores) {
  // (2)를 센다

  let two = 0;

  scores.forEach((score) => {
    if (score.select2 == '(2)') {
      two += 1;
    }
  });
  return two;
}
exports.get2 = get2;

function getP(scores) {
  return cognitive_mediation.getP(scores);
}
exports.getP = getP;
