import React, { useEffect, useCallback, useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import { IconContext } from 'react-icons'
import { FiX } from 'react-icons/fi'
import axios from "axios";
import logo from '../../logo.png'
import {
  ModalBackdrop,
  ModalContent,
  ModalSubmitBtn,
  ModalButton,
  ModalHeader,
} from '../Modal/Modal.styled'
import {
  Container,
  FormTitle,
  FormStyled,
  Input,
  Label,
  Comment,
  Option,
  OptionLable,
} from './ConnectionModal.styled'
import priceData from '../../price.json'

let womenServises = []
priceData.women.map((item) => womenServises.push(item.service))

let menServises = []
priceData.men.map((item) => menServises.push(item.service))

let childrenServises = []
priceData.children.map((item) => childrenServises.push(item.service))

let bodyServises = []
priceData.styx.map((item) => bodyServises.push(item.service))

let elseServises = []
priceData.else.map((item) => elseServises.push(item.service))

const initialValues = {
  name: '',
  tel: '',
  text: '',
  service: '',
  subService: '',
}

const services = [
  {
    name: 'Для жінок',
    subServices: womenServises,
  },
  {
    name: 'Для чоловіків',
    subServices: menServises,
  },
  {
    name: 'Для дітей',
    subServices: childrenServises,
  },
  {
    name: 'Для тіла',
    subServices: bodyServises,
  },
  {
    name: 'Додатково',
    subServices: elseServises,
  },
  // Add more services and their subServices as needed
]

const ConnectionForm = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('')
  const [selectedSubService, setSelectedSubService] = useState('')
  const [subServiceOptions, setSubServiceOptions] = useState([])

  useEffect(() => {
    const selectedServiceData = services.find(
      (service) => service.name === selectedService
    )

    if (selectedServiceData) {
      setSubServiceOptions(selectedServiceData.subServices)
    } else {
      setSubServiceOptions([])
    }
  }, [selectedService])

  // useEffect(() => {
  //   const selectedServiceData = services.find(
  //     (service) => service.subServices === selectedSubService
  //   );

  //   if (selectedServiceData) {
  //     setSelectedSubService(selectedServiceData.subServices);
  //   } else {
  //     setSelectedSubService("");
  //   }
  // }, [selectedSubService]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.currentTarget === event.target) {
        onClose()
      }
    },
    [onClose]
  )

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value)
  }

  const handleSubServiceChange = (event) => {
    setSelectedSubService(event.target.value)
  }

  const handleSubmit = async (values, { resetForm }) => {
    // Handle form submission logic here
    console.log('Form values:', values) // Виводимо дані форми в console.log

    try {
      // Виконуємо POST-запит на сервер для надсилання даних форми
      await axios.post('/', values)

      // Або, якщо ваш сервер очікує дані у форматі JSON, використовуйте такий код:
      // await axios.post("/", values, { headers: { "Content-Type": "application/json" } });

      console.log('Form data has been successfully sent to the server.')
      resetForm()
      onClose()
    } catch (error) {
      console.error('Error occurred while sending form data:', error)
    }
  }

  // const handleSubmit = (values, { resetForm }) => {
  //   // Handle form submission logic here
  //   console.log('Form values:', values) // Виводимо дані форми в console.log

  //   // Ваш код для надсилання даних на сервер тут
  //   // Наприклад, можна використати fetch або axios для відправки POST-запиту на сервер

  //   resetForm()
  //   onClose()
  // }

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClose={onClose}>
        <Container>
          <ModalHeader>
            <img src={logo} width={120} alt="logo" />
            <ModalButton onClick={onClose}>
              <IconContext.Provider
                value={{
                  size: '30px',
                  color: '#007586',
                }}
              >
                <FiX />
              </IconContext.Provider>
            </ModalButton>
          </ModalHeader>
          <FormTitle>Записатись</FormTitle>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange, setFieldValue }) => (
              <FormStyled
                name="connection-form"
                data-netlify="true"
                method="post"
                onSubmit={handleSubmit} // Додали обробник onSubmit
                netlify="true"
              >
                <input type="hidden" name="form-name" value="connection-form" />
                <div>
                  <Label htmlFor="service">
                    Для кого:
                    <OptionLable
                      as="select"
                      id="service"
                      name="service"
                      value={selectedService}
                      onChange={handleServiceChange}
                    >
                      <Option value="">Оберіть</Option>
                      {services.map((service) => (
                        <Option key={service.name} value={service.name}>
                          {service.name}
                        </Option>
                      ))}
                    </OptionLable>
                    <ErrorMessage name="service" component="div" />
                  </Label>
                </div>

                {subServiceOptions.length > 0 && (
                  <div>
                    <Label htmlFor="subService">
                      Оберіть послугу:
                      <OptionLable
                        as="select"
                        id="subService"
                        name="subService"
                        value={selectedSubService}
                        onChange={handleSubServiceChange}
                      >
                        <Option value="">Оберіть</Option>
                        {subServiceOptions.map((subService) => (
                          <Option key={subService} value={subService}>
                            {subService}
                          </Option>
                        ))}
                      </OptionLable>
                      <ErrorMessage name="subService" component="div" />
                    </Label>
                  </div>
                )}
                <div>
                  <Label htmlFor="name">
                    Ім'я:
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Введіть ім'я"
                    />
                    <ErrorMessage name="name" component="div" />
                  </Label>
                </div>

                <div>
                  <Label htmlFor="tel">
                    Телефон:
                    <Input
                      type="tel"
                      id="tel"
                      name="tel"
                      placeholder="Введіть телефон"
                    />
                    <ErrorMessage name="tel" component="div" />
                  </Label>
                </div>

                <div>
                  <Label htmlFor="text">
                    Коментар:
                    <Comment
                      as="textarea"
                      type="text"
                      id="text"
                      name="text"
                      placeholder="Напишіть коментар"
                    />
                    <ErrorMessage name="text" component="div" />
                  </Label>
                </div>
                <ModalSubmitBtn type="submit">Відправити</ModalSubmitBtn>
              </FormStyled>
            )}
          </Formik>
        </Container>
      </ModalContent>
    </ModalBackdrop>
  )
}

export default ConnectionForm
