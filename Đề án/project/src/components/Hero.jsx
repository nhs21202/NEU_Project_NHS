import React from "react";
import styled from "styled-components";
import hero from "../assets/hero1.jpg";
import heroDesign from "../assets/HeroDesign.png";

export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background image"></img>
      </div>

      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="Hero design" />
          <h1>
            BIG SALE <span>50% OFF</span>
          </h1>
        </div>

        <div className="info">
          <h2>RETAILED</h2>
          <em>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(50%);
    }
  }
  .content{
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
   .sale{
    position: relative;
    left: 10%;
    img{
      height: 70vh;
    }
    h1{
      color: white;
      position: absolute;
      top: 24vh;
      left: 17vh;
      font-size: 4.5rem;
      span {
        display: block;
        font-size: 4vw;
      }
    }
   }
   .info{
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2{
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em{
        color: #ffffffc1;
        width: 60%;
        text-align: end;
        font-size:1rem;
        letter-spacing: 0.1rem;
      }
      button{
        padding: 1rem 2rem;
        font-size: 1.4rem ;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        cursor: pointer;
        transition: 0.2s;
        border-radius: 15px;
        &:hover{
          background-color: #ff761a;
        }

      }
   }
  }
`;
