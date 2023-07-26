import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ContainerNav = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoMG = styled.img`
  width: 30px;
  height: 100%;
`;

export const Logo = styled.img`
  width: 120px;
  height: 100%;
  cursor: pointer;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(NavLink)`
  font-size: 14px;
  color: #000000;
  text-decoration: none;
  margin-left: 20px;
  &.active {
    border-bottom: 2px solid #007586;
    color: #007586;
    padding: 10px;
    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
