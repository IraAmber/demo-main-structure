// import { SiInstagram } from "react-icons/si";
// import { PiTelegramLogoBold } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
// import { IoLocationOutline } from "react-icons/io5";
import logo from "../../logo_mg.png";
import {
  Logo,
  FooterContainer,
  // FooterIconContainer,
  // Icon,
  FooterInfoContainer,
  FooterTel,
  FooterAddress,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} width="30px" height="100%" alt="logo" />
      {/* <FooterIconContainer>
        <Icon>
          <SiInstagram />
        </Icon>
        <Icon>
          <PiTelegramLogoBold />
        </Icon>
        <Icon>
          <IoLocationOutline />
        </Icon>
        <Icon>
          <LuPhone />
        </Icon>
      </FooterIconContainer> */}
      <FooterInfoContainer>
        <ul>
          <li>
            <FooterTel href="tel:+380936193616">
              <LuPhone />
              +38 (096) 619 3616
            </FooterTel>
          </li>
          <li>
            <FooterAddress>
              <GrLocation />
              пр.Перемоги, 121а, м.Київ
            </FooterAddress>
          </li>
        </ul>
      </FooterInfoContainer>
    </FooterContainer>
  );
};

export default Footer;
