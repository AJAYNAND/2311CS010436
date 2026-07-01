const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzExY3MwMTA0MzZAbWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3ODI4ODY5NzQsImlhdCI6MTc4Mjg4NjA3NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNlYTAwNjU3LTkxMjEtNDI2ZC1iM2I2LTU2ZWFiZmIyYjdlMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1lbmRlIGFqYXluYW5kIGt1bWFyIiwic3ViIjoiM2JhNjc3MTYtMTU5ZS00Yjk0LThhNDMtZWQyZWJmNzMxMzA0In0sImVtYWlsIjoiMjMxMWNzMDEwNDM2QG1hbGxhcmVkZHl1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6Im1lbmRlIGFqYXluYW5kIGt1bWFyIiwicm9sbE5vIjoiMjMxMWNzMDEwNDM2IiwiYWNjZXNzQ29kZSI6InhwUWRkZCIsImNsaWVudElEIjoiM2JhNjc3MTYtMTU5ZS00Yjk0LThhNDMtZWQyZWJmNzMxMzA0IiwiY2xpZW50U2VjcmV0IjoiVFFkdFFia1d3QlFUdVpuRyJ9.X-8sBpVCguxHl5mX16kdjCu468bjGTe_feF7RIJ2qFE";

async function writeLog(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log Created Successfully");
        return response.data;

    } catch (error) {
        console.log("Error while sending log");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = writeLog;