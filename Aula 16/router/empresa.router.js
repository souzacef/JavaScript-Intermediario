const router = require("express").Router();
const empresa = require("../controller/empresa.controller")

router.get("/", empresa.find);
router.get("/findAll", empresa.findAllEmpressas);
router.post("/create",empresa.createEmpresa);

module.exports = router;

