const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const schedulerRoutes = require("./routes/schedulerRoutes");

app.use(express.json());

app.use("/", schedulerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});