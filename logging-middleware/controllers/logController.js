const Log = require("../middleware/logger");

async function createLog(req, res) {
    try {
        await Log(
            "backend",
            "info",
            "controller",
            "Logging middleware is working successfully"
        );

        res.status(200).json({
            success: true,
            message: "Log sent successfully"
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            "Failed to send log"
        );

        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

module.exports = {
    createLog
};