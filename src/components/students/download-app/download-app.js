import React, { useState, useRef, useEffect } from 'react';
import * as helpers from 'utils/helpers.js';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { DownloadContainer, Download, Text, FormContainer, FormWrapper, IconContainer, EmailIcon, WhatsAppIcon, InputContainer, StyledInput, InputError, InputSeparator, ButtonsContainer } from './download-app-styles.js';
import EmailIconImg from 'images/email-icon.png';
import WhatsAppIconImg from 'images/whatsapp-icon.png';
import AppStoreImg from 'images/download-app-store.png';
import GooglePlayImg from 'images/download-google-play.png';

export const DownloadApp = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isEmailActive, setEmailActive] = useState(false);
  const [isNumberActive, setNumberActive] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showNumberError, setShowNumberError] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const emailRef = useRef(null);
  const numberRef = useRef(null);

  const useClickedOutside = (ref, type) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (type == 'email') {
            setEmailActive(false);
          } else {
            setNumberActive(false);
          }
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isEmailActive, isNumberActive]);
  }  

  useClickedOutside(emailRef, 'email');
  useClickedOutside(numberRef, 'number');

  const setEmailValue = (value) => {
    setEmail(value);
    setShowEmailError(false);
  }

  const setNumberValue = (value) => {
    setNumber(value);
    setShowNumberError(false);
  }

  const submitForm = () => {
    if (!helpers.validateEmail(email)) {
      setShowEmailError(true);
    }
    if (!helpers.validatePhoneNumber(number)) {
      setShowNumberError(true);
    } 
  }

  return (
    <div>
      <Text>
        You can download the MWB Connect app using the following links:        
      </Text>
      <FormContainer>
        <FormWrapper>
          <InputContainer isActive={isEmailActive}>
            <IconContainer>
              <EmailIcon src={EmailIconImg}/>
            </IconContainer>            
            <StyledInput
              ref={emailRef}
              name="email"
              value={email}
              onChange={e => setEmailValue(e.target.value)} 
              onClick={e => setEmailActive(true)}
              placeholder="Your email address"
              isClickedOutside={isEmailActive}/>          
          </InputContainer>
          {showEmailError ? <InputError>Please enter a valid email address</InputError> : null}
          <InputSeparator/>
          <InputContainer isActive={isNumberActive}>
            <IconContainer>
              <WhatsAppIcon src={WhatsAppIconImg}/>
            </IconContainer>          
            <StyledInput
              ref={numberRef}
              name="number"
              value={number}
              onChange={e => setNumberValue(e.target.value)} 
              onClick={e => setNumberActive(true)}
              placeholder="Your WhatsApp number"/>  
          </InputContainer>          
          {showNumberError ? <InputError >Please enter a valid WhatsApp number</InputError> : null}
        </FormWrapper>
      </FormContainer>
      <ButtonsContainer>
        <ActionButton text="Show download links" onClick={submitForm}/>
      </ButtonsContainer>      
      {showLinks ? 
        <DownloadContainer>
          <a href="https://apps.apple.com/us/app/mwb-connect/id1582502052#?platform=iphone" target="_blank">
            <Download src={AppStoreImg} alt="App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.mwbconnect.app" target="_blank">
            <Download src={GooglePlayImg} alt="Google Play" />
          </a>
        </DownloadContainer> : null}  
    </div>
  )
}