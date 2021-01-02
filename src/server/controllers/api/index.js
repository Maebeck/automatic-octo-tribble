// export all controllers
const router = require('express').Router();

const jetRoutes = require('./jetRoutes');


router.use('/jets', jetRoutes);

module.exports = router;