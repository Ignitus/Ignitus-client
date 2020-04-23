import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Paragraph, TopSection, BottomSection, Button} from '../styles';
import {withErrorBoundary} from '../../../ignitus-Shared';

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
      <Button size="large" category="secondary">
        <Link to="/Signup">Sign-Up</Link>
      </Button>
    </BottomSection>
  </Container>
));
