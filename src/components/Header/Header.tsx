import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoJussi from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";
import shopping from "../../assets/icons/shopping.svg";
import {
  Container,
  Menu,
  TitleMenu,
  TitleMenuKeyFrame,
  Search,
  ContentSearch,
  InputSearch,
  ImgTouch,
} from "./Styles";
import { SearchContext } from "../../Context/Search";
const Header = () => {
  const { setNamePokemon } = useContext(SearchContext);

  const handleChange = ({ target }: any) => {
    setNamePokemon(target.value);
  };

  return (
    <Container>
      <Menu>
        <Link to={"/"}>
          <img src={logoJussi} alt="Jussi" />
        </Link>
        <TitleMenu>Nossas Soluções</TitleMenu>
        <TitleMenu>Conheça a Jüssi</TitleMenu>
        <Link to={"produtos"}>
          <TitleMenuKeyFrame>Produtos</TitleMenuKeyFrame>
        </Link>
      </Menu>
      <Search>
        <ContentSearch>
          <InputSearch placeholder="Buscar" onChange={handleChange} />
          <ImgTouch>
            <img width="16px" height="16px" src={search} alt="Search" />
          </ImgTouch>
        </ContentSearch>
        <TitleMenu>Login</TitleMenu>
        <ImgTouch>
          <img src={shopping} alt="Shopping" />
        </ImgTouch>
      </Search>
    </Container>
  );
};

export default Header;
