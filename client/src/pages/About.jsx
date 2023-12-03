import React from "react";
import "../styles/index.css";
import "../styles/About.css"
import MyFooter from "../components/UI/footer/MyFooter";

const About = () => {
    return (
        <div className="about">
            <div className="header">
                <img src={require("../assets/raketa.png")} style={{width:700}}/>
                <div className="header_text">
                    <h1>Студенческий сервисный отряд</h1>
                    <h1 className="decorated_text"> Восход </h1>
                    <h4>Будь с нами! Будь в движении!</h4>
                </div>
            </div>
            <div className="history">
                <div className="history_text">
                    <h2>История</h2>
                    <p>Студенческий сервисный отряд «Восход» Российского Государственного Аграрного Университета - МСХА Имени К.А. Тимирязева Основан Урневой Надеждой Николаевной 9 сентября 2016 года</p>
                </div>
                <div className="history_imgs">
                    <img className="himg1" src={require("../assets/history1.png")} alt="sunrise"/>
                    <img className="himg2" src={require("../assets/history2.png")} alt="sunrise"/>
                    <img className="himg3" src={require("../assets/history3.png")} alt="sunrise"/>
                </div>
            </div>
            <div className="places">
                <div className="places_imgs">
                    <img className="pimg1" src={require("../assets/place1.png")} alt="sunrise"/>
                    <img className="pimg2" src={require("../assets/place2.png")} alt="sunrise"/>
                    <img className="pimg3" src={require("../assets/place3.png")} alt="sunrise"/>
                </div>
                <div className="places_text">
                    <h2>Места дислокации отряда</h2>
                    <ul>
                        <li>Целина 2017: ВСССервО “Ялта”, респ. Крым, г. Ялта</li>
                        <li>Целина 2018: ВСССервО “Ялта”, респ. Крым, г. Ялта</li>
                        <li>Целина 2019: ВСССервО “Золотая бухта”,  Краснодарский край, г. Геленджик</li>
                        <li>Целина 2021: МСССервО “Золотая бухта”,  Краснодарский край, г. Геленджик</li>
                        <li>Целина 2022: Трудовой проект “Лунево на Волге”,  г. Кострома</li>
                        <li>Целина 2023: МСССервО “Лазурный берег”,  Краснодарский край, г. Анапа</li>
                    </ul>
                </div>
            </div>
            <div className="ks">
                <h2>Командный состав 2024</h2>
                <div className="ks_items">
                    <div className="master">
                        <img className="imgmaster" src={require("../assets/ks1.png")} alc="ks"/>
                        <h4 className="name_ks">Семенов Михаил</h4>
                    </div>
                    <div className="komandir">
                        <img className="imgkomandir" src={require("../assets/ks2.png")} alc="ks"/>
                        <h4 className="name_ks">Суханов Иван</h4>
                    </div>
                    <div className="komissar">
                        <img className="imgkomissar" src={require("../assets/ks3.png")} alc="ks"/>
                        <h4 className="name_ks">Богомолов Илья</h4>
                    </div>
                </div>
            </div>
            <MyFooter/>
        </div>
    )
}  

export default About;