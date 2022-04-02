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

export const getPhoneNumberWithCountryCode = (phoneNumber, countryCode) => {
  let hasCountryCode = false;
  if (phoneNumber.indexOf('+') === 0 || phoneNumber.indexOf('00') === 0) {
    hasCountryCode = true;
  }
  phoneNumber = parseInt(phoneNumber.replace(/\D/g, ''), 10).toString();
  if (countryCode) {
    if (hasCountryCode) {
      return '+' + phoneNumber.replace(countryCode.substring(1), countryCode.substring(1) + ' ');
    } else {
      return countryCode + ' ' + phoneNumber;
    }
  }
  return hasCountryCode ? '+' + phoneNumber : phoneNumber;
};

export const getIsFromOrganization = (pathname) => {
  return pathname !== '/' && pathname.indexOf('students') < 0 && pathname.indexOf('mentors') < 0;
};

export const getIsMentor = (pathname) => {
  return pathname ? pathname.indexOf('students') < 0 : true;
};

export const getOrganizationName = (pathname) => {
  let organizationName = pathname.substring(1);
  organizationName = replaceAll(organizationName, '-', ' ');
  return organizationName;
};

export const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
