class Balls {
    constructor(num) {
        this.moveFlag = true;
        this.balls = [];
        for (let i = 0; i < num; i++) {
            this.balls.push({
                x: Math.floor((Math.random() * 1000) + 1),
                y: Math.floor((Math.random() * 500) + 1),
                dx: Math.floor((Math.random() * 10) + 1) * (Math.round(Math.random()) * 2 - 1),
                dy: Math.floor((Math.random() * 10) + 1) * (Math.round(Math.random()) * 2 - 1),
                color: '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6),
                size: Math.floor((Math.random() * 50) + 5)
            });
        }

        setInterval(() => {
            if (this.moveFlag) {
                this.draw();
                this.update();
            }
        }, 10);
    }
    draw() {
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.clearRect(0, 0, 1000, 500);
        for (let ball of this.balls) {
            ctx.beginPath();
            ctx.fillStyle = ball.color;
            ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }
    update() {
        for (let ball of this.balls) {
            if (ball.x >= 1000 || ball.x <= 0) {
                ball.dx = -ball.dx;
                ball.dy += Math.floor(Math.random() + 1) * (Math.round(Math.random()) * 2 - 1);
            }
            if (ball.y >= 500 || ball.y <= 0) {
                ball.dy = -ball.dy;
                ball.dx += Math.floor(Math.random() + 1) * (Math.round(Math.random()) * 2 - 1);
            }
            ball.x += ball.dx;
            ball.y += ball.dy;
        }
    }
};

let myballs = new Balls(Math.floor((Math.random() * 8) + 3));

let refresh = () => {
    location.reload();
}

let trigger = () => {
    myballs.moveFlag = !myballs.moveFlag;
    var x = document.getElementsByClassName("btn1 fonts") ;
    if(myballs.moveFlag){
        x[1].innerHTML = "Pause";
    }else{
        x[1].innerHTML = "Start";
    }
   
}