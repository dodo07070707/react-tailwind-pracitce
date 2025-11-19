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

export default function App() {
  const [shoes] = useState(data);

  return (
    <AppContainer>
      <Header>
        <LogoWrap href="/">
          <Logo src={logo} />
        </LogoWrap>

        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
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
              content={item.content}
              img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
            />
          ))}
        </ShoeImageRow>
      </MainWrapper>
    </AppContainer>
  );
}
