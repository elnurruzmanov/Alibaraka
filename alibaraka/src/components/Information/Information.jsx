import React from "react";
import "./Information.css";

import Collapsible from "react-collapsible";

import Slide from 'react-reveal/Slide';

import Flags from "../images/flags.png";

const Information = () => {
  return (
    <>
      <div className="Information">
        <div className="container">
        <Slide left>
          <div className="information-images">
            <img src={Flags} alt="" className="flags" />
          </div>
          <div className="information-accordion">
            <h1 className="information-title">
              Mijozlar tomonidan beriladigan eng ko'p savollar
            </h1>
            <p className="information-text">
              Bu yerda sizni qiziqtirgan mavzularga javob topa olasiz va
              qiziqarli ma'lumotlarni bilib olishingiz mumkin.
            </p>
            <div className="accordion">
              <Collapsible
                trigger="MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?"
                className="collapsible"
              >
                <p className="collapsible-text">
                  MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI
                  MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?
                </p>
                <p className="collapsible-text">
                  Polikarbonatli issiqxonalar yig'ilmagan va maxsus tarzda
                  qadoqlangan holda sotiladi, shu bilan birga ko'p joy
                  egallamaydi. Bunday mahsulotlarni buning uchun maxsus
                  jihozlarga buyurtma bermasdan mashinangizga olib chiqish
                  mumkin.
                </p>
              </Collapsible>
              <Collapsible
                trigger="STRUKTURANING OPTIMAL BALANDLIGI QANDAY BO'LISHI KERAK ?"
                className=" collapsible2 collapsible"
              >
                <p className="collapsible-text collapsible-text2">
                  MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI
                  MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?
                </p>
                <p className="collapsible-text collapsible-text2">
                  Polikarbonatli issiqxonalar yig'ilmagan va maxsus tarzda
                  qadoqlangan holda sotiladi, shu bilan birga ko'p joy
                  egallamaydi. Bunday mahsulotlarni buning uchun maxsus
                  jihozlarga buyurtma bermasdan mashinangizga olib chiqish
                  mumkin.
                </p>
              </Collapsible>
              <Collapsible
                trigger="QOPLAMA MATERIALI - UYALI POLIKARBONAT NIMA ?"
                className="collapsible "
              >
                <p className="collapsible-text">
                  MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI
                  MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?
                </p>
                <p className="collapsible-text">
                  Polikarbonatli issiqxonalar yig'ilmagan va maxsus tarzda
                  qadoqlangan holda sotiladi, shu bilan birga ko'p joy
                  egallamaydi. Bunday mahsulotlarni buning uchun maxsus
                  jihozlarga buyurtma bermasdan mashinangizga olib chiqish
                  mumkin.
                </p>
              </Collapsible>
              <Collapsible
                trigger="HIMOYALANGAN ZAMINNING KENGLIGI QANDAY BO'LISHI KERAK?"
                className=" collapsible2 collapsible"
              >
                <p className="collapsible-text collapsible-text2">
                  MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI
                  MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?
                </p>
                <p className="collapsible-text collapsible-text2">
                  Bizning veb-saytimizda siz 2 dan 4 m gacha kenglikdagi
                  issiqxonalarni topasiz.Optimal parametr 2,2 - 2,5 m.Bu ikkita
                  standart to'shak va ular orasidagi yo'lni yaratish uchun
                  etarli. To'shaklarning qabul qilingan kengligi 80 sm.Chegarasi
                  taxminan bir xil o'lchamda bo'lishi kerak, shunda arava yoki
                  uskunaning o'tishi va tashish uchun etarli joy mavjud.{" "}
                </p>
              </Collapsible>
              <Collapsible
                trigger="ISSIQXONA PLYONKASI ULTRABINAFSHA NURLARNI O'TKAZADIMI?"
                className="collapsible "
              >
                <p className="collapsible-text">
                  MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI
                  MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?
                </p>
                <p className="collapsible-text">
                  Ha, bizning issiqxona plyonkasi o'simliklarning o'sishi va
                  asalarilarning harakatlanishi uchun zarur bo'lgan
                  ultrabinafsha nurlarning bir qismini o'tkazish imkonini
                  beradi. Bu juda muhim, chunki quyosh nuri o'simlik fotosintezi
                  uchun zarur va ba'zi qo'ziqorin kasalliklarini ham nazorat
                  qilishi mumkin.{" "}
                </p>
              </Collapsible>
              <Collapsible
                trigger="QOPLAMA MATERIALI - UYALI POLIKARBONAT NIMA ?"
                className=" collapsible2 collapsible"
              >
                <p className="collapsible-text collapsible-text2">
                  MEN SIZDAN POLIKARBONAT ISSIQXONAGA BUYURTMA BERMOQCHIMAN. UNI
                  MAXSUS JIHOZLARSIZ OLIB CHIQISH MUMKINMI?
                </p>
                <p className="collapsible-text collapsible-text2">
                Bu termoplastiklar guruhidan sintetik material, boshqacha qilib aytganda, plastinka plastmassasi. U ekstruziya orqali amalga oshiriladi - modda plastik granulalardan maxsus shaklga siqib chiqariladi, massa varaq dizayni bo'ylab taqsimlanadi.
                </p>
              </Collapsible>
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Information;
