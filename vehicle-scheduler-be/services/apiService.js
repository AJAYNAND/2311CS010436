const axios = require("axios");
const Log = require("../middleware/logger");
require("dotenv").config();

const api = axios.create({
    baseURL: "http://4.224.186.213/evaluation-service",
    headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json"
    }
});

async function getDepots() {

    try {

        await Log(
            "backend",
            "info",
            "service",
            "Fetching depots"
        );

        const response = await api.get("/depots");

        return response.data.depots;

    } catch (error) {

        await Log(
            "backend",
            "error",
            "service",
            "Failed to fetch depots"
        );

        throw error;
    }

}

async function getVehicles() {

    try {

        await Log(
            "backend",
            "info",
            "service",
            "Fetching vehicles"
        );

        const response = await api.get("/vehicles");

        return response.data.vehicles;

    } catch (error) {

        await Log(
            "backend",
            "error",
            "service",
            "Failed to fetch vehicles"
        );

        throw error;
    }

}

module.exports = {
    getDepots,
    getVehicles
};