import priceData from "../../price.json";
import { nanoid } from "nanoid";

import {
  Container,
  PriceContainer,
  PriceItem,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Women() {
  const womenData = priceData.women;

  return (
    <section>
      <Container>
        <PriceContainer>
          <thead>
            <tr>
              <ItemTitle>Послуга</ItemTitle>
              <ItemTitle>Час</ItemTitle>
              <ItemTitle>Ціна</ItemTitle>
            </tr>
          </thead>
          <tbody>
            {womenData.map((item) => (
              <PriceItem key={nanoid()}>
                <ItemText>{item.service}</ItemText>
                <ItemText>{item.time}</ItemText>
                <ItemText>{item.price}</ItemText>
              </PriceItem>
            ))}
          </tbody>
        </PriceContainer>
      </Container>
    </section>
  );
}
