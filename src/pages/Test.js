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
    

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}


function allowDrop(event) {
  event.preventDefault();

  
  let dropTable = document.getElementById("dropTable");
  if (typeof(window.FileReader) == 'undefined') {
    // dropTable.text('Не поддерживается браузером!');
    // dropTable.addClass('error');
    dropTable.style.background = "#faa";
    return false;
  }

  document.getElementById("demo").innerHTML = "И отпусти...";
  event.target.style.border = "4px dotted green";
}

function leave(event) {
  event.preventDefault();

  let dropTable = document.getElementById("dropTable");  
  dropTable.style.background = "white";

  document.getElementById("demo").innerHTML = "";
  event.target.style.border = "1px solid #aaaaaa";
}


function uploadProgress(event) {
  let percent = parseInt(event.loaded / event.total * 100);
  let demo = document.getElementById("demo");  
  demo.innerHTML = 'Загрузка: ' + percent + '%';
}


function stateChange(event) {
  let demo = document.getElementById("demo");  
  if (event.target.readyState === 4) {
      if (event.target.status === 200) {
        demo.innerHTML = 'Загрузка успешно завершена!';
      } else {
        demo.innerHTML = 'Произошла ошибка!';
        demo.color = "red";
      }
  }
}


function drop(event) {
  event.preventDefault();

  let file = event.dataTransfer.files[0];

  if (file) {
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.onreadystatechange = stateChange;
    xhr.open('GET', '/about');
    // xhr.setRequestHeader('X-FILE-NAME', file.name);
    xhr.send(file);
  }else {
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "Текст был перемещён.";
  }
}


export const Test = () => {
    return (
        // <div className="test" id="dropTable" onClick={event} onContextMenu={event} onDoubleClick={event} onDrag={event} onDragEnd={event} onDragEnter={event} onDragExit={event} onDragLeave={event} onDragOver={event} onDragStart={event} onDrop={event} onMouseDown={event} onMouseEnter={event} onMouseLeave={event} onMouseMove={event} onMouseOut={event} onMouseOver={event} onMouseUp={event} >

      <div className="div">
        <p onDragStart={dragStart} draggable="true" id="dragtarget">Потяни этот текст в белый квадрат!</p>

        {/* <div id="droptarget" onDrop={drop} onDragOver={allowDrop} onDragLeave={leave}></div> */}


        <p id="demo"></p>
      
        <div className="test" id="dropTable" onContextMenu={event} onDrop={drop} onDragOver={allowDrop} onDragLeave={leave}>

          <img src="/image/test.jpg" alt="test" id="ball" onMouseDown={ballOnmousedown}/>

        </div> 
      </div>
    );
}