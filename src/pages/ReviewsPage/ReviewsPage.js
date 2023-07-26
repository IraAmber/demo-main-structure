import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import {
  Stars,
  ReviewsContainer,
  List,
  ListItem,
  UserDiv,
  UserIconDiv,
  UserName,
  Title,
  TitleContainer,
  Text,
  ItemDiv,
  TitleDiv,
} from "./Reviews.styled";
import { Container } from "../../App.styled";
import reviews from "../../reviews.json";

const ReviewsPage = () => {
  const starArr = [1, 2, 3, 4, 5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <ReviewsContainer>
      <Container>
        <TitleContainer>
          <Title>Відгуки</Title>
        </TitleContainer>

        <List>
          <Slider {...settings} className="slider">
            {reviews.map((item) => (
              <ListItem key={item.id}>
                <ItemDiv>
                  <TitleDiv>
                    <UserDiv>
                      <IconContext.Provider
                        value={{
                          color: "#007586",
                          size: "20px",
                        }}
                      >
                        <BiUser />
                      </IconContext.Provider>
                    </UserDiv>
                    <UserIconDiv>
                      <UserName>{item.name}</UserName>
                      <Stars>
                        {starArr.map((el, index) => (
                          <IconContext.Provider
                            key={index}
                            value={{
                              color: `${
                                index >= item.totalPositiveStars
                                  ? "#ccc"
                                  : "orange"
                              }`,
                            }}
                          >
                            <AiFillStar />
                          </IconContext.Provider>
                        ))}
                      </Stars>
                    </UserIconDiv>
                  </TitleDiv>
                  <Text>{item.comment}</Text>
                </ItemDiv>
              </ListItem>
            ))}
          </Slider>
        </List>
      </Container>
    </ReviewsContainer>
  );
};

export default ReviewsPage;
