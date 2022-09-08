const app = require("./app");
const config = require("./app/config");

//khoi chay server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});