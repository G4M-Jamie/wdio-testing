// testCounts.js
let totalSpecFiles = 0;
let passedSpecFiles = 0;
let failedSpecFiles = 0;

exports.incrementTotalSpecFiles = () => {
    totalSpecFiles++;
};

exports.incrementPassedSpecFiles = () => {
    passedSpecFiles++;
};

exports.incrementFailedSpecFiles = () => {
    failedSpecFiles++;
};

exports.getTotalSpecFiles = () => totalSpecFiles;
exports.getPassedSpecFiles = () => passedSpecFiles;
exports.getFailedSpecFiles = () => failedSpecFiles;
