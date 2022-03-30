import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as helpers from 'utils/helpers.js';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { DownloadContainer, Download, Text, FormContainer, FormWrapper, IconContainer, EmailIcon, InputContainer, StyledInput, InputError, ButtonsContainer } from './download-app-styles.js';
import EmailIconImg from 'images/email-icon.png';
import AppStoreImg from 'images/download-app-store.png';
import GooglePlayImg from 'images/download-google-play.png';

export const DownloadApp = () => {
  const [email, setEmail] = useState('');
  const [isEmailActive, setEmailActive] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const emailRef = useRef(null);

  const useClickedOutside = (ref, type) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEmailActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isEmailActive]);
  }  

  useClickedOutside(emailRef, 'email');

  const setEmailValue = (value) => {
    setEmail(value);
    setShowEmailError(false);
  }

  const handleSubmit = () => {
    if (!helpers.validateEmail(email)) {
      setShowEmailError(true);
    }
    if (helpers.validateEmail(email)) {
      setShowLinks(true);
      const approvedUser = {
        email: email,
        organization: {
          name: helpers.getOrganizationName()
        },
        isMentor: true
      }
      axios.post('http://localhost:3000/api/v1/approved_user', approvedUser)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  }

  const emailInputError = showEmailError ? <InputError>Please enter a valid email address</InputError> : null;

  return (
    <div>
      {!showLinks ? <Text>
        In order to download and sign up in the MWB Connect mobile app, please enter your email address:        
      </Text> : 
      <Text>
        Thank you and please download the MWB Connect app using one of the following links:
      </Text> }
      {!showLinks ? <FormContainer>
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
          {emailInputError}
        </FormWrapper>
      </FormContainer> : null}
      {!showLinks ? <ButtonsContainer>
        <ActionButton text="Show download links" onClick={handleSubmit}/>
      </ButtonsContainer> : 
      <DownloadContainer>
          <a href="https://apps.apple.com/us/app/mwb-connect/id1582502052#?platform=iphone" target="_blank">
            <Download src={AppStoreImg} alt="App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.mwbconnect.app" target="_blank">
            <Download src={GooglePlayImg} alt="Google Play" />
          </a>
        </DownloadContainer>}  
    </div>
  )
}