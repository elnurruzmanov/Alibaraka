import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Microsoft from "../../images/logos_microsoft.png"
// import Google from "../../images/logos_google.png"
// import Slack from "../../images/logos_slack.png"
// import Wordpress from "../../images/logos_wordpress.png"
// import Juniper from "../../images/juniper.png"

import "./Swipe.css";

import { Pagination, Navigation } from "swiper";

const Swipe = () => {
  return (
    <>
      <div className="Swipe">
        {/* <div className="container"> */}
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
            <SwiperSlide>
              {/* <img src={Microsoft} alt="" className="companies" /> */}
              <p>name1</p>
            </SwiperSlide>
            <SwiperSlide>
            {/* <img src={Google} alt="" className="companies" /> */}
            <p>name1</p>
            </SwiperSlide>
            <SwiperSlide>
            {/* <img src={Slack} alt="" className="companies" /> */}
            <p>name1</p>
            </SwiperSlide>
            <SwiperSlide>
            {/* <img src={Wordpress} alt="" className="companies" /> */}
            <p>name1</p>
            </SwiperSlide>
          </Swiper>
        {/* </div> */}
        {/* <div className="Juniper"></div> */}
        {/* <img src={Juniper} alt="" className="juniper" /> */}
      </div>
    </>
  );
};

export default Swipe;
