import React from 'react';
import { graphql } from 'gatsby';
import * as helpers from 'utils/helpers.js';
import * as apiService from 'api/api_service.js';
import { Mentors } from 'components/mentors/mentors.js';
import { Students } from 'components/students/students.js';
import { Loader } from '../components/Loader/loader';

export default class IndexPage extends React.Component {
  state = {
    isMentor: undefined,
    organizationId: undefined
  }

  setIsMentor(isMentor) {
    this.setState({
      isMentor: isMentor
    });    
  }

  setOrganizationId(id) {
    this.setState({
      organizationId: id
    });    
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const isFromOrganization = helpers.getIsFromOrganization(pathname);
    if (!isFromOrganization) {
      this.setIsMentor(helpers.getIsMentor(pathname))
    } else {
      const getIsMentor = async () => {      
        const organization = await apiService.getOrganization(pathname);
        const isMentor = organization.hasMentors !== undefined ? organization.hasMentors : true;
        this.setIsMentor(isMentor);
        this.setOrganizationId(organization.id);
      }
      getIsMentor();
    }
  }

  renderSwitch() {
    switch(this.state.isMentor) {
      case undefined:
        return <Loader/>;
      case true:
        return <Mentors organizationId={this.state.organizationId} partners={this.props.data.postgres.partners} testimonials={this.props.data.postgres.testimonials}/>; 
      case false:
        return <Students organizationId={this.state.organizationId}/>;
      default:
        return 'foo';
    }
  }  

  render() {
    return (
      <div>
        {this.renderSwitch()}
      </div>
    )
  }
}

export const query = graphql`
  {
    postgres {
      partners: allPartnersList {
        position
        name
        url
        logo
      }
      testimonials: allTestimonialsStudentsList {
        position
        name
        testimonial
        partnerNgo
        partnerNgoUrl
      }      
    }
  }
`;