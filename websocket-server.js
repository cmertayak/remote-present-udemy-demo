var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 8080}),
    pageNumber = 1;

wss.on('connection', function(ws) {

    console.log("Somebody comes");

    wss.broadcast = function(data) {
        for(var i in this.clients) {
            this.clients[i].send(data);
        }
    };

    ws.on('message', function(message){
        var data = JSON.parse(message),
            message = data.data,
            myMessage = {};

        console.log("I received: %s", message);

        myMessage.data = message; //pageNumber;
        console.log(myMessage);
        wss.broadcast(JSON.stringify(myMessage));
    });

    ws.send(JSON.stringify({data:'welcome!'}));
});
