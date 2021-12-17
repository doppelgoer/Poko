module.exports = function (app) {
  let express = require('express');
  let router = express.Router();

  router.get('/getProducts', function (req, res) {
    res.send({
      data: [
        { title: 1, titleIcon: `HomeFilled`, txt: '안녀어엉' },
        { title: 12, titleIcon: `HomeFilled`, txt: '안녀어엉2' },
        { title: 13, titleIcon: `HomeFilled`, txt: '안녀어엉3' },
        { title: 14, titleIcon: `HomeFilled`, txt: '안녀어엉4' },
        { title: 15, titleIcon: `HomeFilled`, txt: '안녀어엉5' },
      ],
    });
  });
  router.get('/2', function (req, res) {
    res.send('Hello /market/2');
  });

  return router;
};
