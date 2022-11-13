import React from "react";
import styled from "styled-components";
import Service1 from "../assets/Services1.png";
import Service2 from "../assets/Services2.png";
import Service3 from "../assets/Services3.png";
import { TitleStyles } from "./ReuseStyle";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque
          quos. Atque, sunt eaque eius necessitatibus molestias voluptate, minus
          tempore explicabo unde, ea dolorem perferendis. Iusto magni delectus
          labore provident!
        </p>
      </div>

      <div className="services">
        <div className="service">
          <img src={Service2} alt="Service image" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read more</button>
        </div>

        <div className="service yellow">
          <img src={Service1} alt="Service image" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read more</button>
        </div>

        <div className="service">
          <img src={Service3} alt="Service image" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read more</button>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 1.5rem;
        font-size: 1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          background-color: #fc8f00;
        }
      }
    }
    .yellow {
      button {
        background-color: #fc8f00;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 200px) and (max-width: 800px) {
    .services {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
 
`;
