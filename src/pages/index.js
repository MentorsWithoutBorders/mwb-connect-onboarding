import React from 'react';
import { graphql } from 'gatsby';
import * as helpers from 'utils/helpers.js';
import { Mentors } from 'components/mentors/mentors.js';
import { Students } from 'components/students/students.js';

export default class IndexPage extends React.Component {
  render() {
    if (helpers.getIsMentor()) {
      return (
        <Mentors partners={this.props.data.postgres.partners} testimonials={this.props.data.postgres.testimonials}/>
      )
    } else {
      return (
        <Students/>
      )      
    }
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