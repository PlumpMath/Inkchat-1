 
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
     process.stdout.write("group: ")
     rl.on("line", function(ln) {
	    	     i++;
	     if (i>2) {
	     	io.emit("message to server", {string:name+": "+ln,message:ln,name:name,group:group});
		process.stdout.write(name+": ");
	     } else if(i>1) {
	     	name=ln;
		process.stdout.write(name+": ");
	     } else {
		group = ln;
		process.stdout.write("name: ");
	     }


     });
     	io.on("message to client", function(dat) {
		if (!dat.name){
			console.log("WARN:no name found");
		}else if(dat.name != name && name != "" && dat.group == group){
			console.log("\r"+stringmultiply(" ",name.length+2)+"\r"+dat.string);
	     		process.stdout.write(name+": ");
			
		}
      //io.emit("my other event","I loged on");
		});

