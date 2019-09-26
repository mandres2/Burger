//author: Micah Andres
//github: @mandres2

// Import express so that I can build my express web server.
const express = require("express");
const bodyParser = require("body-parser");
const path = require ("path");

// Declare an instance of an express application:
let app = express();
// Declare PORT, process.env.PORT is used in the production environment and this PORT number is it's value via Heroku.
// When in the development environment use PORT 8080 (this port number is a common convention)
let PORT = process.env.PORT || 3000;
// Serve static content for the app from the "public" directory in the application directory.
// Static files include: client side javascript, css, and images
// When I am importing javascript, css, and images, I need to tell express to look into the public folder.
app.use(express.static("public"));

// Middleware
// Parse application body as JSON
// This specifically listens for POST request and parses incoming data so that we can have a JSON-like experience
// This middleware provides data for the req.body object in the POST routes.

// app.use(bodyParser.urlencoded({ extended: false }));

// Sets up the Express app to handle data parsing --> This code is based off from the bodyParser API documentation.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

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
app.use(express.static(__dirname + '/public'));

// Listener - Start our server so that it can begin listening to client request.
app.listen(PORT, function() {
    // Log (server-side) when the server has started
    console.log("Application listening on PORT: " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
});
