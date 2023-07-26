// import { nanoid } from "nanoid";

import photo from "../../images/photo.jpg";
import experience from "../../experience.json";
import {
  StudyContainer,
  Image,
  ImageContainer,
  TitleContainer,
  ItemTitle,
  Title,
  AfterTitle,
  ItemText,
  DataTitle,
  AboutNumber,
} from "../AboutPage/AboutPage.styled";
import { Container } from "../../App.styled";

const AboutPage = () => {
  const studyItems = experience.study.map((item) => (
    <li key={item.id}>
      <ItemText>
        <DataTitle>{item.data}</DataTitle> {item.type}
      </ItemText>
    </li>
  ));

  const experienceItems = experience.experience.map((item) => (
    <li key={item.id}>
      <ItemText>
        <DataTitle>{item.data}</DataTitle> {item.type}
      </ItemText>
    </li>
  ));

  const elseItems = experience.else.map((item) => (
    <li key={item.id}>
      <ItemText>{item.type}</ItemText>
    </li>
  ));

  return (
    <div>
      <StudyContainer>
        <ImageContainer>
          <Image src={photo} alt="masseur" />
          <TitleContainer>
            <Title>Марія Глушенко</Title>
            <AfterTitle>Масажист / реабілітолог</AfterTitle>
            <AboutNumber href="tel:+380966193616">
              +38 (093) 619 3616
            </AboutNumber>
          </TitleContainer>
        </ImageContainer>
        <Container>
          <ItemTitle>Освіта:</ItemTitle>
          <ul>{studyItems}</ul>
        </Container>
      </StudyContainer>
      <Container>
        <ItemTitle>Досвід:</ItemTitle>
        <ul>{experienceItems}</ul>
        <ItemTitle>Додаткові навички:</ItemTitle>
        <ul>{elseItems}</ul>
      </Container>
    </div>
  );
};

export default AboutPage;
