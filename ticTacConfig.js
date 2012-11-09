window.Game = window.Game || {};
window.Game.TicTac = window.Game.TicTac || {};

(function(namespace, $) {
    
    var _this= this;

// configurations
    namespace.getRootNodeSelector = function() { 
        return ".main-container";
    }; 

    namespace.getGameContainerSelector = function() { 
        return ".game-container";
    };

    namespace.getBoxValueClassName = function() { 
        return "boxValue";
    };

    namespace.getPlayerStatus = function() { 
        return this.playerStatus;
    };

    namespace.setPlayerStatus = function(status) { 
        this.playerStatus= status;
    };

    namespace.getGameOverLines = function() { 
        this.gameOverLines=['123','456','789','147','258','369','159','357'];
        return this.gameOverLines;
    };
    
/*
    $(namespace).bind("getRootNodeSelector", _this.getRootNodeSelector); 
    $(namespace).bind("getGameContainerSelector", _this.getGameContainerSelector); 
    $(namespace).bind("getBoxValueClassName", _this.getBoxValueClassName); 
    $(namespace).bind("getPlayerStatus", _this.getPlayerStatus); 
    $(namespace).bind("setPlayerStatus", _this.setPlayerStatus); */
// configurations



/*
   namespace.gameLevel3={

    "12":"3"
    ,"23":"1"
    ,"13":"2"

    ,"45":"6"
    ,"56":"4"
    ,"46":"5"

    ,"78":"9"
    ,"89":"7"
    ,"79":"8"

    ,"14":"7"
    ,"47":"1"
    ,"17":"4"

    ,"25":"8"
    ,"58":"2"
    ,"28":"5"

    ,"36":"9"
    ,"69":"3"
    ,"39":"6"

    ,"15":"9"
    ,"59":"1"
    ,"19":"5"

    ,"35":"7"
    ,"57":"3"
    ,"37":"5"
    };
*/
})(Game.TicTac, jQuery);