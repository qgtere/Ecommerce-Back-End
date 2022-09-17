#  E-Commerce Back End

![badge](https://img.shields.io/badge/License-MIT-yellow)

## Description

 This is the backend for an E-commerce site. Powered with MySQL2, Express, Sequelize and Dotenv.

## Table of Content

* [Installation and Usage](#installation-and-usage)
* [Link to the video](#link-to-the-video)
* [Techs](#techs)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation and Usage

To install the necessary dependencies, run the following command on your CLI:
```bash
    npm i
```
Once you had installed the dependencies described, create an .env file and change it with your own information when applicable:
```
    DB_HOST=localhost
    DB_USER=yourUser
    DB_PASS=yourPassword
```
Create the database schema and add some data:
```bash
    #work on MySQL
    mysql -u root -p
    # to create the DB schema
    SOURCE db/schema.sql    
```
Add data to the database (on your CLI):
```bash
    node seeds/index.js    
```
Now you can start working:
```bash
    npm start
```

## Link to the video

[Link to the video](https://drive.google.com...)

## Techs

* Javascript
* Node.js
    * Express
    * Sequelize
    * MySQL2
    * Dotenv
* MySQL

## License

 Licensed under the [MIT](https://opensource.org/licenses/MIT)
 license.

## Contributing 

 The open source community is a great place to inspire and learn thanks to contributions, feel free to make yours!
    If you have a suggestion that would make this better, please fork the repo and create a pull request.

## Questions

  You can see more of my work on [qgtere](https://github.com/qgtere).

  If you have any additional questions please don't hesitate to reach me on qg.tere@gmail.com.  