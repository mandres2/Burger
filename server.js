//author: Micah Andres
//github: @mandres2

// Import express so that I can build my express web server.
const express = require("express");
const bodyParser = require("body-parser");
// Declare PORT, process.env.PORT is used in the production environment and this PORT number is it's value via Heroku.
// When in the development environment use PORT 8080 (this port number is a common convention)
let PORT = process.env.PORT || 3000;

// Declare an instance of an express application:
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
// Static files include: client side javascript, css, and images
// When I am importing javascript, css, and images, I need to tell express to look into the public folder.
app.use(express.static("public"));

// Middleware
// Parse application body as JSON
// This specifically listens for POST request and parses incoming data so that we can have a JSON-like experience
// This middleware provides data for the req.body object in the POST routes.
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
// app.engine is setting the view engin as well as the default layout. This line tells express to look in the /views/layout folder for a main.handlebars
const exphbs = require("express-handlebars");
// Using template engines with Express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// when I run res.render('index'), express knows to look in our views folder for an index.handlebars
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Start my server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when my server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
