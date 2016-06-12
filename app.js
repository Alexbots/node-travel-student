var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {


	console.log("Travel application is running!");

	var myName = "Alex";
	app.get("/", function (req, resp) {
    resp.render('index');
	});
	app.get("/icecream/:flavour", function (req, resp) {
    resp.render('icecream', {
      flavour: req.params.flavour
    });
	});

  app.get('/blog',function(req,resp) {
    db.findArray({},function(results) {
      console.log(results);
      resp.render('blog', { results:results })
    });
  })
})
