const app = require('./app');
const CONFIG = require('./config/config')
const connectToDB = require("./db");


connectToDB()

app.listen(CONFIG.PORT, () => {
    console.log(`app is listening on the port ${CONFIG.PORT}`);
  }); 