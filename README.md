## Title
Project CRUD Contactlist using [AngularJS](http://www.angularjs.org/)
## Description
CRUD project with AngularJS and firebase.
## Author
Abel García Luis
## Installation
```
  cd Contactlist
  npm install
  bower install
```
## Running
### Start the App
* Create a database with a table called users.
* Use Xampp application to run MySQL and Apache to authenticate or create users using database, all the config is in server/config.php
```
  cd Contactlist
  http-server
```
* Browse to the application at [http://localhost:8080/app/]
## Used components
* angular.js to create my angular app.
* bootstrap to implement bootstrap style in css.
* firebase to interact in a realtime database.
* angular-local-storage.js to check if user is logged.
* angular-firebase to make the integration between angular and firebase more seamless.
* angular-route module that helps your application to become a Single Page Application.
* protractor to runs tests against your application running in a real browser, interacting with it as a user would.
## Testing the Application
I used protractor to test diferents functionalities
* Login test.
* Register test.
* Add contact in my contact list.
* Edit the last contact in my contact list.
* Delete the first contact in my contact list.
* Logout.
## Running the protractor test
```
  cd Contactlist
  webdriver-manager start
```
### In other command prompt
```
  cd Contactlist/app/test/e2e/config
  protractor protractor.conf.js
```
