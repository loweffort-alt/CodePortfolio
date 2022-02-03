import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 60%;
  position: absolute;
  z-index: 3;
  h1 {
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    letter-spacing: 0.15em;
    color: var(--white-f2);
    margin: 0;
    padding: 0px 0px 16px;
  };
  section {
    display: flex;
    justify-content: space-between;
    gap: 100px;
    width: 100%;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      gap: 4.5vh;
    };
    @media (max-height: 530px) {
      gap: 0px;
    }
  };
  textarea {
    height: 100px;
    background-color: rgba(255,255,255,0);
    color: var(--white-f2);
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    font-family: Raleway;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    padding: 16px;
  };
  textarea::placeholder {
    color: rgba(255,255,255,0.3);
  };
  @media (max-width: 800px) {
    h1 {
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 0.25em;
    };
    width: 100%;
  };
`

const Inputs = styled.input`
  width: 100%;
  height: 43px;
  box-sizing: border-box;
  background-color: rgba(255,255,255,0);
  color: var(--white-f2);
  border: none;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding: 16px;
  ::placeholder {
  color: rgba(255,255,255,0.3);
  };
`

const Button = styled.div`
  input {
    height: 89px;
    width: 260px;
    font-family: Raleway;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.15em;
    font-variant: small-caps;
    color: #FFFFFF;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 29px 87px;
    background-color: var(--blue-one);
    border: 1px solid #0E1F26;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 170px;
      height: 58px;
      padding: 0;
    };
  }
`

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_scrg8ek', 'template_gkj4ta9', form.current, 'user_qDxnPLfSumE8YRYdhPLD2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return <>
    <ContainerForm ref={form} onSubmit={sendEmail}>
      <h1>CONTACT ME!</h1>
      <section>
        <Inputs type="text" name="from_name" placeholder='Name' required/>
        <Inputs type="email" name="user_email" placeholder='Email' required/>
      </section>
      <Inputs type="text" name="subject" placeholder='Subject' required/>
      <textarea name="message" placeholder='Message' required/>
      <Button>
        <input type="submit" value="SEND" />
      </Button>
    </ContainerForm>
  </>
};