//index for controllers
const express = require("express");
const router = express.Router();

//const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
//router.use("/api", apiRoutes);

module.exports = router;
