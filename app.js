var http = require("http");


http.createServer(function(requst,response){
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.Write("Hello wrold \n");
	response.end();
}).listen(3030);


console.log("Server is running at localhost:3030");
