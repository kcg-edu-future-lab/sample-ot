const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {path: "/sample-ot/socket.io"});

app.get('/sample-ot/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/sample-ot/ot.js', function(req, res){
  res.sendFile(__dirname + '/ot.js');
});
app.get('/sample-ot/ot-min.js', function(req, res){
  res.sendFile(__dirname + '/ot-min.js');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

const EditorSocketIOServer = require('ot/lib/editor-socketio-server');
const server = new EditorSocketIOServer("サンプルの文章です。", [], 1);

io.on('connection', function(socket){
  server.addClient(socket);
});
