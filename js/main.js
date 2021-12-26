function drawHouse() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    // Стены    
    ctx.beginPath();
    ctx.moveTo(50, 180); //начало
    ctx.lineTo(300, 180); // линия вправо
    ctx.lineTo(300, 380); // линия вниз
    ctx.lineTo(50, 380); // линия влево
    ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
    ctx.fillStyle = '#975b5b'; // цвет заливки
    ctx.fill(); // вызов заливки
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии
    ctx.stroke();

    // Крыша
    ctx.beginPath();
    ctx.moveTo(175, 50); //начало
    ctx.lineTo(300, 180); // линия вниз
    ctx.lineTo(50, 180); // линия влево
    ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
    ctx.fillStyle = '#975b5b'; // цвет заливки
    ctx.fill(); // вызов заливки
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии
    ctx.stroke();

    // Левое онко
    //1
    ctx.fillStyle = "#000";
    ctx.fillRect(70, 200, 45, 30);
    //2
    ctx.fillRect(117, 200, 45, 30);
    //3
    ctx.fillRect(70, 232, 45, 30);
    //4
    ctx.fillRect(117, 232, 45, 30);

    // правое верхнее онко
    //1
    ctx.fillRect(188, 200, 45, 30);
    //2
    ctx.fillRect(235, 200, 45, 30);
    //3
    ctx.fillRect(188, 232, 45, 30);
    //4
    ctx.fillRect(235, 232, 45, 30);

    // правое нижнее онко
    //1
    ctx.fillRect(188, 285, 45, 30);
    //2
    ctx.fillRect(235, 285, 45, 30);
    // 3
    ctx.fillRect(188, 317, 45, 30);
    // 4
    ctx.fillRect(235, 317, 45, 30);

    // Дверь
    //Левая линия
    ctx.beginPath();
    ctx.moveTo(80, 305); //начало
    ctx.lineTo(80, 380); // линия вниз
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии
    ctx.stroke();

    //Правая линия
    ctx.beginPath();
    ctx.moveTo(156, 305); //начало
    ctx.lineTo(156, 380); // линия вниз
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии
    ctx.stroke();

    //Центральная линия
    ctx.beginPath();
    ctx.moveTo(117, 285); //начало
    ctx.lineTo(117, 380); // линия вниз
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии
    ctx.stroke();

    //Верхняя полукгруглая линия    
    ctx.beginPath();
    ctx.ellipse(118, 306, 38, 20, Math.PI, 0, Math.PI, false);
    ctx.stroke();
    //Ручка1
    ctx.beginPath();
    ctx.arc(108, 356, 4, 0, Math.PI * 2, true);
    ctx.stroke();

    //Ручка2
    ctx.beginPath();
    ctx.arc(126, 356, 4, 0, Math.PI * 2, true);
    ctx.stroke();

    //Труба
    //Левая линия  
    ctx.fillStyle = "#975b5b";
    ctx.fillRect(237, 95, 26, 60);  
    ctx.beginPath();
    ctx.moveTo(237, 95); //начало
    ctx.lineTo(237, 160); // линия вниз
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии    
    ctx.stroke();
    //Правая линия
    ctx.beginPath();
    ctx.moveTo(263, 95); //начало
    ctx.lineTo(263, 160); // линия вниз
    ctx.strokeStyle = '#000'; // цвет линиии
    ctx.lineWidth = 2; // толщина линии
    ctx.stroke();

    //Верхняя полукгруглая линия
    ctx.fillStyle = '#975b5b';    
    ctx.beginPath();    
    ctx.ellipse(250, 95, 13, 3, Math.PI, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
  }  
}

drawHouse();