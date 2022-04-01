import React, { useState, useRef, useEffect } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';
import * as helpers from 'utils/helpers.js';
import * as apiService from 'api/api_service.js';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { Text, FormContainer, FormWrapper, IconContainer, EmailIcon, WhatsAppIcon, InputContainer, StyledInput, InputError, InputSeparator, ButtonsContainer, DownloadContainer, Download, DownloadGap } from './download-app-styles.js';
import EmailIconImg from 'images/email-icon.png';
import WhatsAppIconImg from 'images/whatsapp-icon.png';
import AppStoreImg from 'images/download-app-store.png';
import GooglePlayImg from 'images/download-google-play.png';

export const DownloadApp = ({organizationId}) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isEmailActive, setEmailActive] = useState(false);
  const [isNumberActive, setNumberActive] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showNumberError, setShowNumberError] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [isMobileIOS, setMobileIOS] = useState(false);
  const [isMobileAndroid, setMobileAndroid] = useState(false);  
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  
  useEffect(() => {
    if (isIOS) {
      setMobileIOS(true);
    }
    if (isAndroid) {
      setMobileAndroid(true);
    }    
  },[isIOS, isAndroid]);  

  const useClickedOutside = (ref, type) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (type === 'email') {
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

  const handleSubmit = () => {
    if (!helpers.validateEmail(email)) {
      setShowEmailError(true);
    }
    if (!helpers.validatePhoneNumber(number)) {
      setShowNumberError(true);
    }
    if (helpers.validateEmail(email) && helpers.validatePhoneNumber(number)) {
      setShowLinks(true);
      const approvedUser = {
        email: email,
        whatsappNumber: number,
        organization: {
          id: organizationId
        },
        isMentor: false
      }
      console.log(approvedUser);
      apiService.sendApprovedUser(approvedUser);
    }
  }

  const emailInputError = showEmailError ? <InputError>Please enter a valid email address</InputError> : null;
  const numberInputError = showNumberError ? <InputError >Please enter a valid WhatsApp number</InputError> : null;
  const iOSLink = !isMobileAndroid ? <a href="https://apps.apple.com/us/app/mwb-connect/id1582502052#?platform=iphone" target="_blank" rel="noreferrer">
      <Download src={AppStoreImg} alt="App Store" />
    </a> : null;
  const androidLink = !isMobileIOS ? <a href="https://play.google.com/store/apps/details?id=com.mwbconnect.app" target="_blank" rel="noreferrer">
      <Download src={GooglePlayImg} alt="Google Play" />
    </a> : null;
  const downloadText = isMobileAndroid || isMobileIOS ? 'Thank you and please download the MWB Connect app using the following link:' : 
    'Thank you and please download the MWB Connect app using one of the following links:';
  const showDownloadLinkText = isMobileAndroid || isMobileIOS ? 'Show download link' : 'Show download links';    

  return (
    <div>
      {!showLinks ? <Text>
        In order to download and sign up in the MWB Connect mobile app, please enter your email address and WhatsApp number:
      </Text> : 
      <Text>
        {downloadText}
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
              isIOS={isMobileIOS}/>
          </InputContainer>
          {emailInputError}
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
              placeholder="Your WhatsApp number"
              isIOS={isMobileIOS}/>  
          </InputContainer>
          {numberInputError}
        </FormWrapper>
      </FormContainer> : null}
      {!showLinks ? <ButtonsContainer>
        <ActionButton text={showDownloadLinkText} onClick={handleSubmit}/>
      </ButtonsContainer> : 
      <DownloadContainer>
        {iOSLink}
        <DownloadGap isMobile={isMobileIOS || isMobileAndroid}/>
        {androidLink}
      </DownloadContainer>}  
    </div>
  )
}