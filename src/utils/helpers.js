export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePhoneNumber = (phoneNumber) => {
  return phoneNumber && phoneNumber.length >= 8 && 
  String(phoneNumber)
    .toLowerCase()
    .match(
      /^[+\-0-9(). ]+$/
    );
};

export const getIsMentor = () => {
  return window.location.href.indexOf('students') < 0;
};

export const getOrganizationName = () => {
  return window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
};

