var express = require('express');
var router = express.Router();

// get insecure page
router.get('/', function (req, res, next) {
  res.render('index');
});

// csp protected page
router.get('/csp', function (req, res, next) {
  res.header('Content-Security-Policy',
  `img-src 'self'`);  
  // `img-src 'self' ; 
    // report-uri /error`);
  res.render('index');
});

module.exports = router;
