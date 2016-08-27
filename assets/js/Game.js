/**
 * 
 */
var Game = (function () {
    var _instance;

    function Game() {
        return {
            init: function () {
                Grid.getInstance()
                    .draw()
                    .lookForShoot();
            }
        }
    }

    return {
        getInstance: function () {
            if (!_instance) {
                _instance = new Game();
            }
            return _instance;
        }
    }
}())