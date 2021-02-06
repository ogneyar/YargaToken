import React from 'react';
import './Test.css';


let shiftX = 0;
let shiftY = 0;

function moveAt(pageX, pageY, x = 0, y = 0) {
  let ball = document.getElementById("ball");

  ball.style.left = pageX - x + 'px';
  ball.style.top = pageY - y + 'px';
}


function onMouseMove(event) {
  console.log(event.type);
  moveAt(event.pageX, event.pageY, shiftX, shiftY);
}


function ballOnmousedown(event) {
    // console.log(event.type);
    event.preventDefault();
    let ball = event.target;

    shiftX = event.clientX - ball.getBoundingClientRect().left;
    shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // document.body.append(ball);
  
    onMouseMove(event);

    
    // let dropTable = document.getElementById("dropTable");
    
    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // отпустить мяч, удалить ненужные обработчики
    ball.onmouseup = function(e) {
      console.log(e.type);
      document.removeEventListener('mousemove', onMouseMove);
      e.target.onmouseup = null;
    };
  
};


function event(e) {
    console.log(e.type);
    if (e.type === "contextmenu") {
      e.preventDefault();
    }
}
    

export const Test = () => {
    return (
        // <div className="test" id="dropTable" onClick={event} onContextMenu={event} onDoubleClick={event} onDrag={event} onDragEnd={event} onDragEnter={event} onDragExit={event} onDragLeave={event} onDragOver={event} onDragStart={event} onDrop={event} onMouseDown={event} onMouseEnter={event} onMouseLeave={event} onMouseMove={event} onMouseOut={event} onMouseOver={event} onMouseUp={event} >

        <div className="test" id="dropTable" onContextMenu={event} >

          <img src="/image/test.jpg" alt="test" id="ball" onMouseDown={ballOnmousedown}/>

        </div> 
    );
}