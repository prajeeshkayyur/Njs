(function(namespace, $){ 

    namespace.TicTacInput = function() { 

        var _this= this
        ,gameContainerSelector =namespace.getGameContainerSelector();

        this.addInputCallBack=function(){
            $(gameContainerSelector).find('div').bind('click', function() {
                if(namespace.getPlayerStatus()=="player1"){
                    namespace.setPlayerStatus("player2");
                    $(namespace).trigger('playerOneMove',this);
                }else{
                    alert("player two");
                    namespace.setPlayerStatus("player1");
                    //$(namespace).trigger('playerTwoMove');
                }

            });            
        };

        $(namespace).bind("addInputCallBack", _this.addInputCallBack);
       
    }();

})(Game.TicTac, jQuery);