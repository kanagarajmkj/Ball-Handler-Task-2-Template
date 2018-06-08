// Use this to add a div element dynamically in html
//let $body = $('body');
//$body.append(' <div id="' + id + '" style="" class="ball"></div>');
//Use this jquery code to dynamically size & position the ball
// let ball = $('#' + div);
// ball.css({'background-size': obj.size, 'width': obj.size, 'height': obj.size});
// ball.offset({left:startX, top:startY});
/// reference path
var MovingBall = /** @class */ (function () {
    function MovingBall(div) {
        this.div = div;
        // this.divId =   div;   
        var obj = this;
        $(document).ready(function () {
            var ball = $('#' + div);
            obj.isMovingDown = true;
            obj.isMovingRight = true;
            obj.speed = 5;
            setInterval(function () {
                obj.move(ball, obj.speed);
            }, 10);
        });
    }
    MovingBall.prototype.move = function (ball, speed) {
        // Your code goes here...
        var $ball = $(ball);
        var pos = $ball.offset();
        var coords = { left: pos.left, top: pos.top };
        if (this.isMovingRight == true) {
            coords.left += speed;
        }
        else {
            coords.left -= speed;
        }
        if (this.isMovingDown == true) {
            coords.top += speed;
        }
        else {
            coords.top -= speed;
        }
        if (coords.left + 60 >= window.innerWidth)
            this.isMovingRight = false;
        if (coords.left <= 0)
            this.isMovingRight = true;
        if (coords.top + 60 >= window.innerHeight)
            this.isMovingDown = false;
        if (coords.top <= 0)
            this.isMovingDown = true;
        //let left = pos.left + 10;
        //let top = pos.top + 10;
        //$ball.offset({left: left, top: top});
        $ball.offset(coords);
    };
    return MovingBall;
}());
var RandomGenerator = /** @class */ (function () {
    function RandomGenerator() {
    }
    RandomGenerator.prototype.GetBoolean = function () {
        var randNo = Math.random();
        return randNo > 0.5 ? true : false;
    };
    RandomGenerator.prototype.GetNumber = function (min, max) {
        if (max < min) {
            var temp = max;
            max = min;
            min = temp;
        }
        var digitLength = max.toString().length;
        var factor = 0.1;
        for (var i = 0; i < digitLength; i++) {
            factor *= 10;
        }
        var randNo = Math.random();
        console.log(randNo);
        randNo = Math.round(randNo * factor);
        console.log(randNo);
        return randNo;
    };
    return RandomGenerator;
}());
var BallsHandler = /** @class */ (function () {
    function BallsHandler(noOfBalls) {
        var obj = this;
        $(document).ready(function () {
            // add some code to dynamically generate the balls
        });
    }
    BallsHandler.prototype.AddBall = function (id) {
        //  let $body = $('body');
        //  $body.append(' <div id="' + id + '" style="" class="ball"></div>');
    };
    return BallsHandler;
}());
new BallsHandler(10);
//# sourceMappingURL=ballHandler.js.map