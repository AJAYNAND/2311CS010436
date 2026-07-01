const { getDepots, getVehicles } = require("../services/apiService");
const selectBestTasks = require("../services/knapsack");
const Log = require("../middleware/logger");

async function scheduleVehicles(req, res) {

    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Vehicle scheduling started"
        );

        const depots = await getDepots();
        const vehicles = await getVehicles();

        const result = depots.map((depot) => {

            const best = selectBestTasks(
                vehicles,
                depot.MechanicHours
            );

            return {
                depotId: depot.ID,
                mechanicHours: depot.MechanicHours,
                totalImpact: best.totalImpact,
                selectedTasks: best.selectedTasks
            };

        });

        await Log(
            "backend",
            "info",
            "controller",
            "Vehicle scheduling completed"
        );

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.message
        );

        console.log(error);

        if (error.response) {
            console.log(error.response.data);
        }

        res.status(500).json({
            success: false,
            error: error.message
        });

    }
}

module.exports = {
    scheduleVehicles
};