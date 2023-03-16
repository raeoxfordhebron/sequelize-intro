// Import the sequelize object on which we have defined model
const sequelize = require('./utils/database')

// Import the user model we have defined
const User = require('./models/user')

// create all the tables defined using sequelize in Database

// synce all models that are not already in the database
sequelize.sync()

// Force synce all models it will drop the table first and re-create it afterwards
sequelize.sync({force:true})

