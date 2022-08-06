import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Reveal from 'react-reveal/Reveal';

// import Microsoft from "../../images/logos_microsoft.svg";
import Google from "../../images/logos_google.svg";
import Slack from "../../images/logos_slack.svg";
import Wordpress from "../../images/logos_wordpress.svg";
// import Juniper from "../../images/juniper.png"

import "./Swipe.css";

import { Pagination, Navigation } from "swiper";

const Swipe = () => {
  return (
    <>
      <div className="Swipe">
        <div className="container">
        <Reveal effect="fadeInUp">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
             
            <div className="my_swiper">
            <SwiperSlide>
            <img src={Wordpress} alt="" className="companiess" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Google} alt="" className="companiess" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slack} alt="" className="companiess" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Wordpress} alt="" className="companiess" />
            </SwiperSlide>
            </div>
            
          </Swiper>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Swipe;
