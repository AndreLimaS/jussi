import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoJussi from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';
import { SearchContext } from '../../Context/Search';
import shopping from '../../assets/icons/shopping.svg';
import { TargetProps, EventProps } from './types';
import {
  Container,
  Menu,
  TitleMenu,
  TitleMenuKeyFrame,
  Search,
  ContentSearch,
  InputSearch,
  ImgTouch
} from './Styles';
const Header = () => {
  const { setNamePokemon } = useContext(SearchContext);
  let history = useHistory();
  const handleChange = ({ target }: TargetProps) => {
    setNamePokemon(target.value);
  };

  const handleKeyDown = (event: EventProps) => {
    if (event.key === 'Enter' || event.key === 13) {
      history.push('produtos');
    }
  };

  return (
    <Container>
      <Menu>
        <Link to={'/'}>
          <img src={logoJussi} alt="Jussi" loading="lazy"/>
        </Link>
        <TitleMenu>Nossas Soluções</TitleMenu>
        <TitleMenu>Conheça a Jüssi</TitleMenu>
        <Link to={'produtos'}>
          <TitleMenuKeyFrame>Produtos</TitleMenuKeyFrame>
        </Link>
      </Menu>
      <Search>
        <ContentSearch>
          <InputSearch placeholder="Buscar" onChange={handleChange} onKeyDown={handleKeyDown} />
          <ImgTouch>
            <img width="16px" height="16px" src={search} alt="Search" loading="lazy"/>
          </ImgTouch>
        </ContentSearch>
        <TitleMenu>Login</TitleMenu>
        <ImgTouch>
          <img src={shopping} alt="Shopping" loading="lazy"/>
        </ImgTouch>
      </Search>
    </Container>
  );
};

export default Header;
