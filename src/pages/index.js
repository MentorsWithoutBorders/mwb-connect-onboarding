import * as React from 'react'
import { Page, Container } from './index-styles.js';
import { Description } from './description/description.js';

const IndexPage = () => {
  return (
    <Page>
      <title>MWB Connect Onboarding</title>
      <Container>
        <Description></Description>     
      </Container>
    </Page>
  )
}

export default IndexPage
