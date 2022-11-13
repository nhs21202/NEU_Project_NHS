import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/avatar5.jpg";
import avatar6 from "../assets/avatar6.jpg";
import avatar7 from "../assets/avatar7.jpg";


import { imageZooming, TitleStyles } from "./ReuseStyle";
// import Swiper styles
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper and modules styles
import "swiper/swiper-bundle.css";

import { Autoplay } from "swiper";

export default function Feedback() {
  return (
    <Section id="feedbacks">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers says
          </h1>
        </div>

        <div className="feedbacks">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
                    loop={true}
        loopFillGroupWithBlank={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar1} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar2} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar3} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar4} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar5} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar6} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar7} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar2} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="feedback">
                <div className="avatar">
                  <img src={avatar4} alt="Customer avatar" />
                </div>
                <p>
                  He Printing and Typesetting the industry.{" "}
                  <span>Lorem Ipsum</span>
                  has been the Industry's
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .feedbacks {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .feedback {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZooming};
        .avatar {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }

    }
  }
`;
