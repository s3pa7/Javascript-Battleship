/**
 * 
 */
var Grid = (function () {
    var _instance;

    function Grid() {
        var rows = 7;
        var cols = 7;
        var squareSize = 40;
        var board = document.getElementById("board");
        var ammo = Player.getInstance().getAmmo();
        var hitCount = Player.getInstance().getHits();
        gameOver = false;
        var gameBoard = [
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]
        return {
            getGridAmmo: function () {
                return ammo;
            },
            getGridHits: function () {
                return hitCount;
            },
            draw: function () {
                for (i = 0; i < cols; i++) {
                    for (j = 0; j < rows; j++) {
                        var square = document.createElement("div");
                        board.appendChild(square);
                        square.id = 's' + i + j;
                        var topPosition = i * squareSize;
                        var leftPosition = j * squareSize;
                        square.style.top = topPosition + 'px';
                        square.style.left = leftPosition + 'px';
                    }
                }
                return this;
            },
            lookForShoot: function () {

                board.addEventListener("click", function (e) {
                    if (e.target !== e.currentTarget) {
                        var row = e.target.id.substring(1, 2);
                        var col = e.target.id.substring(2, 3);
                        if (gameBoard[row][col] == 0) {
                            e.target.style.background = 'blue';
                            gameBoard[row][col] = 3;
                            ammo--;
                            document.getElementById("ammo").innerHTML = ammo;
                        } else if (gameBoard[row][col] == 1) {
                            e.target.style.background = 'red';
                            gameBoard[row][col] = 2;
                            hitCount++;
                            ammo--;
                            document.getElementById("ammo").innerHTML = ammo;
                            document.getElementById("hits").innerHTML = hitCount;
                        } else if (gameBoard[row][col] == 3) {
                            alert("You already hit that location!");
                        }

                        if ((hitCount == 6) && (ammo > 0)) {
                            alert("You win!");
                            location.reload();
                        }
                        if ((hitCount < 6) && (ammo == 0)) {
                            alert("You lose!");
                            location.reload();
                        }
                    }
                }, false);
            }
        }
    }

    return {
        getInstance: function () {
            if (!_instance) {
                _instance = new Grid();
            }
            return _instance;
        }
    }

}());
