const Sequelize = require ('sequelize');
const sequelize = new Sequelize('workout-logger',
'postgres', 'elevenFifty', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
    .authenticate()
    .then(
    function() {
        console.log('Connected to workout-logger postgres database');
    },
    function(err){
        console.log(err);

    }
);

module.exports = sequelize;