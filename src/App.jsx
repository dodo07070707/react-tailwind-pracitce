import {
  AppContainer,
  Header,
  LogoWrap,
  Logo,
  LogoText,
  Nav,
  NavItem,
  MainBg,
  MainWrapper,
  ShoeMenuMain,
  ShoeImageRow,
} from "./styles/AppStyles.jsx";

import Product from "./widgets/product.jsx";
import data from "./data.js";
import { useState } from "react";

import bg from "../public/assets/bg.png";
import logo from "../public/assets/logo1.svg";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [shoes] = useState(data);

  return (
    <AppContainer>
      <Header>
        <LogoWrap href="/">
          <Logo src={logo} />
        </LogoWrap>

        <Nav>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/about">
            <NavItem>About</NavItem>
          </Link>
          <Link to="/search">
            <NavItem>Contact</NavItem>
          </Link>
        </Nav>
      </Header>

      <MainBg style={{ backgroundImage: `url(${bg})` }} />

      <MainWrapper>
        <ShoeMenuMain>Products</ShoeMenuMain>

        <ShoeImageRow>
          {shoes.slice(0, 3).map((item, i) => (
            <Product
              key={i}
              title={item.title}
              price={
                item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                "₩"
              }
              img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
            />
          ))}
        </ShoeImageRow>
      </MainWrapper>
    </AppContainer>
  );
}
