/**
 * 
 */
var Player = (function() {
    var _instance;
    function Player() {
        var _ammo = 20;
        var _hits = 0;
        return {
            getAmmo: function() {
                return _ammo;
            },
            getHits: function() {
                return _hits;
            },
        }
    }
    return {
        getInstance: function() {
            if (!_instance) {
                _instance = new Player();
            }
            return _instance;
        }
    }
}())
