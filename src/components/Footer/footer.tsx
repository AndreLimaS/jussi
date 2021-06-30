import React from "react";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import wpCompany from "../../assets/images/wppcompany.png";
import { Wrapper, Container, Social } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <img
          width={"142px"}
          height={"27px"}
          src={wpCompany}
          alt={"WPP Company"}
        />
        <Social>
          <img src={facebookIcon} alt={"Facebook"} />
          <img src={instagramIcon} alt={"Instagram"} />
          <img src={linkedinIcon} alt={"Linkedin"} />
        </Social>
      </Container>
    </Wrapper>
  );
};

export default Footer;
