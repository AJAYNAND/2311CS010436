function selectBestTasks(tasks, maxHours) {
    const n = tasks.length;

    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(maxHours + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let j = 0; j <= maxHours; j++) {

            if (duration <= j) {
                dp[i][j] = Math.max(
                    impact + dp[i - 1][j - duration],
                    dp[i - 1][j]
                );
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    const selectedTasks = [];
    let j = maxHours;

    for (let i = n; i > 0; i--) {

        if (dp[i][j] !== dp[i - 1][j]) {
            selectedTasks.push(tasks[i - 1]);
            j -= tasks[i - 1].Duration;
        }
    }

    return {
        totalImpact: dp[n][maxHours],
        selectedTasks: selectedTasks.reverse()
    };
}

module.exports = selectBestTasks;