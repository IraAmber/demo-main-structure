import styled from "@emotion/styled";

import photo from "../../images/10.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      rgba(50, 49, 49, 0.437) 0%,
      rgba(50, 49, 49, 0.527) 100%
    ),
    url(${photo});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 85.05px);
  @media screen and (min-width: 1440px) {
    padding-top: auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p:not(:last-child) {
    margin-bottom: 10px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 20px;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-weight: lighter;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`;

export const ImageLeft = styled.img`
  width: 150px;
  object-fit: cover;
  border-top-left-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const ImageRight = styled.img`
  width: 150px;
  object-fit: cover;
  margin-left: 5px;
  border-bottom-right-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const LocationText = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 1);
`;

export const ModalNumber = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 1);
`;

export const LocationButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const ModalSubmitBtn = styled.button`
  border: none;
  background-color: #007586;
  border-radius: 8px;
  align-self: center;
  padding: 10px 20px;
  color: #ffffff;
  width: 280px;
  font-size: 20px;
  font-family: 400;
  font-weight: lighter;
  cursor: pointer;
  box-shadow: 0px 1px 8px 1px rgba(255, 255, 255, 1);
  margin-top: 20px;
  @media screen and (min-width: 425px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;
