const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');


const { restoreUser, requireAuth } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);


// Define a route handler for the root URL
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// test
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });
// router.get('/test',requireAuth, (req, res) => {
//   res.json('hello world' );
// });

module.exports = router;

module.exports = router;
