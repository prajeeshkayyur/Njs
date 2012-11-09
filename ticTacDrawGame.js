(function(namespace, $){ 

    namespace.TicTacDrawGame = function() { 

        var _this= this
        ,domRootSelector = namespace.getRootNodeSelector()
        ,gameContainerSelector = namespace.getGameContainerSelector()
        ,boxValueClassName = namespace.getBoxValueClassName();

        this.loadGame = function(){
            var newBox;
            for(var i=1;i<=9;i++){
                    newBox=$("<div>").attr(boxValueClassName,i).append("<img>");
                    $(gameContainerSelector).append(newBox);
            }            
        }

        $(namespace).bind("loadGame", _this.loadGame);
    }();

})(Game.TicTac, jQuery);