import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import wpCompany from '../../assets/images/wppcompany.png';
import { Wrapper, Container, Social } from './Styles';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <LazyLoadImage width={'142px'} height={'27px'} src={wpCompany} alt={'WPP Company'} />
        <Social>
          <LazyLoadImage src={facebookIcon} alt={'Facebook'} />
          <LazyLoadImage src={instagramIcon} alt={'Instagram'} />
          <LazyLoadImage src={linkedinIcon} alt={'Linkedin'} />
        </Social>
      </Container>
    </Wrapper>
  );
};

export default Footer;
