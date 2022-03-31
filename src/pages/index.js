import React from 'react';
import { graphql } from 'gatsby';
import { Location } from '@reach/router';
import * as helpers from 'utils/helpers.js';
import { Mentors } from 'components/mentors/mentors.js';
import { Students } from 'components/students/students.js';

export default class IndexPage extends React.Component {
  render() {
    return <Location>
      {locationProps => {
        if (helpers.getIsMentor(locationProps.location.href)) {
          return (
            <Mentors {...locationProps.location.href} partners={this.props.data.postgres.partners} testimonials={this.props.data.postgres.testimonials}/>
          );
        } else {
          return (
            <Students {...locationProps.location.href}/>
          );
        }
      }}
    </Location>
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