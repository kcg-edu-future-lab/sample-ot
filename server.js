const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {path: "/sample_ot/socket.io"});

app.get('/sample_ot/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

const EditorSocketIOServer = require('ot/lib/editor-socketio-server');
const server = new EditorSocketIOServer("サンプルの文章です。", [], 1);

io.on('connection', function(socket){
  server.addClient(socket);
});
