 
var io = require("socket.io-client")("http://localhost:3000");
//var socket = io();
 /*     $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });*/
     var readline = require("readline");
     var rl = readline.createInterface({
	     input:process.stdin,
	     terminal:false,
	     output:process.stdout
     });
     rl.on("line", function(ln) {
	     io.emit("my other event", ln);

     });
     	io.on("news", function(dat) {
		console.log("chatted:",dat);
      //io.emit("my other event","I loged on");
		});

