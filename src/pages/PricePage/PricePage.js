import { Outlet } from "react-router-dom";
import { BackgroundImageStyle, List, Item } from "./PricePage.styled";
import { Container } from "../../App.styled";

const PricePage = () => {
  return (
    <BackgroundImageStyle>
      <Container>
        <List>
          <li>
            <Item to="/price/women">Жінки</Item>
          </li>
          <li>
            <Item to="/price/men">Чоловіки</Item>
          </li>
          <li>
            <Item to="/price/children">Діти</Item>
          </li>
          <li>
            <Item to="/price/body">Тіло</Item>
          </li>
          <li>
            <Item to="/price/else">Додатково</Item>
          </li>
        </List>
        <Outlet />
      </Container>
    </BackgroundImageStyle>
  );
};

export default PricePage;
