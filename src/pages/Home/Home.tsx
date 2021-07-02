import React from 'react';
import Content from '../../containers/Content/content';
import About from '../../containers/About/about';
import Contact from '../../containers/Contact/contact';
import Newsletter from '../../containers/Newsletter/newsletter';
import Store from '../../containers/Store/store';
import Solutions from '../../containers/Solutions/solutions';
import { Wrapper } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <Content />
      <Store />
      <Solutions />
      <About />
      <Contact />
      <Newsletter />
    </Wrapper>
  );
};

export default Home;
