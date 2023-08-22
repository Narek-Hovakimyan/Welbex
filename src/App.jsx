import "./App.css";
import img from './img/part1.png'
import logoImg from './img/part2.png'
import bigRedCircle from './img/red ball.png'
import redCircle from './img/red ball (1).png'
import purpleCircle from './img/purple ball.png'
import redLight from './img/red light.png'
import purpleLight from './img/purple light.png'



import { LiaTelegram } from "react-icons/lia";
import { FaViber } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="App-logo">
          <div className="App-img">
            <img src={img} alt="" />
            <img src={logoImg} alt="" />
          </div>
          <p>крупный интегратор CRM <br /> в Росcии и ещё 8 странах</p>
        </div>
        <div className="App-panel">
          <p>Услуги</p>
          <p>Виджеты</p>
          <p>Интеграции</p>
          <p>Кейсы</p>
          <p>Сертификаты</p>
        </div>
        <div className="App-number">
          <span>+7 555 555-55-55</span>
        </div>
        <div className="App-social">
          <p><LiaTelegram /></p>
          <p><FaViber /></p>
          <p><BsWhatsapp /></p>
        </div>
      </header>


      <menu className="menu">
        <div className="menu-logo">
          <h1>Зарабатывайте <br /> больше</h1>
          <h2  className="gradient">с WELBEX</h2>
          <p>Развиваем и контролируем <br /> продажи за вас</p>
        </div>
        <div className="menu-info">
          <p>Вместе с <span className="gradient gradient-span">бесплатной</span><span className="gradient gradient-span"><br />консультацией</span> мы дарим:</p>
          <div className="menu-wraps" >
            <div className="menu-wrap wrap1">
              <h3>Виджеты</h3>
              <p>30 готовых решений</p>
            </div>
            <div className="menu-wrap wrap2">
              <h3>Dashboard</h3>
              <p>с показателями вашего бизнеса</p>
            </div>
            <div className="menu-wrap wrap3">
              <h3>Skype Аудит</h3>
              <p>отдела продаж и CRM системы</p>
            </div>
            <div className="menu-wrap wrap4">
              <h3>35 дней</h3> <p>использования CRM</p>
            </div>
          </div>

          <button type="button">Получить консультацию</button>
        </div>
      </menu>

      <footer className="footer" >
        <ul className="group1">
          <li>О компании</li>
          <li>Партнёрская программа</li>
          <li>Вакансии</li>
        </ul>
        <ul className="group2">
          <li>Меню</li>
          <li>Расчёт стоимости</li>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Наши клиенты</li>
        </ul>
        <ul className="group3">
          <li>Кейсы</li>
          <li>Благодарственные письма</li>
          <li>Сертификаты</li>
          <li>Блог на Youtube</li>
          <li>Вопрос / Ответ</li>
        </ul>
        <ul className="group4">
          <li>Контакты</li>
          <li>+7 555 555-55-55</li>
          <div className="App-social">
            <p><LiaTelegram /></p>
            <p><FaViber /></p>
            <p><BsWhatsapp /></p>
          </div>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
      </footer>
      <div className="circle" >
        <img className="redCircle" src={redCircle} alt="" />
        <img className="purpleCircle" src={purpleCircle} alt="" />
        <img className="bigRedCircle" src={bigRedCircle} alt="" />
      </div>
      <div className="linear-gradient">

        <img className="redLight" src={redLight} alt="" />
        <img className="purpleLight" src={purpleLight} alt="" />

      </div>

      <div className="©WELBEX" >
        <p>©WELBEX 2022. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </div>

    </div>
  );
}

export default App;
