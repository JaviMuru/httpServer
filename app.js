const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  switch(request.url) {
  case "/":
    const home = fs.readFileSync("./www/html/home.html");
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(home)
    break;
  case "/bio":
    const bio = fs.readFileSync("./www/html/bio.html");
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(bio)
    break;
  case "/services":
    const services = fs.readFileSync("./www/html/services.html");
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(services)
    break;
  case "/contact":
    const contact = fs.readFileSync("./www/html/contact.html");
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(contact)
    break;
  default:
    const notFoundError = fs.readFileSync("./www/html/404.html");
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end(notFoundError)
}
});

server.listen(3000, "localhost", () => {
  console.log("Server running on port 3000");
});