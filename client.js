 
var io = require("socket.io-client")("http://localhost:3000");
var stringmultiply = function(str,rep) {
	var returnstr = ""
	for(var i=0;i<rep;i++){
		returnstr += str;
	}
	return returnstr;
}
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
     var i = 0;
     var name="";
     process.stdout.write("name:")
     rl.on("line", function(ln) {
	    	     i++;
	     if (i>1) {
	     	io.emit("my other event", name+": "+ln);
	     } else {
	     	name=ln;
	     }
	     process.stdout.write(name+": ");


     });
     	io.on("news", function(dat) {
		var q = dat.match(/^\w+\:/);
		if (!q){
			console.log("WARN:no name found");
			//console.log(dat)
		}else if(q[0] != name+":"){
			console.log("\r"+stringmultiply(" ",name.length+2)+"\r"+dat);
	     		process.stdout.write(name+": ");
			
		}
      //io.emit("my other event","I loged on");
		});

