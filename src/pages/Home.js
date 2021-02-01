import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <h2>Солнечные ☀️Друзья 🙌БЛАГАдарю🏡 ЗА всё☀️ там ведь в припеве звучит ЯРГА что в общем переводе с Буквицы значит ЯРГА =  Движение к Солнцу☀️</h2>

            <br /><hr /><br />

            {/* <h1>Ярга Токен</h1> */}
            <br />
            <p>Сайт в разработке!</p>

            <audio autoplay>
                <source src="/audio/svarga.ogg" type='audio/ogg; codecs=vorbis' />
                <source src="/audio/svarga.mp3" type="audio/mpeg" />
                Тег audio не поддерживается вашим браузером. <a href="/audio/svarga.mp3">Скачайте музыку</a>.
            </audio>
        </div>
    );
}