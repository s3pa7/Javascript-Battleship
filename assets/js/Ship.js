/**
 * 
 */
var Ship = (function () {
    function Ships() {
        this.shipLength = 3;
        this.shipsSunk = 0;
        this.ships = [{
            locations: [0, 0, 0],
            hits: ["", "", ""]
        }];
    }
    return Ships;
}());
