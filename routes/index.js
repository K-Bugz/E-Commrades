const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;