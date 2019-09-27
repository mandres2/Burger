# Burger Application

![alt text](https://github.com/mandres2/Burger/blob/master/public/assets/img/burgerApp_ReadME.gif?raw=true)

## Motive:
As a Full Stack Developer, the primary motive was to build an application by utilizing an ORM methodology and establishing a MVC framework. Exerting these types of practices provides an organized/clean environment and allows other developers to maneuver around the code with ease.

## Getting Started

<b>To get started:</b>
<br>
:black_small_square: You will need to have an updated IDE (preferably VS Code), and the latest version of Node.js, and an up-to-date version of Express, and Heroku.

### Prerequisites

:black_small_square: IDE: Microsoft Visual Studios 1.37.1 (or higher).
<br>
:black_small_square: Node.js (Version: 12.9.0 or higher)
<br>
:black_small_square: Express - Web application framework designed for building web applications and APIs.
<br>
:black_small_square: Heroku - Container-based cloud Platform as a Service (PaaS). Heroku enables developers to build, run, and operate applications entirely in the cloud.
<br>
:black_small_square: MySQL - Open-source relational database management system.
<br>
:black_small_square: JawsDB MySQL - free Heroku add-on application that gives access to a fully-functional MySQL database with no barriers or hoops to jump through.


## Code Explanation:
* The way the code was written out was utilizing ORM (Object-Relational Mapping), while establishing an MVC (Model-View-Controller) framework.
  1. server.js that contains the npm packages for express, body-parser, and path. The server.js sets up the app(instance of express) as well as setting up handlebars, and import the routes.
  2. The db folder contains the MySQL data which is primarily the burgers created/devoured. schema.sql is the table for burgers. seeds.sql contains the lists of generic burgers imported into the table.
  3. The public folder contains primarily the front-end code. It also contains the CSS styling for the web page as well.


## How To Use The Application:
1. To utilize the application, click on the designated Heroku link:
2. When you arrive to the main page, at the bottom there is a form called: 'Customize Your Own Burger.' In the form, you can type the type of burger you want. Then press the 'Add Burger' Button.
3. The burger that you just entered in the form will now show in the left-hand side panel: 'Burgers available to eat.'
4. There is a devour button next to each burger. Click the button to "devour" the burger.
5. After the burger you selected to eat will show on the right hand side panel called: 'Burgers Devoured.'
6. If the user decides to create another burger, repeat procedure: #2-5.

![alt text](https://github.com/mandres2/Burger/blob/master/public/assets/img/Customize%20your%20burger.png?raw=true)

![alt text](https://github.com/mandres2/Burger/blob/master/public/assets/img/Burgers%20Available%20to%20Eat%20and%20Devoured.png)


## Deployment

* <b> 'git push origin master' & 'git push heroku master' the files into GitHub Profile and Heroku respectively.</b>
* <b> Link repository and Heroku deployment link to BCS.</b>

## Built With

<br>
:black_small_square: Microsoft Studios Visual Code (v1.37.1)
<br>
:black_small_square: Express - Web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs
<br>
:black_small_square: MySQL - Open-source relational database management system
<br>
:black_small_square: Handlebars - Handlebars.js is a client-side (though it can be used on the server, too) templating engine for JavaScript.
<br>
:black_small_square: Google Chrome v77.0.3865.90(Windows)
<br>
:black_small_square: Node.js v12.9.0
<br>
:black_small_square: ShareX v12.4.1 - Screen Record User Functionality and converts to GIFs
<br>
:black_small_square: Adobe XD - Create blue-print for HTML layout.

## npm Packages Used:

:black_small_square: mysql v2.17.1
<br>
:black_small_square: express-handlebars v3.1.0
<br>
:black_small_square: body-parser v1.19.0 - Node path middleware.
<br>
:black_small_square: path v0.12.7 - NodeJS ’path’ module

## Author

**Micah Andres** - [mandres2](https://github.com/mandres2)

## License

<b>This project is licensed under the MIT License</b>

## Acknowledgments
* <b>TAs</b> - Catherine Pham, Benjamin Vaagen

<br>

* <b>Teacher</b> - Arron Linton

## Progress Log:
<br>
:heavy_check_mark: 9.22 - Reviewed requirements. Established repository, files/folders, and began markdown on README.md.
<br>
:heavy_check_mark: 9.24/9.25 - Began rough drafting HTML layout via Adobe XD. Started coding database, backend logic (server, controllers, connection), and front-end
<br>
:heavy_check_mark: 9.26 - Checking paths and debugging routes (JawsDB/MySQL Path to Heroku)
<br>
:heavy_check_mark: 9.27 - Polishing application with final touches followed by application deployment.
