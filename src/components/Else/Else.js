import priceData from "../../price.json";
import { nanoid } from "nanoid";

import {
  PriceContainer,
  PriceItem,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Else() {
  const elseData = priceData.else;

  return (
    <section>
      <div>
        <PriceContainer>
          <thead>
            <tr>
              <ItemTitle>Послуга</ItemTitle>
              <ItemTitle>Ціна</ItemTitle>
            </tr>
          </thead>
          <tbody>
            {elseData.map((item) => (
              <PriceItem key={nanoid()}>
                <ItemText>{item.service}</ItemText>
                <ItemText>{item.price}</ItemText>
              </PriceItem>
            ))}
          </tbody>
        </PriceContainer>
      </div>
    </section>
  );
}
