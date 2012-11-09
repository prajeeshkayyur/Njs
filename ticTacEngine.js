(function(namespace, $) {

    namespace.TicTacEngine = function(){

        var _this=this;

        this.initGame=function(){
            //namespace.TicTacDrawGame    =new namespace.TicTacDrawGame();
            $(namespace).trigger('loadGame');  
            $(namespace).trigger('addInputCallBack');  

            //namespace.TicTacInput       =new namespace.TicTacInput();
            //namespace.TicTacController  =new namespace.TicTacController();
            

            
        };


        this.initGame();
    }();   

})(Game.TicTac, jQuery);