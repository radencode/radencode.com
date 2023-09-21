const express = require("express");
const app = express();

app.use(express.static("app"));

app.listen(7003, () => {
    console.log("server started on port 7003");
});