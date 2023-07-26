import styled from "@emotion/styled";

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 20px;
  @media screen and (min-width: 375px) {
    padding-top: 50px;
  }
`;

export const List = styled.ul`
  width: 300px;
  margin: 0 auto;
  height: 100vh;
  @media screen and (min-width: 375px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;

export const ListItem = styled.li`
  border-radius: 8px;
  border: 1px solid #e3e2e2;
  background-color: #fff;
  box-shadow: -3px 4px 15px 0px rgba(0, 0, 0, 0.06);
  height: 450px;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  /* margin-bottom: 10px;
  margin-right: 20px; */
  overflow-y: scroll;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    height: 500px;
    width: 350px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px;
    width: 300px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const UserIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemDiv = styled.div`
  height: 100%;
  overflow: hidden;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const UserDiv = styled.div`
  border-radius: 50px;
  background-color: #fff;
  width: 20px;
  padding: 6px 8px;
  border: 1px solid #007586;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  color: #007586;
  text-shadow: 0px 0px 7px rgba(0, 117, 134, 1);
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #007586;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StarsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: lighter;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    padding-top: 20px;
  }
`;
