var express = require("express");
var router = express.Router();
var unirest = require("unirest");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Karaoke", logged: true });
});

router.get("/top100", function (req, res, next) {
  var req = unirest("GET", "https://billboard-api2.p.rapidapi.com/hot-100");

  req.query({
    date: "2020-09-08",
    range: "1-100",
  });

  req.headers({
    "x-rapidapi-host": "billboard-api2.p.rapidapi.com",
    "x-rapidapi-key": "3aae8f30abmsheddf94bfbd219d2p18dbb7jsn46b1fd16d27b",
    useQueryString: true,
  });

  req.end(function (res) {
    //if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
  //res.render("top100", { title: "Karaoke", logged: true });
});

module.exports = router;
