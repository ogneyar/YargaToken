import React from 'react';
import './Home.css';

// function handleClick(e) {
//     e.preventDefault();
//     console.log('Клик.');
//   }

function event(e) {
    // e.preventDefault();
    console.log(e.type);
}


document.addEventListener("scroll", event)
document.addEventListener("drag", event)
document.addEventListener("drop", event)

export const Home = () => {
    return (
        <div className="home">

            <div>
                <img src="/image/yarga.jpg" alt="yarga" width="200px" />
                <h2>Солнечные ☀️Друзья 🙌БЛАГАдарю🏡 ЗА всё☀️ там ведь в припеве звучит ЯРГА что в общем переводе с Буквицы значит ЯРГА =  Движение к Солнцу☀️</h2>
            </div>

            <br /><hr /><br />
            <div>
                <h3>Солнечные ☀️СоРатники и СоРатницы кому интересно🙌  жить в Своём ЭКОдоме🏡 на своей Солнечной☀️ земле - готовые РЕЗУЛЬТАТЫ Группы Компаний SkyWay Вы можете увидеть <a href="http://rsw-systems.com/?r=13907">ЗДЕСЬ</a></h3>
                
                <img src="/image/skyway.jpg" alt="yarga" width="200px" />

                <h3>Это проекты на СоФинансировании Кооперативными Целевыми Программами Потреб Кооперативом 🏡 Дом Кипрея 🌿 и ЗАдействуя ЯргаТокен.рус</h3>
            </div>
            
        </div>
    );
}