let canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

//прямоугольник в Канвасе

// // поменять цвет
ctx.strokeStyle = 'red'
ctx.fillStyle = 'black'

// // //незакрашенный прямоугольник 
// ctx.strokeRect(0,0,canvas.width/2,canvas.height)

// //закрашенный прямоугольник 
// ctx.fillRect(canvas.width/2,0,canvas.width/2,canvas.height)

// // очистка

// ctx.clearRect(canvas.width/2-75,canvas.height/2-75,150,150)


//Шахмат

// ctx.strokeStyle = 'black'
// ctx.fillStyle = 'black'

// for (let i=0; i<8; i++) {
//     for (let j=0; j<8; j++) { 
//         if((i+j)%2 == 0) {
//             ctx.fillRect(i*32, j*32, 32, 32);
//         }
//         else {
//             ctx.strokeRect(i*32, j*32, 32, 32);
//         }
//     }
// }

/// линии

// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.moveTo(100, 100)
// ctx.lineTo(100, 200)
// ctx.lineTo(200, 150)
// ctx.lineTo(200, 100)
// ctx.closePath();
// // ctx.stroke(); 
// ctx.fill();

// Окружность
// ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2*Math.PI);
// ctx.fill()

// Картинка в канвасе

// let img = new Image();
// img.src = 'https://i.pinimg.com/236x/2a/f5/3d/2af53d8f1be483dd0e05b7b18142c33c.jpg'
// ctx.drawImage(img, 200, 200)
// ctx.drawImage(img, 200, 200, 600, 600)
// ctx.drawImage(img, 0, 0, 150, 150, 50, 50, 300, 300)


// Анимация в канвасе
// let x = 50;
// ctx.fillRect(x, 50, 300, 300)

// setInterval(()=> {
//     ctx.clearRect(0,0, canvas.width, canvas.height)
//     ctx.fillRect(x++, 50, 300, 300)
// }, 10)

canvas.addEventListener('mousemove', (e)=> {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 20, 0, 2*Math.PI)
    ctx.closePath();
    ctx.fill()
})
