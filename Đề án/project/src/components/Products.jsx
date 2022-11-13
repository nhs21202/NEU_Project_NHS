import React from "react";
import styled from "styled-components";

import { imageZooming, TitleStyles } from "./ReuseStyle";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import appe1 from "../assets/Food pic/appe1.jpg";
import appe2 from "../assets/Food pic/appe2.jpg";
import appe3 from "../assets/Food pic/appe3.jpg";
import appe4 from "../assets/Food pic/appe4.jpg";

import des1 from "../assets/Food pic/des1.jpg";
import des2 from "../assets/Food pic/des2.jpg";
import des3 from "../assets/Food pic/des3.jpg";
import des4 from "../assets/Food pic/des4.jpg";

import drink1 from "../assets/Food pic/drink1.jpg";
import drink2 from "../assets/Food pic/drink2.jpg";
import drink3 from "../assets/Food pic/drink3.jpg";
import drink4 from "../assets/Food pic/drink4.jpg";

import main1 from "../assets/Food pic/main1.jpg";
import main2 from "../assets/Food pic/main2.jpg";
import main3 from "../assets/Food pic/main3.jpg";
import main4 from "../assets/Food pic/main4.jpg";

import salad1 from "../assets/Food pic/salad1.jpg";
import salad2 from "../assets/Food pic/salad2.jpg";
import salad3 from "../assets/Food pic/salad3.jpg";
import salad4 from "../assets/Food pic/salad4.jpg";

export default function Products() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data1 = [
    {
      image: appe1,
      name: "Toasted Bread",
      price: "$5.00/pcs",
    },
    {
      image: appe2,
      name: "Fried Shrimp",
      price: "$3.70/pcs",
    },

    {
      image: appe3,
      name: "American Puff Pastry",
      price: "$3.50/pcs",
    },
    {
      image: appe4,
      name: "Cheese Bread",
      price: "$6.50/pcs",
    },
  ];
  const data3 = [
    {
      image: salad1,
      name: "Fillet Salad",
      price: "$8.00/pcs",
    },
    {
      image: salad2,
      name: "Mega Broccoli Salad",
      price: "$4.20/pcs",
    },
    {
      image: salad3,
      name: "Summer Fruit Salad",
      price: "$6.60/dish",
    },

    {
      image: salad4,
      name: "Crispy Socca Salad",
      price: "$6.50/dish",
    },
  ];
  const data2 = [
    {
      image: main1,
      name: "Chicken Burger",
      price: "$22.40/pcs",
    },
    {
      image: main2,
      name: "Egg Sandwich",
      price: "$10.00/pcs",
    },
    {
      image: main3,
      name: " Honey Grilled Chicken",
      price: "$15.80/pcs",
    },
    {
      image: main4,
      name: "Vegetable Grilled Fillet",
      price: "$18.50/pcs",
    }
  ];
  const data4 = [
    {
      image: drink1,
      name: "Mango Juice",
      price: "$5.50/pcs",
    },
    {
      image: drink2,
      name: "Oreo Cookie Milkshake",
      price: "$8.70/pcs",
    },
    {
      image: drink3,
      name: "Blueberry Mojito",
      price: "$20.00/pcs",
    },

    {
      image: drink4,
      name: "German Beer",
      price: "$8.00/pcs",
    },
  ];
  const data5 = [
    {
      image: des1,
      name: "Rasberry Cake",
      price: "$10.40/pcs",
    },
    {
      image: des2,
      name: "Sprinkle Chocolate Donuts",
      price: "$8.50/pcs",
    },
    {
      image: des3,
      name: "Lava Darkchoco Cake",
      price: "$18.20/pcs",
    },

    {
      image: des4,
      name: "Tropical Pancake",
      price: "$5.50/pcs",
    },
  ];

  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            fontWeight: "bold",
            transitionDuration: "1s",
          }}
        >
          <TabList onChange={handleChange} centered>
            <Tab
              label="Appetizers"
              value="1"
              sx={{
                color: "#fc4958",
                fontWeight: "bold",
                fontSize: "1.2rem",
                transitionDuration: "1s",
              }}
            />
            <Tab
              label="Main dishes"
              value="2"
              sx={{
                color: "#fc4958",
                fontWeight: "bold",
                fontSize: "1.2rem",
                transitionDuration: "1s",
              }}
            />
            <Tab
              label="Salads"
              value="3"
              sx={{
                color: "#fc4958",
                fontWeight: "bold",
                fontSize: "1.2rem",
                transitionDuration: "1s",
              }}
            />
            <Tab
              label="Drinks"
              value="4"
              sx={{
                color: "#fc4958",
                fontWeight: "bold",
                fontSize: "1.2rem",
                transitionDuration: "1s",
              }}
            />
            <Tab
              label="Desserts"
              value="5"
              sx={{
                color: "#fc4958",
                fontWeight: "bold",
                fontSize: "1.2rem",
                transitionDuration: "1s",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="products">
            {data1.map((product) => {
              return (
                <div className="product">
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>
                    He Printing and Typesetting the industry. Lorem Ipsum has
                  </p>
                  <button>Buy Now</button>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="products">
            {data2.map((product) => {
              return (
                <div className="product">
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>
                    He Printing and Typesetting the industry. Lorem Ipsum has
                  </p>
                  <button>Buy Now</button>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className="products">
            {data3.map((product) => {
              return (
                <div className="product">
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>
                    He Printing and Typesetting the industry. Lorem Ipsum has
                  </p>
                  <button>Buy Now</button>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="4">
          <div className="products">
            {data4.map((product) => {
              return (
                <div className="product">
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>
                    He Printing and Typesetting the industry. Lorem Ipsum has
                  </p>
                  <button>Buy Now</button>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="5">
          <div className="products">
            {data5.map((product) => {
              return (
                <div className="product">
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>
                    He Printing and Typesetting the industry. Lorem Ipsum has
                  </p>
                  <button>Buy Now</button>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZooming};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
