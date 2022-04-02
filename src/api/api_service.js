import axios from 'axios';

export const sendApprovedUser = (approvedUser) => {
  axios.post(process.env.API_URL + '/approved_user', approvedUser)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
};

export const getOrganization = async (pathname) => {
  let organization = {};
  try {
    const response = await axios.get(process.env.API_URL + '/organizations/name/' + pathname.substring(1));
    organization = response.data;
  } catch (err) {
    console.error(err);
  } 
  return organization;
};

export const getCountryCallingCode = async () => {
  let countryCallingCode;
  try {
    const response = await axios.get('https://ipapi.co/json/');
    countryCallingCode = response.data.country_calling_code;
  } catch (err) {
    console.error(err);
  } 
  return countryCallingCode;
};