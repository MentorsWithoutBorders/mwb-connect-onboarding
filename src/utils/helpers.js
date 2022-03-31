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

export const getIsMentor = (url) => {
  console.log(url);
  return url ? url.indexOf('students') < 0 : true;
};

export const getOrganizationName = (url) => {
  let organizationName = url && url.location ? url.location.substring(url.lastIndexOf('/') + 1) : '';
  organizationName = replaceAll(organizationName, '-', ' ');
  return organizationName;
};

export const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
