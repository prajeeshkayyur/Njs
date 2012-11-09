(function(namespace, $){ 

    namespace.TicTacController = function(configParams) { 
        $.extend(this, configParams);
        
        var _this= this,domRoot = $(this.rootNodeSelector), gameContainer = $(this.gameContainerSelector, domRoot);    
            

        this.checkGameOver = function(__this){
            var boxLinesArr=[]; 
            $('div[player="'+$(__this).attr("player")+'"]').each(function() { 
                boxLinesArr.push($(this).attr("boxValue"));
            });  

            if(boxLinesArr.length>2){
                for(m=0;m<boxLinesArr.length;m++){
                    for(n=0;n<boxLinesArr.length;n++){
                        for(o=0;o<boxLinesArr.length;o++){
                            if(jQuery.inArray(boxLinesArr[m]+boxLinesArr[n]+boxLinesArr[o], namespace.gameOverLines)>=0){
                                gameContainer.find("div").unbind('click');
                                var playerName=($(__this).attr("player")==1)?"You":"Computer";
                                alert("Game Over!!! "+playerName+" won the game");
                                return true;
                            }
                        }
                    }
                }
                
                if(boxLinesArr.length==5){
                    alert("Game Over!!! :)");
                    return true;
                }
            }
            return false;
        };

        this.ticTacPlayerMove =function(e,__this) {    
            
            namespace.gameStatus=false;
            $(__this).find("img").attr("src","true.jpeg");
            $(__this).attr("player","1");
            $(__this).unbind('click');
             
            if(_this.checkGameOver(__this)===true){
                return false;
            }
            _this.ticTacComputerMove();
        };

        this.ticTacFindNextMove= function(){
            // chance to win computer then
                var boxLinesComputerArr=[],boxIndex;
                gameContainer.find("div[player='2']").each(function() {
                        boxLinesComputerArr.push($(this).attr("boxValue"));
                }); 

                if(boxLinesComputerArr.length>1){
                    for(m=0;m<boxLinesComputerArr.length;m++){
                        for(n=0;n<boxLinesComputerArr.length;n++){  
                            boxIndex=(boxLinesComputerArr[m]+boxLinesComputerArr[n]);
                             if(namespace.gameLevel3[boxIndex]){
                                return namespace.gameLevel3[boxIndex];
                             }
                        }
                    }                    
                }else if(boxLinesComputerArr.length==0){
                    return Math.floor((Math.random()*9)+1);
                }else{
                    return 5;
                }
                /*var boxLinesPlayerArr=[];
                gameContainer.find("div[player='2']").each(function() {
                          boxLinesPlayerArr.push($(this).attr("boxValue"));
                });*/
            // chance to win player then
        };

        this.ticTacComputerMove=function(){
            namespace.gameStatus=true;
            var computerBox,computerEntry=0,___this;
            while(computerEntry<1){
                computerBox=_this.ticTacFindNextMove();
                ___this=$('div[boxValue="'+computerBox+'"]');
                if($(___this).attr("player") === undefined){
                    computerEntry=1;                    
                    $(___this).find("img").attr("src","false.jpeg");
                    $(___this).attr("player","2");
                    $(___this).unbind('click');
                    _this.checkGameOver(___this);
                }
            }         
        };


        $(namespace).bind("ticTacPlayerMove", _this.ticTacPlayerMove); 
        $(namespace).bind("ticTacComputerMove", _this.ticTacComputerMove); 
    };

    namespace.TicTacController.prototype = {      
    };

})(Game.TicTac, jQuery);