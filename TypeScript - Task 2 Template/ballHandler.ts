
        // Use this to add a div element dynamically in html

        //let $body = $('body');
        //$body.append(' <div id="' + id + '" style="" class="ball"></div>');


        //Use this jquery code to dynamically size & position the ball

        // let ball = $('#' + div);
        // ball.css({'background-size': obj.size, 'width': obj.size, 'height': obj.size});
        // ball.offset({left:startX, top:startY});


        // Usage of RandomGenerator Class
        
        //let rand = new RandomGenerator();
        //let randomBoolean = rand.GetBoolean();
        //let startX = rand.GetNumber(0, window.innerWidth - size);
        //let startY = rand.GetNumber(0, window.innerHeight - size);


/// reference path
class MovingBall {

    private divId:string;
    private ballDiv: any;

    private isMovingRight: boolean;
    private isMovingDown: boolean;

    private speed: number;

    constructor(public div: string) {  
       // this.divId =   div;   
       let obj = this;
       $(document).ready(function (){

         let ball = $('#' + div);

         obj.isMovingDown = true;
         obj.isMovingRight = true;
         obj.speed = 5;

        

         setInterval(function () {
            obj.move(ball, obj.speed);
         }, 10);
       });
    
    }

    move(ball: any, speed: number): void  {
        // Your code goes here...
        let $ball = $(ball);
        let pos = $ball.offset();
        let coords = {left: pos.left, top: pos.top};


        if(this.isMovingRight == true)
        {
            coords.left += speed;
        }
        else
        {
            coords.left -= speed;
        }

        if(this.isMovingDown == true)
        {
            coords.top += speed;
        }
        else
        {
            coords.top -= speed
        }

        if(coords.left + 60 >= window.innerWidth)
            this.isMovingRight = false;
        if(coords.left <= 0)
            this.isMovingRight = true;

        if(coords.top + 60 >= window.innerHeight)
            this.isMovingDown = false;
        if(coords.top <= 0)
            this.isMovingDown = true;
            
        
        //let left = pos.left + 10;
        //let top = pos.top + 10;
        //$ball.offset({left: left, top: top});
        $ball.offset(coords);
    }
}
class RandomGenerator {
    constructor(){

    }

    GetBoolean() : boolean{
      let randNo =  Math.random();
      return randNo > 0.5 ? true : false;
    }

    GetNumber(min: number, max:number): number {
        if(max< min)
        {
            let temp = max;
            max = min;
            min = temp;
        }

        let digitLength = max.toString().length;
        let factor = 0.1;

        for(let i=0;i<digitLength;i++) {
            factor *= 10;
        }
        
        let randNo = Math.random();
        console.log(randNo); 
        randNo = Math.round(randNo * factor);
        console.log(randNo); 
        return randNo;
    }

}
class BallsHandler{
    constructor(noOfBalls:number){
        let obj = this;
        $(document).ready(function(){
            // add some code to dynamically generate the balls
        });
    }

    AddBall(id: string){
      //  let $body = $('body');
      //  $body.append(' <div id="' + id + '" style="" class="ball"></div>');
    }
}


new BallsHandler(10);




