import React from "react";
import logoJussi from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";
import shopping from "../../assets/icons/shopping.svg";
import {
  Container,
  Menu,
  TitleMenu,
  Search,
  ContentSeach,
  InputSeach,
  ImgTouch,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <Menu>
        <img src={logoJussi} alt="Jussi" />
        <TitleMenu>Nossas Soluções</TitleMenu>
        <TitleMenu>Conheça a Jüssi</TitleMenu>
      </Menu>
      <Search>
        <ContentSeach>
          <InputSeach placeholder="Buscar" />
          <ImgTouch>
            <img width="16px" height="16px" src={search} alt="Search" />
          </ImgTouch>
        </ContentSeach>
        <TitleMenu>Login</TitleMenu>
        <ImgTouch>
          <img src={shopping} alt="Shopping" />
        </ImgTouch>
      </Search>
    </Container>
  );
};

export default Header;
