const express = require("express");

const app = express();

const logRouter = require("./routes/logRouter");

app.use(express.json());

app.use("/", logRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});