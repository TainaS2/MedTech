const app = require('./app')
const port = 3000


app.listen(process.env.PORT || 3000)
    console.log("Server is on the port: " + port);
;