import styled from "@emotion/styled";

export const AboutContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 375px) {
    padding: 50px;
  }
`;

export const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    #fff 15%,
    #007586 15%,
    #007586 50%,
    #007586 50%,
    #007586 65%,
    #fff 65%
  );
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    background-image: linear-gradient(
      to bottom,
      #fff 25%,
      #007586 25%,
      #007586 60%,
      #007586 60%,
      #007586 85%,
      #fff 85%
    );
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
      to bottom,
      #fff 30%,
      #007586 30%,
      #007586 50%,
      #007586 50%,
      #007586 75%,
      #fff 75%
    );
  }
`;

export const Image = styled.img`
  width: 280px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 1);
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 20px;
  color: #007586;
  margin-bottom: 10px;
  font-weight: lighter;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    color: #fff;
  }
`;

export const AfterTitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  /* font-weight: lighter; */
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ItemText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 20px;
  color: #007586;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const DataTitle = styled.span`
  font-weight: lighter;
  color: #000;
  font-size: 18px;
`;

export const AboutNumber = styled.a`
  text-decoration: none;
  color: #007586;
  font-size: 18px;
  font-weight: lighter;
  text-shadow: 0px 0px 7px rgba(0, 117, 134, 1);
  &:hover {
    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 27px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
    color: #fff;
  }
`;
