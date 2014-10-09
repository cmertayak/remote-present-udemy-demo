/*
    Socket and actual JS codes are at the same place
*/

(function($){
    var server = "ws://localhost:8080",
        socket = new WebSocket(server, "protocolOne");

    console.log('REMOTE');

    socket.onopen = function(event) {
        $('#next').on('click', function(){
            var message = { type: 'remote', data: 'next' };
            socket.send(JSON.stringify(message));
        });

        $('#prev').on('click', function(){
            var message = { type: 'remote', data: 'prev'};
            socket.send(JSON.stringify(message));
        });

        $('#page-number').on('keypress', function(e){
            console.log('heee');
            if(e.which == 13) {
                var pageNumber = $('#page-number').val(),
                    message = { type: 'remote', data: pageNumber };
                console.log(pageNumber, message);
                socket.send(JSON.stringify(message));
            }
        });
    };
})(jQuery);
