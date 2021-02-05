import React from 'react';

let ball = document.getElementById("ball")

ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
  
    moveAt(event.pageX, event.pageY);
  
    // переносит мяч на координаты (pageX, pageY),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // отпустить мяч, удалить ненужные обработчики
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
  
  ball.ondragstart = function() {
    return false;
  };

export const Test = () => {
    return (
        <div>

            <img src="/image/test.jpg" alt="test" id="ball"/>
            
        </div>
    );
}