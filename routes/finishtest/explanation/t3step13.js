const affection = require('../lower_section/affection.js');
const core = require('../lower_section/core.js');

function t3step13(scores) {
    // m: active3, passive3, a-p3
    // Y: diffuse1, diffuse2, diffuse3
    let blends = affection.getBlends(scores);
    const R = core.getR(scores);

    let mOrYBlends = 0;
    scores.forEach((score) => {
        if (score.det && Object.keys(score.det).length >= 2 && (
            (score.det.active3 || score.det.passive3 || score.det['a-p3']) ||
            (score.det.diffuse1 || score.det.diffuse2 || score.det.diffuse3)
        )) {
            mOrYBlends += 1;
        }
    })
    if (mOrYBlends  == 0) {
        return roundTo(blends / R * 100, 3);
    } else {
        return roundTo((blends - mOrYBlends + 1) / R * 100, 3);
    }
}

exports.t3step13 = t3step13;
