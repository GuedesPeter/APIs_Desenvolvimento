const http = require('http');

const requestListener = function(req, res) {
    if (req.url == '/'){
        res.write('Hello World!'); 
        res.end(); 
    }
    else if (req.url == '/produtos'){
        res.write("Lendo produtos..."); 
        res.end(); 
    }
    else {
        res.write("ERRO"); 
        res.end(); 
    }
};

const server = http.createServer(requestListener);

server.listen(3000, function (){
    console.log('Servidor iniciando...')
}); 
