const express = require("express");
const path = require("path");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(express.urlencoded({limit: '50mb', extended: true })); 
app.use(express.json());

app.get("/:id", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/usuario/:id", function(req, res) {
  let data = req.body.prueba;
  res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Test HCI</title><!-- Compiled and minified CSS --></head><body><div id="app"></div><!-- Compiled and minified JavaScript --><script>var globalDataUser = JSON.parse('${data}')</script><script src="/js/bundle.js"></script></body></html>`);
});

app.post("/datos_usuario", function(req, res) {
  let data = req.body.prueba;
  res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Test HCI</title><!-- Compiled and minified CSS --></head><body><div id="app"></div><!-- Compiled and minified JavaScript --><script>var globalDataUser = JSON.parse('${data}')</script><script src="/js/bundle.js"></script></body></html>`);
});

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
