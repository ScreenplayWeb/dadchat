//SOCKETS TUTORIAL
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	//res.send('<h1>Hello world</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	
//-CHAT MESSAGE HANDLER=========
	socket.on('chat message', function(msg){
		console.log('message: ' + msg.txt);
		io.emit('chat message', msg);
	});//END on chat message
	
	
//-NEW SCORE HANDLER============
	socket.on('new score', function(score){
		console.log('message: ' + score);
		io.emit('new score', score);
	});//END on new score
	


});//END on connection

http.listen(process.env.PORT ||3000, function(){
	console.log('listening on :3000');
});
