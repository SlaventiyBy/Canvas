function drawHouse() {
  let canvas = document.getElementById('canvas');
  
  if(canvas.getContext) {
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //Стены
    ctx.lineWidth = 4;
    ctx.strokeRect(735, 254, 450, 335);

    ctx.fillStyle = '#975b5b';
    ctx.fillRect(737, 256, 446, 331);
    
    //Окна
    ctx.fillStyle = '#000';
    ctx.fillRect(768, 293, 78, 50);
    ctx.fillRect(850, 293, 78, 50);
    ctx.fillRect(768, 347, 78, 50);
    ctx.fillRect(850, 347, 78, 50);

    ctx.fillRect(987, 293, 78, 50);
    ctx.fillRect(1069, 293, 78, 50);
    ctx.fillRect(987, 347, 78, 50);
    ctx.fillRect(1069, 347, 78, 50);

    ctx.fillRect(987, 436, 78, 50);
    ctx.fillRect(1069, 436, 78, 50);
    ctx.fillRect(987, 489, 78, 50);
    ctx.fillRect(1069, 489, 78, 50);

    // Крыша
    ctx.beginPath();
    ctx.moveTo(960, 8);
    ctx.lineTo(1184, 254);
    ctx.lineTo(736, 254);
    ctx.closePath();
    ctx.fillStyle = '#975b5b';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.stroke();

    //Труба
    ctx.fillStyle = '#975b5b';
    ctx.fillRect(1050, 70, 47, 110);
    
    ctx.beginPath();
    ctx.moveTo(1048, 68);    
    ctx.lineTo(1048, 190); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1098, 68);    
    ctx.lineTo(1098, 190); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();
    
    ctx.fillStyle = '#975b5b';
    ctx.beginPath();
    ctx.ellipse(1073, 67, 24, 4, Math.PI, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

    //Дверь
    ctx.beginPath();
    ctx.moveTo(786, 469);    
    ctx.lineTo(786, 591); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(849, 439);    
    ctx.lineTo(849, 591); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(912, 469);    
    ctx.lineTo(912, 591); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(849, 469, 63, 30, Math.PI, 0, Math.PI, false);    
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(830, 543, 7, 0, Math.PI * 2, true);    
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(868, 543, 7, 0, Math.PI * 2, true);    
    ctx.stroke();
  }    
}

drawHouse();