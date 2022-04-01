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