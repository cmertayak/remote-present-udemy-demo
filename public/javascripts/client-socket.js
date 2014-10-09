(function($){
    var socket = new WebSocket("ws://localhost:8080", "protocolOne");

    socket.onopen = function(event) {
        var str = "HELLO SOCKET!",
            message = {};

        message.data = str;
        socket.send(JSON.stringify(message));
    };

    var isNumeric = function(input) {
        return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
    };

    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);

        if(data.data == 'next') {
            $.deck('next');
        } else if(data.data == 'prev') {
            $.deck('prev');
        } else if(isNumeric(data.data)) {
            $.deck('go', parseInt(data.data)-1);
        }
    };
})(jQuery);
