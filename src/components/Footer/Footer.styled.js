import styled from "@emotion/styled";

export const Logo = styled.img`
  width: 30px;
  height: 100%;
  margin-right: 20px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterIconContainer = styled.ul`
  display: flex;
  flex-direction: row;
  li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Icon = styled.li`
  color: #007586;
  border-radius: 50px;
  padding: 8px 10px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #007586;
    transform: scale(1.1);
  }
`;

export const FooterInfoContainer = styled.div`
  margin-left: 20px;
`;

export const FooterTel = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #000000;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #007586;
    font-size: 14px;
  }
`;

export const FooterAddress = styled.p`
  font-size: 12px;
`;
