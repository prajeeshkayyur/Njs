(function(namespace, $){ 

    namespace.TicTacPlayerMove = function() { 

        var _this= this
        ,gameContainerSelector =namespace.getGameContainerSelector();

        this.playerOneMove=function(e,__this){
            alert($(__this).attr("id"));
        };

        this.playerTwoMove=function(e,__this){
                       
        };
        
        $(namespace).bind("playerOneMove", _this.playerOneMove);
        $(namespace).bind("playerTwoMove", _this.playerTwoMove);

    }();

})(Game.TicTac, jQuery);