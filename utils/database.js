const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize("mysql://root:ZeMJR6tJNMUNfyxIOwml@containers-us-west-136.railway.app:7659/railway", {
    logging: console.log
})

// async function trySequelize() {try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully');
// } catch (error) {
//     console.error('Unable to connect to the database:', error)
// }
// }

// trySequelize()

module.exports = sequelize
