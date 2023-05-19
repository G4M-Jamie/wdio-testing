class CustomReporter {
    constructor(options) {
        this.passedCount = 0;
    }

    onTestPass() {
        this.passedCount++;
    }

    onRunnerEnd() {
        console.log("TESTING");
    }
}

module.exports = new CustomReporter;