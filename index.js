const express = require("express");
const app = express();
const authRouterV1 = require("./api/v1/auth");

app.use(express.json({ extended: false }));

app.use("/api/auth/v1", authRouterV1);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
