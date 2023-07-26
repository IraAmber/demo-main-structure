import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../../logo.png";
import ConnectionForm from "../ConnectionForm/СonnectionModal";
import { FiX } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LocationButton } from "./Modal.styled";
import { IconContext } from "react-icons";
import {
  ModalBackdrop,
  ModalContent,
  Container,
  ModalHeader,
  ModalButton,
  ModalList,
  ModalTitle,
  ModalTextContainer,
  ModalSubmitBtn,
  NavLinkStyled,
  ModalNumber,
  LocationText,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal");

export default function Modal({ onClose, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    },
    [onClose]
  );

  return createPortal(
    <>
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent onClose={onClose}>
          <Container>
            <ModalHeader>
              <img src={logo} width={120} alt="logo" />
              <ModalButton onClick={onClose}>
                <IconContext.Provider
                  value={{
                    size: "30px",
                    color: "#007586",
                  }}
                >
                  <FiX />
                </IconContext.Provider>
              </ModalButton>
            </ModalHeader>
            <LocationButton
              href="https://goo.gl/maps/o3qvsXRkfv8h3hdw5"
              target="_blank"
            >
              <IconContext.Provider
                value={{
                  size: "25px",
                  color: "#007586",
                }}
              >
                <SlLocationPin />
              </IconContext.Provider>
              <LocationText>пр.Перемоги, 121а, м.Київ</LocationText>
            </LocationButton>
            <ModalTextContainer>
              <ModalNumber href="tel:+380966193616">
                +38 (093) 619 3616
              </ModalNumber>
            </ModalTextContainer>
            <ModalList>
              <ModalTitle onClick={onClose}>
                <NavLinkStyled to={"/"}>Головна</NavLinkStyled>
              </ModalTitle>
              <ModalTitle onClick={onClose}>
                <NavLinkStyled to={"/about"}>Давайте знайомитись</NavLinkStyled>
              </ModalTitle>
              <ModalTitle onClick={onClose}>
                <NavLinkStyled to={"/portfolio"}>Портфоліо</NavLinkStyled>
              </ModalTitle>
              <ModalTitle onClick={onClose}>
                <NavLinkStyled to={"/reviews"}>Відгуки</NavLinkStyled>
              </ModalTitle>
              <ModalTitle onClick={onClose}>
                <NavLinkStyled to={"/price"}>Ціни</NavLinkStyled>
              </ModalTitle>
            </ModalList>
            <ModalSubmitBtn onClick={() => setIsModalOpen(true)}>
              Записатись
            </ModalSubmitBtn>
          </Container>
        </ModalContent>
      </ModalBackdrop>
      {isModalOpen && <ConnectionForm onClose={onCloseModal} />}
    </>,
    modalRoot
  );
}
