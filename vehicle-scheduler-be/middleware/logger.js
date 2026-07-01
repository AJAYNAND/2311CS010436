
const axios = require("axios");
require("dotenv").config();

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(

            process.env.LOG_API,

            {
                stack,
                level,
                package: packageName,
                message
            },

            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }

        );

        return response.data;

    }

    catch(error){

        console.log("Log Error");

    }

}

module.exports = Log;