import priceData from "../../price.json";
import { nanoid } from "nanoid";

import {
  PriceContainer,
  PriceItem,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Men() {
  const menData = priceData.men;

  return (
    <section>
      <div>
        <PriceContainer>
          <thead>
            <tr>
              <ItemTitle>Послуга</ItemTitle>
              <ItemTitle>Час</ItemTitle>
              <ItemTitle>Ціна</ItemTitle>
            </tr>
          </thead>
          <tbody>
            {menData.map((item) => (
              <PriceItem key={nanoid()}>
                <ItemText>{item.service}</ItemText>
                <ItemText>{item.time}</ItemText>
                <ItemText>{item.price}</ItemText>
              </PriceItem>
            ))}
          </tbody>
        </PriceContainer>
      </div>
    </section>
  );
}
