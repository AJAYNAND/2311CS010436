const writeLog = require("../utils/writeLog");

async function Log(stack, level, packageName, message) {
    await writeLog(stack, level, packageName, message);
}

module.exports = Log;