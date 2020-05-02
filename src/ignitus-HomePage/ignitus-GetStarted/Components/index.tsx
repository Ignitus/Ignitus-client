import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Paragraph,
  TopSection,
  BottomSection,
  Button,
} from '../styles';
import { withErrorBoundary } from '../../../ignitus-Shared';

export const GetStarted: React.FunctionComponent = withErrorBoundary(() => (
  <Container>
    <TopSection>
      <Paragraph>
        Get started for free - join thousands of students and researchers
        already using Ignitus to share their knowledge, work together, and get
        amazing opportunites.
      </Paragraph>
    </TopSection>
    <BottomSection>
      { localStorage.getItem('authenticated')? 
        <a href = "https://app.slack.com/client/TRN1H1V43/CUCLB9VJL" target = "_blank" rel="noopener noreferrer">
          <Button category="secondary" size="large">
            Join-Us
          </Button>
        </a> :
        <Button size="large" category="secondary">
            <Link to="/Signup">
              Sign-Up
            </Link>
        </Button> }
    </BottomSection>
  </Container>
));
