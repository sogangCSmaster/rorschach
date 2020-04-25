const affection = require('../lower_section/affection.js');
function t3step14(scores) {
    const blends = affection.getBlends(scores);
    let det3Blends = 0;
    let det4UpBlends = 0;

    console.log('blends', blends)
    scores.forEach((score) => {
        if (score.det && Object.keys(score.det).length == 3) {
            det3Blends += 1;
        }
        if (score.det && Object.keys(score.det).length >= 4) {
            det4UpBlends += 1;
        }
    });
    if (det3Blends > blends / 4) {
        return 1;
    }
    if (det4UpBlends >= 1) {
        return 2;
    }
    return 0;
}

exports.t3step14 = t3step14;
