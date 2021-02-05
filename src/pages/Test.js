import React from 'react';

// let ball = document.getElementById("ball")

function ballOnmousedown(event) {
    let ball = event.target

    // console.log(event.target);
    // console.log(event.type);

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
    //   ball.style.left = pageX + 'px';
    //   ball.style.top = pageY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // отпустить мяч, удалить ненужные обработчики
    ball.onmouseup = function(e) {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
};
  
function ballOndragstart(e) {
    console.log(e.type);
    return false;
};

// ball.addEventListener("onmousedown", ballOnmousedown)
// ball.addEventListener("ondragstart", ballOndragstart)

function event(e) {
    // e.preventDefault();
    console.log(e.type);
}
    

export const Test = () => {
    return (
        <div>

            <img src="/image/test.jpg" alt="test" id="ball" onMouseDown={ballOnmousedown} onDragStart={ballOndragstart} onMouseUp={event} />
            {/* <img src="/image/test.jpg" alt="test" id="ball" /> */}
            
        </div>
    );
}