require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let workout = require('./controllers/workoutcontroller'); /*workoutcontroller.js*/
let user = require('./controllers/usercontroller'); /*usercontroller.js*/

sequelize.sync();

app.use(require('./middleware/headers')); 
app.use(express.json());  

app.use('/workout', workout); /*workoutcontroller.js*/
app.use('/user', user); /*usercontroller.js*/

app.listen(3000, function () {
    console.log("App is listening on port 3000");
});