import React from "react";
import styled from "styled-components";
import FoodYummy from "../assets/FoodYummy.png";
import "../index.css";
export default function NavigationBar() {
  return (
    <Navigation className="navigation-bar">
      <div className="brand">
        <img src={FoodYummy} alt="foodyummy-logo"></img>
        <div className="toggle"></div>
      </div>
      <div>
        <ul className="links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="#services">Our services</a>
          </li>

          <li>
            <a href="#portfolio">About us</a>
          </li>

          <li>
            <a href="#feedbacks">Feedbacks</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#newsletter">Newsletter</a>
          </li>
        </ul>
      </div>
    </Navigation>
  );
}
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.2s;
        &:hover {
          color: #ffa31a;
        }
      }
    }
  }
`;
