const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
// const routes = require("./routes");

// app.use(express.static(path.join(__dirname, 'build')));
// app.use(routes);

// create a GET route
app.get('/connectToServer', (req, res) => {
  res.send({ express: 'The backend is connect to the frontend' });
});

// start server
app.listen(port, function() {
  console.log("Server listening on port ", port);
});