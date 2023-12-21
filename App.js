const express = require ('express');
const app = express();

const dotEnv = require('dotenv');

dotEnv.config({
  path : './config/config.env'
});

const database = require('./config/database');

const PORT = process.env.PORT;
// initialising the server
app.listen(PORT, () => {
  console.log (`Server is started on ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

const user = require('./routes/User');

app.use(user);